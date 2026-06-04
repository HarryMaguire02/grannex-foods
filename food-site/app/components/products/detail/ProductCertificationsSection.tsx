import Image from "next/image";
import AnimateIn from "@/app/components/ui/AnimateIn";

const CERTS = [
  {
    name: "HACCP",
    description: "Hazard Analysis & Critical Control Points",
    image: "/haccp-certificate.png",
    pdf: "/pdfs/haccp-certificate.pdf",
  },
  {
    name: "FSSC 22000",
    description: "Food Safety System Certification",
    image: "/fssc-sertificate.png",
    pdf: "/pdfs/fssc-22000-certificate.pdf",
  },
  {
    name: "ISO 22000",
    description: "International food safety management",
    image: "/iso-certificate.png",
    pdf: "/pdfs/iso-22000-certificate.pdf",
  },
];

export default function ProductCertificationsSection() {
  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <AnimateIn from="bottom">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-medium mb-2">
            Quality &amp; Certification
          </p>
          <h2 className="text-3xl font-bold text-primary mb-8">
            Certified from source to dispatch
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CERTS.map((cert, i) => (
            <AnimateIn key={cert.name} from="bottom" delay={i * 0.1} className="h-full">
              <a
                href={cert.pdf}
                download
                className="rounded-xl border border-secondary bg-secondary/20 p-6 flex flex-col items-center gap-3 h-full cursor-pointer"
              >
                <div className="relative w-36 h-36">
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
                <div className="flex items-center gap-1.5 text-primary text-xs font-medium mt-auto pt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Download PDF
                </div>
              </a>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
