import Image from 'next/image';
import Link from 'next/link';
import productsData from '@/app/data/products.json';
import AnimateIn from '@/app/components/ui/AnimateIn';

const products = productsData.filter((p) => p.featured);

export default function OurProductsSection() {
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">

        <AnimateIn from="bottom">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-green-medium font-bold">—</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-green-medium">
              Our Products
            </span>
          </div>
          <h2 className="text-3xl font-bold text-primary mb-3">A range built for wholesale</h2>
          <p className="text-sm text-gray-500 mb-8 max-w-lg">
            From premium cooking oils to mayo sauces — every product sourced for quality and consistency.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {products.map((product, i) => (
            <AnimateIn key={product.slug} from="bottom" delay={i * 0.1} className="flex flex-col h-full">
              <div className="rounded-2xl overflow-hidden flex flex-col h-full">
                {/* Image */}
                <div className="relative h-48">
                  <Image
                    src={product.relatedImage || product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                    loading="eager"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-pale text-primary text-xs font-medium px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="bg-secondary p-5 flex flex-col gap-3 flex-1">
                  <h3 className="font-bold text-primary">{product.name}</h3>
                  <p className="text-xs text-primary/70 leading-relaxed">{product.description}</p>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-sm text-primary font-medium hover:text-green-medium transition-colors mt-auto"
                  >
                    View product →
                  </Link>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn from="bottom" delay={0.15}>
          <div className="flex justify-center">
            <Link
              href="/products"
              className="bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-green-medium transition-colors"
            >
              View All Products
            </Link>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
