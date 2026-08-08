import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { prisma } from "@/lib/prisma";
import { nanoid } from "nanoid";

export const dynamic = "force-dynamic";

// POST /api/bonus/redeem - convert bonus balance to a coupon code
// Minimum: 1000 cents ($10). Deducts from balance and creates a Coupon.
export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const balance = user.bonusBalance ?? 0;

  if (balance < 1000) {
    return NextResponse.json({
      error: `Minimum $10.00 required to redeem. You have $${(balance / 100).toFixed(2)}.`,
    }, { status: 400 });
  }

  const discountAmount = parseFloat((balance / 100).toFixed(2));
  const code = "BONUS" + nanoid(6).toUpperCase();

  // Create coupon in Coupon collection
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const coupon = await (prisma as unknown as Record<string, any>).coupon.create({
    data: {
      code,
      discountAmount,
      discountType: "fixed",
      maxUsages: 1,
      usageCount: 0,
      isActive: true,
      description: `Bonus redemption for ${session.user.email}`,
      createdAt: new Date(),
    },
  });

  // Deduct full balance
  await prisma.user.update({
    where: { id: user.id },
    data: { bonusBalance: 0 },
  });

  return NextResponse.json({
    success: true,
    code,
    discountAmount,
    couponId: coupon.id,
  });
}
