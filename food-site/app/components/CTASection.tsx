import Link from 'next/link';

interface CTASectionProps {
  text: string;
  buttonContent: string;
  description?: string;
}

export default function CTASection({ text, buttonContent, description }: CTASectionProps) {
  return (
    <section className="bg-cta w-full">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 min-h-[180px] flex flex-col sm:flex-row items-center sm:justify-between gap-6 py-10 sm:py-0">
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <p className="text-white font-bold text-xl sm:text-[32px] leading-none tracking-normal">
            {text}
          </p>
          {description && (
            <p className="text-white/70 text-sm">{description}</p>
          )}
        </div>
        <Link
          href="/products"
          className="shrink-0 bg-primary text-white text-sm font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          {buttonContent}
        </Link>
      </div>
    </section>
  );
}
