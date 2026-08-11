import type { Metadata } from "next";
export const metadata: Metadata = { robots: { index: false, follow: false } };
import React from 'react';
import Account from '../../components/myAccount/Account';
import { getToken } from 'next-auth/jwt';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { Order } from '@/types/order';

const Page = async () => {
  // next-auth v4 getServerSession is broken with Next.js 15 async cookies().
  // getToken reads the JWT directly from cookies - works correctly.
  const cookieStore = await cookies();
  const cookieObj = Object.fromEntries(
    cookieStore.getAll().map((c) => [c.name, c.value])
  );
  const token = await getToken({
    req: { cookies: cookieObj } as Parameters<typeof getToken>[0]['req'],
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token?.email) {
    redirect(`/login?callbackUrl=${encodeURIComponent('/my-account')}`);
  }

  const userEmail = token.email as string;

  // Fetch orders for the logged-in user
  const rawOrders = await prisma.order.findMany({
    where: {
      userEmail,
    },
    include: {
      Shipment: true,
      orderItems: {
        include: {
          product: {
            include: {
              images: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  // Transform the raw orders to match your Order type
  const orders: Order[] = rawOrders.map(order => ({
    ...order,
    Shipment: order.Shipment ? {
      ...order.Shipment,
      status: order.Shipment.status as 'pending' | 'label_purchased' | 'shipped' | 'delivered'
    } : null,
    orderItems: order.orderItems.map(item => ({
      ...item,
      productSnapshot: {
        id: item.product.id,
        name: item.product.name,
        currentPrice: item.product.currentPrice,
        originalPrice: item.product.originalPrice,
        brandName: item.product.brandId,
        flavorName: '',
        nicotineName: '',
        puffs: []
      },
      product: item.product
    }))
  }));

  return (
    <div>
      <Account orders={orders} />
    </div>
  );
};

export default Page;
