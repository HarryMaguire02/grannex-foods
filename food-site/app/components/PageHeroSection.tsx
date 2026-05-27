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
    <section className="w-full bg-primary relative lg:h-[420px]">

      {/* Image — right 30%, desktop only */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[30%]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Mobile image */}
      <div className="relative h-44 sm:h-60 lg:hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-0 lg:h-full flex flex-col justify-center">
        <div className="lg:max-w-[65%] flex flex-col gap-4 sm:gap-6">
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

    </section>
  );
}
