import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 1,
            ease: 'power4.inOut',
            onComplete,
          });
        },
      });

      tl.to('.preloader-text', {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
      })
        .to('.preloader-text', {
          y: -100,
          duration: 1,
          stagger: 0.1,
          ease: 'power4.in',
          delay: 0.5,
        });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-obsidian text-silver"
    >
      <div className="flex flex-col items-center gap-4 overflow-hidden">
        {['BOUNDLESS', 'INTELLIGENCE', 'AESTHETICS'].map((word, i) => (
          <div key={i} className="overflow-hidden">
            <h1 className="preloader-text translate-y-full text-5xl font-bold tracking-tighter md:text-8xl">
              {word}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
