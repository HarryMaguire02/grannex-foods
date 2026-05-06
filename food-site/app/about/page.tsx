import { Metadata } from 'next';
import AboutHeroSection from '@/app/components/about/AboutHeroSection';
import WarehouseSection from '@/app/components/about/WarehouseSection';
import StatsSection from '@/app/components/about/StatsSection';
import SectionDivider from '@/app/components/SectionDivider';
import CommitmentsSection from '@/app/components/about/CommitmentsSection';
import HowItWorksSection from '@/app/components/about/HowItWorksSection';
import CTASection from '@/app/components/CTASection';

export const metadata: Metadata = {
  title: 'About Us | GrannexFoods',
  description:
    'GrannexFoods is a trusted wholesale supplier of high-quality cooking oils, mayo, and essential groceries. Fully stocked warehouse, 24/7 dispatch, and genuine partnership.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <WarehouseSection />
      <StatsSection />
      <CommitmentsSection />
      <SectionDivider />
      <HowItWorksSection />
      <CTASection text="Ready to work with us?" description="Place your first order today — minimum 1 pallet, dispatched fast." buttonContent="Place An Order" />
    </>
  );
}
