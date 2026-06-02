@AGENTS.md

# Keto by Olena — Business Card Site

## Project Overview
Portfolio project: a modern business card / landing page for a fictional keto influencer **Olena Marchenko** who sells a PDF recipe book "30-Day Keto Reset" ($27).

**GitHub:** https://github.com/Arti-Shelby/keto-by-olena

## Stack
- **Next.js 16.2.7** (App Router, Turbopack) + TypeScript
- **Tailwind CSS v4** (`@tailwindcss/postcss`, `@theme inline {}` for design tokens)
- **Framer Motion 12** for animations (`'use client'` required on animated components)
- **lucide-react 1.17.0** — NOTE: `Instagram` and `Youtube` icons do NOT exist in this version; use inline SVGs instead
- **next/font/google** — Playfair Display (`--font-playfair`) + Inter (`--font-inter`)

## Commands
```bash
npm run dev      # dev server on localhost:3000
npm run build    # production build (must pass before deploy)
npm run start    # serve production build
npm audit        # should report 0 vulnerabilities (postcss patched via overrides)
```

## Design System
**Style:** Botanical Luxury — organic, premium, green-only palette.

| Token | Value | Tailwind class |
|---|---|---|
| background | `#F4F9F4` | `bg-background` |
| foreground | `#1C2B1E` | `text-foreground` |
| primary | `#1A3C2B` | `bg-primary` / `text-primary` |
| secondary | `#2D5A3D` | `bg-secondary` |
| accent | `#7CB87A` | `bg-accent` / `text-accent` |
| muted | `#8FB89D` | `bg-muted` |
| muted-fg | `#5A7A62` | `text-muted-fg` |
| card | `#EEF5EE` | `bg-card` |
| border | `#C5DCC8` | `border-border` |

Fonts: `font-serif` = Playfair Display, `font-sans` = Inter (set in `globals.css` @theme inline).

## Project Structure
```
src/
├── app/
│   ├── globals.css          # Tailwind v4 @theme inline design tokens
│   ├── layout.tsx           # Root layout: fonts, metadata
│   └── page.tsx             # Assembles all sections
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx       # Sticky glassmorphism nav ('use client')
│   │   ├── Hero.tsx         # iPad 3/4 mockup + botanical SVG leaves ('use client')
│   │   ├── About.tsx        # Olena's story + stats ('use client' for animations)
│   │   ├── Book.tsx         # Product showcase + buy CTA ('use client')
│   │   ├── Testimonials.tsx # 3 review cards ('use client')
│   │   ├── FAQ.tsx          # Accordion ('use client')
│   │   └── Footer.tsx       # Social links, nav, copyright (server)
│   └── ui/
│       └── Button.tsx       # CVA-based button (primary/outline/ghost/muted × sm/md/lg)
└── lib/
    ├── constants.ts         # All client data (CLIENT, BOOK, TESTIMONIALS, FAQ, NAV_LINKS)
    ├── utils.ts             # cn() via clsx + tailwind-merge
```

## Key Decisions & Gotchas
- **String quotes:** All strings containing apostrophes (`'`) must use double quotes in constants.ts
- **Framer Motion ease:** cubic bezier arrays must be typed as `[number, number, number, number]` tuple — assign to a named const with that type before using in variants
- **Tailwind v4:** No `tailwind.config.ts` needed for colors — all tokens defined in `globals.css` `@theme inline {}`
- **No dark mode** — site is light-only (removed dark media query from globals.css)
- **Responsive:** iPad mockup in Hero is `hidden lg:flex` — hidden on mobile/tablet, shown on desktop

## Security Headers (next.config.ts)
Applied to all routes (`/(.*)`):
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- `Content-Security-Policy`: self + unsafe-inline scripts (needed for Next.js hydration), Google Fonts

## What's Done
- [x] Project initialized (Next.js 16 + Tailwind v4 + Framer Motion)
- [x] postcss vulnerability patched (`overrides` in package.json)
- [x] Design system (globals.css, layout.tsx with fonts)
- [x] Security headers (next.config.ts)
- [x] All 7 sections built (Navbar, Hero, About, Book, Testimonials, FAQ, Footer)
- [x] TypeScript build passing (0 errors)
- [x] Git repo + pushed to GitHub

## What's Done (continued)
- [x] Visual QA — Playwright screenshots at 375/768/1440px, all sections render correctly
- [x] Fixed scroll animations: replaced `useInView + animate={inView?…}` with `whileInView` + `viewport` prop (was invisible in headless browsers and slow connections)
- [x] Fixed Book "Buy Now" href — uses `BOOK.gumroadUrl` constant
- [x] Security headers verified: all 6 headers present (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS, CSP)

## What's Done (continued)
- [x] Fixed mobile menu: moved overlay outside `<header>` (fragment), added AnimatePresence, resize→close, fixed ARIA pattern (aria-haspopup="dialog" + role="dialog" aria-modal)
- [x] Fixed FAQ animation: FAQItem now uses `whileInView` (was `animate`), changed container to `<ul>/<li>` for correct ARIA semantics
- [x] All CTA buttons (`Hero`, `Book`, `Navbar`, `Footer`) now point to `/buy` instead of `#buy`
- [x] Added `/buy` checkout page (order summary + form + Stripe redirect)
- [x] Added `/buy/success` thank-you page
- [x] Added `/api/checkout` Stripe session creation route
- [x] CSP tightened: removed unused `fonts.googleapis.com` / `fonts.gstatic.com`, added `form-action stripe.com`
- [x] Installed `stripe` npm package

## Buy Page / Stripe Setup
1. Copy `.env.local.example` → `.env.local`
2. Fill in `STRIPE_SECRET_KEY` from https://dashboard.stripe.com/apikeys
3. Fill in `NEXT_PUBLIC_SITE_URL` (your Vercel URL)
4. In Vercel dashboard → Settings → Environment Variables — add both vars

## What's Next
- [ ] Add Stripe keys to Vercel environment variables
- [ ] Verify live HTTPS URL + headers on securityheaders.com
- [ ] Update `CLIENT.social.*` URLs with real usernames (currently bare domain roots)
