import Image from "next/image";

interface PackagingVariant {
  size: string;
  netWeight: string;
  unitsPerCarton: string;
  bestFor: string;
}

interface PackagingOption {
  format: string;
  image?: string;
  variants: PackagingVariant[];
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
          Packaging &amp; Supply
        </p>
        <h2 className="text-3xl font-bold text-primary mb-8">
          Every format your business needs
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {packaging.map((option) => (
            <div
              key={option.format}
              className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] rounded-xl bg-white overflow-hidden border border-secondary flex flex-col"
            >
              {/* Image / placeholder area */}
              <div className="relative w-full aspect-[11/3] bg-secondary/40 flex-shrink-0">
                {option.image && (
                  <Image
                    src={option.image}
                    alt={option.format}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}
                <span className="absolute bottom-2 left-2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {option.format}
                </span>
              </div>

              {/* Variant rows */}
              <div className="flex flex-col flex-1">
                {/* Column headers */}
                <div className="grid grid-cols-4 px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-primary/40">
                  <span>Size</span>
                  <span>Net Wt.</span>
                  <span>Units/Ctn</span>
                  <span>Best For</span>
                </div>

                {/* Variant rows */}
                {option.variants.map((variant, i) => (
                  <div
                    key={variant.size}
                    className={`grid grid-cols-4 px-4 py-2 text-xs text-primary border-t border-secondary/60 ${
                      i % 2 === 1 ? "bg-secondary/10" : ""
                    }`}
                  >
                    <span className="font-medium">{variant.size}</span>
                    <span>{variant.netWeight}</span>
                    <span>{variant.unitsPerCarton}</span>
                    <span>{variant.bestFor}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
