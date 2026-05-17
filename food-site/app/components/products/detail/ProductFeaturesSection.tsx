interface Feature {
  title: string;
  description: string;
}

interface ProductFeaturesSectionProps {
  features: Feature[];
}

export default function ProductFeaturesSection({
  features,
}: ProductFeaturesSectionProps) {
  return (
    <section className="bg-white py-6 lg:py-8">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-green-medium mb-2">
          Key Features
        </p>
        <h2 className="text-3xl font-bold text-primary mb-8">
          Why this product performs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-2">
              <div className="flex items-center gap-2 pb-2 border-b border-sage">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <h3 className="text-sm font-bold text-primary">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-primary/60 leading-relaxed pl-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
