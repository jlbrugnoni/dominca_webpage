import { aboutParagraphs, strengths, timeline } from '@/config/companyConfig';

export default function AboutUs() {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-20 px-6 sm:px-8 md:px-12 lg:px-20 bg-brand-white text-brand-ink font-gotham"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-green mb-4">Nosotros</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue leading-tight">
            Una empresa familiar dedicada al carbonato de calcio y soluciones industriales.
          </h2>
        </div>
        <div className="space-y-7">
          <div className="space-y-5">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base sm:text-lg leading-relaxed text-brand-gray">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strengths.map((strength) => (
              <div key={strength} className="flex gap-3 rounded-md border border-brand-line bg-brand-mist p-4">
                <span className="mt-1 h-4 w-4 shrink-0 hexagon-mark bg-brand-green" aria-hidden="true" />
                <p className="text-sm font-semibold text-brand-blue">{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-green mb-3">Trayectoria</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-blue">Crecimiento constante desde 2021</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {timeline.map((item) => (
            <div key={item.year} className="relative rounded-md border border-brand-line bg-brand-mist p-5">
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="h-8 w-7 shrink-0 rotate-90 hexagon-mark bg-brand-green"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-bold text-brand-green">{item.year}</p>
                  <h4 className="text-lg font-bold text-brand-blue leading-tight">{item.title}</h4>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-brand-gray">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
