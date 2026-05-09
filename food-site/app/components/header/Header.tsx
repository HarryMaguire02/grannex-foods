'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About us' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`w-full ${isMobileMenuOpen || isHovered ? 'bg-white' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="border-b border-gray-100">
          <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex items-center h-16 md:h-20">
              {/* Logo — left */}
              <div className="flex-1">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/grannexFoodsLogo.svg"
                    alt="GrannexFoods Logo"
                    width={200}
                    height={66}
                    className="h-10 md:h-12 w-auto"
                    priority
                  />
                </Link>
              </div>

              {/* Nav — center (desktop only, hidden on mobile) */}
              <Navigation navLinks={navLinks} onContactClick={() => {}} />

              {/* Right — Contact us button (desktop) + hamburger (mobile) */}
              <div className="flex-1 flex justify-end">
                <Link
                  href="/contact"
                  className="hidden md:block bg-primary text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-green-medium transition-colors"
                >
                  Contact us
                </Link>
                <button
                  onClick={toggleMobileMenu}
                  className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
                  aria-label="Toggle menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <span
                    className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  />
                  <span
                    className={`block w-6 h-0.5 bg-primary transition-opacity duration-300 ${
                      isMobileMenuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-300 ${
                isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
              }`}
            >
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`py-3 px-4 rounded-lg text-base text-center font-medium transition-colors ${
                        isActive
                          ? 'bg-primary text-white'
                          : 'text-primary hover:bg-primary/20'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="mt-2 py-3 px-4 rounded-full bg-primary text-white text-base font-medium text-center hover:bg-green-medium transition-colors"
                >
                  Contact us
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

    </>
  );
}
