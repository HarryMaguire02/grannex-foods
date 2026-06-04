'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  { src: '/corn-oil-hero.png', alt: 'Quality food ingredients' },
  { src: '/ketchup-hero.png', alt: 'Quality food ingredients' },
  { src: '/mustard-hero.png', alt: 'Quality food ingredients' },
  { src: '/sunflower-oil-hero.png', alt: 'Quality food ingredients' },
];

export default function HomeHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slideshow = (
    <>
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
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full border-2 border-white transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-transparent hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </>
  );

  return (
    <section className="w-full bg-primary overflow-hidden">

      {/* Mobile: image first, text second */}
      <div className="lg:hidden">
        <div className="relative aspect-[800/680]">
          {slideshow}
        </div>
        <div className="px-6 sm:px-8 py-8 sm:py-10 flex flex-col gap-4 sm:gap-6">
          <p className="text-secondary text-xs font-semibold uppercase tracking-widest">
            Global Food Supplier
          </p>
          <div>
            <h1 className="text-white font-bold text-3xl sm:text-4xl leading-tight">
              Quality Ingredients.<br />Delivered Worldwide.
            </h1>
            <div className="w-14 h-[3px] bg-secondary mt-3 sm:mt-5" />
          </div>
          <p className="text-white/80 text-sm leading-relaxed max-w-sm">
            Reliable sourcing of oils, grains, and food ingredients - tailored to your business needs, with consistent quality and trusted supply chains.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary font-medium px-6 py-3 rounded-full hover:bg-green-light transition-colors"
            >
              Contact us
            </Link>
            <Link
              href="/products"
              className="border border-white text-white font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop: image absolute from viewport midpoint → right edge; text contained in left half */}
      <div className="hidden lg:block relative h-[520px]">
        {/* Below 1920px: full-bleed; 1920px+: capped at 700px (half of 1400px max-w) so right edge aligns with container */}
        <div className="absolute top-0 bottom-0 left-1/2 right-0 min-[1920px]:right-auto min-[1920px]:w-[700px]">
          {slideshow}
        </div>
        {/* Text lives inside max-width container; w-1/2 aligns its right edge with left-1/2 above */}
        <div className="relative max-w-[1400px] mx-auto h-full">
          <div className="w-1/2 h-full flex flex-col justify-center px-12 gap-6">
            <p className="text-secondary text-xs font-semibold uppercase tracking-widest">
              Global Food Supplier
            </p>
            <div>
              <h1 className="text-white font-bold text-5xl leading-tight">
                Quality Ingredients.<br />Delivered Worldwide.
              </h1>
              <div className="w-14 h-[3px] bg-secondary mt-5" />
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              Reliable sourcing of oils, grains, and food ingredients - tailored to your business needs, with consistent quality and trusted supply chains.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-primary font-medium px-6 py-3 rounded-full hover:bg-green-light transition-colors"
              >
                Contact us
              </Link>
              <Link
                href="/products"
                className="border border-white text-white font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
