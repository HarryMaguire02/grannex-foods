interface NutritionRow {
  nutrient: string;
  per100g: string;
}

interface SpecRow {
  label: string;
  value: string;
}

interface ProductNutritionSectionProps {
  nutrition: NutritionRow[];
  specifications: SpecRow[];
}

export default function ProductNutritionSection({
  nutrition,
  specifications,
}: ProductNutritionSectionProps) {
  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-xl font-semibold uppercase tracking-widest text-primary mb-1">
          Nutrition & Specifications
        </p>
        <p className="text-sm mb-6">Per 100g · Full product data</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Nutrition table */}
          <div className="rounded-xl border border-[#D4C9B0] overflow-hidden bg-[#F5F0E8]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#D4C9B0]">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-primary uppercase tracking-wide">
                    Nutrient
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-primary uppercase tracking-wide">
                    Per 100g
                  </th>
                </tr>
              </thead>
              <tbody>
                {nutrition.map((row, i) => (
                  <tr
                    key={row.nutrient}
                    className={i % 2 === 0 ? "bg-[#EDE8DC]/50" : ""}
                  >
                    <td className="px-4 py-2.5">{row.nutrient}</td>
                    <td className="px-4 py-2.5 font-medium">{row.per100g}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Specifications table */}
          <div className="rounded-xl border border-[#D4C9B0] overflow-hidden bg-[#F5F0E8]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#D4C9B0]">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-primary uppercase tracking-wide">
                    Specification
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-primary uppercase tracking-wide">
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-[#EDE8DC]/50" : ""}
                  >
                    <td className="px-4 py-2.5">{row.label}</td>
                    <td className="px-4 py-2.5 font-medium">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
