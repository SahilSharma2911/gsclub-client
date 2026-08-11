import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// POST /api/subscriptions/manage - pause, resume, or cancel a subscription
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { subscriptionId, action } = await req.json();

  if (!subscriptionId || !["pause", "resume", "cancel"].includes(action)) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Verify ownership
  const sub = await prisma.subscription.findFirst({
    where: { id: subscriptionId, userId: user.id },
  });
  if (!sub) return NextResponse.json({ error: "Subscription not found" }, { status: 404 });

  const statusMap: Record<string, string> = {
    pause: "paused",
    resume: "active",
    cancel: "cancelled",
  };

  const updated = await prisma.subscription.update({
    where: { id: subscriptionId },
    data: { status: statusMap[action], updatedAt: new Date() },
  });

  return NextResponse.json({ success: true, status: updated.status });
}
