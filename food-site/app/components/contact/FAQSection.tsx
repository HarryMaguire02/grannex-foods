import AnimateIn from '@/app/components/ui/AnimateIn';

const faqs = [
  {
    question: 'What is the minimum order?',
    answer: 'Minimum 1 pallet. Custom pricing available for full truckloads.',
  },
  {
    question: 'How quickly do you dispatch?',
    answer: 'Orders placed before 2pm are dispatched same day. 24/7 warehouse operation.',
  },
  {
    question: 'Do you deliver UK-wide?',
    answer: 'Yes — we deliver to any postcode across the United Kingdom.',
  },
  {
    question: 'Can I get a custom quote?',
    answer: 'Absolutely. Contact us directly for volume pricing and truckload rates.',
  },
];

export default function FAQSection() {
  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <AnimateIn from="bottom">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-medium mb-3">Common Questions</p>
          <h2 className="text-3xl font-bold text-primary mb-2 md:mb-4">Before you order</h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-16">
          {faqs.map((faq, i) => (
            <AnimateIn key={i} from="bottom" delay={i * 0.1}>
              <div className="py-6 border-t border-sage">
                <h3 className="text-sm font-bold text-primary mb-2">{faq.question}</h3>
                <p className="text-sm text-primary/60 leading-relaxed">{faq.answer}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
