import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { ArrowDown } from 'lucide-react';
import { projectsData } from '../data/projects';

gsap.registerPlugin(Observer);

// Generate gallery dynamically from projectsData
const GALERIA = Object.values(projectsData).map(project => ({
  img: project.heroImage,
  link: `/project/${project.id}`
}));

export default function InfiniteGridPortfolio() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const viewport = viewportRef.current;
    const gridContainer = gridRef.current;
    if (!viewport || !gridContainer) return;

    let items: { el: HTMLDivElement; initialX: number; initialY: number; columnIndex: number }[] = [];
    let cols = 0, rows = 0, fullWidth = 0, fullHeight = 0, tileW = 0, tileH = 0;
    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
    let animationFrameId: number;
    let resizeTimeout: NodeJS.Timeout;

    const updateSizes = () => {
      const isMobile = window.innerWidth <= 768;
      const itemW = isMobile ? 300 : 480;
      const itemH = isMobile ? 400 : 640;
      const gap = 5;
      tileW = itemW + gap;
      tileH = itemH + gap;
    };

    const initGrid = () => {
      updateSizes();
      gridContainer.innerHTML = "";
      items = [];

      cols = Math.ceil(window.innerWidth / tileW) + 2;
      if (cols % 2 !== 0) cols++; 
      rows = Math.ceil(window.innerHeight / tileH) + 2;
      
      fullWidth = cols * tileW;
      fullHeight = rows * tileH;

      for (let i = 0; i < cols * rows; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        
        const data = GALERIA[i % GALERIA.length];

        const item = document.createElement("div");
        item.className = "absolute overflow-hidden bg-obsidian group";
        item.style.width = `${tileW - 5}px`;
        item.style.height = `${tileH - 5}px`;
        
        const link = document.createElement("div");
        link.className = "block w-full h-full cursor-pointer";
        
        let clickStartX = 0;
        let clickStartY = 0;
        
        link.addEventListener('pointerdown', (e) => {
          clickStartX = e.clientX;
          clickStartY = e.clientY;
        });
        
        link.addEventListener('pointerup', (e) => {
          const diffX = Math.abs(e.clientX - clickStartX);
          const diffY = Math.abs(e.clientY - clickStartY);
          
          if (diffX < 5 && diffY < 5) {
            // Add a small click animation before navigating
            gsap.to(item, {
              scale: 0.95,
              duration: 0.2,
              onComplete: () => {
                navigate(data.link);
              }
            });
          }
        });

        const isVideo = data.img.match(/\.(mp4|webm|ogg)$/i);
        
        let mediaElement: HTMLImageElement | HTMLVideoElement;
        
        if (isVideo) {
          mediaElement = document.createElement("video");
          (mediaElement as HTMLVideoElement).src = data.img;
          (mediaElement as HTMLVideoElement).autoplay = true;
          (mediaElement as HTMLVideoElement).loop = true;
          (mediaElement as HTMLVideoElement).muted = true;
          (mediaElement as HTMLVideoElement).playsInline = true;
        } else {
          mediaElement = document.createElement("img");
          (mediaElement as HTMLImageElement).src = data.img;
          mediaElement.setAttribute('draggable', 'false');
        }

        mediaElement.className = "w-full h-full object-cover grayscale-[100%] brightness-90 contrast-125 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-110 group-hover:scale-105";
        
        const grain = document.createElement("div");
        grain.className = "absolute -top-full -left-full w-[300%] h-[300%] bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Resolution_Noise.jpg')] bg-[length:120px] opacity-85 mix-blend-multiply filter contrast-[350%] brightness-110 pointer-events-none z-10 animate-grain-frantic";
        
        link.appendChild(mediaElement);
        link.appendChild(grain);
        item.appendChild(link);
        gridContainer.appendChild(item);
        
        const startX = col * tileW;
        let startY = row * tileH;
        if (col % 2 !== 0) startY += tileH / 2;
        
        items.push({ el: item, initialX: startX, initialY: startY, columnIndex: col });
        gsap.set(item, { x: startX, y: startY });
      }
    };

    const getWrapX = () => gsap.utils.wrap(-tileW, fullWidth - tileW);
    const getWrapY = () => gsap.utils.wrap(-tileH, fullHeight - tileH);

    const render = () => {
      currentX += (targetX - currentX) * 0.07;
      currentY += (targetY - currentY) * 0.07;

      const wx = getWrapX();
      const wy = getWrapY();

      items.forEach(item => {
        const x = wx(item.initialX + currentX);
        let y = item.columnIndex % 2 === 0 
            ? wy(item.initialY + currentY) 
            : wy(item.initialY - currentY);
        gsap.set(item.el, { x, y });
      });
      animationFrameId = requestAnimationFrame(render);
    };

    const observer = Observer.create({
      target: window,
      type: "wheel,touch,pointer",
      onChange: (self) => {
        const multiplier = window.innerWidth < 768 ? 2.5 : 1.8;
        targetX += self.deltaX * multiplier;
        targetY += self.deltaY * multiplier;
      }
    });

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(initGrid, 300);
    };

    window.addEventListener("resize", handleResize);

    initGrid();
    animationFrameId = requestAnimationFrame(render);

    return () => {
      observer.kill();
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <section className="relative w-full h-screen bg-obsidian overflow-hidden select-none touch-none">
      <div 
        ref={viewportRef} 
        className="relative w-[100vw] h-[100vh] overflow-hidden cursor-grab active:cursor-grabbing"
      >
        <div ref={gridRef} className="absolute top-0 left-0 will-change-transform"></div>
        
        {/* Top Overlay */}
        <div className="absolute top-0 left-0 right-0 w-full h-[38vh] z-50 pointer-events-none backdrop-blur-[35px] [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_5px,rgba(255,255,255,0.05)_6px,transparent_7px)]"></div>
        </div>
        
        {/* Bottom Overlay */}
        <div className="absolute bottom-0 left-0 right-0 w-full h-[38vh] z-50 pointer-events-none backdrop-blur-[35px] scale-y-[-1] [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_5px,rgba(255,255,255,0.05)_6px,transparent_7px)]"></div>
        </div>

        {/* Scroll to Footer Arrow */}
        <button 
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          className="absolute bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-obsidian/50 text-silver backdrop-blur-md transition-all hover:bg-silver hover:text-obsidian"
          aria-label="Scroll to footer"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
