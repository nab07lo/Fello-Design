import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 'vellin-studio',
    title: 'VELLIN',
    category: 'PROJECT 01 / VISUAL DEV',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'aether-app',
    title: 'AETHER',
    category: 'PROJECT 02 / UI/UX DESIGN',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'nexus-campaign',
    title: 'NEXUS',
    category: 'PROJECT 03 / ART DIRECTION',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'lumina-brand',
    title: 'LUMINA',
    category: 'PROJECT 04 / IDENTITY',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2000&auto=format&fit=crop',
  },
];

export default function GhostPortfolio() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const sections = gsap.utils.toArray('.project-section') as HTMLElement[];

      if (!track || sections.length === 0) return;

      let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => '+=' + track.offsetWidth,
        },
      });

      sections.forEach((section) => {
        const title = section.querySelector('.project-title');
        
        if (title) {
          gsap.to(title, {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            scrollTrigger: {
              trigger: section,
              containerAnimation: scrollTween,
              start: 'left center',
              end: 'center center',
              scrub: true,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#080808] overflow-hidden h-screen w-full">
      <header className="absolute left-10 right-10 top-24 z-[100] flex justify-between font-sans text-[10px] font-bold uppercase tracking-[3px] text-[#e4b504]">
        <div>BOUNDLESS / ARCHIVE 2025</div>
        <div>STAY FOCUSED — [INDEX]</div>
      </header>

      <div id="track" ref={trackRef} className="flex h-screen" style={{ width: `${projects.length * 100}vw` }}>
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-section relative flex h-screen w-screen items-center justify-center overflow-hidden group"
          >
            <Link to={`/project/${project.id}`} className="absolute inset-0 z-10 cursor-none" />
            
            <div className="project-bg absolute z-[1] h-[70%] w-[60%] overflow-hidden border border-[#e4b504]/20 bg-[#111] transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) group-hover:h-[75%] group-hover:w-[65%]">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover brightness-50 grayscale transition-transform duration-[1.5s] ease-in-out group-hover:scale-110 group-hover:brightness-80 group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <h2 
              className="project-title pointer-events-none z-[2] text-center font-sans font-black uppercase leading-[0.75] tracking-[-0.05em] text-[#e4b504]"
              style={{ fontSize: '18vw', transform: 'scale(0.8)', opacity: 0, filter: 'blur(20px)' }}
            >
              {project.title}
            </h2>
            
            <div className="project-info absolute bottom-[10vh] left-[5vw] z-[2] font-mono text-xs uppercase text-[#e4b504]">
              {project.category}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
