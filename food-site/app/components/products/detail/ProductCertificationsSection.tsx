import Image from "next/image";
import AnimateIn from "@/app/components/ui/AnimateIn";

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
        <AnimateIn from="bottom">
          <p className="text-xl font-semibold uppercase tracking-widest text-primary mb-1">
            Quality &amp; Certification
          </p>
          <p className="text-sm mb-8">
            Certified from source to dispatch
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CERTS.map((cert, i) => (
            <AnimateIn key={cert.name} from="bottom" delay={i * 0.1} className="h-full">
              <div className="rounded-xl border border-secondary bg-secondary/20 p-6 flex flex-col items-center gap-3 h-full">
                <div className="relative w-36 h-36">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    sizes="144px"
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
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
