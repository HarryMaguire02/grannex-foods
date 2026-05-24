import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Whistleblower Policy - GrannexFoods",
  description: "GrannexFoods Whistleblowing & Integrity Policy - Reporting breaches with confidentiality and protection.",
};

export default function WhistleblowerPolicyPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <nav className="text-sm text-primary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-medium transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium">Whistleblower Policy</span>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8">
          Whistleblowing &amp; Integrity Policy
        </h1>

        {/* Introduction */}
        <div className="mb-8">
          <p className="text-primary font-normal text-sm leading-6 text-justify">
            GrannexFoods is committed to the highest standards of transparency and ethical conduct. In accordance with Cyprus Law 6(I)/2022 (Protection of Persons Reporting Breaches of Union and National Law), we provide a secure channel for employees, contractors, and partners to report suspected misconduct, fraud, or breaches of food safety or environmental standards.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Confidentiality</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              All reports are handled with the highest level of anonymity and strict confidentiality.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">No Retaliation</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              We strictly prohibit any form of retaliation, discrimination, or adverse treatment against any person who reports a breach in good faith.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Reporting Channel</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              Reports should be submitted to our Compliance Officer at:{' '}
              <a href="mailto:compliance@grannex.com" className="text-green-medium hover:underline">
                compliance@grannex.com
              </a>
            </p>
          </section>

          <section className="border-t border-primary/20 pt-6 mt-8">
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              For any questions regarding this policy, please contact us at{' '}
              <a href="mailto:info@grannex.com" className="text-green-medium hover:underline">
                info@grannex.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
