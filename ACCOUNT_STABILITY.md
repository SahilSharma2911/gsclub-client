# Account Stability Rules

## ⚠️ Critical: Never Do These

### 1. DO NOT add `/my-account → /login` redirect to next.config.ts
This was added by mistake and creates an infinite redirect loop.
The account page is protected server-side in `app/my-account/page.tsx`.
Commit that REMOVED this redirect: `aa0f562` (Aug 6, 2026)

### 2. DO NOT use `getServerSession` in Next.js 15 app router pages
`getServerSession` from next-auth v4 is BROKEN in Next.js 15 because `cookies()` became async.
Always use `getToken` from `next-auth/jwt` with manual cookie reading:

```typescript
import { getToken } from 'next-auth/jwt';
import { cookies } from 'next/headers';

const cookieStore = await cookies();
const token = await getToken({
  req: { cookies: Object.fromEntries(cookieStore.getAll().map((c) => [c.name, c.value])) } as any,
  secret: process.env.NEXTAUTH_SECRET,
});
if (!token?.email) redirect('/login');
```

### 3. DO NOT add client-side auth redirects in Account components
`useSession()` goes through "loading" state which can trigger premature redirects.
The server page already handles auth. No client-side redirect needed.
Removed from: `components/myAccount/Account.tsx`

### 4. DO NOT use `router.push()` after login - use `window.location.href`
Soft navigation (router.push) doesn't properly transmit new session cookies.
In `components/Authentication/Login.tsx`: use `window.location.href = callbackUrl`

## Package Version Locks (DO NOT upgrade without testing auth)
- `react`: 18.3.1 (NOT 19.x - breaks next-auth v4 SessionProvider)
- `@hookform/resolvers`: 3.9.0 (NOT 4.x - causes blank login form)
- `next-auth`: ^4.24.11

## Account Pages Using getToken (correct pattern)
- `app/login/page.tsx` ✅
- `app/my-account/page.tsx` ✅
- `app/my-account/orders/page.tsx` ✅

## Quick Test After Any Deploy
1. Open incognito → getsmoke.com/login
2. Enter credentials → click Log In
3. Should redirect to /my-account with tabs (Purchase history, Subscriptions, etc.)
4. Navigate back to /login → should auto-redirect to /my-account (already logged in)
