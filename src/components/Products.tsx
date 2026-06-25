import { products } from '@/config/companyConfig';

export default function Products() {
  return (
    <section id="products" className="scroll-mt-24 bg-brand-mist py-20 px-6 sm:px-8 md:px-12 font-gotham">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-green mb-4">Productos</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-4">
            Dos lineas principales, listas para crecer con tu catalogo.
          </h2>
          <p className="text-lg text-brand-gray leading-relaxed">
            Usa estas secciones como base para agregar fichas tecnicas, presentaciones comerciales, imagenes
            reales y variaciones por producto.
          </p>
        </div>

        <div className="space-y-12">
          {products.map((product, index) => (
            <article
              key={product.id}
              id={product.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-md border border-brand-line bg-brand-white shadow-sm">
                <img src={product.image} alt={product.name} className="aspect-[4/3] w-full object-cover" />
                <div className="absolute left-0 top-0 h-full w-2" style={{ backgroundColor: product.accent }} />
              </div>

              <div className="bg-brand-white border border-brand-line rounded-md p-6 sm:p-8 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-green mb-3">{product.eyebrow}</p>
                <h3 className="text-3xl font-bold text-brand-blue mb-4">{product.name}</h3>
                <p className="text-brand-gray leading-relaxed mb-6">{product.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-brand-blue mb-3">Aplicaciones</h4>
                    <ul className="space-y-2 text-sm text-brand-gray">
                      {product.uses.map((use) => (
                        <li key={use} className="flex gap-2">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-green" />
                          <span>{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-blue mb-3">Disponibilidad</h4>
                    <ul className="space-y-2 text-sm text-brand-gray">
                      {product.details.map((detail) => (
                        <li key={detail} className="flex gap-2">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-blue" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
