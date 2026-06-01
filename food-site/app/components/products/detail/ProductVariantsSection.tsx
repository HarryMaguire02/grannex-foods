import Image from "next/image";
import AnimateIn from "@/app/components/ui/AnimateIn";

interface Variant {
  name: string;
  badge?: string;
  description: string;
  image?: string;
  oleic?: string;
  linoleic?: string;
  bestFor?: string;
  smokePoint?: string;
  shelfLife?: string;
}

interface ProductVariantsSectionProps {
  variants: Variant[];
  productName: string;
}

export default function ProductVariantsSection({
  variants,
  productName,
}: ProductVariantsSectionProps) {
  return (
    <section className="bg-secondary/20 border-y border-secondary py-10 lg:py-14">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <AnimateIn from="bottom">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-medium mb-2">
            Product Variants
          </p>
          <h2 className="text-3xl font-bold mb-8" style={{ color: "#1A1A18" }}>
            Choose the right {productName.toLowerCase()} for your business needs
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {variants.map((variant, i) => (
            <AnimateIn key={variant.name} from="bottom" delay={i * 0.15} className="h-full">
              <div
                className={`rounded-2xl border bg-white p-6 flex flex-col gap-4 h-full ${
                  i === 0
                    ? "border-primary border-2"
                    : "border-secondary border-2"
                }`}
              >
                {/* Top row: image + name/description + badge */}
                <div className="flex items-start gap-4">
                  {/* Image */}
                  <div className="shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-secondary/30">
                    {variant.image ? (
                      <Image
                        src={variant.image}
                        alt={variant.name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-secondary/50" />
                    )}
                  </div>

                  {/* Name + description */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-base font-bold text-black">
                        {variant.name}
                      </h3>
                      {variant.badge && (
                        <span
                          className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                            i === 0
                              ? "bg-pale text-primary"
                              : "bg-secondary/60 text-[#8C7B5E]"
                          }`}
                        >
                          {variant.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#6B6B64] leading-relaxed">
                      {variant.description}
                    </p>
                  </div>
                </div>

                {/* Stats row */}
                {(variant.oleic || variant.linoleic || variant.bestFor) && (
                  <div
                    className={`flex gap-0 pt-3 border-t ${i === 0 ? "border-pale" : "border-secondary"}`}
                  >
                    {variant.oleic && (
                      <div
                        className={`flex-1 px-2 sm:px-4 border-r ${i === 0 ? "border-pale" : "border-secondary"}`}
                      >
                        <p className="text-xs text-green-medium font-medium mb-1">
                          Oleic (omega-9)
                        </p>
                        <p className="text-sm font-bold text-primary">
                          {variant.oleic}
                        </p>
                      </div>
                    )}
                    {variant.linoleic && (
                      <div
                        className={`flex-1 px-2 sm:px-4 border-r ${i === 0 ? "border-pale" : "border-secondary"}`}
                      >
                        <p className="text-xs text-green-medium font-medium mb-1">
                          Linoleic (omega-6)
                        </p>
                        <p className="text-sm font-bold text-primary">
                          {variant.linoleic}
                        </p>
                      </div>
                    )}
                    {variant.bestFor && (
                      <div className="flex-1 pl-2 sm:pl-4">
                        <p className="text-xs text-green-medium font-medium mb-1">
                          Best for
                        </p>
                        <p className="text-sm font-bold text-primary">
                          {variant.bestFor}
                        </p>
                      </div>
                    )}
                  </div>
                )}

              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
