'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';

interface Product {
  slug: string;
  name: string;
  image: string;
  category: string | null;
  featured: boolean;
  badge: string;
  description: string;
}

interface ProductsGridProps {
  products: Product[];
}

const FILTERS = [
  { label: 'All Products', value: 'all' },
  { label: 'Cooking Oils', value: 'cooking-oils' },
  { label: 'Condiments & Sauces', value: 'condiments-sauces' },
];

export default function ProductsGrid({ products }: ProductsGridProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.value
                  ? 'bg-primary text-white'
                  : 'border border-primary/40 text-primary hover:border-primary'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard
              key={product.slug}
              slug={product.slug}
              name={product.name}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
