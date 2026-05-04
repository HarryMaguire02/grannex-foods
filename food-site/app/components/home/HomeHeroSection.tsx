'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactPopup from '../ContactPopup';

const slides = [
  { src: '/HomeHero.png', alt: 'Quality food ingredients' },
  { src: '/HomeHero.png', alt: 'Quality food ingredients' },
  { src: '/HomeHero.png', alt: 'Quality food ingredients' },
  { src: '/HomeHero.png', alt: 'Quality food ingredients' },
];

export default function HomeHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  return (
    <>
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[520px]">

          {/* Left: Content */}
          <div className="bg-primary flex flex-col justify-center">
          <div className="w-full max-w-[620px] ml-auto px-6 sm:px-8 lg:px-12 py-14 lg:py-0 flex flex-col gap-6">
            <p className="text-secondary text-xs font-semibold uppercase tracking-widest">
              Global Food Supplier
            </p>
            <div>
              <h1 className="text-white font-bold text-4xl lg:text-5xl leading-tight">
                Quality Ingredients.<br />Delivered Worldwide.
              </h1>
              <div className="w-14 h-[3px] bg-secondary mt-5" />
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              Reliable sourcing of oils, grains, and food ingredients - tailored to your business needs, with consistent quality and trusted supply chains.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-white text-primary font-medium px-6 py-3 rounded-full hover:bg-green-light transition-colors"
              >
                Place an Order
              </button>
              <Link
                href="/products"
                className="border border-white text-white font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>
          </div>

          {/* Right: Slideshow */}
          <div className="relative h-64 sm:h-96 lg:h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-2.5 h-2.5 rounded-full border-2 border-primary transition-all ${
                    index === currentSlide ? 'bg-primary' : 'bg-transparent hover:bg-primary/30'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      <ContactPopup isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} />
    </>
  );
}
