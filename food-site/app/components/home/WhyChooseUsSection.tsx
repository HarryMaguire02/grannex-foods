const features = [
  {
    title: 'Reliable Quality, Every Time',
    description:
      'We work with trusted producers and carefully selected sources to ensure consistent quality across every shipment.',
  },
  {
    title: 'Flexible Supply Solutions',
    description:
      'From bulk orders to tailored sourcing, we adapt to your business needs with efficiency and reliability.',
  },
  {
    title: 'Dedicated Partnership Approach',
    description:
      'A single point of contact guiding you from inquiry to delivery - making the entire process smooth and transparent.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-green-medium font-bold">—</span>
          <span className="text-xs font-semibold uppercase tracking-widest text-green-medium">
            Why Choose Us
          </span>
        </div>

        <h2 className="text-3xl font-bold text-primary mb-10">
          Built for partners who expect more
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-secondary rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-pale flex items-center justify-center mb-6">
                <div className="w-5 h-5 rounded-full bg-primary" />
              </div>
              <h3 className="font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
