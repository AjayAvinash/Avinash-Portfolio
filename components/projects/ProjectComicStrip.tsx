'use client';

import React, { useRef, useState, useCallback } from 'react';

interface ProjectComicStripProps {
  images: [string, string, string];
  captions?: [string, string, string];
  title?: string;
}

export const ProjectComicStrip: React.FC<ProjectComicStripProps> = ({
  images,
  captions,
  title,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const panels = scrollRef.current.querySelectorAll('[data-panel]');
    panels[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    setActiveSlide(index);
  }, []);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const idx = Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth);
    setActiveSlide(idx);
  }, []);

  const defaultCaptions: [string, string, string] = [
    'The challenge emerged',
    'Exploring possibilities',
    'The solution unfolds',
  ];
  const panelCaptions = captions ?? defaultCaptions;

  return (
    <div className="relative w-full bg-[#f8fafc] overflow-hidden">

      {/* ── Desktop: 3-panel grid ─────────────────────────────────── */}
      <div className="hidden md:grid md:grid-cols-3 border-b-4 border-[#e2e8f0]">
        {images.map((src, i) => (
          <div
            key={i}
            className={`relative flex flex-col ${i < 2 ? 'border-r-4 border-[#e2e8f0]' : ''}`}
          >
            {/* Panel image area */}
            <div className="relative aspect-[4/3] bg-[#f1f5f9] overflow-hidden flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={panelCaptions[i]}
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              {/* Fallback panel number */}
              <span className="absolute font-staatliches text-[7rem] leading-none text-[#cbd5e1] select-none pointer-events-none">
                {i + 1}
              </span>
              {/* Panel badge */}
              <span className="absolute top-3 left-3 w-6 h-6 rounded-full bg-white border border-[#cbd5e1] flex items-center justify-center font-staatliches text-xs text-[#64748b] z-10 shadow-xs">
                {i + 1}
              </span>
            </div>

            {/* Caption */}
            <div className="px-4 py-3 border-t-2 border-[#e2e8f0] bg-[#f8fafc] min-h-[52px] flex items-center">
              <p className="font-sans text-xs text-[#475569] leading-snug">{panelCaptions[i]}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Mobile: scroll-snap carousel ─────────────────────────── */}
      <div className="md:hidden border-b-4 border-[#e2e8f0]">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {images.map((src, i) => (
            <div
              key={i}
              data-panel={i}
              className="flex-none w-full snap-center flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-[#f1f5f9] overflow-hidden flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={panelCaptions[i]}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <span className="absolute font-staatliches text-[8rem] leading-none text-[#cbd5e1] select-none pointer-events-none">
                  {i + 1}
                </span>
                <span className="absolute top-3 left-3 w-6 h-6 rounded-full bg-white border border-[#cbd5e1] flex items-center justify-center font-staatliches text-xs text-[#64748b] z-10 shadow-xs">
                  {i + 1}
                </span>
              </div>
              <div className="px-4 py-3 border-t-2 border-[#e2e8f0] bg-[#f8fafc] min-h-[52px] flex items-center">
                <p className="font-sans text-xs text-[#475569] leading-snug">{panelCaptions[i]}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel dots */}
        <div className="flex items-center justify-center gap-2 py-3 bg-[#f8fafc] border-t border-[#e2e8f0]">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to panel ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${
                activeSlide === i
                  ? 'w-5 h-2 bg-[#0f172a]'
                  : 'w-2 h-2 bg-[#cbd5e1] hover:bg-[#94a3b8]'
              }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
};
