import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { prisma } from "@/lib/prisma";

function parseNmiResponse(text: string): Record<string, string> {
  const result: Record<string, string> = {};
  text.split("&").forEach((pair) => {
    const [k, v] = pair.split("=");
    if (k) result[decodeURIComponent(k)] = decodeURIComponent(v || "");
  });
  return result;
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { token, firstName, lastName } = await req.json();
    if (!token) {
      return NextResponse.json({ error: "Payment token required" }, { status: 400 });
    }

    const email = session.user.email;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Use NMI "validate" type to add card to vault without charging
    const nmiPayload: Record<string, string> = {
      security_key: process.env.NMI_SECURITY_KEY || "",
      type: "validate",
      payment_token: token,
      customer_vault: "add_customer",
      email,
      first_name: firstName || user.name?.split(" ")[0] || "",
      last_name: lastName || user.name?.split(" ").slice(1).join(" ") || "",
    };

    const nmiRes = await fetch("https://secure.nmi.com/api/transact.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(nmiPayload).toString(),
    });

    const responseText = await nmiRes.text();
    const responseData = parseNmiResponse(responseText);

    if (responseData.response !== "1") {
      return NextResponse.json(
        { error: responseData.responsetext || "Card validation failed" },
        { status: 400 }
      );
    }

    const vaultId = responseData.customer_vault_id;
    const lastFour = responseData.cc_number?.slice(-4) || "****";
    const cardType = responseData.cc_type || "Card";

    // Save or update CustomerVault
    await prisma.customerVault.upsert({
      where: { userId: user.id },
      create: { userId: user.id, vaultId, lastFour, cardType },
      update: { vaultId, lastFour, cardType },
    });

    return NextResponse.json({ success: true, lastFour, cardType });
  } catch (err) {
    console.error("[BILLING_ADD_CARD]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
