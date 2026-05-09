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
- **Client Components** (`"use client"`) for interactive UI: header (scroll/mobile), home hero slideshow
- **Static Generation** for product detail pages via `generateStaticParams()` (to be added)

### Data Layer
- Product catalog will be a static JSON file at `data/products.json`
- No database; all filtering and pagination are client-side

### API Routes
- `app/api/contact/route.ts` — Order form endpoint
  - Required fields: `companyName`, `contactName`, `email`, `phone`
  - Optional fields: `product`, `quantity`, `deliveryDate`, `deliveryAddress`, `notes`
  - Field validation, rate limiting via Upstash Redis (3 req/hour/IP), email via Resend
  - Resend and Redis clients initialized inside the POST handler (not at module level) to avoid build errors when env vars are empty

### Component Organization
- `app/components/header/` — ScrollHeader, Header, Navigation, NavLink
- `app/components/footer/` — Footer
- `app/components/PageHeroSection.tsx` — Shared hero base used by About and Contact pages; accepts `label`, `heading` (ReactNode), `description`, `imageSrc`, `imageAlt` props
- `app/components/CTASection.tsx` — Full-width CTA banner; accepts `text`, `buttonContent`, optional `description`; link is hardcoded to `/products`
- `app/components/SectionDivider.tsx` — Thin horizontal rule using `border-divider` color
- `app/components/ContactPopup.tsx` — Stub, returns null (no longer triggered from header)
- `app/components/home/` — HomeHeroSection, WhyChooseUsSection, OurProductsSection, AboutUsSection
- `app/components/about/` — AboutHeroSection (thin wrapper around PageHeroSection), WarehouseSection, StatsSection, CommitmentsSection, HowItWorksSection
- `app/components/contact/` — ContactFormSection, HQSection, FAQSection

### Routing
- App Router with pages at: `/`, `/about`, `/contact`, `/products`, `/products/[slug]`
- Legal pages: `/privacy-policy`, `/cookie-policy`, `/terms-of-use`, `/purchase-conditions`, `/sales-conditions`, `/whistleblower-policy`

### Home Page Structure (`app/page.tsx`)
```
HomeHeroSection
WhyChooseUsSection
SectionDivider
OurProductsSection
SectionDivider
AboutUsSection
CTASection
— (Footer rendered by layout.tsx)
```

### Contact Page Structure (`app/contact/page.tsx`)
```
PageHeroSection
ContactFormSection  (breadcrumb + order form + Get in Touch card + Operating Hours card)
SectionDivider
HQSection           (address + Google Maps iframe)
SectionDivider
FAQSection          (4 questions in 2-col grid)
CTASection
```

### Contact Form Card Pattern
The order form card (`ContactFormSection`) uses a two-part layout inside a single `rounded-2xl overflow-hidden border` card:
- **Header**: `bg-primary px-6 sm:px-8 py-6` with `text-2xl font-bold text-white` title
- **Body**: `p-6 sm:p-8` white background with all form fields
- Submit button: `rounded-2xl py-5 text-lg` — larger and more rounded than standard buttons
- Success/error status messages appear **below** the submit button, not above the form
- Form fields use `border border-primary/20 rounded-lg` with `focus:border-green-medium focus:ring-1 focus:ring-green-medium`

### Header
- Nav links: Home, Products, About us (3 links only — no Contact us in the list)
- Layout: logo `flex-1` left — nav centered — `Contact us` button `flex-1` right
- "Contact us" button (top right) links to `/contact` page
- Mobile: hamburger reveals stacked nav links + "Contact us" button, all linking to `/contact`
- Scroll-aware sticky header (ScrollHeader wraps Header)
- No popup — ContactPopup is a stub and nothing triggers it

### Full-Width Sections with Constrained Content
When a section needs a full-width background but text aligned to the page content grid:
- Make the section `w-full` with no max-width constraint
- Inside the content column, use `max-w-[620px] ml-auto` (half of max-content = 1240px/2)
- Use standard page padding: `px-6 sm:px-8 lg:px-12`
- This ensures `ml-auto` creates an offset equal to `(viewport - 1240px) / 2`, matching other sections
- Example: `HomeHeroSection` left panel

### Large-Screen Hero Pattern
For hero sections that use a full-width 2-column grid (content left, image right):
- Add `bg-primary` to the outer `<section>` so the green background bleeds to full viewport width
- Cap the inner grid with `max-w-[1400px] mx-auto` to prevent the image column from becoming excessively wide on 2K/4K screens
- Example: `HomeHeroSection`

### Icon Grids with Fixed-Size SVGs
When displaying SVG icons of varying natural sizes in a grid (e.g. WhyChooseUsSection):
- Wrap each icon in a fixed-height container (`h-14 flex items-center justify-center`) so all card titles align at the same vertical position regardless of icon dimensions
- Example: `WhyChooseUsSection` with `quality-choose-us.svg`, `supply-choose-us.svg`, `partnership-choose-us.svg`

### Shared Hero Component
- `PageHeroSection` is the base for all page heroes (About, Contact, future pages)
- Layout: full-width `bg-primary`, desktop right-30% image, mobile stacked image, content left-aligned in `max-w-content` container
- `heading` prop is `React.ReactNode` to support `<br />` in headings
- `AboutHeroSection` is a thin wrapper that passes hardcoded props into `PageHeroSection`

### Google Maps Embed
- Uses the free Google Maps Embed API (iframe) — no API key, no billing, no usage limits
- Wrapped in a fixed-height container with `rounded-xl overflow-hidden` to clip iframe to rounded corners

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
  - `sage` — #8AB89A (stat separator lines, FAQ dividers)
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
- `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` — Rate limiting for contact API

### Path Alias
- `@/*` maps to the `food-site/` project root (configured in `tsconfig.json`)

### Public Assets
- `grannexFoodsLogo.svg` — header logo
- `grannexFoodsFooterLogo.svg` — footer logo
- `linkedin-icon.svg`, `facebook-icon.svg` — white icons for footer
- `linkedin-green.svg`, `facebook-green.svg` — green icons (available for future use)
- `HomeHero.png` — used in About and Contact page heroes; also home hero slideshow fallback
- `corn-oil-hero.png`, `ketchup-hero.png`, `mustard-hero.png`, `sunflower-oil-hero.png` — home hero slideshow slides
- `OurProductsTemp.png` — placeholder for product cards until real product images provided
- `quality-choose-us.svg`, `supply-choose-us.svg`, `partnership-choose-us.svg` — icons for WhyChooseUsSection cards
- `contact-us-hero.png` — hero image for contact page

### Card Layout Pattern
For equal-height cards in a grid where content length varies:
- Add `flex flex-col` to the card container
- Add `flex-1` to the content area so it stretches to fill remaining height
- Add `mt-auto` to any element that should always be pinned to the bottom (e.g. "View product →")
