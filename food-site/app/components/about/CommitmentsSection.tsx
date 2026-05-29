import Image from 'next/image';
import AnimateIn from '@/app/components/ui/AnimateIn';

const commitments = [
  {
    title: 'Uncompromising Quality',
    description:
      'Every product in our range is selected for purity, consistency, and performance. We only stock what we would confidently supply to our own business.',
    icon: '/about-us-quality.svg',
  },
  {
    title: 'Operational Reliability',
    description:
      'Your supply chain depends on us being dependable. We maintain ready stock and process orders efficiently so your business is never left waiting.',
    icon: '/about-us-reliability.svg',
  },
  {
    title: 'Genuine Partnership',
    description:
      'We work closely with every client — from first enquiry to ongoing supply. You get a dedicated contact, not a call centre.',
    icon: '/about-us-partnership.svg',
  },
];

export default function CommitmentsSection() {
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <AnimateIn from="bottom">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-green-medium font-bold">—</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-green-medium">
              What We Stand For
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10">
            Our three core commitments
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {commitments.map((item, i) => (
            <AnimateIn key={item.title} from="bottom" delay={i * 0.1} className="h-full">
              <div className="bg-secondary/30 rounded-2xl border-b-4 border-primary flex flex-col overflow-hidden h-full">
                {/* Icon area — fixed height so all cards align regardless of SVG natural size */}
                <div className="flex items-center justify-center pt-8 px-8 h-32">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>

                {/* Text area */}
                <div className="p-6 text-center flex flex-col gap-3 flex-1">
                  <h3 className="font-bold text-primary">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
