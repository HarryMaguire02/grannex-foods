import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-cta w-full">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 min-h-[180px] flex flex-col sm:flex-row items-center sm:justify-between gap-6 py-10 sm:py-0">
        <p className="text-white font-bold text-xl sm:text-[32px] leading-none tracking-normal text-center sm:text-left">
          Ready to place your first order?
        </p>
        <Link
          href="/products"
          className="shrink-0 bg-primary text-white text-sm font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}
