'use client';

import React, { useState, useEffect, useRef } from 'react';
import { LayoutList, X } from 'lucide-react';
import { PROJECT_NAV_SECTIONS } from './ProjectDetailNav';

export const MobileNavFAB: React.FC = () => {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const t = setTimeout(() => document.addEventListener('mousedown', handler), 10);
    return () => {
      clearTimeout(t);
      document.removeEventListener('mousedown', handler);
    };
  }, [open]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* ── Pop-up card ───────────────────────────────────────────── */}
      <div
        ref={cardRef}
        className={`
          bg-white border border-[#e2e8f0] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]
          overflow-hidden min-w-[180px]
          transition-all duration-200 ease-out origin-bottom-right
          ${open
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
          }
        `}
        aria-hidden={!open}
      >
        {/* Card header */}
        <div className="px-4 pt-3 pb-2 border-b border-[#e2e8f0]">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#64748b]">
            Jump to
          </p>
        </div>

        {/* Section links */}
        <nav className="flex flex-col py-1.5" aria-label="Project sections">
          {PROJECT_NAV_SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-left px-4 py-2.5 text-sm font-medium text-[#0f172a] hover:bg-[#f8fafc] transition-colors duration-150 active:bg-[#f1f5f9]"
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* ── FAB button ────────────────────────────────────────────── */}
      <button
        id="mobile-nav-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close navigation' : 'Navigate sections'}
        aria-expanded={open}
        className={`
          w-[52px] h-[52px] rounded-full
          bg-[#0f172a] text-white
          shadow-[0_4px_20px_rgba(15,23,42,0.25)]
          flex items-center justify-center
          transition-all duration-200
          hover:scale-105 active:scale-95
          focus:outline-none
        `}
      >
        <div className={`transition-transform duration-200 ${open ? 'rotate-90' : 'rotate-0'}`}>
          {open ? <X className="w-5 h-5" /> : <LayoutList className="w-5 h-5" />}
        </div>
      </button>
    </div>
  );
};
