import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as Accordion from '@radix-ui/react-accordion';
import { Plus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    id: '01',
    title: 'ENTREGA EXPRESSA',
    focus: 'HORAS, NÃO SEMANAS',
    desc: 'Suas imagens entregues em horas, não semanas. Ideal para lançamentos e campanhas de última hora.'
  },
  {
    id: '02',
    title: 'CUSTO MUITO MENOR',
    focus: 'ATÉ 10X MAIS BARATO',
    desc: 'Até 10x mais barato que um ensaio fotográfico tradicional. Sem custos de produção, locação ou equipe.'
  },
  {
    id: '03',
    title: 'VARIEDADE ILIMITADA',
    focus: 'PERFIS E ESTILOS',
    desc: 'Modelos de diferentes perfis, estilos, idades e corpos. Moda infantil, juvenil e adulta em um único lugar.'
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-header', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.accordion-item', {
        scrollTrigger: {
          trigger: '.accordion-root',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
      
      gsap.from('.category-pill', {
        scrollTrigger: {
          trigger: '.categories-container',
          start: 'top 80%',
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'back.out(1.5)',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    'Lookbook', 'Still de produto', 'Imagem conceito', 
    'Campanha sazonal', 'Moda infantil', 'Moda adulta', 'E-commerce'
  ];

  return (
    <section id="servicos" ref={containerRef} className="relative z-10 bg-obsidian py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8 service-header">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gray-dark mb-4">// A NOVA ERA DA FOTOGRAFIA DE MODA</h2>
            <h3 className="font-sans text-5xl font-bold uppercase tracking-tighter text-silver md:text-7xl">VANTAGENS</h3>
          </div>
          <p className="max-w-xs font-mono text-xs leading-relaxed text-silver/50 uppercase">
            Esqueça agendamentos, locações e cachês. Com a Boundless, sua marca tem imagens prontas para vender — no prazo que você precisa.
          </p>
        </div>

        <Accordion.Root className="accordion-root flex flex-col w-full mb-32" type="single" defaultValue="01" collapsible>
          {SERVICES.map((service) => (
            <Accordion.Item
              key={service.id}
              value={service.id}
              className="accordion-item group border-b border-white/10 overflow-hidden"
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger className="flex flex-1 items-center justify-between py-8 text-left transition-colors hover:bg-white/[0.02] [&[data-state=open]>div>svg]:rotate-45 [&[data-state=open]>div>span]:text-silver">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                    <span className="font-mono text-sm text-gray-dark transition-colors group-hover:text-silver">
                      {service.id}
                    </span>
                    <span className="font-sans text-2xl md:text-4xl font-bold uppercase tracking-tighter text-silver">
                      {service.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="hidden md:block font-mono text-xs text-gray-dark uppercase tracking-widest transition-colors">
                      {service.focus}
                    </span>
                    <Plus className="h-6 w-6 text-gray-dark transition-transform duration-500 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-hover:text-silver" />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-silver/70 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="pb-8 pt-2 md:pl-20">
                  <p className="max-w-2xl font-mono text-sm leading-relaxed uppercase">
                    {service.desc}
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-[1px] w-8 bg-gray-dark" />
                    <span className="font-mono text-[10px] tracking-widest text-gray-dark uppercase">
                      VANTAGEM EXCLUSIVA
                    </span>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <div className="categories-container border-t border-white/10 pt-20">
          <div className="mb-12 text-center">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gray-dark mb-4">// O QUE FAZEMOS</h2>
            <h3 className="font-sans text-4xl font-bold uppercase tracking-tighter text-silver md:text-5xl">CATEGORIAS ATENDIDAS</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="category-pill rounded-full border border-white/10 bg-graphite px-6 py-3 font-mono text-sm uppercase tracking-widest text-silver hover:bg-silver hover:text-obsidian transition-colors cursor-default"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
