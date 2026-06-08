import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cookie Policy - Grannex",
  description: "How Grannex handles cookies and similar technologies. We use a deliberately minimal, cookieless analytics setup and do not run advertising or tracking cookies.",
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <nav className="text-sm text-primary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-medium transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium">Cookie Policy</span>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Cookie Policy
        </h1>
        <p className="text-primary/70 text-xs mb-6 md:mb-8">Last updated: 7 April 2026</p>

        {/* Introduction */}
        <div className="mb-8">
          <p className="text-primary font-normal text-sm leading-6 text-justify">
            This page explains how the Grannex website uses cookies and similar storage technologies. The short version: we keep this to an absolute minimum. We do not run advertising cookies, retargeting pixels, social-media tracking pixels or third-party analytics cookies on this site.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-bold text-primary mb-3">What is a cookie?</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              A cookie is a small text file that a website can store on your device when you visit it. Cookies are widely used to make sites work, to remember preferences and, in many cases, to track visitors across the web. The same European rules also cover other forms of local storage, such as <em>localStorage</em> and <em>sessionStorage</em>.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">What we do not use</h3>
            <ul className="list-disc list-outside pl-5 space-y-1 text-primary font-normal text-sm leading-6 text-justify">
              <li>No Google Analytics.</li>
              <li>No Meta / Facebook Pixel.</li>
              <li>No advertising or retargeting cookies.</li>
              <li>No cross-site tracking or visitor profiling.</li>
              <li>No third-party social-network tracking pixels.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">What we do use</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify mb-3">
              We use a cookieless analytics and performance setup provided by our hosting platform, Vercel:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-primary font-normal text-sm leading-6 text-justify">
              <li>
                <strong>Vercel Web Analytics</strong> &mdash; produces aggregate visit statistics (page views, country, device family). According to Vercel&rsquo;s documentation it does not set cookies and does not store identifiers that link visits back to an individual.
              </li>
              <li>
                <strong>Vercel Speed Insights</strong> &mdash; collects anonymous Core Web Vitals (page load and interaction performance metrics) so we can find and fix slow pages. It does not identify you.
              </li>
            </ul>
            <p className="text-primary font-normal text-sm leading-6 text-justify mt-3">
              In addition, our content delivery network and security layer may place a small number of strictly necessary technical cookies if needed to keep the site online, secure and load-balanced. These do not track you across sites and exist only to deliver the page you asked for.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Why there is no cookie banner</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              Under Article 5(3) of the ePrivacy Directive (and equivalent national laws), prior consent is required only when a website stores or accesses information on your device that is not strictly necessary to provide the service you asked for. Because our analytics are cookieless and we do not run advertising or tracking technologies, there is nothing on this site that triggers that consent requirement. Showing a banner would only serve to look compliant rather than to protect anyone&rsquo;s privacy, so we have chosen not to add one.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Controlling cookies in your browser</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              Even though there is very little to control on this site, you can block or delete cookies at any time through your browser settings. Doing so should have no impact on your ability to use the Grannex website.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Related information</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              For the full picture of how we handle personal data, including the contact and order forms and our service providers, please read our{' '}
              <Link href="/privacy-policy" className="text-green-medium hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          <section className="border-t border-primary/20 pt-6 mt-8">
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              For any questions about this Cookie Policy, please contact us at{' '}
              <a href="mailto:info@grannex.com" className="text-green-medium hover:underline">info@grannex.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
