# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

GrannexFoods B2B food ingredients and agricultural commodities website. Built with Next.js 16 (App Router), React 19, TypeScript 5, and Tailwind CSS 4. Sister site to grannex.com (grannex-nextjs), following the same architecture and patterns. Deployed on Vercel at `grannexfoods.com`.

## Commands

All commands must be run from `grannex-foods/food-site/`:

```bash
npm run dev      # Development server at localhost:3000
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint (v9, flat config)
```

No test framework is configured.

## Architecture

### Rendering Strategy
- **Server Components** for layouts, pages, and metadata generation
- **Client Components** (`"use client"`) for interactive UI: header (scroll/mobile/popup), home hero slideshow, contact popup
- **Static Generation** for product detail pages via `generateStaticParams()` (to be added)

### Data Layer
- Product catalog will be a static JSON file at `data/products.json`
- No database; all filtering and pagination are client-side

### API Routes
- `app/api/contact/route.ts` — Contact form endpoint (to be implemented)
  - Field validation, rate limiting via Upstash Redis, email via Resend

### Component Organization
- `app/components/header/` — ScrollHeader, Header, Navigation, NavLink
- `app/components/footer/` — Footer
- `app/components/CTASection.tsx` — Full-width CTA banner rendered in layout (appears on all pages)
- `app/components/SectionDivider.tsx` — Thin horizontal rule using `border-divider` color
- `app/components/ContactPopup.tsx` — Modal contact form (stub, to be implemented)
- `app/components/home/` — Home page sections (HomeHeroSection, WhyChooseUsSection, OurProductsSection, AboutUsSection)

### Routing
- App Router with pages at: `/`, `/about`, `/products`, `/products/[slug]`
- Legal pages: `/privacy-policy`, `/cookie-policy`, `/terms-of-use`, `/purchase-conditions`, `/sales-conditions`, `/whistleblower-policy`

### Home Page Structure (`app/page.tsx`)
```
HomeHeroSection
WhyChooseUsSection
SectionDivider
OurProductsSection
SectionDivider
AboutUsSection
— (CTASection + Footer rendered by layout.tsx)
```

### Header
- Nav links: Home, Products, About us, Contact us (popup trigger)
- "Place an Order" CTA button (right side, opens contact popup)
- Scroll-aware sticky header (ScrollHeader wraps Header)
- Mobile hamburger menu with animated icon

### Full-Width Sections with Constrained Content
When a section needs a full-width background but text aligned to the page content grid:
- Make the section `w-full` with no max-width constraint
- Inside the content column, use `max-w-[620px] ml-auto` (half of max-content = 1240px/2)
- Use standard page padding: `px-6 sm:px-8 lg:px-12`
- This ensures `ml-auto` creates an offset equal to `(viewport - 1240px) / 2`, matching other sections
- Example: `HomeHeroSection` left panel

### Styling
- Tailwind CSS v4 with custom theme in `app/globals.css`
- Key colors:
  - `primary` — #315748 (dark green, main brand color)
  - `secondary` — #EFD8B6 (beige/gold, used in footer border, hero accent line, product card bg)
  - `cta` — #4A7C5E (CTA section background)
  - `gold` — #B99662
  - `green-light` — #AAD6C5
  - `green-medium` — #799B8D
  - `pale` — #E8F3EC (icon backgrounds, badges)
  - `sage` — #8AB89A (About Us stat separator lines and labels)
  - `divider` — #D4C9B0 (SectionDivider horizontal rule)
- Custom max-width: `max-w-content` (1240px)
- Custom breakpoint: `xs` (500px)
- Font: Roboto (300, 400, 500, 700) loaded via `next/font`

### Tailwind v4 Custom Color Naming Rules
**Critical:** Tailwind v4 treats `--color-X-Y` as color family `X` with shade `Y`. This means:
- `--color-green-cta` → Tailwind tries to resolve `bg-green-cta` as a shade of the built-in `green` palette → **BROKEN**
- `--color-green-pale` → same issue → **BROKEN**
- Always use single-word names for custom colors: `--color-cta`, `--color-pale`, `--color-divider` ✓
- Exception: `--color-green-light` and `--color-green-medium` work because they create custom shades under the `green` namespace without conflicting with numeric Tailwind shades
- If a new color class isn't appearing, **restart/trigger a recompile first** before assuming a naming conflict — Tailwind v4 sometimes needs a file save to pick up new `@theme` variables

### Responsiveness
- The site must be fully responsive across all screen sizes (mobile, tablet, desktop)
- Mobile-first: base styles target mobile, scale up with `sm:`, `md:`, `lg:` prefixes
- Always test at: `xs` (500px), `sm` (640px), `md` (768px), `lg` (1024px), desktop (1240px+)
- Stacked single-column layouts on mobile, multi-column on larger screens
- Font sizes, spacing, and component heights must scale — never rely solely on fixed px values
- CTA section: stacks vertically on mobile with centered text and button; horizontal on `sm+`

### SEO
- Per-page metadata in each `page.tsx`
- JSON-LD Organization schema in root layout
- `sitemap.ts` and `robots.ts` at app root
- `metadataBase` set to `https://grannexfoods.com`
- Dynamic product pages added to sitemap once `data/products.json` exists

### Environment Variables
- `NEXT_PUBLIC_SITE_URL` — Public site URL (https://grannexfoods.com)
- `RESEND_API_KEY` — Resend email service key
- `CONTACT_EMAIL` — Destination for contact form submissions
- `EMAIL_FROM` — Sender address for outbound emails
- `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` — added when contact API is implemented

### Path Alias
- `@/*` maps to the `food-site/` project root (configured in `tsconfig.json`)

### Public Assets
- `grannexFoodsLogo.svg` — header logo
- `grannexFoodsFooterLogo.svg` — footer logo
- `linkedin-icon.svg`, `facebook-icon.svg` — white icons for footer
- `linkedin-green.svg`, `facebook-green.svg` — green icons for contact popup
- `popup-cover.png` — cover image for contact popup
- `HomeHero.png` — hero slideshow image (4 slides use same image until real images provided)
- `OurProductsTemp.png` — placeholder for all 4 product cards until real product images provided

### Card Layout Pattern
For equal-height cards in a grid where content length varies:
- Add `flex flex-col` to the card container
- Add `flex-1` to the content area so it stretches to fill remaining height
- Add `mt-auto` to any element that should always be pinned to the bottom (e.g. "View product →")
