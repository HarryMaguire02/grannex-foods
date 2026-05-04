import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    name: 'Sunflower Oil',
    badge: 'Best Seller',
    description:
      'High-quality refined and crude sunflower oil, suitable for food production, retail, and industrial use.',
    slug: 'sunflower-oil',
  },
  {
    name: 'Rapeseed Oil',
    badge: 'In Demand',
    description:
      'Versatile and cost-efficient oil with a balanced profile - ideal for large-scale food processing and distribution.',
    slug: 'rapeseed-oil',
  },
  {
    name: 'Mayonnaise',
    badge: 'In Demand',
    description:
      'A wide selection of grains, seeds, and raw materials sourced globally to support diverse production needs.',
    slug: 'mayonnaise',
  },
  {
    name: 'Ketchup',
    badge: 'In Demand',
    description:
      'High-quality tomato ketchup produced to consistent standards - available in bulk formats and suitable for retail, food service, and private label.',
    slug: 'ketchup',
  },
];

export default function OurProductsSection() {
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {products.map((product) => (
            <div key={product.slug} className="rounded-2xl overflow-hidden flex flex-col">
              {/* Image */}
              <div className="relative h-48">
                <Image
                  src="/OurProductsTemp.png"
                  alt={product.name}
                  fill
                  className="object-cover"
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
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/products"
            className="bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-green-medium transition-colors"
          >
            View All Products
          </Link>
        </div>

      </div>
    </section>
  );
}
