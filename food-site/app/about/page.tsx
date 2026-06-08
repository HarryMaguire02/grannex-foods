import { Metadata } from 'next';
import WarehouseSection from '@/app/components/about/WarehouseSection';
import StatsSection from '@/app/components/about/StatsSection';
import SectionDivider from '@/app/components/SectionDivider';
import CommitmentsSection from '@/app/components/about/CommitmentsSection';
import HowItWorksSection from '@/app/components/about/HowItWorksSection';
import CTASection from '@/app/components/CTASection';
import PageHeroSection from '../components/PageHeroSection';

export const metadata: Metadata = {
  title: 'About Us | Grannex',
  description:
    'Grannex is a trusted wholesale supplier of high-quality cooking oils, mayo, and essential groceries. Fully stocked warehouse, 24/7 dispatch, and genuine partnership.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeroSection
        label="About Us"
        heading={<>Built on Quality.<br />Delivered with Trust.</>}
        description="We are a trusted wholesale supplier of high-quality cooking oils, mayo, and essential groceries — providing uncompromising reliability to the food service sector."
        imageSrc="/about-us-hero.png"
        imageAlt="Grannex quality cooking oils and food ingredients"
      />
      <WarehouseSection />
      <StatsSection />
      <CommitmentsSection />
      <SectionDivider />
      <HowItWorksSection />
      <CTASection text="Ready to work with us?" description="Place your first order today — minimum 1 container, dispatched fast." buttonContent="Place An Order" />
    </>
  );
}
