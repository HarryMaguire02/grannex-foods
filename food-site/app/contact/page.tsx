import { Metadata } from 'next';
import PageHeroSection from '@/app/components/PageHeroSection';
import ContactFormSection from '@/app/components/contact/ContactFormSection';
import HQSection from '@/app/components/contact/HQSection';
import FAQSection from '@/app/components/contact/FAQSection';
import SectionDivider from '@/app/components/SectionDivider';
import CTASection from '@/app/components/CTASection';

export const metadata: Metadata = {
  title: 'Contact & Orders | GrannexFoods',
  description:
    'Place your order or get in touch with GrannexFoods. Contact our team for wholesale cooking oils, sauces, and food ingredients. Minimum order 1 container.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeroSection
        label="Contact & Orders"
        heading="Place Your Order"
        description="Fill in the form below and we'll get back to you within one business day with confirmation and pricing."
        imageSrc="/contact-us-hero.png"
        imageAlt="GrannexFoods warehouse operations"
      />
      <ContactFormSection />
      <SectionDivider />
      <HQSection />
      <SectionDivider />
      <FAQSection />
      <CTASection
        text="Explore our full product range"
        description="Browse all our premium cooking oils, sauces, and essential groceries available online."
        buttonContent="View All Products"
      />
    </>
  );
}
