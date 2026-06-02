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
      {/* Mobile image — full bleed above the text */}
      <div className="relative h-48 sm:h-60 lg:hidden">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
      </div>

      {/* Desktop + mobile text — both inside the content boundary */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">

          {/* Text column */}
          <div className="py-8 sm:py-10 lg:py-16 flex flex-col gap-4 sm:gap-6 flex-1">
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

          {/* Image column — desktop only, anchored to content boundary */}
          <div className="hidden lg:block flex-none w-[45%] self-stretch relative">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
