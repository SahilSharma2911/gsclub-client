import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/mail";
import { nanoid } from "nanoid";
import qs from "querystring";

export const dynamic = "force-dynamic";

const NMI_URL = "https://secure.networkmerchants.com/api/transact.php";
const NMI_KEY = process.env.NMI_SECURITY_KEY || "MZ4Kw82Pe4D2E3wn6G2tCUtQ65Pw4MTm";

const GIFT_CARD_IMAGE = "https://pub-e2c8a53d84f146beb67cf9ee9a8f4961.r2.dev/account-banners/gift-card-design.webp";

function giftCardEmailTemplate(
  recipientName: string,
  senderName: string,
  amount: number,
  code: string,
  message: string
): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;max-width:600px;width:100%;">
        <!-- Header -->
        <tr>
          <td style="background:#1a1a1a;padding:28px 40px;text-align:center;">
            <div style="font-size:26px;font-weight:900;color:#ffffff;letter-spacing:2px;">getsmoke<span style="color:#F5A623;">.</span>com</div>
          </td>
        </tr>
        <!-- Gift card image -->
        <tr>
          <td style="padding:0;background:#1a1a1a;">
            <img src="${GIFT_CARD_IMAGE}" alt="GetSmoke Gift Card" width="600" style="display:block;width:100%;max-width:600px;" />
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;">
            <p style="font-size:22px;font-weight:800;color:#111;margin:0 0 8px;">You received a gift card!</p>
            <p style="font-size:15px;color:#374151;margin:0 0 20px;">
              <strong>${senderName || "Someone special"}</strong> sent you a <strong>$${amount.toFixed(2)} GetSmoke Gift Card</strong>.
            </p>
            ${message ? `<div style="background:#f9fafb;border-left:4px solid #F5A623;padding:16px 20px;border-radius:0 10px 10px 0;margin-bottom:24px;font-size:14px;color:#374151;font-style:italic;">"${message}"</div>` : ""}
            <p style="font-size:14px;color:#374151;margin:0 0 6px;">Use this code at checkout:</p>
            <!-- Code box -->
            <div style="background:#1a1a1a;border-radius:14px;padding:22px;text-align:center;margin-bottom:24px;">
              <p style="margin:0 0 6px;font-size:12px;color:#9ca3af;letter-spacing:1px;">YOUR CODE</p>
              <p style="margin:0;font-size:28px;font-weight:900;letter-spacing:5px;color:#F5A623;">${code}</p>
              <p style="margin:8px 0 0;font-size:12px;color:#6b7280;">Valid for $${amount.toFixed(2)} off any order</p>
            </div>
            <!-- CTA -->
            <div style="text-align:center;margin-bottom:28px;">
              <a href="https://getsmoke.com" style="display:inline-block;background:linear-gradient(90deg,#F5A623,#FF6B00);color:#fff;text-decoration:none;padding:16px 48px;border-radius:50px;font-size:16px;font-weight:700;">
                Shop Now
              </a>
            </div>
            <p style="font-size:12px;color:#9ca3af;margin:0;">
              Single-use code. Valid for 2 years. Cannot be combined with other offers. Age verification required.
            </p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;padding:20px 40px;text-align:center;border-top:1px solid #e5e7eb;">
            <p style="font-size:12px;color:#9ca3af;margin:0;">GetSmoke - Premium Vape Shop | Florida, USA</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { amount, recipientName, recipientEmail, message } = await req.json();

  // Validate
  const numAmount = parseFloat(amount);
  if (!numAmount || numAmount < 5 || numAmount > 500) {
    return NextResponse.json({ error: "Amount must be between $5 and $500" }, { status: 400 });
  }
  if (!recipientEmail || !recipientName) {
    return NextResponse.json({ error: "Recipient name and email are required" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { customerVault: true },
  });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  if (!user.customerVault?.vaultId) {
    return NextResponse.json({ error: "NO_VAULT" }, { status: 402 });
  }

  const vault = user.customerVault;

  // Charge via NMI vault
  const nmiParams: Record<string, string> = {
    security_key: NMI_KEY,
    type: "sale",
    customer_vault_id: vault.vaultId,
    amount: numAmount.toFixed(2),
    currency: "USD",
    orderid: `GIFTCARD-${Date.now()}`,
    order_description: `GetSmoke Gift Card $${numAmount.toFixed(2)} for ${recipientEmail}`,
  };

  const nmiRes = await fetch(NMI_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: qs.stringify(nmiParams),
  });
  const nmiText = await nmiRes.text();
  const nmiData = Object.fromEntries(new URLSearchParams(nmiText));

  if (nmiData.response !== "1") {
    console.error("NMI gift card charge failed:", nmiData);
    return NextResponse.json({
      error: nmiData.responsetext || "Payment failed. Please try again.",
    }, { status: 402 });
  }

  // Generate coupon code
  const code = "GIFT" + nanoid(8).toUpperCase();
  const expiresAt = new Date();
  expiresAt.setFullYear(expiresAt.getFullYear() + 2);

  // Create coupon (single-use, 2-year expiry)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (prisma as unknown as Record<string, any>).coupon.create({
    data: {
      code,
      discountAmount: numAmount,
      discountType: "fixed",
      maxUsages: 1,
      usageCount: 0,
      isActive: true,
      expiresAt,
      description: `Gift card from ${session.user.email} to ${recipientEmail}`,
      createdAt: new Date(),
    },
  });

  // Send email to recipient
  const senderName = user.name || session.user.email.split("@")[0];
  const html = giftCardEmailTemplate(recipientName, senderName, numAmount, code, message || "");
  const subject = `${senderName} sent you a $${numAmount.toFixed(2)} GetSmoke Gift Card!`;

  await sendEmail(recipientEmail, subject, html);

  return NextResponse.json({
    success: true,
    code,
    amount: numAmount,
    transactionId: nmiData.transactionid,
  });
}
