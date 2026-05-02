import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isWorkPage = location.pathname === '/work';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = isWorkPage || scrolled
    ? 'bg-obsidian/80 backdrop-blur-xl border-b border-white/10'
    : 'bg-transparent';
  
  const transitionClass = isWorkPage ? '' : 'transition-all duration-500';

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 z-[100] flex w-[90%] max-w-5xl -translate-x-1/2 items-center justify-between px-6 py-4 ${transitionClass} ${navClasses}`}
      >
        <Link to="/" className="text-xl font-bold tracking-widest text-silver">
          BOUNDLESS
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link to="/services" className="link-hover text-xs font-mono tracking-widest text-silver/80">
            // SERVIÇOS
          </Link>
          <Link to="/work" className="link-hover text-xs font-mono tracking-widest text-silver/80">
            // PORTFÓLIO
          </Link>
          <Link to="/pricing" className="link-hover text-xs font-mono tracking-widest text-silver/80">
            // PLANOS
          </Link>
        </div>
        <div className="flex items-center gap-4">
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
            className="hidden md:flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-silver hover:text-[#25D366] transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WHATSAPP</span>
          </a>
          <a 
            href="https://calendly.com/boundlessprompt/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block btn-magnetic rounded-none border border-silver bg-silver px-6 py-2 text-xs font-mono font-bold tracking-widest text-obsidian hover:bg-transparent hover:text-silver transition-colors"
          >
            <span className="relative z-10">AGENDAR CALL</span>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-none border border-white/10 bg-graphite text-silver transition-colors hover:bg-silver hover:text-obsidian"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[90] flex flex-col items-center justify-center bg-obsidian transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-bold uppercase tracking-widest text-silver hover:text-gray-dark transition-colors"
          >
            SERVIÇOS
          </Link>
          <Link
            to="/work"
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-bold uppercase tracking-widest text-silver hover:text-gray-dark transition-colors"
          >
            PORTFÓLIO
          </Link>
          <Link
            to="/pricing"
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-bold uppercase tracking-widest text-silver hover:text-gray-dark transition-colors"
          >
            PLANOS
          </Link>
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
            className="flex items-center gap-2 text-sm font-mono font-bold tracking-widest text-silver hover:text-[#25D366] transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span>WHATSAPP</span>
          </a>
          <a 
            href="https://calendly.com/boundlessprompt/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 rounded-none border border-silver bg-silver px-8 py-4 text-sm font-mono font-bold tracking-widest text-obsidian hover:bg-transparent hover:text-silver transition-colors"
          >
            AGENDAR CALL
          </a>
        </div>
      </div>
    </>
  );
}
