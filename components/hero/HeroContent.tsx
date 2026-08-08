'use client';

import React from 'react';
import { RoleSwitcher } from './RoleSwitcher';

export const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-6xl mx-auto px-4 pt-4 sm:pt-6">

      {/* ── Identity Line (Sedgwick Ave font) ────────────────────────── */}
      <div className="hero-identity-line font-sedgwick text-2xl sm:text-3xl md:text-4xl tracking-wide mb-6 sm:mb-8 flex items-center justify-center gap-2 flex-wrap drop-shadow-md">
        <span style={{ color: '#FFEC81' }}>Avinash</span>
        <span className="text-white">here -</span>
        <RoleSwitcher />
      </div>

      {/* ── Parallax Headline (Staatliches Google Font) ────────────────── */}
      <h1
        id="hero-headline"
        className="relative z-20 font-staatliches uppercase will-change-transform flex flex-col items-center justify-center"
        style={{
          fontSize: 'clamp(3.2rem, 4.5vw, 9.5rem)',
          color: '#ffffff',
          letterSpacing: '-0.03em',
          lineHeight: '0.80',
          textShadow: '0 3px 10px rgba(22, 77, 128, 0.5)',
        }}
      >
        {/* Line 1 Mask Container */}
        <div className="overflow-hidden py-1 sm:py-2">
          <span className="hero-reveal-line block will-change-transform">
            I Don&apos;t Just
          </span>
        </div>

        {/* Line 2 Mask Container */}
        <div className="overflow-hidden py-1 sm:py-2">
          <span className="hero-reveal-line block will-change-transform">
            Scratch The Surface
          </span>
        </div>
      </h1>

    </div>
  );
};
