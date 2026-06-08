import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sales Conditions - Grannex",
  description: "General Terms and Conditions of Sale for Grannex - Sale of Food Ingredients and Commodities.",
};

export default function SalesConditionsPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <nav className="text-sm text-primary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-medium transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium">Sales Conditions</span>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8">
          General Terms and Conditions of Sale
        </h1>

        <h2 className="text-xl font-semibold text-primary mb-6">
          Grannex &ndash; Sale of Food Ingredients
        </h2>

        {/* Content Sections */}
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Governing Law</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              These conditions are governed by and construed in accordance with the Sale of Goods Law of Cyprus (Cap. 267).
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Precedence of Agreement</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              These General Terms apply to all sales; however, any specific terms agreed upon in a signed Sales Contract or via official company email correspondence shall take precedence over these General Conditions.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Delivery &amp; Incoterms</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              All shipments are subject to Incoterms&reg; 2020 (e.g., FOB, CIF, DAP) as specified in the individual contract. Risk passes to the buyer according to the chosen Incoterm.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Quality &amp; Inspection</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              Goods are supplied based on agreed technical specifications and applicable food safety standards. Buyers reserve the right to appoint accredited independent inspectors or surveyors at the loading port to verify quality, weight and conformity with the agreed specification prior to shipment.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Payment</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              Settlement must be made via SWIFT wire transfer or Documentary Letter of Credit (L/C) as stipulated in the proforma invoice.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Retention of Title</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              Grannex retains full ownership of the goods until full payment has been received.
            </p>
          </section>

          <section className="border-t border-primary/20 pt-6 mt-8">
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              For any questions regarding these Sales Conditions, please contact us at{' '}
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
