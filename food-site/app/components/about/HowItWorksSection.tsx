const steps = [
  { number: '01', title: 'You place an order', description: 'By form, email, or phone' },
  { number: '02', title: 'We pick & pack', description: 'Same-day for orders before 2pm' },
  { number: '03', title: 'Dispatched nationwide', description: 'Direct to your premises' },
  { number: '04', title: "You're stocked up", description: 'Ready to trade' },
];

function StepConnector() {
  return (
    <div className="hidden sm:flex items-center flex-shrink-0 pt-5 px-2">
      <div className="w-8 h-[1px] bg-sage" />
      <div className="w-2 h-2 rounded-full bg-sage flex-shrink-0" />
      <div className="w-8 h-[1px] bg-sage" />
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

        {/* Desktop: horizontal steps with connectors as separate elements */}
        <div className="hidden sm:flex items-start">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-green-medium">{step.number}</span>
                <p className="font-bold text-primary text-sm">{step.title}</p>
                <p className="text-sm text-green-medium">{step.description}</p>
              </div>
              {index < steps.length - 1 && <StepConnector />}
            </div>
          ))}
        </div>

        {/* Mobile: vertical stacked steps */}
        <div className="flex flex-col gap-6 sm:hidden">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4 items-start border-l-2 border-divider pl-4">
              <div>
                <span className="text-xs font-semibold text-green-medium">{step.number}</span>
                <p className="font-bold text-primary text-sm mt-1">{step.title}</p>
                <p className="text-sm text-green-medium">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
