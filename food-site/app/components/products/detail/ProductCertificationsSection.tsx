const CERTS = [
  { name: "HACCP", description: "Hazard Analysis & Critical Control Points" },
  { name: "FSSC 22000", description: "Food Safety System Certification" },
  {
    name: "Full Traceability",
    description: "Source to final product, every batch",
  },
  { name: "ISO 22000", description: "International food safety management" },
];

export default function ProductCertificationsSection() {
  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-green-medium mb-2">
          Quality & Certification
        </p>
        <h2 className="text-3xl font-bold text-primary mb-8">
          Certified from source to dispatch
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTS.map((cert) => (
            <div
              key={cert.name}
              className="rounded-xl border border-secondary bg-secondary/20 p-5 flex flex-col gap-1"
            >
              <h3 className="text-sm font-bold text-primary">{cert.name}</h3>
              <p className="text-xs text-primary/80 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
