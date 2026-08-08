import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { sendEmail } from "@/lib/mail";

export const dynamic = "force-dynamic";

function referralEmailTemplate(friendName: string, senderName: string, referralLink: string): string {
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
          <td style="background:#1a1a1a;padding:32px 40px;text-align:center;">
            <div style="font-size:28px;font-weight:900;color:#ffffff;letter-spacing:2px;">getsmoke<span style="color:#F5A623;">.</span>com</div>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <p style="font-size:18px;font-weight:700;color:#111;margin:0 0 16px;">Hey ${friendName},</p>
            <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 16px;">
              ${senderName ? senderName : "Your friend"} wanted to share something with you.
              They have been shopping at <strong>GetSmoke.com</strong> and thought you would love it too.
            </p>
            <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 28px;">
              GetSmoke carries the best disposable vapes, pods, and accessories - fast shipping, wide selection, and great prices.
            </p>
            <!-- CTA Button -->
            <div style="text-align:center;margin-bottom:28px;">
              <a href="${referralLink}" style="display:inline-block;background:linear-gradient(90deg,#F5A623,#FF6B00);color:#ffffff;text-decoration:none;padding:16px 40px;border-radius:50px;font-size:16px;font-weight:700;letter-spacing:0.5px;">
                Shop GetSmoke.com
              </a>
            </div>
            <p style="font-size:13px;color:#9ca3af;line-height:1.6;margin:0 0 8px;">
              Free shipping on orders over $89. Age verification required.
            </p>
            <p style="font-size:12px;color:#d1d5db;margin:0;">
              Or copy this link: <a href="${referralLink}" style="color:#F5A623;">${referralLink}</a>
            </p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;padding:24px 40px;text-align:center;border-top:1px solid #e5e7eb;">
            <p style="font-size:12px;color:#9ca3af;margin:0;">
              GetSmoke - Premium Vape Shop | Florida, USA<br>
              <a href="https://getsmoke.com/unsubscribe" style="color:#9ca3af;">Unsubscribe</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim();
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { friendName, friendEmail, senderName, referralLink } = await req.json();

  if (!friendName || !friendEmail || !referralLink) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(friendEmail)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const subject = `${senderName || "Your friend"} invited you to GetSmoke.com`;
  const html = referralEmailTemplate(friendName, senderName || session.user.name || "", referralLink);

  try {
    await sendEmail(friendEmail, subject, html);
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Referral email send failed:", e);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
