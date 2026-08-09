# DEPLOY_RULES.md — Обязательные правила для всех деплоев

## 🔴 НИКОГДА не делать (критические правила)

### 1. next.config.ts
- НЕ добавлять `/my-account:path* → /login` редирект (был удалён в aa0f562, вызывает бесконечный цикл)
- НЕ добавлять `/brands/smok` или `/product/*bc5000*` без редиректа → уже настроены на homepage/ebcreate
- Комментарий `⚠️ DO NOT ADD BACK` в файле — читать перед изменением

### 2. Пакеты (package.json)
- `react`: строго `18.3.1` (без `^`) — React 19 ломает next-auth v4
- `@hookform/resolvers`: строго `3.9.0` (без `^`) — v4 ломает форму логина
- Не обновлять `next-auth` выше v4.x

### 3. Аутентификация
- `getServerSession` сломан в Next.js 15 — использовать только `getToken` из `next-auth/jwt`
- Файлы с правильным паттерном: `app/my-account/page.tsx`, `app/login/page.tsx`
- НЕ добавлять `router.replace('/login')` в client компоненты — сервер уже защищает страницы
- После логина: `window.location.href` (не `router.push`) — нужен полный reload для JWT cookie

### 4. Age Verification
- НЕ трогать `components/AgeVerification/AgeVerification.tsx` без понимания LCP влияния
- Текущее состояние: cookie-based, modal в SSR HTML → LCP ~4-5s
- Текущие исключения: /login, /signup, /forgot-password, /reset-password

### 5. Hero слайдер
- `components/HomePage/Hero.tsx` — грузит только активный слайд (saved ~900KB)
- НЕ возвращать рендер всех 6 слайдов одновременно

### 6. Product images (Products.tsx)
- `loading={idx < 6 ? "eager" : "lazy"}` — первые 6 должны быть eager (мобильный 2-col = 3 ряда)
- `priority={idx < 2}` — первые 2 с preload
- `sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"` — обязательно

## 🟡 Чеклист перед каждым деплоем

### Быстрая проверка (2 минуты)
```bash
# 1. Нет /my-account redirect
grep "my-account.*login\|login.*my-account" next.config.ts

# 2. React версия не изменилась
grep '"react"' package.json

# 3. Нет getServerSession в page файлах
grep -r "getServerSession" app/my-account/ app/login/ app/signup/
```

### После деплоя (5 минут)
1. `getsmoke.com/login` → форма видна? → войди → открылся `/my-account` с вкладками?
2. `getsmoke.com/` → hero слайдер работает → не все 6 слайдов грузятся сразу
3. `getsmoke.com/brands/smok` → 308 редирект на `/`?
4. `getsmoke.com/product/sour-apple-eb-design-bc5000-disposable-vape` → 308 на `/brands/ebcreate`?

## 🟢 Ключевые оптимизации (не откатывать)

| Что | Где | Зачем |
|-----|-----|-------|
| Cookie-based age verification | AgeVerification.tsx | LCP: 17s → 4s |
| Hero: 1 слайд вместо 6 | Hero.tsx | Экономия ~900KB |
| Banner compression 70% | public/banners/ | mobile-3: 256→68KB |
| Fuzzy search (Levenshtein) | api/products/route.ts | "calombian" → Colombian |
| getToken вместо getServerSession | my-account, login, orders | Next.js 15 compat |
| BC5000 redirects | next.config.ts | 308 на ebcreate |
| SMOK redirect | next.config.ts | 308 на homepage |
| Sitemap 49 model slugs | next-sitemap.config.js | GSC индексация |

## 📁 Критические файлы (изменять осторожно)

- `next.config.ts` — redirects, headers, image domains
- `lib/prisma.ts` — DB connection (НЕ добавлять datasources override)
- `app/layout.tsx` — preload links, Age Verification
- `components/AgeVerification/AgeVerification.tsx` — влияет на LCP
- `components/HomePage/Hero.tsx` — влияет на LCP и bandwidth
- `package.json` — версии пакетов заморожены
- `ACCOUNT_STABILITY.md` — правила для аккаунт страниц

## 🔗 Идентификаторы (для справки)

- GitHub: `getsmoke1/gsclub-client` (branch: `main` только)
- Vercel: `getsmoke-dev/gsclub-client`
- CF Zone: `d59ae6ea7697d0a3c6fa3afb68a10f0d`
- R2 CDN: `pub-e2c8a53d84f146beb67cf9ee9a8f4961.r2.dev`
- MongoDB: `getsmoke` db, cluster `cluster0.if2afgb.mongodb.net`
