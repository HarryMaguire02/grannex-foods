import AnimateIn from '@/app/components/ui/AnimateIn';

const features = [
  {
    title: 'Reliable Quality, Every Time',
    description:
      'We work with trusted producers and carefully selected sources to ensure consistent quality across every shipment.',
    icon: '/quality-choose-us.svg',
  },
  {
    title: 'Flexible Supply Solutions',
    description:
      'From bulk orders to tailored sourcing, we adapt to your business needs with efficiency and reliability.',
    icon: '/supply-choose-us.svg',
  },
  {
    title: 'Dedicated Partnership Approach',
    description:
      'A single point of contact guiding you from inquiry to delivery - making the entire process smooth and transparent.',
    icon: '/partnership-choose-us.svg',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <AnimateIn from="bottom">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-green-medium font-bold">—</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-green-medium">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl font-bold text-primary mb-10">
            Built for partners who expect more
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimateIn key={feature.title} from="bottom" delay={i * 0.1} className="h-full">
              <div className="border border-secondary rounded-2xl p-8 flex flex-col items-center text-center h-full">
                <div className="h-14 flex items-center justify-center mb-2">
                  <img src={feature.icon} alt="" width={48} height={48} />
                </div>
                <h3 className="font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
