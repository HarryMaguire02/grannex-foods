import Image from 'next/image';

export default function AboutHeroSection() {
  return (
    <section className="w-full bg-primary relative lg:h-[420px]">

      {/* Image — right 30%, desktop only */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[30%]">
        <Image
          src="/HomeHero.png"
          alt="GrannexFoods quality cooking oils and food ingredients"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Mobile image */}
      <div className="relative h-64 sm:h-80 lg:hidden">
        <Image
          src="/HomeHero.png"
          alt="GrannexFoods quality cooking oils and food ingredients"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content — aligned with page content grid */}
      <div className="relative z-10 max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-14 lg:py-0 lg:h-full flex flex-col justify-center">
        <div className="lg:max-w-[65%] flex flex-col gap-6">
          <p className="text-secondary text-xs font-semibold uppercase tracking-widest">
            About Us
          </p>
          <div>
            <h1 className="text-white font-bold text-4xl lg:text-5xl leading-tight">
              Built on Quality.<br />Delivered with Trust.
            </h1>
            <div className="w-14 h-[3px] bg-secondary mt-5" />
          </div>
          <p className="text-white/80 text-sm leading-relaxed max-w-xl">
            We are a trusted wholesale supplier of high-quality cooking oils, mayo, and essential
            groceries — providing uncompromising reliability to the food service sector.
          </p>
        </div>
      </div>

    </section>
  );
}
