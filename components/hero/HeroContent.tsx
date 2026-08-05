'use client';

import React from 'react';
import { RoleSwitcher } from './RoleSwitcher';

export const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-6xl mx-auto px-4 pt-4 sm:pt-6">

      {/* ── Identity Line (Sedgwick Ave font) ────────────────────────── */}
      {/* "Avinash" in #FFEC81, "here -" in white, followed by RoleSwitcher */}
      <div className="font-sedgwick text-2xl sm:text-3xl md:text-4xl tracking-wide mb-6 sm:mb-8 flex items-center justify-center gap-2 flex-wrap drop-shadow-md">
        <span style={{ color: '#FFEC81' }}>Avinash</span>
        <span className="text-white">here -</span>
        <RoleSwitcher />
      </div>

      {/* ── Parallax Headline (Staatliches Google Font) ────────────────── */}
      {/* ONLY this element (#hero-headline) animates down on scroll!     */}
      <h1
        id="hero-headline"
        className="font-staatliches uppercase will-change-transform"
        style={{
          fontSize: 'clamp(3.2rem, 9.5vw, 9.5rem)',
          color: '#ffffff',
          letterSpacing: '-0.03em',
          lineHeight: '0.95',
          textShadow: '0 3px 10px rgba(22, 77, 128, 0.5)',
        }}
      >
        I Don't Just
        <br />
        Scratch The Surface
      </h1>

    </div>
  );
};
