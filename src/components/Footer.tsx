import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-obsidian pt-32 pb-12 border-t border-white/10">
      {/* Marquee */}
      <div className="absolute top-10 left-0 w-full overflow-hidden whitespace-nowrap opacity-10">
        <div className="flex w-[200%] animate-marquee items-center gap-8 font-sans text-[15vw] font-bold uppercase leading-none tracking-tighter text-silver">
          <span>BOUNDLESS®</span>
          <span>—</span>
          <span>PORTFOLIO</span>
          <span>—</span>
          <span>BOUNDLESS®</span>
          <span>—</span>
          <span>PORTFOLIO</span>
          <span>—</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-32 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs tracking-widest text-gray-dark uppercase">
              // STATUS
            </span>
            <div className="flex items-center gap-3">
              <div className="relative flex h-3 w-3 items-center justify-center">
                <div className="absolute h-full w-full animate-ping rounded-full bg-silver opacity-20" />
                <div className="h-1.5 w-1.5 rounded-full bg-silver" />
              </div>
              <a 
                href="https://calendly.com/boundlessprompt/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-silver uppercase hover:text-gray-dark transition-colors underline underline-offset-4"
              >
                INICIAR UM PROJETO
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs tracking-widest text-gray-dark uppercase">
              // SOCIAL
            </span>
            <div className="flex flex-col gap-4">
              {[
                { name: 'Instagram', url: 'https://www.instagram.com/boundless.ia/' },
                { name: 'Behance', url: 'https://www.behance.net/boundless4' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/company/boundlessia/about' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 font-mono text-sm text-silver/70 transition-colors hover:text-silver uppercase"
                >
                  <ArrowRight className="h-4 w-4 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  <span className="-translate-x-6 transition-transform duration-300 group-hover:translate-x-0">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs tracking-widest text-gray-dark uppercase">
              // LEGAL
            </span>
            <div className="flex flex-col gap-4">
              {[
                { name: 'Política de Privacidade', path: '/privacy' },
                { name: 'Termos de Serviço', path: '/terms' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex items-center gap-2 font-mono text-sm text-silver/70 transition-colors hover:text-silver uppercase"
                >
                  <ArrowRight className="h-4 w-4 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  <span className="-translate-x-6 transition-transform duration-300 group-hover:translate-x-0">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs tracking-widest text-gray-dark uppercase">
              // CONTATO
            </span>
            <div className="flex gap-6">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const u = 'boundlessprompt';
                  const d = 'gmail.com';
                  window.location.href = `mailto:${u}@${d}`;
                }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-graphite text-silver transition-all hover:border-silver hover:bg-silver hover:text-obsidian"
                aria-label="Enviar E-mail"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const p1 = '5547';
                  const p2 = '9140';
                  const p3 = '5957';
                  const msg = 'Olá! Vim pelo site e gostaria de saber mais sobre os serviços da Boundless.';
                  window.open(`https://wa.me/${p1}${p2}${p3}?text=${encodeURIComponent(msg)}`, '_blank');
                }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-graphite text-[#25D366] transition-all hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
                aria-label="Chamar no WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-32 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <span className="font-mono text-[10px] tracking-widest text-gray-dark uppercase">
            © {new Date().getFullYear()} BOUNDLESS AI AGENCY. ALL RIGHTS RESERVED.
          </span>
          <span className="font-mono text-[10px] tracking-widest text-gray-dark uppercase">
            DESIGNED BY BOUNDLESS
          </span>
        </div>
      </div>
    </footer>
  );
}
