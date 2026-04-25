import React, { useState } from 'react';
import { InfiniteGrid } from '../components/InfiniteGrid';

export function Home() {
  const [logoError, setLogoError] = useState(false);

  return (
    <main className="w-full h-screen overflow-hidden bg-[var(--bg-color)] relative">
      {/* Logo Overlay (Topo) */}
      <div className="absolute top-8 md:top-12 left-0 right-0 flex justify-center z-[60] pointer-events-none">
        <div className="flex items-center justify-center">
            {!logoError ? (
                <img 
                    src="/logo.png" 
                    alt="Fello Design" 
                    className="h-14 md:h-20 w-auto mix-blend-difference"
                    onError={() => setLogoError(true)}
                    draggable={false}
                />
            ) : (
                <div className="text-white font-display tracking-tighter mix-blend-difference flex items-baseline drop-shadow-2xl">
                    <span className="font-bold text-5xl md:text-6xl tracking-normal">fello</span>
                    <span className="text-[#FF5E00] text-5xl md:text-6xl font-bold ml-px">.</span>
                    <span className="font-medium text-4xl md:text-5xl ml-2 italic tracking-normal opacity-90">Design</span>
                </div>
            )}
        </div>
      </div>

      {/* Botão de Contato (Embaixo) */}
      <div className="absolute bottom-10 md:bottom-16 left-0 right-0 flex justify-center z-[60] pointer-events-none">
        <a 
          href="https://api.whatsapp.com/send/?phone=%2B55992758392&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto px-8 py-4 border border-[#333] bg-[#0A0A0A]/80 backdrop-blur-md text-[#F0F0F0] hover:text-[#FF5E00] hover:border-[#FF5E00] transition-all uppercase tracking-[0.2em] text-[10px] md:text-xs font-mono shadow-2xl"
        >
          Entre em contato
        </a>
      </div>

      <InfiniteGrid />
    </main>
  );
}
