import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { Plus } from 'lucide-react';

const tabs = ['FOTOGRAFIA', 'MODELO IA', 'MOTION VÍDEO'];

const plansData = {
  'FOTOGRAFIA': [
    { name: 'ENTRADA', price: 'R$ 1.500', subtitle: '80 fotos (R$ 18,75/img)', features: ['Still de produto', 'Lookbook', 'Conceito / editorial', 'Sem desconto'], highlight: false, msg: 'Olá! Gostaria de contratar o pacote Entrada de Fotografia (80 fotos).' },
    { name: 'INTERMEDIÁRIO', price: 'R$ 2.000', subtitle: '120 fotos (R$ 16,66/img)', features: ['Still de produto', 'Lookbook', 'Conceito / editorial', '11% de desconto'], highlight: true, msg: 'Olá! Gostaria de contratar o pacote Intermediário de Fotografia (120 fotos).' },
    { name: 'AVANÇADO', price: 'R$ 2.400', subtitle: '160 fotos (R$ 15,00/img)', features: ['Still de produto', 'Lookbook', 'Conceito / editorial', '20% de desconto'], highlight: false, msg: 'Olá! Gostaria de contratar o pacote Avançado de Fotografia (160 fotos).' },
    { name: 'VOLUME', price: 'R$ 2.700', subtitle: '200 fotos (R$ 13,50/img)', features: ['Still de produto', 'Lookbook', 'Conceito / editorial', '28% de desconto'], highlight: false, msg: 'Olá! Gostaria de contratar o pacote Volume de Fotografia (200 fotos).' },
  ],
  'MODELO IA': [
    { name: 'MODELO EXCLUSIVO', price: 'R$ 1.200', subtitle: 'Valor único por perfil', features: ['Qualquer perfil (Infantil a 50+)', 'Criação de rosto, corpo e expressões', 'Consistência de identidade', 'Até 3 variações de pose base', 'Uso exclusivo para a marca', '2 revisões inclusas'], highlight: true, msg: 'Olá! Gostaria de criar um Modelo IA exclusivo para minha marca.' }
  ],
  'MOTION VÍDEO': [
    { name: 'LOOKBOOK', price: 'R$ 80', subtitle: '15 seg / vídeo', features: ['Serviço adicional', 'Formato fixo (sem escolha)', 'Apenas estilo Lookbook'], highlight: false, msg: 'Olá! Gostaria de adicionar o serviço de Vídeo Lookbook (15s).' },
    { name: 'ENTRADA', price: 'R$ 1.500', subtitle: '30 seg (R$ 50/seg)', features: ['1 vídeo de 30s ou 2 de 15s', 'Vídeo e-commerce', 'Vídeo comercial', 'Vídeo conceito'], highlight: false, msg: 'Olá! Gostaria de contratar o pacote Entrada de Vídeo (30s).' },
    { name: 'INTERMEDIÁRIO', price: 'R$ 2.500', subtitle: '60 seg (R$ 41,66/seg)', features: ['1 vídeo de 60s ou 4 de 15s', '17% de desconto', 'Vídeo e-commerce', 'Vídeo comercial'], highlight: true, msg: 'Olá! Gostaria de contratar o pacote Intermediário de Vídeo (60s).' },
    { name: 'AVANÇADO', price: 'R$ 4.000', subtitle: '120 seg (R$ 33,33/seg)', features: ['1 vídeo de 2min ou vários curtos', '33% de desconto', 'Vídeo e-commerce', 'Vídeo comercial'], highlight: false, msg: 'Olá! Gostaria de contratar o pacote Avançado de Vídeo (120s).' },
    { name: 'VOLUME', price: 'R$ 6.000', subtitle: '240 seg (R$ 25/seg)', features: ['Campanha completa', 'Múltiplos vídeos', '50% de desconto', 'Vídeo conceito'], highlight: false, msg: 'Olá! Gostaria de contratar o pacote Volume de Vídeo (240s).' },
  ],
};

const ticketMedio = [
  { composition: 'Modelo + Foto (80 imgs)', ticket: 'R$ 2.700' },
  { composition: 'Modelo + Foto (120 imgs) + Vídeo (60 seg)', ticket: 'R$ 4.700' },
  { composition: 'Modelo + Foto (200 imgs) + Vídeo (120 seg)', ticket: 'R$ 8.900' },
];

const faqs = [
  {
    question: 'Como funciona o processo de pedido?',
    answer: '1. Briefing: Coleta de informações e referências.\n2. Alinhamento: Confirmação de perfil e conceito visual.\n3. Geração: Produção com curadoria da equipe.\n4. Entrega: Arquivos em alta resolução via painel/link.\n5. Revisão: Até 2 rodadas de ajustes com base no feedback.\n6. Entrega Final: Arquivos prontos para uso.'
  },
  {
    question: 'Qual é o prazo de entrega?',
    answer: 'Entregamos de 24 a 48 horas após a confirmação do briefing.'
  },
  {
    question: 'Quantas revisões estão inclusas?',
    answer: 'Oferecemos 2 rodadas de revisões inclusas em todos os produtos.'
  },
  {
    question: 'De quem são os direitos das imagens?',
    answer: 'Os direitos são 100% transferidos ao cliente após a entrega final.'
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer: 'Aceitamos PIX, boleto ou cartão de crédito em até 12x.'
  },
  {
    question: 'Posso cancelar o pedido?',
    answer: 'O cancelamento pode ser feito sem multa antes do início da produção.'
  }
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="planos" className="relative bg-obsidian py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gray-dark mb-4">// O SISTEMA DE PLANOS</h2>
          <h3 className="font-sans text-5xl font-bold uppercase tracking-tighter text-silver md:text-7xl">TABELA DE PREÇOS</h3>
        </div>

        {/* Tabs */}
        <div className="mb-16 flex justify-center">
          <div className="flex flex-wrap justify-center rounded-none border border-white/10 bg-graphite p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-none px-4 md:px-8 py-3 font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-silver text-obsidian'
                    : 'text-silver/50 hover:text-silver'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className={`grid grid-cols-1 gap-6 mb-32 ${
          plansData[activeTab as keyof typeof plansData].length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' :
          plansData[activeTab as keyof typeof plansData].length === 5 ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5' :
          'md:grid-cols-1 max-w-md mx-auto'
        }`}>
          {plansData[activeTab as keyof typeof plansData].map((plan, i) => (
            <div
              key={i}
              className={`relative flex w-full flex-col justify-between rounded-none border bg-graphite p-8 transition-all duration-500 hover:-translate-y-2 ${
                plan.highlight
                  ? 'border-silver shadow-[0_0_30px_rgba(255,255,255,0.05)]'
                  : 'border-white/5'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-none bg-silver px-4 py-1 font-mono text-[10px] font-bold text-obsidian whitespace-nowrap">
                  RECOMENDADO
                </div>
              )}
              <div>
                <h4 className="font-sans text-2xl font-bold uppercase text-silver">{plan.name}</h4>
                <div className="mt-6 flex flex-col gap-1">
                  <span className="font-sans text-5xl font-bold tracking-tighter text-silver">{plan.price}</span>
                  <span className="font-mono text-xs text-silver/50 uppercase">{plan.subtitle}</span>
                </div>
                <ul className="mt-10 flex flex-col gap-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 font-mono text-sm text-silver/80 uppercase">
                      <div className="mt-1.5 h-1 w-1 shrink-0 rounded-none bg-silver" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const p1 = '5547';
                  const p2 = '9140';
                  const p3 = '5957';
                  window.open(`https://wa.me/${p1}${p2}${p3}?text=${encodeURIComponent(plan.msg)}`, '_blank');
                }}
                className={`btn-magnetic mt-12 w-full flex justify-center items-center rounded-none border py-4 font-mono text-xs font-bold tracking-widest transition-colors ${
                  plan.highlight
                    ? 'border-silver bg-silver text-obsidian hover:bg-transparent hover:text-silver'
                    : 'border-white/20 bg-transparent text-silver hover:border-silver hover:text-silver'
                }`}
              >
                <span className="relative z-10">SELECIONAR PLANO</span>
              </a>
            </div>
          ))}
        </div>

        {/* Combos */}
        <div className="mx-auto max-w-4xl mb-32">
          <div className="mb-12 text-center">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gray-dark mb-4">// PACOTES COMBINADOS</h2>
            <h3 className="font-sans text-3xl font-bold uppercase tracking-tighter text-silver md:text-4xl">EXEMPLOS DE COMBOS</h3>
          </div>
          <div className="flex flex-col gap-4">
            {ticketMedio.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border border-white/10 bg-graphite p-6 transition-colors hover:border-white/20">
                <span className="font-mono text-sm text-silver/80 uppercase">{item.composition}</span>
                <span className="font-sans text-2xl font-bold text-silver whitespace-nowrap">{item.ticket}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ / Condições Section */}
        <div className="mx-auto max-w-4xl mb-32">
          <div className="mb-12 text-center">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gray-dark mb-4">// INFORMAÇÕES IMPORTANTES</h2>
            <h3 className="font-sans text-4xl font-bold uppercase tracking-tighter text-silver md:text-5xl">CONDIÇÕES E PROCESSO</h3>
          </div>
          
          <Accordion.Root className="flex flex-col w-full" type="single" collapsible>
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`faq-${index}`}
                className="group border-b border-white/10 overflow-hidden"
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="flex flex-1 items-center justify-between py-6 text-left transition-colors hover:bg-white/[0.02] [&[data-state=open]>div>svg]:rotate-45 [&[data-state=open]>span]:text-silver">
                    <span className="font-sans text-xl md:text-2xl font-bold uppercase tracking-tighter text-silver/80 transition-colors group-hover:text-silver">
                      {faq.question}
                    </span>
                    <div className="flex items-center justify-center h-8 w-8 shrink-0 rounded-full border border-white/10 bg-graphite group-hover:border-silver/30 transition-colors">
                      <Plus className="h-4 w-4 text-gray-dark transition-transform duration-500 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-hover:text-silver" />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-silver/70 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="pb-8 pt-2 pr-12">
                    <p className="font-mono text-sm leading-relaxed uppercase whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>

        {/* Final Call to Action */}
        <div className="relative overflow-hidden border border-white/10 bg-graphite p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-obsidian/50" />
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gray-dark mb-6">// PRONTO PARA TRANSFORMAR SUA CAMPANHA?</h2>
            <h3 className="font-sans text-4xl md:text-6xl font-bold uppercase tracking-tighter text-silver mb-8 max-w-3xl">
              SUA PRÓXIMA CAMPANHA COMEÇA <span className="text-[#e4b504] italic font-serif font-normal">HOJE</span>
            </h3>
            <p className="max-w-2xl font-mono text-sm leading-relaxed text-silver/70 uppercase mb-12">
              Junte-se às marcas que já deixaram de depender de ensaios caros e demorados.
            </p>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                const p1 = '5547';
                const p2 = '9140';
                const p3 = '5957';
                const msg = 'Olá! Vim pelo site e gostaria de falar com um especialista da Boundless.';
                window.open(`https://wa.me/${p1}${p2}${p3}?text=${encodeURIComponent(msg)}`, '_blank');
              }}
              className="btn-magnetic rounded-none border border-silver bg-silver px-10 py-5 text-sm font-mono font-bold tracking-widest text-obsidian hover:bg-transparent hover:text-silver transition-colors"
            >
              <span className="relative z-10">FALAR COM ESPECIALISTA</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
