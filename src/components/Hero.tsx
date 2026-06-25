import { useState, useEffect, useCallback } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { company, heroSlides } from '@/config/companyConfig';

const HERO_INTERVAL_MS = 6000;

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const currentSlide = heroSlides[currentIndex];

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index % heroSlides.length);
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused || heroSlides.length <= 1) return;
    const id = setInterval(next, HERO_INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      id="hero"
      className="h-screen min-h-[680px] flex items-center relative z-0 overflow-hidden bg-brand-blue text-brand-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {heroSlides.map((slide, index) => (
        <div
          key={slide.image}
          role="img"
          aria-hidden={index !== currentIndex}
          aria-label={slide.title}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out"
          style={{
            backgroundImage: `url('${slide.image}')`,
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-brand-blue via-brand-blue/78 to-brand-blue/20" />
      <div className="absolute inset-0 z-[3] hexagon-pattern opacity-40" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-24">
        <div className="max-w-3xl">
          <p className="text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-brand-lightGreen mb-5">
            {currentSlide.eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {currentSlide.title}
          </h1>
          <p className="text-lg sm:text-xl text-brand-white/88 leading-relaxed max-w-2xl mb-8">
            {currentSlide.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={company.catalogPath}
              download
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-green px-6 py-4 font-bold text-brand-blue hover:bg-brand-lightGreen transition-colors"
            >
              <DownloadIcon />
              Descargar catalogo
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-white/60 px-6 py-4 font-bold text-brand-white hover:border-brand-green hover:text-brand-lightGreen transition-colors"
            >
              Ver productos
              <ArrowForwardIcon />
            </a>
          </div>
        </div>
      </div>

      {heroSlides.length > 1 && (
        <div className="absolute bottom-8 left-6 sm:left-8 md:left-12 flex gap-2 z-10" aria-label="Carousel indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-10 bg-brand-green' : 'w-2 bg-white/60 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
