import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Use - Grannex",
  description: "Terms governing your use of the Grannex website, including permitted use, intellectual property, disclaimers and governing law.",
};

export default function TermsOfUsePage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <nav className="text-sm text-primary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-medium transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium">Terms of Use</span>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Website Terms of Use
        </h1>
        <p className="text-primary/70 text-xs mb-6 md:mb-8">Last updated: 7 April 2026</p>

        {/* Introduction */}
        <div className="mb-8">
          <p className="text-primary font-normal text-sm leading-6 text-justify">
            These Terms of Use govern your access to and use of the Grannex website. By using the site you agree to these terms. If you do not agree, please do not use the site.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-bold text-primary mb-3">1. About this website</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              The website at grannexfoods.com is operated by Grannex International under the brand Grannex. References to &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;Grannex&rdquo; mean Grannex International.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">2. Information only &mdash; not a binding offer</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              The product descriptions, specifications and other content on this website are provided for general business information only. Nothing on the website constitutes a binding commercial offer, a price quotation or trading advice. Any actual purchase or sale of food ingredients or commodities is governed exclusively by a separate signed contract or written agreement between Grannex and the relevant counterparty. See our{' '}
              <Link href="/sales-conditions" className="text-green-medium hover:underline">Sales Conditions</Link>{' '}and{' '}
              <Link href="/purchase-conditions" className="text-green-medium hover:underline">Purchase Conditions</Link>{' '}for the framework that applies to those agreements.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">3. Accuracy of information</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              While Grannex takes reasonable care to keep the information on this site accurate and up to date, we make no warranty that it is complete, current or free of error. We may add, change or remove content at any time without notice.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">4. Permitted use</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              You may use the website for lawful, professional and informational purposes. You agree not to: attempt to gain unauthorised access to any part of the site or its underlying systems; use automated tools to scrape, copy or harvest content at scale; submit false or misleading information through our forms; interfere with or disrupt the site, its security or its availability for other users; or use the site in any way that breaches applicable law.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">5. Intellectual property</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              All content on this website &mdash; including text, product descriptions, photographs, illustrations, graphics, the Grannex name and logo, page layouts and source code &mdash; is the property of Grannex International or its licensors and is protected by intellectual property laws. You may view and print individual pages for your own internal business reference. Any other reproduction, redistribution, modification or commercial use requires our prior written permission.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">6. Third-party links</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              The website may contain links to third-party websites or resources. These are provided for convenience only. Grannex does not control and is not responsible for the content, policies or practices of any linked third party.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">7. Limitation of liability</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              To the fullest extent permitted by law, Grannex International shall not be liable for any direct, indirect, incidental, consequential or special loss or damage arising out of or in connection with your use of, or inability to use, this website, including any reliance you place on information contained on it. Nothing in these terms limits any liability that cannot be limited under applicable law.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">8. Privacy</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              Your use of the website is also governed by our{' '}
              <Link href="/privacy-policy" className="text-green-medium hover:underline">Privacy Policy</Link>{' '}and{' '}
              <Link href="/cookie-policy" className="text-green-medium hover:underline">Cookie Policy</Link>, which form part of these Terms of Use.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">9. Changes to these terms</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              We may update these Terms of Use from time to time to reflect changes to the site, our business or applicable law. The latest version will always be available on this page, with the &ldquo;Last updated&rdquo; date refreshed accordingly.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">10. Governing law and jurisdiction</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              These Terms of Use are governed by the laws of the Republic of Cyprus. Any dispute arising from or in connection with the website or these terms shall be subject to the exclusive jurisdiction of the competent courts of Nicosia, Cyprus.
            </p>
          </section>

          <section className="border-t border-primary/20 pt-6 mt-8">
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              For any questions about these Terms of Use please contact us at{' '}
              <a href="mailto:info@grannex.com" className="text-green-medium hover:underline">info@grannex.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
