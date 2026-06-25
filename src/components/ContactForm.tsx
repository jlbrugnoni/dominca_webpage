import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DownloadIcon from '@mui/icons-material/Download';
import InstagramIcon from '@mui/icons-material/Instagram';
import { company, products } from '@/config/companyConfig';

export default function ContactForm() {
  return (
    <section id="contact" className="scroll-mt-24 bg-brand-white text-brand-ink font-gotham">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-green mb-4">Contacto</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-5">
              Listos para cotizar, coordinar muestras o conversar sobre tu aplicación.
            </h2>
            <p className="text-lg leading-relaxed text-brand-gray mb-8">
              Escríbenos para solicitar información comercial, coordinar muestras o conocer más sobre nuestras líneas de producto.
            </p>

            <div className="space-y-4">
              <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-md border border-brand-line p-4 hover:border-brand-green transition-colors">
                <WhatsAppIcon className="text-brand-green" />
                <span>
                  <span className="block text-sm text-brand-gray">WhatsApp</span>
                  <span className="font-bold text-brand-blue">{company.phone}</span>
                </span>
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-4 rounded-md border border-brand-line p-4 hover:border-brand-green transition-colors">
                <EmailIcon className="text-brand-green" />
                <span>
                  <span className="block text-sm text-brand-gray">Email</span>
                  <span className="font-bold text-brand-blue">{company.email}</span>
                </span>
              </a>
              <a href={company.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-md border border-brand-line p-4 hover:border-brand-green transition-colors">
                <InstagramIcon className="text-brand-green" />
                <span>
                  <span className="block text-sm text-brand-gray">Instagram</span>
                  <span className="font-bold text-brand-blue">@{company.instagram}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-md border border-brand-line p-4">
                <LocationOnIcon className="text-brand-green" />
                <span>
                  <span className="block text-sm text-brand-gray">{company.location}</span>
                  <span className="font-bold text-brand-blue">{company.address}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {products.map((product) => (
                <a
                  key={product.id}
                  href={`https://wa.me/${company.whatsapp}?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-brand-mist border border-brand-line p-5 hover:border-brand-green transition-colors"
                >
                  <span className="mb-4 block h-7 w-7 hexagon-mark" style={{ backgroundColor: product.accent }} aria-hidden="true" />
                  <h3 className="font-bold text-brand-blue mb-2">{product.name}</h3>
                  <p className="text-sm text-brand-gray">Solicitar información comercial o ficha técnica.</p>
                </a>
              ))}
            </div>

            <a
              href={company.catalogPath}
              download
              className="flex items-center justify-between gap-4 rounded-md bg-brand-blue p-5 text-brand-white hover:bg-brand-green hover:text-brand-blue transition-colors"
            >
              <span>
                <span className="block font-bold">Catálogo comercial</span>
                <span className="block text-sm opacity-80">Descargar catálogo 2026</span>
              </span>
              <DownloadIcon />
            </a>

            <div className="h-80 overflow-hidden rounded-md border border-brand-line bg-brand-mist">
              <iframe
                title={`Mapa de ${company.name}`}
                src={company.mapEmbedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
