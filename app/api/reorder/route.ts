import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { orderId } = await req.json();
    if (!orderId)
      return NextResponse.json({ error: "orderId required" }, { status: 400 });

    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: {
        orderItems: {
          include: { product: { select: { id: true, currentPrice: true } } },
        },
      },
    });

    if (!order)
      return NextResponse.json({ error: "Order not found" }, { status: 404 });

    const cartItems = order.orderItems.map((item) => ({
      id: item.productId,
      quantity: item.quantity,
    }));

    return NextResponse.json({ items: cartItems });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
