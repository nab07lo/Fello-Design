import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

gsap.registerPlugin(Observer);

export function InfiniteGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [gridSize, setGridSize] = useState({ cols: 0, rows: 0, tileW: 0, tileH: 0 });

  useEffect(() => {
    const updateSizes = () => {
      const style = getComputedStyle(document.documentElement);
      const tileW = parseInt(style.getPropertyValue('--item-w')) + parseInt(style.getPropertyValue('--gap'));
      const tileH = parseInt(style.getPropertyValue('--item-h')) + parseInt(style.getPropertyValue('--gap'));

      let cols = Math.ceil(window.innerWidth / tileW) + 2;
      if (cols % 2 !== 0) cols++; 
      const rows = Math.ceil(window.innerHeight / tileH) + 2;

      setGridSize({ cols, rows, tileW, tileH });
    };

    updateSizes();
    let timeoutId: number | undefined;
    
    const onResize = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(updateSizes, 300);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (gridSize.cols === 0) return;

    let requestRef: number;
    let observer: Observer;

    const { cols, rows, tileW, tileH } = gridSize;
    const fullWidth = cols * tileW;
    const fullHeight = rows * tileH;

    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;

    const getWrapX = () => gsap.utils.wrap(-tileW, fullWidth - tileW);
    const getWrapY = () => gsap.utils.wrap(-tileH, fullHeight - tileH);

    const itemsData = itemsRef.current.map((el, i) => {
      if (!el) return null;
      
      const col = i % cols;
      const row = Math.floor(i / cols);
      const startX = col * tileW;
      let startY = row * tileH;
      
      if (col % 2 !== 0) startY += tileH / 2;

      gsap.set(el, { x: startX, y: startY });
      return { el, initialX: startX, initialY: startY, columnIndex: col };
    }).filter(Boolean) as { el: HTMLDivElement, initialX: number, initialY: number, columnIndex: number }[];

    const render = () => {
      currentX += (targetX - currentX) * 0.07;
      currentY += (targetY - currentY) * 0.07;

      const wx = getWrapX();
      const wy = getWrapY();

      itemsData.forEach(item => {
        const x = wx(item.initialX + currentX);
        const y = item.columnIndex % 2 === 0
          ? wy(item.initialY + currentY)
          : wy(item.initialY - currentY);
          
        gsap.set(item.el, { x, y });
      });
      requestRef = requestAnimationFrame(render);
    };

    requestRef = requestAnimationFrame(render);

    observer = Observer.create({
      target: window,
      type: "wheel,touch,pointer",
      onChange: (self) => {
        const multiplier = window.innerWidth < 768 ? 2.5 : 1.8;
        targetX += self.deltaX * multiplier;
        targetY += self.deltaY * multiplier;
      }
    });

    return () => {
      cancelAnimationFrame(requestRef);
      if (observer) observer.kill();
    };
  }, [gridSize]);

  const totalItems = gridSize.cols * gridSize.rows;

  return (
    <div id="viewport">
      <div id="grid" ref={containerRef}>
        {totalItems > 0 && Array.from({ length: totalItems }).map((_, i) => {
          const data = projects[i % projects.length];
          return (
            <div
              key={`grid-item-${i}`}
              className="grid-item"
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
            >
              <Link to={`/project/${data.id}`} draggable={false} onDragStart={(e) => e.preventDefault()}>
                <img src={data.coverImage} alt={data.title} draggable={false} onDragStart={(e) => e.preventDefault()} />
                <div className="grain-overlay"></div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="overlay top-overlay"></div>
      <div className="overlay bottom-overlay"></div>
    </div>
  );
}
