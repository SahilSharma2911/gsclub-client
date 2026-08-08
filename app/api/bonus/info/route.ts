import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { prisma } from "@/lib/prisma";
import { nanoid } from "nanoid";

export const dynamic = "force-dynamic";

// GET /api/bonus/info - returns bonus balance + referral code (generates one if not exists)
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Generate referral code if not set
  if (!user.referralCode) {
    const code = nanoid(8).toUpperCase();
    user = await prisma.user.update({
      where: { id: user.id },
      data: { referralCode: code },
    });
  }

  const balanceCents = user.bonusBalance ?? 0;
  const balanceDollars = balanceCents / 100;
  const canRedeem = balanceCents >= 1000; // $10 minimum

  return NextResponse.json({
    bonusBalance: balanceCents,
    balanceDollars: parseFloat(balanceDollars.toFixed(2)),
    referralCode: user.referralCode,
    referralLink: `https://getsmoke.com/?ref=${user.referralCode}`,
    canRedeem,
    redeemThreshold: 10,
  });
}
