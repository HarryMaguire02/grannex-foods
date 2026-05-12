import Link from 'next/link';

const stats = [
  { value: '24/7', label: 'Order Dispatch' },
  { value: '1 Pallet', label: 'Minimum Order' },
  { value: 'Extensive', label: 'Delivery Coverage' },
];

export default function AboutUsHomeSection() {
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-green-medium font-bold">—</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-green-medium">
                About Us
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
              A trusted wholesale partner for food businesses
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              We supply premium cooking oils, mayonnaise, sauces, and essential groceries to restaurants, distributors, and food service businesses. With dedicated local stock and orders dispatched efficiently, we make wholesale simple, reliable, and fast.
            </p>
            <Link
              href="/about"
              className="inline-block bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-green-medium transition-colors"
            >
              Learn More
            </Link>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2 items-center text-center">
                <span className="text-xl sm:text-2xl lg:text-4xl font-bold text-primary">{stat.value}</span>
                <div className="w-8 h-[2px] bg-sage" />
                <span className="text-xs text-sage">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
