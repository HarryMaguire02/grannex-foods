import Image from "next/image";

interface PackagingOption {
  format: string;
  sizeLabel: string;
  description: string;
  image?: string;
}

interface ProductPackagingSectionProps {
  packaging: PackagingOption[];
}

export default function ProductPackagingSection({
  packaging,
}: ProductPackagingSectionProps) {
  return (
    <section className="bg-secondary/20 border-y border-secondary py-10 lg:py-14">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-green-medium mb-2">
          Packaging & Supply
        </p>
        <h2 className="text-3xl font-bold text-primary mb-8">
          Every format your business needs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {packaging.map((option) => (
            <div
              key={option.format}
              className="rounded-xl bg-white overflow-hidden border border-secondary"
            >
              {/* Image area — ~308×84 aspect ratio ≈ aspect-[11/3] */}
              <div className="relative w-full aspect-[11/3] bg-secondary/40">
                {option.image && (
                  <Image
                    src={option.image}
                    alt={option.format}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                )}
                {/* Size badge — bottom-left overlay */}
                <span className="absolute bottom-2 left-2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {option.sizeLabel}
                </span>
              </div>

              {/* Text below image */}
              <div className="p-4 flex flex-col gap-1">
                <h3 className="text-sm font-bold text-primary">{option.format}</h3>
                <p className="text-xs text-primary/60 leading-relaxed">{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
