import { Metadata } from 'next';
import PageHeroSection from '@/app/components/PageHeroSection';
import ProductsGrid from '@/app/components/products/ProductsGrid';
import CTASection from '@/app/components/CTASection';
import productsData from '@/app/data/products.json';

export const metadata: Metadata = {
  title: 'Products | Grannex',
  description:
    'Browse our full range of wholesale food products — premium cooking oils, mayo, sauces and more. Available for immediate dispatch.',
};

export default function ProductsPage() {
  return (
    <>
      <PageHeroSection
        label="Our Products"
        heading={<>Everything Your Business<br />Needs</>}
        description="Premium cooking oils, mayo, and sauces — available wholesale for immediate dispatch."
        imageSrc="/products-hero.png"
        imageAlt="Grannex product range"
      />
      <ProductsGrid products={productsData} />
      <CTASection
        text="Interested in bulk pricing or full truckloads?"
        description="Get in touch for custom quotes and volume discounts."
        buttonContent="Contact Us"
        href="/contact"
      />
    </>
  );
}
