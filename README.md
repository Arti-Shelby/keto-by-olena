# Keto by Olena — Business Card Site

A modern landing page for **Olena Marchenko**, a keto influencer selling the "30-Day Keto Reset" PDF recipe book ($27).

**Repo:** [github.com/Arti-Shelby/keto-by-olena](https://github.com/Arti-Shelby/keto-by-olena)

## Stack

- **Next.js** (App Router, Turbopack) + TypeScript
- **Tailwind CSS v4** — design tokens via `@theme inline {}` in `globals.css` (no `tailwind.config.ts`)
- **Framer Motion 12** — scroll-triggered animations (`whileInView`)
- **Stripe** — checkout via `/api/checkout` session route
- **Google Fonts** — Playfair Display (serif) + Inter (sans)
- **lucide-react** — note: `Instagram` / `Youtube` icons don't exist in this version; inline SVGs used instead

## Pages

| Route | Description |
|---|---|
| `/` | Landing page — Navbar, Hero, About, Book, Testimonials, CTA, FAQ, Footer |
| `/buy` | Checkout page — order summary + Stripe redirect |
| `/buy/success` | Thank-you page after successful payment |
| `/api/checkout` | Stripe checkout session API route |

## Getting Started

```bash
npm install

# Copy env template and fill in keys
cp .env.local.example .env.local

npm run dev     # http://localhost:3000
npm run build   # production build (must pass 0 errors before deploy)
npm run start   # serve production build
```

## Environment Variables

| Variable | Description |
|---|---|
| `STRIPE_SECRET_KEY` | From [dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys) |
| `NEXT_PUBLIC_SITE_URL` | Your production URL (e.g. `https://ketobylena.com`) |

Add both in Vercel → Settings → Environment Variables.

## Design System

**Style:** Botanical Luxury — organic, premium, green-only palette.

| Token | Value | Tailwind class |
|---|---|---|
| `background` | `#F4F9F4` | `bg-background` |
| `foreground` | `#1C2B1E` | `text-foreground` |
| `primary` | `#1A3C2B` | `bg-primary` / `text-primary` |
| `secondary` | `#2D5A3D` | `bg-secondary` |
| `accent` | `#7CB87A` | `bg-accent` / `text-accent` |
| `muted-fg` | `#4A6652` | `text-muted-fg` |
| `card` | `#EEF5EE` | `bg-card` |
| `border` | `#C5DCC8` | `border-border` |

Fonts: `font-serif` = Playfair Display · `font-sans` = Inter

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 @theme inline tokens
│   ├── layout.tsx           # Root layout: fonts, metadata, viewport
│   ├── page.tsx             # Assembles all sections
│   ├── buy/
│   │   ├── page.tsx         # Checkout page
│   │   └── success/page.tsx # Thank-you page
│   └── api/checkout/route.ts
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Book.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   └── ui/
│       └── Button.tsx       # CVA-based button variants
└── lib/
    ├── constants.ts         # All content: CLIENT, BOOK, TESTIMONIALS, FAQ, NAV_LINKS
    └── utils.ts             # cn() via clsx + tailwind-merge
```

## Deploy

```bash
vercel --prod
```

After deploy, verify security headers at [securityheaders.com](https://securityheaders.com).
The site ships with: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `HSTS`, `CSP`.
