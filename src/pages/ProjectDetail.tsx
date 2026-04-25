import React, { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import gsap from 'gsap';
import { ArrowLeft } from 'lucide-react';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!heroRef.current || !titleRef.current || !contentRef.current || !galleryRef.current) return;

    const tl = gsap.timeline();
    
    tl.fromTo(heroRef.current, 
      { filter: 'blur(10px)', scale: 1.05 }, 
      { filter: 'blur(0px)', scale: 1, duration: 1.5, ease: "power3.out" }
    )
    .fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=1"
    )
    .fromTo(contentRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo(galleryRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
      "-=0.4"
    );

  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] text-[#F0F0F0] flex flex-col justify-center items-center font-mono">
        <h1 className="tracking-tighter text-6xl mb-4 text-[#FF5E00]">404</h1>
        <p className="text-[#666] mb-8 uppercase tracking-widest">Projeto não encontrado.</p>
        <button onClick={() => navigate('/')} className="px-8 py-4 border border-[#333] hover:border-[#FF5E00] hover:text-[#FF5E00] transition-colors uppercase tracking-[0.2em] text-xs">
          Voltar ao Início
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#F0F0F0] selection:bg-[#FF5E00] selection:text-black font-sans relative">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 pointer-events-none mix-blend-difference">
        <Link 
          to="/" 
          className="pointer-events-auto inline-flex items-center gap-3 text-white hover:text-[#FF5E00] transition-colors font-mono text-[11px] uppercase tracking-[0.2em]"
        >
          <ArrowLeft size={16} />
          Voltar
        </Link>
      </nav>

      {/* Hero Cover */}
      <header className="relative w-full h-[80vh] flex flex-col justify-end p-6 md:p-10 overflow-hidden">
        <div 
          ref={heroRef}
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${project.coverImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
        <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Resolution_Noise.jpg')] animate-grain-frantic" />
        
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-[#FF5E00] rounded-full animate-pulse"></div>
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#CCC]">
              {project.category}
            </span>
          </div>
          <h1 ref={titleRef} className="font-display font-bold text-6xl md:text-[8vw] tracking-tighter uppercase leading-[0.9] text-white break-words">
            {project.title}
          </h1>
        </div>
      </header>

      {/* Content & Metadata Split */}
      <main className="w-full max-w-screen-2xl mx-auto border-t border-[#222] flex flex-col md:flex-row relative z-10">
        
        {/* Left Column - Metadata */}
        <div ref={contentRef} className="w-full md:w-1/3 p-6 md:p-10 border-b md:border-b-0 md:border-r border-[#222] flex flex-col gap-12">
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#666] font-mono mb-4">O Briefing</h3>
            <p className="font-sans text-base md:text-xl text-[#CCC] leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#666] mb-2 font-mono">Papel</p>
              <p className="font-sans text-sm uppercase tracking-wider text-[#F0F0F0]">{project.role}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#666] mb-2 font-mono">Ano</p>
              <p className="font-sans text-sm uppercase tracking-wider text-[#F0F0F0]">{project.year}</p>
            </div>
          </div>
        </div>

        {/* Right Column - Full Description */}
        <div className="w-full md:w-2/3 p-6 md:p-10 md:pl-16 flex items-center bg-[#0A0A0A]">
          <p className="font-sans text-2xl md:text-4xl text-[#888] font-light leading-snug tracking-tight">
            {project.fullDescription}
          </p>
        </div>
      </main>

      {/* Gallery Section */}
      <section className="w-full max-w-screen-2xl mx-auto p-6 md:p-10 pb-32">
        <div className="flex items-center gap-4 mb-10 md:mb-16">
          <div className="h-px bg-[#222] w-12"></div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#666] font-mono">Galeria do Projeto</span>
          <div className="h-px bg-[#222] flex-1"></div>
        </div>

        <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {project.gallery.map((imgUrl, index) => {
            // Asymmetric modern grid: every 3rd image spans full width
            const isFullWidth = index % 3 === 0;
            
            return (
              <div 
                key={index} 
                className={`w-full overflow-hidden bg-[#111] group relative ${isFullWidth ? 'md:col-span-2' : 'col-span-1'}`}
              >
                <div className="absolute inset-0 bg-[#FF5E00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
                <img 
                  src={imgUrl} 
                  alt={`${project.title} - Imagem ${index + 1}`} 
                  className="w-full h-auto object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
