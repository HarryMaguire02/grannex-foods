const commitments = [
  {
    title: 'Uncompromising Quality',
    description:
      'Every product in our range is selected for purity, consistency, and performance. We only stock what we would confidently supply to our own business.',
  },
  {
    title: 'Operational Reliability',
    description:
      'Your supply chain depends on us being dependable. We hold local UK stock and dispatch 24/7 so your business is never left waiting.',
  },
  {
    title: 'Genuine Partnership',
    description:
      'We work closely with every client — from first enquiry to ongoing supply. You get a dedicated contact, not a call centre.',
  },
];

export default function CommitmentsSection() {
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-green-medium font-bold">—</span>
          <span className="text-xs font-semibold uppercase tracking-widest text-green-medium">
            What We Stand For
          </span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10">
          Our three core commitments
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {commitments.map((item) => (
            <div
              key={item.title}
              className="bg-secondary/30 rounded-2xl p-8 text-center border-b-2 border-primary flex flex-col"
            >
              <h3 className="font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
