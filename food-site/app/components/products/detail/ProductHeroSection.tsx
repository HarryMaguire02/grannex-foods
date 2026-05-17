import Image from "next/image";
import Link from "next/link";
import productsData from "@/app/data/products.json";

interface Product {
  slug: string;
  name: string;
  image: string;
  subtitle?: string;
  badge?: string;
  tags?: string[];
  longDescription?: string;
  origin?: string;
  smokePoint?: string;
  additives?: string;
  shelfLife?: string;
  certifications?: string[];
}

interface ProductHeroSectionProps {
  product: Product;
}

export default function ProductHeroSection({
  product,
}: ProductHeroSectionProps) {
  const allProducts = productsData as { slug: string; name: string }[];

  const specRows = [
    product.origin ? { label: "Origin", value: product.origin } : null,
    product.smokePoint
      ? { label: "Smoke Point", value: product.smokePoint }
      : product.additives
      ? { label: "Additives", value: product.additives }
      : null,
    product.shelfLife
      ? { label: "Shelf Life", value: product.shelfLife }
      : null,
    product.certifications?.length
      ? { label: "Certifications", value: product.certifications.join(" · ") }
      : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <section className="bg-white border-b border-primary/10">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-primary/60 py-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-medium transition-colors">
            Home
          </Link>
          <span className="mx-2">›</span>
          <Link
            href="/products"
            className="hover:text-green-medium transition-colors"
          >
            Products
          </Link>
          <span className="mx-2">›</span>
          <span className="font-medium text-primary">{product.name}</span>
        </nav>

        {/* Main layout: sidebar | image | info */}
        <div className="flex gap-0 pb-6">
          {/* Sidebar — desktop only */}
          <aside className="hidden lg:flex flex-col w-52 shrink-0 mr-6">
            <nav className="flex flex-col rounded-xl overflow-hidden border-2 border-secondary">
              {allProducts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className={`px-4 py-2.5 text-sm font-medium transition-colors border-b border-secondary last:border-b-0 ${
                    p.slug === product.slug
                      ? "bg-primary text-white"
                      : "bg-secondary/60 text-primary hover:bg-green-light/40"
                  }`}
                >
                  {p.name}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Product image */}
          <div className="relative w-full lg:w-[400px] shrink-0 h-72 sm:h-96 lg:h-auto lg:min-h-[420px] rounded-2xl overflow-hidden bg-secondary/30 mr-0 lg:mr-6">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>

          {/* Info panel — bordered card */}
          <div className="hidden lg:flex flex-col flex-1 min-w-0 border border-secondary rounded-2xl p-6">
            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      i === 0 ? "bg-primary text-white" : "text-primary bg-pale"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Name */}
            <h1 className="text-4xl font-bold text-primary leading-tight">
              {product.name}
            </h1>

            {/* Subtitle + green line separator */}
            {product.subtitle && (
              <>
                <p className="text-green-medium font-medium mt-1">
                  {product.subtitle}
                </p>
                <div className="w-14 h-[3px] bg-primary mt-3 mb-4" />
              </>
            )}

            {/* Description */}
            {product.longDescription && (
              <p className="text-sm text-primary/70 leading-relaxed mb-5 line-clamp-4">
                {product.longDescription}
              </p>
            )}

            {/* Spec grid — 2×2, no outer border, internal dividers only */}
            {specRows.length > 0 && (
              <div className="grid grid-cols-2 mb-4">
                {specRows.map((row, i) => {
                  const isLeft = i % 2 === 0;
                  const isLastRow = i >= specRows.length - 2;
                  return (
                    <div
                      key={row.label}
                      className={[
                        "py-3 px-1",
                        isLeft ? "pr-6 border-r border-secondary" : "pl-6",
                        !isLastRow ? "border-b border-secondary" : "",
                      ].join(" ")}
                    >
                      <p className="text-xs text-primary/50 mb-1">
                        {row.label}
                      </p>
                      <p className="text-sm font-semibold text-primary">
                        {row.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Action buttons — inside the card, at the bottom */}
            <div className="flex gap-3 mt-auto">
              <a
                href="#order"
                className="flex-1 bg-primary text-white text-sm font-semibold py-3.5 px-6 rounded-full text-center hover:bg-green-medium transition-colors"
              >
                Place an Order
              </a>
              <a
                href="#order"
                className="flex-1 border-2 border-primary/30 text-primary text-sm font-semibold py-3.5 px-6 rounded-full text-center hover:bg-pale transition-colors"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>

        {/* Mobile: info panel below image */}
        <div className="lg:hidden pb-8 flex flex-col gap-4">
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, i) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    i === 0 ? "bg-primary text-white" : "text-primary bg-pale"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div>
            <h1 className="text-3xl font-bold text-primary leading-tight">
              {product.name}
            </h1>
            {product.subtitle && (
              <>
                <p className="text-green-medium font-medium mt-1">
                  {product.subtitle}
                </p>
                <div className="w-14 h-[3px] bg-primary mt-3" />
              </>
            )}
          </div>
          {product.longDescription && (
            <p className="text-sm text-primary/70 leading-relaxed">
              {product.longDescription}
            </p>
          )}
          {specRows.length > 0 && (
            <div className="grid grid-cols-2">
              {specRows.map((row, i) => {
                const isLeft = i % 2 === 0;
                const isLastRow = i >= specRows.length - 2;
                return (
                  <div
                    key={row.label}
                    className={[
                      "py-3 px-1",
                      isLeft ? "pr-4 border-r border-divider" : "pl-4",
                      !isLastRow ? "border-b border-divider" : "",
                    ].join(" ")}
                  >
                    <p className="text-xs text-primary/50 mb-1">{row.label}</p>
                    <p className="text-sm font-semibold text-primary">
                      {row.value}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
          <div className="flex gap-3">
            <a
              href="#order"
              className="flex-1 bg-primary text-white text-sm font-semibold py-3.5 px-4 rounded-full text-center hover:bg-green-medium transition-colors"
            >
              Place an Order
            </a>
            <a
              href="#order"
              className="flex-1 border-2 border-primary/30 text-primary text-sm font-semibold py-3.5 px-4 rounded-full text-center hover:bg-pale transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
