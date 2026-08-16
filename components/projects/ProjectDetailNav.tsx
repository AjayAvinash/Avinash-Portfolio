'use client';

import React, { useEffect, useRef, useState } from 'react';

export type NavSection = {
  id: string;
  label: string;
};

export const PROJECT_NAV_SECTIONS: NavSection[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'approach', label: 'Approach' },
  { id: 'discovery', label: 'Discovery' },
  { id: 'what-i-did', label: 'What I Did' },
  { id: 'where-it-stands', label: 'Where it Stands' },
];

interface ProjectDetailNavProps {
  onSelect?: () => void;
}

export const ProjectDetailNav: React.FC<ProjectDetailNavProps> = ({ onSelect }) => {
  const [activeId, setActiveId] = useState<string>(PROJECT_NAV_SECTIONS[0].id);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = PROJECT_NAV_SECTIONS.map(({ id }) =>
      document.getElementById(id)
    ).filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    sections.forEach((el) => observerRef.current!.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
    onSelect?.();
  };

  return (
    <nav aria-label="Project sections" className="flex flex-col gap-0.5">
      {PROJECT_NAV_SECTIONS.map(({ id, label }) => {
        const isActive = activeId === id;
        return (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`
              relative text-left pl-4 pr-3 py-2 rounded-md text-sm transition-all duration-200
              ${isActive
                ? 'text-[#0f172a] font-medium bg-[#f1f5f9] shadow-xs'
                : 'text-[#64748b] font-normal hover:text-[#0f172a] hover:bg-[#f8fafc]'
              }
            `}
          >
            {isActive && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-full bg-[#0f172a]" aria-hidden />
            )}
            {label}
          </button>
        );
      })}
    </nav>
  );
};
