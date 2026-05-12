import Image from 'next/image';
import Link from 'next/link';

const bullets = [
  {
    title: '24/7 Dispatch',
    description: 'Orders are processed and dispatched around the clock, every day of the year.',
  },
  {
    title: 'Pallet-Based Ordering',
    description: 'Minimum 1 pallet — highly scalable, from small distributors up to full truckloads.',
  },
  {
    title: 'Extensive Coverage',
    description: 'Fast, secure, and reliable delivery network to meet your business demands wherever you are.',
  },
  {
    title: 'Cold Chain Ready',
    description: 'Fully equipped to handle temperature-sensitive products like mayo and sauces, ensuring total freshness upon arrival.',
  },
];

export default function WarehouseSection() {
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>›</span>
          <span className="text-primary">About Us</span>
        </nav>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: Warehouse image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full">
            <Image
              src="/warehouse.png"
              alt="GrannexFoods warehouse"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-green-medium font-bold">—</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-green-medium">
                Our Warehouse
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 leading-tight">
              Fully Stocked. Ready to Dispatch.
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              Our dedicated warehouse holds ready stock of our complete product range — meaning no unnecessary delays for your supply chain. Orders are processed and dispatched efficiently, giving your business the reliability it needs to keep running smoothly.
            </p>

            <ul className="flex flex-col gap-5">
              {bullets.map((bullet) => (
                <li key={bullet.title} className="flex gap-3 items-start">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold text-primary text-sm">{bullet.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{bullet.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
