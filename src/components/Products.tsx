import { useEffect, useRef, useState } from 'react';
import { products } from '@/config/companyConfig';

const productFamilies = products.flatMap((product) =>
  product.families.map((family) => ({
    ...family,
    productName: product.name,
  }))
);

export default function Products() {
  const textPanelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [desktopSectionHeight, setDesktopSectionHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateSectionHeight = () => {
      if (window.innerWidth < 1024) {
        setDesktopSectionHeight(null);
        return;
      }

      const tallestPanel = textPanelRefs.current.reduce((maxHeight, panel) => {
        if (!panel) return maxHeight;
        return Math.max(maxHeight, panel.scrollHeight);
      }, 0);

      setDesktopSectionHeight(tallestPanel || null);
    };

    updateSectionHeight();
    window.addEventListener('resize', updateSectionHeight);

    return () => window.removeEventListener('resize', updateSectionHeight);
  }, []);

  return (
    <section id="products" className="scroll-mt-24 bg-brand-white font-gotham">
      <div className="bg-brand-mist px-6 sm:px-8 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-green mb-4">Productos</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-4">
              Familias de productos para industria y construcción.
            </h2>
            <p className="text-lg text-brand-gray leading-relaxed">
              Presentamos nuestras líneas principales con el mismo enfoque visual del catálogo: materiales,
              empaques y aplicaciones organizadas por familia.
            </p>
          </div>
        </div>
      </div>

      <div>
        {productFamilies.map((family, index) => {
          const imageFirst = index % 2 === 0;

          return (
            <article
              key={family.name}
              className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch"
              style={{
                backgroundColor: index % 2 === 0 ? '#FFFFFE' : '#EEF3F0',
                minHeight: desktopSectionHeight ? `${desktopSectionHeight}px` : undefined,
              }}
            >
              <div className={`relative h-[360px] overflow-hidden sm:h-[440px] lg:h-auto lg:min-h-0 lg:self-stretch ${imageFirst ? '' : 'lg:order-2'}`}>
                <img src={family.image} alt={family.name} className="h-full w-full object-cover lg:absolute lg:inset-0" />
                <div className="absolute inset-0 bg-brand-blue/10" />
              </div>

              <div
                ref={(element) => {
                  textPanelRefs.current[index] = element;
                }}
                className="flex items-center px-6 py-14 sm:px-8 md:px-12 lg:px-16"
              >
                <div className="max-w-xl">
                  <div className="mb-7 flex items-center">
                    <span
                      className="h-12 w-11 shrink-0 rotate-90 hexagon-mark"
                      style={{ backgroundColor: family.color }}
                      aria-hidden="true"
                    />
                    <div className="ml-4 h-[2px] w-16" style={{ backgroundColor: family.color }} />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-gray mb-4">
                    {family.productName}
                  </p>
                  <h3 className="text-4xl sm:text-5xl font-bold text-brand-blue leading-tight mb-6">
                    {family.name}
                  </h3>
                  <p className="text-lg leading-relaxed text-brand-gray mb-8">{family.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {family.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-brand-line bg-brand-white px-4 py-2 text-sm font-semibold text-brand-blue"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
