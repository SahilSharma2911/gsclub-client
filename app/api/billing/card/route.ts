import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  if (!email) return NextResponse.json({ card: null });

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { customerVault: true },
    });

    if (!user?.customerVault) return NextResponse.json({ card: null });

    const vault = user.customerVault;

    return NextResponse.json({
      card: {
        vaultId: vault.vaultId,
        lastFour: vault.lastFour || "****",
        cardType: vault.cardType || "Card",
        expiry: "N/A",
      },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ card: null });
  }
}
