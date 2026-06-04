# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## TODO

### Pages to build

- [x] `/products` — product listing page with hero, category filter tabs, 10-product grid, CTA to contact
- [x] `/products/[slug]` — product detail page (fully built with all sections)
- [x] Legal pages — `/privacy-policy`, `/cookie-policy`, `/terms-of-use`, `/purchase-conditions`, `/sales-conditions`, `/whistleblower-policy`

### Polish

- [x] Animations — scroll-triggered entrance animations via `motion` (Motion for React v12+, `"motion/react"`); `AnimateIn` wrapper at `app/components/ui/AnimateIn.tsx`; applied to all sections across all pages
- [x] Mobile responsiveness — audit and improve layouts on small screens (xs/sm breakpoints) across all pages, including product detail page
- [x] `PageHeroSection` image — heading reduced to `text-3xl sm:text-4xl lg:text-5xl` for small screens
- [x] Product detail page mobile sidebar — sidebar remains desktop-only (`hidden lg:flex`); no mobile product picker (intentional)

### Infrastructure

- [x] Upstash Redis — create new database for food-site (via Vercel Storage) and fill in `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` in `.env.local` and Vercel env vars
- [x] Contact form (`ContactFormSection`) tested end-to-end
- [x] `ProductOrderSection` form tested end-to-end on product detail pages

### Content placeholders to replace with real data

- [x] `ContactFormSection` — contact details confirmed: email `vsaranovic@grannex.com`, mobile `+381 631 077 109` (Vlado Šaranović)
- [x] `sitemap.ts` — `/products/[slug]` entries added for all 10 products
- [x] `packaging[]` — real per-product data added for all 10 products from client spreadsheets
- [x] `public/products/10-sugar.png` — added by client
- [x] Populate full rich data for Olive Oil in `products.json` — all data confirmed against client Excel sheet
- [x] Related product images — added for all 10 products except soybean-oil (no image available); `relatedImage` field set in `products.json` for 9 products; soybean-oil falls back to `image`
- [x] `relatedSlugs` — updated per-product with intuitive groupings: oils recommend oils, condiments recommend condiments; see products.json for full mapping
- [x] `ProductCertificationsSection` — redesigned to show certificate logo images (`haccp-certificate.png`, `fssc-sertificate.png`, `iso-certificate.png`) above name/description; 3-col grid matching Figma

### Final wrap up

- [x] In ProductHeroSection we need to handle long descrription better. Either to shorten up the text or to display somehow all text. This approach with 3 dots is not good
- [x] Rename Olive oil to extra virgin olive oil everywhere you can
- [x] (cooking oils, best seller i global dispatch) All tags in single product page (productHeroSection)  should be the same style (no green background)
- [x] Application images — currently only Sunflower Oil has application images; other products use no images (text-only cards) - add images to all cards
- [x] Remove buttons from `ProductVariantsSection`
- [x] Decide with product owner what will Request a Quote button in contact us form section do - REMOVE IT 
- [x] In products page we should have Sauces filter instead of Condiments & Sauces, and we should add Sweeteners category for sugar
- [x] ProductCertificationsSections should have option to download certificates once you click on grid and when you hover on grid there should be indicator that by clicking on you will download certificate. Also we can add some small note/watermark which will say that. pdfs will be at public/pdfs folder
- [x] ProductPackagingSection should be done differently (no table for variants). Each variant should have it's own grid (for example - sunflower oil 5 grids, mustard 2, sugar 6). If there is more then 3 grids, display only 3 and they should be 'spinnable' like a catalog. Also user should be able to manualy scroll horizontally. Images are at public/packaging
- [x] ProductPackagingSection carousel — replaced prev/next arrows with dot navigation below cards; dots are uniform `w-2 h-2` circles (active = `bg-primary`, inactive = `bg-primary/25`); carousel pauses on hover and resumes on mouse leave; dots are clickable to jump to any card
- [x] PageHeroSection component must be done better, currently we display hover image all way to the right which is not good. Image should be alligned with our text on right side. It shouldn't go all way to the end
- [x] HomeHeroSection image must be done better, currently our image does not fill all space on right if screen is to wide
- [x] Website structure - max-width-content increased from 1240px to 1400px in globals.css
- [] Fix browser warnings
- [] Improve image quality for all products


## Project Overview

GrannexFoods B2B food ingredients and agricultural commodities website. Built with Next.js 16 (App Router), React 19, TypeScript 5, and Tailwind CSS 4. Sister site to grannex.com (grannex-nextjs), following the same architecture and patterns. Deployed on Vercel at `grannexfoods.com`.

**Company contact:** Vlado Šaranović — `vsaranovic@grannex.com` — `+381 631 077 109`
**Director:** Stelios Mavrojannis | **Company:** Grannex International All Rights Reserved

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
- **Client Components** (`"use client"`) for interactive UI: header (scroll/mobile), home hero slideshow, ProductsGrid filter, ProductOrderSection form
- **Static Generation** for product detail pages via `generateStaticParams()` — all 10 slugs pre-rendered at build time

### Data Layer

- Product catalog is a static JSON file at `app/data/products.json` (10 products)
- **Base fields** (all products): `slug`, `name`, `image`, `category`, `featured`, `badge`, `description`, `smokePoint` (oils only), `additives` (condiments only), `shelfLife`, `certifications`
- **Rich fields** (detail page, all optional): `subtitle`, `tags`, `longDescription`, `origin`, `grade`, `productionMethod`, `tasteAroma`, `variants[]`, `nutrition[]`, `specifications[]`, `features[]`, `applications[]`, `packaging[]`, `relatedSlugs[]`
- **`packaging[]` shape:** `{ format: string, variants: { size, netWeight, unitsPerCarton, bestFor, image? }[] }` — grouped by container type; format-level `image` was removed (unused); variant-level `image` points to `/packaging/*.png`; all 10 products have real data from client spreadsheets
- `category` values: `"cooking-oils"`, `"condiments-sauces"`, or `null` (shown only under All Products)
- `featured: true` marks the 4 products shown in `OurProductsSection` on the home page (Sunflower Oil, Rapeseed Oil, Ketchup, Mayonnaise Sauce)
- All rich fields are optional — detail page sections are conditionally rendered; missing fields simply hide the section
- No database; all filtering is client-side

### API Routes

- `app/api/contact/route.ts` — Order form endpoint (used by both `ContactFormSection` and `ProductOrderSection`)
  - Required fields: `companyName`, `contactName`, `email`, `phone`
  - Optional fields: `product`, `quantity`, `deliveryDate`, `deliveryAddress`, `notes`
  - Field validation, rate limiting via Upstash Redis (3 req/hour/IP), email via Resend
  - Resend and Redis clients initialized inside the POST handler (not at module level) to avoid build errors when env vars are empty

### Component Organization

- `app/components/header/` — ScrollHeader, Header, Navigation, NavLink
- `app/components/footer/` — Footer
- `app/components/PageHeroSection.tsx` — Shared hero base used by About, Contact, Products pages; accepts `label`, `heading` (ReactNode), `description`, `imageSrc`, `imageAlt` props
- `app/components/CTASection.tsx` — Full-width CTA banner; accepts `text`, `buttonContent`, optional `description`, optional `href` (defaults to `"/products"`); pass `href="/contact"` on the products page to avoid circular link
- `app/components/SectionDivider.tsx` — Thin horizontal rule using `border-divider` color
- `app/components/ContactPopup.tsx` — Stub, returns null (no longer triggered from header)
- `app/components/home/` — HomeHeroSection, WhyChooseUsSection, OurProductsSection, AboutUsHomeSection
- `app/components/about/` — WarehouseSection, StatsSection, CommitmentsSection, HowItWorksSection
- `app/components/contact/` — ContactFormSection, HQSection, FAQSection
- `app/components/products/` — ProductCard, ProductsGrid
- `app/components/products/detail/` — All product detail page sections (see below)

### Product Detail Components (`app/components/products/detail/`)

- `ProductHeroSection` — breadcrumb + sidebar (all products list, active highlighted) + product image + info card (tags, name, subtitle, green separator line, description, 2×2 spec grid, action buttons)
- `ProductVariantsSection` — variant cards with 80×80 image, name, badge, description, stats row (oleic/linoleic/bestFor), order button; `bg-secondary/20 border-y border-secondary`; first card `border-2 border-primary`, second `border-2 border-secondary`
- `ProductFeaturesSection` — 3-col feature grid with bullet dots and `border-b border-sage` dividers; `bg-white`
- `ProductApplicationsSection` — dynamic column grid (1 col mobile → 2 col tablet → N col desktop, max 6); image on top `aspect-[121/42]` (matches 968×336 source images), title + description below; `bg-secondary/20 border-y border-secondary`; supports optional `image` field per application entry
- `ProductNutritionSection` — side-by-side nutrition + specifications tables; both use matching `border-[#D4C9B0] bg-[#F5F0E8]` styling with `bg-[#EDE8DC]/50` alternating rows; `bg-white`
- `ProductPackagingSection` — infinite auto-advancing carousel (3500ms, infinite loop via head/tail clone trick) when `total > 3`; each card is a `FlatVariant` with image (`aspect-[121/42]`, matches 968×336 source images), size badge, format name, and `LeaderRow` stats; dot navigation below (`w-2 h-2` uniform circles, active = `bg-primary`, inactive = `bg-primary/25`, clickable); carousel pauses on `onMouseEnter` / resumes on `onMouseLeave`; static flex-wrap grid for ≤3 variants; `bg-secondary/20 border-y border-secondary`
- `ProductCertificationsSection` — hardcoded 4 cert cards (HACCP, FSSC 22000, Full Traceability, ISO 22000); `bg-white`; cards use `bg-secondary/20 border-secondary`
- `ProductOrderSection` — mini order form pre-filled with product name, submits to `/api/contact`; "What happens next" timeline panel on the right; `id="order"` anchor for scroll-from-hero buttons; `bg-white`
- `RelatedProductsSection` — uses `product.relatedSlugs` to pick 3 products; falls back to same-category products; card has `aspect-[400/84]` image with "Ready Stock" badge overlay + "Order this product" link; uses `relatedImage` field if present, falls back to `image`; `bg-secondary/20 border-t border-secondary`

### Product Detail Page Structure (`app/products/[slug]/page.tsx`)

```
ProductHeroSection          ← always shown            (bg-white)
ProductVariantsSection      ← only if product.variants (bg-secondary/20)
ProductFeaturesSection      ← only if product.features (bg-white)
ProductApplicationsSection  ← only if product.applications (bg-secondary/20)
ProductNutritionSection     ← only if product.nutrition or product.specifications (bg-white)
ProductPackagingSection     ← only if product.packaging (bg-secondary/20)
ProductCertificationsSection← always shown            (bg-white)
SectionDivider              ← always shown
ProductOrderSection         ← always shown (id="order") (bg-white)
RelatedProductsSection      ← always shown            (bg-secondary/20)
CTASection                  ← always shown (href="/contact")
```

### Product Detail Page — Fixed Background Rule

Each section has a **fixed, hardcoded** background — do not make them dynamic. The sequence is designed so that when all sections are present they naturally alternate. Sections that may be absent (Variants, Features, Applications, Nutrition, Packaging) can cause adjacent same-background sections for products that lack them — this is accepted and intentional; the fixed backgrounds are the source of truth.

### ProductHeroSection Layout Details

```
[sidebar 208px] | [image 400px] | [info card flex-1]
```

- Flex row uses `lg:items-start` so the image never stretches to match a tall info card
- Image container: `lg:w-[400px] lg:aspect-[880/910]` — locked to the product image ratio (880×910px) to prevent cropping regardless of info card height
- Sidebar: `border-2 border-secondary`, items `bg-secondary/60` inactive / `bg-primary text-white` active / `hover:bg-green-light/40`
- Info card: `border border-secondary rounded-2xl p-6`
- Tags: first tag `bg-primary text-white`, subsequent tags `bg-pale text-primary`
- Separator line: `w-14 h-[3px] bg-primary` between subtitle and description
- Spec grid: no outer border — internal `border-r border-secondary` and `border-b border-secondary` dividers only; rows: Origin, Smoke Point (or Additives if no smokePoint), Shelf Life, Certifications
- Buttons: "Place an Order" (`bg-primary`, `rounded-full`) and "Request a Quote" (`border-2 border-primary/30`, `rounded-full`) — both `<a href="#order">` scroll anchors
- Mobile: sidebar hidden; image stacks above info content

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

### Products Page Structure (`app/products/page.tsx`)

```
PageHeroSection   (label="Our Products", imageSrc="/ProductsHero.png")
ProductsGrid      (client component — filter tabs + 4-col grid of all 10 products)
CTASection        (href="/contact" — links to contact, not back to products)
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
- Inside the content column, use `max-w-[700px] ml-auto` (half of max-content = 1400px/2)
- Use standard page padding: `px-6 sm:px-8 lg:px-12`
- This ensures `ml-auto` creates an offset equal to `(viewport - 1400px) / 2`, matching other sections
- Example: `HomeHeroSection` left panel

### Large-Screen Hero Pattern

For hero sections that use a full-width 2-column layout (content left, image right):

- Section is `w-full bg-primary overflow-hidden`; green background bleeds to full viewport width
- **Desktop image** is `absolute top-0 bottom-0 left-1/2 right-0` (spans from 50vw to right viewport edge — always flush, no green gap)
- At `min-[1920px]`: add `min-[1920px]:right-auto min-[1920px]:w-[700px]` to cap the image at half of `max-w-[1400px]`, creating symmetric green margins on very wide monitors
- **Text** sits inside `max-w-[1400px] mx-auto` with `w-1/2` — its right edge is always exactly at 50vw (proof: `(vw − 1400)/2 + 700 = vw/2`), so text and image boundary always align
- **Mobile order**: image column first (carousel / photo), text column second; implemented with CSS `order-1`/`order-2` or separate `lg:hidden` / `hidden lg:block` blocks
- Examples: `HomeHeroSection`, `PageHeroSection`

### Icon Grids with Fixed-Size SVGs

When displaying SVG icons of varying natural sizes in a grid (e.g. WhyChooseUsSection):

- Wrap each icon in a fixed-height container (`h-14 flex items-center justify-center`) so all card titles align at the same vertical position regardless of icon dimensions
- Example: `WhyChooseUsSection` with `quality-choose-us.svg`, `supply-choose-us.svg`, `partnership-choose-us.svg`

### Shared Hero Component

- `PageHeroSection` is the base for all page heroes (About, Contact, Products)
- Layout: full-width `bg-primary`; desktop uses the Large-Screen Hero Pattern (absolute image from `left-1/2`, text in `w-1/2` of `max-w-content`); mobile shows a full-bleed image above the text
- `heading` prop is `React.ReactNode` to support `<br />` in headings

### Google Maps Embed

- Uses the free Google Maps Embed API (iframe) — no API key, no billing, no usage limits
- Wrapped in a fixed-height container with `rounded-xl overflow-hidden` to clip iframe to rounded corners

### Styling

- Tailwind CSS v4 with custom theme in `app/globals.css`
- Key colors:
  - `primary` — #315748 (dark green, main brand color)
  - `secondary` — #EFD8B6 (beige/gold, used in sidebar borders, info card border, product card bg)
  - `cta` — #4A7C5E (CTA section background)
  - `gold` — #B99662
  - `green-light` — #AAD6C5
  - `green-medium` — #799B8D
  - `pale` — #E8F3EC (icon backgrounds, tag badges, hover states)
  - `sage` — #8AB89A (stat separator lines, FAQ dividers, feature section dividers)
  - `divider` — #D4C9B0 (SectionDivider horizontal rule)
- Ad-hoc hex values used in product detail: `#1A1A18` (variants section heading), `#8C7B5E` (second variant badge text/border), `#6B6B64` (variant description text)
- Custom max-width: `max-w-content` (1400px)
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
- Product detail sidebar: `hidden lg:flex` — not visible on mobile

### SEO

- Per-page metadata in each `page.tsx`
- JSON-LD Organization schema in root layout
- `sitemap.ts` and `robots.ts` at app root
- `metadataBase` set to `https://grannexfoods.com`
- All 10 `/products/[slug]` entries included in `sitemap.ts`

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
- `corn-oil-hero.png`, `ketchup-hero.png`, `mustard-hero.png`, `sunflower-oil-hero.png` — home hero slideshow slides
- `ProductsHero.png` — hero image for the products page
- `warehouse.png` — warehouse photo used in `WarehouseSection` (About page)
- `about-us-quality.svg`, `about-us-reliability.svg`, `about-us-partnership.svg` — icons for `CommitmentsSection` cards
- `quality-choose-us.svg`, `supply-choose-us.svg`, `partnership-choose-us.svg` — icons for WhyChooseUsSection cards
- `contact-us-hero.png` — hero image for contact page
- `05L-5L.png`, `10L-20L.png`, `25L-200L.png`, `1000L.png` — legacy packaging format images, no longer referenced anywhere (can be deleted)
- Application images (968×336px) — used in `ProductApplicationsSection`; various filenames per product under `public/`
- `public/products/` — product images: `01-sunflower-oil.png` through `10-sugar.png` (all 10 exist)
- `public/products/standard-sunflower-oil.png`, `public/products/oleic-sunflower-oil.png` — 80×80 variant images for Sunflower Oil `ProductVariantsSection`
- `public/products/related-{slug}.png` — 400×84px related product images used in `RelatedProductsSection`; exists for all products except `soybean-oil`
- `public/haccp-certificate.png`, `public/fssc-sertificate.png` *(typo in filename — intentional)*, `public/iso-certificate.png` — certificate logos used in `ProductCertificationsSection`

### Data Layer — Additional Fields

- `relatedImage` (optional) — separate image used in `RelatedProductsSection` cards (`aspect-[400/84]`); falls back to `image` if not set. Currently set for: rapeseed-oil, ketchup, mayonnaise
- `applications[].image` (optional) — image shown above application card text (`aspect-[121/42]`, 968×336px source). Currently set for all oil products
- `additives` (optional) — plain-text additives statement; used in `ProductHeroSection` spec grid as fallback when `smokePoint` is absent. Set for: ketchup, mayonnaise, mustard, sugar

### ProductCard Hover Pattern (`app/components/products/ProductCard.tsx`)

The card is a `Link` (`group`) with a fixed height (`h-80 md:h-96`):

- **Image area**: `flex-1` at rest → `flex-3` on hover (shrinks to give room to info panel); uses `transition-all duration-500`
- **Info panel**: `flex-none` at rest → `flex-1` on hover (expands); product name shifts `text-center` → `text-left`
- **Description**: hidden via `opacity-0 max-h-0` → revealed with `opacity-100 group-hover:max-h-40 transition-all duration-500`; capped at `line-clamp-3`
- **"Read more"**: `text-green-medium` label always present in the description block, revealed on hover
- Props: `slug`, `name`, `image`, `description`

### OurProductsSection Data Source

`OurProductsSection` reads from `app/data/products.json` and filters by `featured === true`. The 4 featured products are: Sunflower Oil, Rapeseed Oil, Ketchup, Mayonnaise Sauce. To change which products appear on the home page, update the `featured` field in `products.json`.

### CommitmentsSection Icon Pattern

Each card in `CommitmentsSection` has a fixed-height icon container (`h-32`) so all three cards are the same height regardless of each SVG's natural dimensions. Without this, SVGs of different heights cause card height mismatches. The icon is centered within `h-32 flex items-center justify-center`. Below the icon area, a text block with `p-6 text-center flex flex-col gap-3 flex-1`.

### HowItWorksSection Steps Pattern

Steps and connectors live in a single flat `items: Item[]` array (alternating `type: 'step'` and `type: 'connector'` entries). Desktop layout (`hidden lg:flex items-center gap-8`):

- Step items: `flex-shrink-0 flex flex-col gap-1` with `whitespace-nowrap` on title and description — each step takes only the width its text needs
- `StepConnector`: `flex-1 flex items-center min-w-0 max-w-16` — stretches to fill remaining space but capped so connectors stay visibly narrower than steps; dot (`w-2 h-2 rounded-full bg-sage`) at the LEFT end, line (`flex-1 h-[1px] bg-sage`) extends right (`•————`)
- Mobile (`lg:hidden`): filter to step-only items, display as vertical list with `border-l-2 border-divider`

### HomeHeroSection Slideshow

- Auto-advances every 4 seconds via `useEffect` + `setInterval`; interval cleared on unmount
- Manual dot clicks override the current slide immediately; the interval continues from its own cadence
- Dot style: active = `bg-white border-white` (solid white), inactive = `bg-transparent border-2 border-white` (white ring); size `w-3 h-3`

### AboutUsHomeSection Stats Centering

The stats grid (`grid grid-cols-3`) sits in the right column of a 2-col layout. Each stat item uses `flex flex-col gap-2 items-center text-center` so the value, divider line, and label are horizontally centered within their grid cell.

### Card Layout Pattern

For equal-height cards in a grid where content length varies:

- Add `flex flex-col` to the card container
- Add `flex-1` to the content area so it stretches to fill remaining height
- Add `mt-auto` to any element that should always be pinned to the bottom (e.g. "View product →")
