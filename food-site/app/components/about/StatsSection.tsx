import AnimateIn from '@/app/components/ui/AnimateIn';

const stats = [
  { value: '24/7', label: 'Order dispatch, year-round' },
  { value: '1 Pallet', label: 'Minimum order quantity' },
  { value: 'Extensive', label: 'Delivery coverage' },
  { value: '100%', label: 'Quality guaranteed, every batch' },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-secondary/30 py-10 lg:py-14">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-secondary">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} from="bottom" delay={i * 0.1}>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</span>
                <div className="w-8 h-[2px] bg-sage mx-auto my-2" />
                <span className="text-sm text-primary">{stat.label}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
