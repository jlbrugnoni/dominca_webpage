import { company, strengths } from '@/config/companyConfig';

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
            Una empresa dominicana enfocada en minerales industriales y soluciones para construccion.
          </h2>
        </div>
        <div className="space-y-7">
          <p className="text-lg sm:text-xl leading-relaxed text-brand-gray">
            {company.description}
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-brand-gray">
            Esta pagina queda preparada para que agregues tus fotografias reales de planta, productos, empaques,
            fichas tecnicas y certificaciones. Cambia el contenido desde los componentes o desde
            <span className="font-bold text-brand-blue"> src/config/companyConfig.ts</span>.
          </p>
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
    </section>
  );
}
