import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="w-full py-6 lg:py-8">
        <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 lg:gap-12">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/grannexFoodsFooterLogo.svg"
                alt="GrannexFoods Logo"
                width={320}
                height={128}
                className="h-24 md:h-26 lg:h-30 w-auto"
              />
            </div>

            {/* Right Side */}
            <div className="grid grid-cols-1 sm:grid-cols-[2fr_1.5fr_1fr] gap-8">
              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <div className="space-y-3 text-sm">
                  <p>Dimitri Stavrou 1 Street Nicosia Cyprus</p>
                  <p>info@grannexfood.com</p>
                </div>
              </div>

              {/* Sales Director */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Sales Director</h3>
                <div className="space-y-3 text-sm">
                  <p>Vlado Šaranović</p>
                  <p>vsaranovic@grannex.com</p>
                  <p>+381 631077708</p>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow us!</h3>
                <div className="flex flex-col gap-3">
                  <Link
                    href="https://www.linkedin.com/company/grannex-ltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    aria-label="Follow us on LinkedIn"
                  >
                    <Image
                      src="/linkedin-icon.svg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="text-sm">grannex</span>
                  </Link>

                  <Link
                    href="https://www.facebook.com/grannex_ltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    aria-label="Follow us on Facebook"
                  >
                    <Image
                      src="/facebook-icon.svg"
                      alt="Facebook"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="text-sm">grannex</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full py-6">
        <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
          <div className="border-t-2 border-secondary pt-6">
            <div className="flex flex-col gap-4">
              {/* Legal Links */}
              <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-secondary font-semibold">
                <Link
                  href="/sales-conditions"
                  className="hover:text-white transition-colors"
                >
                  Sales Conditions
                </Link>
                <Link
                  href="/purchase-conditions"
                  className="hover:text-white transition-colors"
                >
                  Purchase Conditions
                </Link>
                <Link
                  href="/whistleblower-policy"
                  className="hover:text-white transition-colors"
                >
                  Whistleblower policy
                </Link>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy policy
                </Link>
                <Link
                  href="/cookie-policy"
                  className="hover:text-white transition-colors"
                >
                  Cookie policy
                </Link>
                <Link
                  href="/terms-of-use"
                  className="hover:text-white transition-colors"
                >
                  Terms of use
                </Link>
              </nav>

              {/* Copyright */}
              <div className="flex justify-center text-xs text-white">
                <p>Grannex International All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
