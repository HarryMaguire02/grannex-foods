import Image from "next/image";
import Link from "next/link";
import productsData from "@/app/data/products.json";
import AnimateIn from "@/app/components/ui/AnimateIn";

interface RelatedProductsSectionProps {
  currentSlug: string;
  relatedSlugs?: string[];
  category?: string | null;
}

export default function RelatedProductsSection({
  currentSlug,
  relatedSlugs,
  category,
}: RelatedProductsSectionProps) {
  const allProducts = productsData as {
    slug: string;
    name: string;
    image: string;
    relatedImage?: string;
    description: string;
    badge?: string;
    category: string | null;
  }[];

  let related: typeof allProducts;

  if (relatedSlugs && relatedSlugs.length > 0) {
    related = relatedSlugs
      .map((slug) => allProducts.find((p) => p.slug === slug))
      .filter(Boolean) as typeof allProducts;
  } else {
    related = allProducts
      .filter((p) => p.slug !== currentSlug && p.category === category)
      .slice(0, 3);

    if (related.length < 3) {
      const extras = allProducts
        .filter(
          (p) =>
            p.slug !== currentSlug && !related.find((r) => r.slug === p.slug),
        )
        .slice(0, 3 - related.length);
      related = [...related, ...extras];
    }
  }

  if (related.length === 0) return null;

  return (
    <section className="bg-secondary/20 border-t border-secondary py-10 lg:py-14">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <AnimateIn from="bottom">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-medium mb-2">
            Related Products
          </p>
          <h2 className="text-3xl font-bold text-primary mb-8">
            You might also need
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {related.map((product, i) => (
            <AnimateIn key={product.slug} from="bottom" delay={i * 0.1} className="h-full">
              <div className="rounded-xl border border-primary/15 bg-white overflow-hidden flex flex-col h-full">
                {/* Image with badge */}
                <div className="relative w-full aspect-[400/84]">
                  <Image
                    src={product.relatedImage ?? product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <span className="absolute bottom-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Ready Stock
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-sm font-bold text-primary">
                    {product.name}
                  </h3>
                  <p className="text-xs text-primary/60 leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <Link
                    href={`/products/${product.slug}#order`}
                    className="self-end text-sm font-semibold text-primary hover:text-green-medium transition-colors mt-2"
                  >
                    Order this product
                  </Link>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
