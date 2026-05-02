import React, { useState, useRef, useEffect } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const STORIES = [
  {
    id: 1,
    title: "LUMINA FW26",
    video: "https://cdn.coverr.co/videos/coverr-fashion-model-walking-2544/1080p.mp4",
  },
  {
    id: 2,
    title: "AETHER VISION",
    video: "https://cdn.coverr.co/videos/coverr-skateboarding-in-the-park-2544/1080p.mp4",
  },
  {
    id: 3,
    title: "NEXUS DYNAMICS",
    video: "https://cdn.coverr.co/videos/coverr-surfing-in-the-ocean-5244/1080p.mp4",
  },
  {
    id: 4,
    title: "VELLIN STUDIO",
    video: "https://cdn.coverr.co/videos/coverr-people-walking-in-the-city-2544/1080p.mp4",
  },
  {
    id: 5,
    title: "ECHOES",
    video: "https://cdn.coverr.co/videos/coverr-walking-in-a-city-4344/1080p.mp4",
  }
];

export default function VideoShowcase() {
  const [activeStory, setActiveStory] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle body scroll lock when modal is open
  useEffect(() => {
    if (activeStory !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeStory]);

  const nextStory = (e?: React.MouseEvent | Event) => {
    if (e && 'stopPropagation' in e) e.stopPropagation();
    if (activeStory !== null && activeStory < STORIES.length - 1) {
      setActiveStory(activeStory + 1);
    } else {
      setActiveStory(null); // Close if it's the last one
    }
  };

  const prevStory = (e?: React.MouseEvent | Event) => {
    if (e && 'stopPropagation' in e) e.stopPropagation();
    if (activeStory !== null && activeStory > 0) {
      setActiveStory(activeStory - 1);
    }
  };

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setTouchEnd(null);
    if ('targetTouches' in e) {
      setTouchStart(e.targetTouches[0].clientX);
    } else {
      setTouchStart((e as React.MouseEvent).clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if ('targetTouches' in e) {
      setTouchEnd(e.targetTouches[0].clientX);
    } else {
      setTouchEnd((e as React.MouseEvent).clientX);
    }
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextStory();
    }
    if (isRightSwipe) {
      prevStory();
    }
  };

  return (
    <section className="relative w-full bg-obsidian py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="font-sans text-5xl font-bold uppercase tracking-tighter text-silver md:text-7xl">
              VISÃO EM <span className="text-[#e4b504] italic font-serif font-normal">MOVIMENTO</span>
            </h2>
            <p className="mt-6 max-w-xl font-mono text-sm uppercase leading-relaxed tracking-widest text-silver/70">
              Nossa abordagem cinematográfica para contar histórias. Cada frame é meticulosamente planejado para capturar a essência e a atitude da sua marca.
            </p>
          </div>
        </div>

        {/* Stories Carousel */}
        <div 
          ref={scrollContainerRef}
          className="flex w-full gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {STORIES.map((story, index) => (
            <div 
              key={story.id}
              onClick={() => setActiveStory(index)}
              className="group relative h-[450px] w-[280px] md:h-[550px] md:w-[320px] flex-shrink-0 snap-center cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-graphite shadow-2xl transition-transform hover:scale-[1.02]"
            >
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="h-full w-full object-cover grayscale-[50%] contrast-125 transition-all duration-700 group-hover:grayscale-0"
              >
                <source src={story.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-obsidian/50 backdrop-blur-md">
                  <Play className="h-6 w-6 fill-silver text-silver" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-sans text-xl font-bold uppercase tracking-widest text-silver">{story.title}</h3>
                <p className="mt-2 font-mono text-xs text-[#e4b504]">ASSISTIR REEL</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Story Modal */}
      {activeStory !== null && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center bg-obsidian/95 backdrop-blur-xl"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEndHandler}
          onMouseDown={onTouchStart}
          onMouseMove={onTouchMove}
          onMouseUp={onTouchEndHandler}
        >
          <button 
            onClick={() => setActiveStory(null)}
            className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-graphite/50 text-silver hover:bg-silver hover:text-obsidian transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative flex h-full max-h-[90vh] w-full max-w-[400px] items-center justify-center px-4 md:px-0">
            {/* Prev Button */}
            <button 
              onClick={prevStory}
              className={`absolute -left-4 md:-left-16 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-graphite/50 text-silver hover:bg-silver hover:text-obsidian transition-colors ${activeStory === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Video Container */}
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
              <video 
                autoPlay 
                playsInline
                controls={false}
                className="h-full w-full object-cover"
                key={STORIES[activeStory].video} // Force reload when story changes
              >
                <source src={STORIES[activeStory].video} type="video/mp4" />
              </video>
              
              {/* Progress Bar (Fake for aesthetic) */}
              <div className="absolute top-4 left-4 right-4 flex gap-2 z-20">
                {STORIES.map((_, idx) => (
                  <div key={idx} className="h-1 flex-1 overflow-hidden rounded-full bg-white/30">
                    <div 
                      className={`h-full bg-white transition-all duration-300 ${idx === activeStory ? 'w-full' : idx < activeStory ? 'w-full' : 'w-0'}`}
                    ></div>
                  </div>
                ))}
              </div>

              <div className="absolute top-8 left-4 z-20">
                <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-silver drop-shadow-md">
                  {STORIES[activeStory].title}
                </h3>
              </div>
              
              {/* Invisible click areas for navigation */}
              <div className="absolute inset-y-0 left-0 w-1/3 cursor-pointer z-10" onClick={prevStory}></div>
              <div className="absolute inset-y-0 right-0 w-2/3 cursor-pointer z-10" onClick={nextStory}></div>
            </div>

            {/* Next Button */}
            <button 
              onClick={nextStory}
              className="absolute -right-4 md:-right-16 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-graphite/50 text-silver hover:bg-silver hover:text-obsidian transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
