import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.workflow-card') as HTMLElement[];
      
      cards.forEach((card, i) => {
        if (i > 0) {
          gsap.to(cards[i - 1], {
            scale: 0.95,
            opacity: 0.5,
            filter: 'blur(10px)',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-obsidian pb-32">
      <div className="mx-auto max-w-7xl px-6 pt-32">
        <h2 className="mb-20 text-center font-sans text-5xl font-bold uppercase tracking-tighter text-silver md:text-7xl">
          COMO FUNCIONA: <span className="text-[#e4b504] italic font-serif font-normal">SIMPLES</span> DO INÍCIO AO FIM
        </h2>
        
        <div className="relative flex flex-col gap-0">
          <WorkflowCard
            step="01"
            title="ENVIE AS PEÇAS"
            subtitle="BRIEFING E REFERÊNCIAS"
            desc="Você envia as fotos das peças e nos conta o estilo de imagem que deseja — lookbook, still, campanha conceito ou e-commerce."
            img="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop"
            zIndex={10}
          />
          <WorkflowCard
            step="02"
            title="ESCOLHA O PERFIL"
            subtitle="MODELOS EXCLUSIVOS"
            desc="Defina o estilo, faixa etária, tom de pele e o mood da campanha. Nossa IA gera modelos exclusivos para a sua marca."
            img="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2000&auto=format&fit=crop"
            zIndex={20}
          />
          <WorkflowCard
            step="03"
            title="RECEBA AS IMAGENS"
            subtitle="ALTA RESOLUÇÃO"
            desc="Em poucas horas, você recebe as imagens em alta resolução, prontas para usar em e-commerce, redes sociais ou catálogo."
            img="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop"
            zIndex={30}
          />
          <WorkflowCard
            step="04"
            title="SOLICITE AJUSTES"
            subtitle="CONTROLE TOTAL"
            desc="Não gostou de algo? Use seus créditos para refinar ou refazer. Você tem controle total sobre o resultado final."
            img="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop"
            zIndex={40}
          />
        </div>
      </div>
    </section>
  );
}

interface WorkflowCardProps {
  step: string;
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  zIndex: number;
}

function WorkflowCard({ step, title, subtitle, desc, img, zIndex }: WorkflowCardProps) {
  return (
    <div
      className="workflow-card sticky top-0 flex h-screen w-full items-center justify-center bg-obsidian origin-top"
      style={{ zIndex }}
    >
      <div className="flex h-screen w-full flex-col overflow-hidden rounded-none bg-graphite md:flex-row shadow-2xl shadow-obsidian">
        <div className="flex flex-1 flex-col justify-center p-12 md:p-20">
          <span className="font-mono text-6xl font-bold text-gray-dark/30 md:text-8xl">{step}</span>
          <h3 className="mt-4 font-sans text-4xl font-bold uppercase tracking-tighter text-silver md:text-5xl">{title}</h3>
          <h4 className="mt-2 font-mono text-sm uppercase tracking-widest text-gray-dark">{subtitle}</h4>
          <p className="mt-8 max-w-md font-mono text-sm leading-relaxed text-silver/70 uppercase">
            {desc}
          </p>
        </div>
        <div className="relative flex-1">
          <img
            src={img}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-graphite" />
        </div>
      </div>
    </div>
  );
}
