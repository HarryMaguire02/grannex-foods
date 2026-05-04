'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import ContactPopup from '../ContactPopup';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About us' },
  { href: '#', label: 'Contact us', isContactButton: true },
];

export default function Header() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  const handleContactClick = () => {
    setIsContactPopupOpen(true);
  };

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
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
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

              {/* Desktop: Nav + Place an Order button */}
              <div className="hidden md:flex items-center gap-6 lg:gap-8">
                <Navigation navLinks={navLinks} onContactClick={handleContactClick} />
                <button
                  onClick={handleContactClick}
                  className="bg-primary text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-green-medium transition-colors"
                >
                  Place an Order
                </button>
              </div>

              {/* Mobile Hamburger */}
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

            {/* Mobile Menu */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-300 ${
                isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
              }`}
            >
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  if (link.isContactButton) {
                    return (
                      <button
                        key={link.href}
                        onClick={() => {
                          handleContactClick();
                          closeMobileMenu();
                        }}
                        className="py-3 px-4 rounded-lg text-base font-medium transition-colors text-primary hover:bg-white/30 text-center"
                      >
                        {link.label}
                      </button>
                    );
                  }

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
                <button
                  onClick={() => {
                    handleContactClick();
                    closeMobileMenu();
                  }}
                  className="mt-2 py-3 px-4 rounded-full bg-primary text-white text-base font-medium text-center hover:bg-green-medium transition-colors"
                >
                  Place an Order
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <ContactPopup isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} />
    </>
  );
}
