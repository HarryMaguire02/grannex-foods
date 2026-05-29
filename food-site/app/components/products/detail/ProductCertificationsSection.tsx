import Image from "next/image";

const CERTS = [
  {
    name: "HACCP",
    description: "Hazard Analysis & Critical Control Points",
    image: "/haccp-certificate.png",
  },
  {
    name: "FSSC 22000",
    description: "Food Safety System Certification",
    image: "/fssc-sertificate.png",
  },
  {
    name: "ISO 22000",
    description: "International food safety management",
    image: "/iso-certificate.png",
  },
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CERTS.map((cert) => (
            <div
              key={cert.name}
              className="rounded-xl border border-secondary bg-secondary/20 p-6 flex flex-col items-center gap-3"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-primary text-center">
                {cert.name}
              </h3>
              <p className="text-xs text-primary/70 leading-relaxed text-center">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
