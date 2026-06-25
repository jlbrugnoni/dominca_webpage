import { useState, useEffect } from 'react';
import Link from 'next/link';
import { company } from '@/config/companyConfig';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';

const navItems = [
  { href: '#about', label: 'Nosotros' },
  { href: '#products', label: 'Productos' },
  { href: '#contact', label: 'Contacto' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const target = document.getElementById('hero');
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
        ${isScrolled ? 'bg-brand-white/95 py-2 shadow-md' : 'bg-brand-white/85 py-4'}
        text-brand-blue font-gotham backdrop-blur-md border-b border-brand-line/60
      `}
    >
      <nav className="w-full flex items-center justify-between px-4 sm:px-6 md:px-12 relative">
        <Link href="#hero" scroll={true} className="flex items-center gap-3 z-10">
          <img
            src={company.logoPath}
            alt={`${company.name} logo`}
            className={`object-contain transition-all duration-300 ${isScrolled ? 'h-10 sm:h-12' : 'h-12 sm:h-16'}`}
          />
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-green transition-colors">
              {item.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-brand-blue px-4 py-2 text-brand-white hover:bg-brand-green transition-colors"
          >
            <WhatsAppIcon fontSize="small" />
            Cotizar
          </a>
          <a
            href={company.catalogPath}
            download
            className="inline-flex items-center gap-2 rounded-md border border-brand-blue px-4 py-2 hover:border-brand-green hover:text-brand-green transition-colors"
          >
            <DownloadIcon fontSize="small" />
            Catalogo
          </a>
        </div>

        <div className="flex md:hidden z-50">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="h-10 w-10 rounded-md border border-brand-line flex items-center justify-center"
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <CloseIcon className="text-brand-blue" /> : <MenuIcon className="text-brand-blue" />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-white/95 backdrop-blur-md text-brand-blue px-6 py-4 space-y-4 shadow-md">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="block font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-blue px-4 py-3 text-brand-white"
            >
              <WhatsAppIcon fontSize="small" />
              Cotizar
            </a>
            <a
              href={company.catalogPath}
              download
              className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-blue px-4 py-3"
            >
              <DownloadIcon fontSize="small" />
              Catalogo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
