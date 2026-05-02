import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    // Hide default cursor on body
    document.body.style.cursor = 'none';

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power3.out',
      });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('.link-hover') || target.closest('.project-section')) {
        gsap.to(cursor, {
          scale: 4,
          opacity: 0.2,
          duration: 0.3,
        });
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('.link-hover') || target.closest('.project-section')) {
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="cursor"
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e4b504] mix-blend-difference hidden md:block"
      style={{ transition: 'transform 0.1s ease' }}
    />
  );
}
