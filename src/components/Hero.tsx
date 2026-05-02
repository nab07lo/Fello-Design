import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import MediaRenderer from './MediaRenderer';

const MEDIA = [
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1503376712341-f1f4d962d1fc?auto=format&fit=crop&q=80"
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentMedia, setCurrentMedia] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMedia((prev) => (prev + 1) % MEDIA.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 3.5 }); // Wait for preloader

      tl.from('.hero-title-line', {
        yPercent: 100,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out',
      })
      .from('.hero-fade', {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
      }, '-=0.8');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex h-[100dvh] w-full flex-col justify-end overflow-hidden pb-20 pt-32"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 bg-obsidian">
        {MEDIA.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              index === currentMedia ? 'opacity-40' : 'opacity-0'
            }`}
          >
            <MediaRenderer
              src={src}
              alt="Fashion AI"
              className="h-full w-full object-cover grayscale"
              style={{
                transform: index === currentMedia ? 'scale3d(1.1, 1.1, 1)' : 'scale3d(1, 1, 1)',
                transition: 'transform 10s linear',
              }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full flex-col px-6 md:px-12">
        <div className="mb-8 flex items-center gap-4 hero-fade">
          <div className="h-[1px] w-12 bg-silver"></div>
          <span className="font-mono text-xs tracking-[0.2em] text-silver/80 uppercase">
            // Fotografia de moda com IA
          </span>
        </div>

        <div className="flex flex-col">
          <div className="overflow-hidden">
            <h1 className="hero-title-line text-[10vw] md:text-[8vw] font-bold leading-[0.85] tracking-tighter text-silver uppercase">
              Imagens profissionais.
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-title-line text-[10vw] md:text-[8vw] font-bold leading-[0.85] tracking-tighter text-silver uppercase flex flex-wrap items-center gap-4">
              Sem ensaio. <span className="text-gray-dark italic font-serif font-normal">Sem espera.</span>
            </h1>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 hero-fade">
          <p className="max-w-xl font-mono text-sm leading-relaxed text-silver/70 uppercase">
            A Boundless cria campanhas fotográficas completas com modelos gerados por IA — moda infantil, juvenil e adulta — com entrega rápida e custo até 10x menor que um ensaio tradicional.
          </p>
          
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              const p1 = '5547';
              const p2 = '9140';
              const p3 = '5957';
              const msg = 'Olá! Vim pelo site e gostaria de iniciar um projeto com a Boundless.';
              window.open(`https://wa.me/${p1}${p2}${p3}?text=${encodeURIComponent(msg)}`, '_blank');
            }}
            className="btn-magnetic w-fit rounded-none border border-silver bg-transparent px-8 py-4 text-xs font-mono font-bold tracking-widest text-silver hover:bg-silver hover:text-obsidian transition-colors"
          >
            <span className="relative z-10">INICIAR PROJETO</span>
          </a>
        </div>
      </div>

      {/* Marquee Sponsors */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-obsidian py-3 overflow-hidden hero-fade">
        <div className="flex w-[200%] animate-marquee items-center gap-12 font-mono text-xs tracking-widest text-gray-dark uppercase">
          <span>BALENCIAGA</span>
          <span className="text-silver/30">/</span>
          <span>OFF-WHITE</span>
          <span className="text-silver/30">/</span>
          <span>ACNE STUDIOS</span>
          <span className="text-silver/30">/</span>
          <span>YEEZY</span>
          <span className="text-silver/30">/</span>
          <span>PRADA</span>
          <span className="text-silver/30">/</span>
          <span>BALENCIAGA</span>
          <span className="text-silver/30">/</span>
          <span>OFF-WHITE</span>
          <span className="text-silver/30">/</span>
          <span>ACNE STUDIOS</span>
          <span className="text-silver/30">/</span>
          <span>YEEZY</span>
          <span className="text-silver/30">/</span>
          <span>PRADA</span>
        </div>
      </div>
    </section>
  );
}
