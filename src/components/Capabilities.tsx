const capabilities = [
  {
    title: 'Calidad',
    body: 'Define aquí tus controles: granulometría, blancura, humedad, resistencia, trazabilidad o ensayos por lote.',
  },
  {
    title: 'Logística',
    body: 'Presenta zonas de cobertura, formatos de empaque, tiempos de despacho y opciones para industria u obra.',
  },
  {
    title: 'Desarrollo',
    body: 'Reserva espacio para mezclas especiales, productos privados, pruebas con clientes y soporte técnico.',
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-24 bg-brand-blue py-20 px-6 sm:px-8 md:px-12 text-brand-white font-gotham">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-lightGreen mb-4">Calidad y servicio</p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Una sección para demostrar por qué comprarles a ustedes.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {capabilities.map((item) => (
              <div key={item.title} className="rounded-md border border-brand-white/20 bg-brand-white/8 p-6">
                <span className="mb-5 block h-8 w-8 hexagon-mark bg-brand-green" aria-hidden="true" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-brand-white/78">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
