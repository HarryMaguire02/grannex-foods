import Image from 'next/image';

interface PageHeroSectionProps {
  label: string;
  heading: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function PageHeroSection({ label, heading, description, imageSrc, imageAlt }: PageHeroSectionProps) {
  return (
    <section className="w-full bg-primary overflow-hidden">
      {/* Mobile: full-bleed image above text */}
      <div className="relative h-48 sm:h-60 lg:hidden">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
      </div>

      {/* Text + desktop image */}
      <div className="relative">
        {/* Below 1920px: full-bleed; 1920px+: capped at 700px (half of 1400px max-w) so right edge aligns with container */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 right-0 min-[1920px]:right-auto min-[1920px]:w-[700px]">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
        </div>

        {/* Text: in normal flow (sets section height); w-1/2 on desktop aligns with image boundary */}
        <div className="relative max-w-content mx-auto">
          <div className="lg:w-1/2 py-8 sm:py-10 lg:py-16 px-6 sm:px-8 lg:px-12 flex flex-col gap-4 sm:gap-6">
            <p className="text-secondary text-xs font-semibold uppercase tracking-widest">
              {label}
            </p>
            <div>
              <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                {heading}
              </h1>
              <div className="w-14 h-[3px] bg-secondary mt-3 sm:mt-5" />
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
