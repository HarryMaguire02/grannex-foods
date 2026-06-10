import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy - Grannex",
  description: "How Grannex collects, uses and protects personal data, in line with the EU General Data Protection Regulation (GDPR) and Cyprus data protection law.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <nav className="text-sm text-primary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-medium transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium">Privacy Policy</span>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Privacy &amp; Data Protection Policy
        </h1>
        <p className="text-primary/70 text-xs mb-6 md:mb-8">Last updated: 7 April 2026</p>

        {/* Introduction */}
        <div className="mb-8">
          <p className="text-primary font-normal text-sm leading-6 text-justify">
            Grannex respects your privacy. This policy explains what personal data we collect through this website, why we process it, how long we keep it and the rights you have under the EU General Data Protection Regulation (Regulation (EU) 2016/679, &ldquo;GDPR&rdquo;) and the Cyprus Law Providing for the Protection of Natural Persons with Regard to the Processing of Personal Data (Law 125(I)/2018). We have written it to be straightforward and accurate to how this site actually works, rather than to mirror generic templates.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-bold text-primary mb-3">1. Who we are (Data Controller)</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              The data controller responsible for your personal data is Grannex International, operating under the brand Grannex. You can reach us about anything in this policy at{' '}
              <a href="mailto:info@grannex.com" className="text-green-medium hover:underline">info@grannex.com</a>.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">2. Scope of this policy</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              This policy covers personal data we collect through the Grannex website at grannexretail.com. It does not cover personal data exchanged through signed commercial contracts, KYC processes or unrelated business correspondence outside the website &mdash; those are governed by the relevant agreement between you and Grannex.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">3. What we collect and why</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify mb-3">
              We deliberately keep website data collection narrow. There are two sources of personal data on this site:
            </p>
            <p className="text-primary font-normal text-sm leading-6 text-justify mb-3">
              <strong>(a) Information you give us through the contact or product order form.</strong> When you fill in a contact or order enquiry form, we collect your company name, contact name, email address, phone number, and optionally the product of interest, desired quantity, preferred delivery date, delivery address and any additional notes. We use this information solely to read, route and respond to your enquiry or order request. The lawful basis is Article 6(1)(b) GDPR (steps prior to entering into a contract at your request) and, where you are not yet a counterparty, Article 6(1)(f) GDPR (our legitimate interest in responding to commercial enquiries directed at us).
            </p>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              <strong>(b) Limited technical information generated automatically when you visit the site,</strong> as described in sections 4 and 5 below. This is used to keep the site online, secure and performant, and to understand aggregate traffic patterns &mdash; not to build profiles of individual visitors.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">4. Analytics and performance tools we use</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify mb-3">
              We use a deliberately small set of privacy-respecting tools. We do <strong>not</strong> use Google Analytics, Meta Pixel, advertising trackers or cross-site retargeting on this website.
            </p>
            <p className="text-primary font-normal text-sm leading-6 text-justify mb-3">
              <strong>Vercel Web Analytics.</strong> Our hosting provider, Vercel Inc., provides a privacy-focused, cookieless analytics feature that we have enabled. It produces aggregate statistics such as page views, referring pages, country, browser family and device type. According to Vercel&rsquo;s documentation it does not set cookies, does not store IP addresses in a way that identifies you, and does not track visitors across other websites. We use it only to understand which pages and products are useful to visitors so we can improve the site.
            </p>
            <p className="text-primary font-normal text-sm leading-6 text-justify mb-3">
              <strong>Vercel Speed Insights.</strong> Also provided by Vercel, this collects anonymous performance measurements (Core Web Vitals such as Largest Contentful Paint, Interaction to Next Paint and Cumulative Layout Shift) so we can see where the site is slow and fix it. It does not identify individual visitors.
            </p>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              <strong>Google Search Console.</strong> Google Search Console is a webmaster tool that reports how the Grannex site appears in Google search results (impressions, clicks, queries, indexing status). It runs on Google&rsquo;s side based on data Google already holds about its own search results &mdash; it does not place trackers, scripts or cookies on this website.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">5. Cookies and similar technologies</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              This website does not use advertising cookies, retargeting cookies or third-party tracking cookies. The analytics described above are cookieless. As a result we do not display a cookie consent banner, because nothing is set on your device that would require prior consent under Article 5(3) of the ePrivacy Directive. For full detail see our{' '}
              <Link href="/cookie-policy" className="text-green-medium hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">6. Service providers (sub-processors)</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify mb-3">
              We rely on a small number of carefully chosen service providers to operate the website. They process personal data only on our instructions and under contractual safeguards.
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-primary font-normal text-sm leading-6 text-justify">
              <li><strong>Vercel Inc.</strong> &mdash; website hosting, content delivery, Web Analytics and Speed Insights.</li>
              <li><strong>Resend (Resend.com).</strong> &mdash; transactional email delivery for messages sent through the contact and order enquiry forms.</li>
              <li><strong>Upstash, Inc.</strong> &mdash; managed Redis used to apply a short-lived rate limit on the contact form (we store an incrementing counter keyed to your IP address for one hour, then it is automatically deleted). This protects the form from abuse.</li>
              <li><strong>Google LLC</strong> &mdash; Google Search Console for search performance reporting (no scripts loaded on the site).</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">7. International data transfers</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              Some of our service providers are based outside the European Economic Area (notably in the United States). Where personal data is transferred outside the EEA, we rely on the safeguards offered by those providers, which include the European Commission&rsquo;s Standard Contractual Clauses and, where applicable, the EU&ndash;US Data Privacy Framework.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">8. How long we keep your data</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              Enquiry and order emails are kept for as long as needed to handle the conversation and any resulting commercial relationship, and afterwards only as long as we are legally required to retain business correspondence. Rate-limit counters in Upstash Redis are deleted automatically after one hour. Aggregate analytics produced by Vercel do not identify you and are retained according to Vercel&rsquo;s own retention defaults.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">9. Your rights under GDPR</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify mb-3">
              Subject to the conditions in the GDPR, you have the right to: access the personal data we hold about you; ask us to correct or delete it; restrict or object to processing; receive a copy of your data in a portable format; and, where processing is based on consent, withdraw that consent at any time without affecting prior processing.
            </p>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:info@grannex.com" className="text-green-medium hover:underline">info@grannex.com</a>. You also have the right to lodge a complaint with the Office of the Commissioner for Personal Data Protection in Cyprus, or with the supervisory authority in your country of residence.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">10. Security</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              The website is served over HTTPS. We apply technical and organisational measures appropriate to the limited scope of data we collect, and we keep the number of people inside Grannex who can access enquiry messages to those who actually need it.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">11. Changes to this policy</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              If we change our data practices we will update this page and refresh the &ldquo;Last updated&rdquo; date at the top. Material changes will be highlighted on the website.
            </p>
          </section>

          <section className="border-t border-primary/20 pt-6 mt-8">
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              For any questions about this Privacy Policy please contact us at{' '}
              <a href="mailto:info@grannex.com" className="text-green-medium hover:underline">info@grannex.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
