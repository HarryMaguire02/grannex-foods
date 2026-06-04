import Image from "next/image";
import AnimateIn from "@/app/components/ui/AnimateIn";

interface Application {
  title: string;
  description: string;
  image?: string;
}

interface ProductApplicationsSectionProps {
  applications: Application[];
}

export default function ProductApplicationsSection({ applications }: ProductApplicationsSectionProps) {
  return (
    <section className="bg-secondary/20 border-y border-secondary py-10 lg:py-14">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <AnimateIn from="bottom">
          <p className="text-xl font-semibold uppercase tracking-widest text-primary mb-1">Applications</p>
          <p className="text-sm mb-8">Built for professional use</p>
        </AnimateIn>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(var(--app-cols),minmax(0,1fr))] gap-4`}
          style={{ "--app-cols": Math.min(applications.length, 6) } as React.CSSProperties}
        >
          {applications.map((app, i) => (
            <AnimateIn key={app.title} from="bottom" delay={i * 0.08} className="h-full">
              <div className="rounded-xl border border-primary/15 bg-white overflow-hidden hover:border-primary/30 transition-colors h-full">
                {app.image && (
                  <div className="relative w-full aspect-[121/42]">
                    <Image
                      src={`/applications${app.image}`}
                      alt={app.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 17vw"
                    />
                  </div>
                )}
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-sm font-bold text-primary">{app.title}</h3>
                  <p className="text-xs text-primary/60 leading-relaxed">{app.description}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
