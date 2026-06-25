import Link from 'next/link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import { company } from '@/config/companyConfig';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-mist text-brand-blue font-gotham">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <img src={company.logoPath} alt={`${company.name} logo`} className="h-16 w-auto object-contain" />
          <p className="mt-3 text-sm text-brand-gray">Carbonato de calcio y morteros secos</p>
        </div>

        <div className="text-center md:text-left">
          <p className="text-sm text-brand-gray mb-2">
            WhatsApp: {company.phone}
          </p>
          <p className="text-sm text-brand-gray">
            Email: {company.email}
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-blue hover:text-brand-green transition"
            title={`WhatsApp: ${company.phone}`}
          >
            <WhatsAppIcon fontSize="large" />
          </a>
          <a
            href={`mailto:${company.email}`}
            className="text-brand-blue hover:text-brand-green transition"
            title={`Email: ${company.email}`}
          >
            <EmailIcon fontSize="large" />
          </a>
          <a
            href={company.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-blue hover:text-brand-green transition"
            title={`Instagram: @${company.instagram}`}
          >
            <InstagramIcon fontSize="large" />
          </a>
        </div>
      </div>

      <div className="bg-brand-blue text-center py-4 text-sm text-brand-white/75">
        © {year} {company.name}. Todos los derechos reservados. |
        <Link href="#" className="hover:underline ml-1">Legal</Link> |
        <Link href="#" className="hover:underline ml-1">Privacidad</Link>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 rounded-full bg-brand-blue text-white hover:bg-brand-green hover:text-brand-blue transition"
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}
