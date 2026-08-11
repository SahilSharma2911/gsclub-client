import type { Metadata } from "next";
import Login from '@/components/Authentication/Login'
import { getToken } from 'next-auth/jwt'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

export const metadata: Metadata = { robots: { index: false, follow: false } };

const page = async ({ searchParams }: { searchParams: Promise<{ callbackUrl?: string }> }) => {
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

  if (token) {
    const params = await searchParams;
    const dest = params.callbackUrl || '/my-account';
    redirect(dest);
  }

  return <Login />;
}

export default page;
