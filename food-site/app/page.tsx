import type { Metadata } from 'next';
import HomeHeroSection from './components/home/HomeHeroSection';
import WhyChooseUsSection from './components/home/WhyChooseUsSection';
import OurProductsSection from './components/home/OurProductsSection';
import AboutUsSection from './components/home/AboutUsSection';
import SectionDivider from './components/SectionDivider';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'GrannexFoods — Quality Food Ingredients & Commodities',
  description:
    'GrannexFoods supplies quality food ingredients and agricultural commodities worldwide. Reliable sourcing of oils, grains, proteins, starches, and sweeteners for your business.',
  openGraph: {
    title: 'GrannexFoods — Quality Food Ingredients & Commodities',
    description: 'Reliable sourcing of oils, grains, and food ingredients - tailored to your business needs.',
    type: 'website',
    images: [{ url: '/logo-sharing.png', width: 1225, height: 560, alt: 'GrannexFoods' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrannexFoods — Quality Food Ingredients & Commodities',
    description: 'Reliable sourcing of oils, grains, and food ingredients - tailored to your business needs.',
    images: ['/logo-sharing.png'],
  },
};

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <WhyChooseUsSection />
      <SectionDivider />
      <OurProductsSection />
      <SectionDivider />
      <AboutUsSection />
      <CTASection text="Ready to place your first order?" buttonContent="View All Products" />
    </>
  );
}
