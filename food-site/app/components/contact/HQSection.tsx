export default function HQSection() {
  return (
    <section className="bg-secondary/30 py-6 lg:py-10">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-center">

          {/* Left: address */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-green-medium mb-3">Find Us</p>
            <h2 className="text-3xl font-bold text-primary mb-4">Headquarters</h2>
            <p className="text-sm text-primary/70 leading-relaxed">
              Dimitri Stavrou 1 Street<br />
              Nicosia, Cyprus
            </p>
          </div>

          {/* Right: Map */}
          <div className="w-full h-56 lg:h-72 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1632.0528610053198!2d33.38421066472345!3d35.10407087979821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de191b0d2562b5%3A0x44a380fb147a215f!2zRGltaXRyaSBTdGF2cm91IDEsIExhdHNpYSAyMjI0LCDQmtC40L_QsNGA!5e0!3m2!1ssr!2srs!4v1778327810969!5m2!1ssr!2srs"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
