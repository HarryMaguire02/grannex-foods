type Step = { type: 'step'; number: string; title: string; description: string };
type Connector = { type: 'connector'; id: string };
type Item = Step | Connector;

const items: Item[] = [
  { type: 'step', number: '01', title: 'You place an order', description: 'By form, email, or phone' },
  { type: 'connector', id: 'c1' },
  { type: 'step', number: '02', title: 'We pick & pack', description: 'Same-day for orders before 2pm' },
  { type: 'connector', id: 'c2' },
  { type: 'step', number: '03', title: 'Dispatched nationwide', description: 'Direct to your premises' },
  { type: 'connector', id: 'c3' },
  { type: 'step', number: '04', title: "You're stocked up", description: 'Ready to trade' },
];

function StepConnector() {
  return (
    <div className="flex-1 flex items-center min-w-0 max-w-16">
      <div className="w-2 h-2 rounded-full bg-sage flex-shrink-0" />
      <div className="flex-1 h-[1px] bg-sage" />
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-green-medium font-bold">—</span>
          <span className="text-xs font-semibold uppercase tracking-widest text-green-medium">
            How It Works
          </span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10">
          From source to your door — simple, fast, transparent
        </h2>

        {/* Desktop (lg+): steps take natural content width, connectors stretch to fill */}
        <div className="hidden lg:flex items-center gap-8">
          {items.map((item) =>
            item.type === 'step' ? (
              <div key={item.number} className="flex-shrink-0 flex flex-col gap-1">
                <span className="text-xs font-semibold text-green-medium">{item.number}</span>
                <p className="font-bold text-primary text-sm whitespace-nowrap">{item.title}</p>
                <p className="text-sm text-green-medium whitespace-nowrap">{item.description}</p>
              </div>
            ) : (
              <StepConnector key={item.id} />
            )
          )}
        </div>

        {/* Mobile/tablet (below lg): vertical stacked */}
        <div className="flex flex-col gap-6 lg:hidden">
          {items
            .filter((item): item is Step => item.type === 'step')
            .map((step) => (
              <div key={step.number} className="border-l-2 border-divider pl-4">
                <span className="text-xs font-semibold text-green-medium">{step.number}</span>
                <p className="font-bold text-primary text-sm mt-1">{step.title}</p>
                <p className="text-sm text-green-medium">{step.description}</p>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
