'use client';

import React, { useEffect } from 'react';
import { BackgroundLayer } from '@/components/hero/BackgroundLayer';
import { Navigation } from '@/components/hero/Navigation';
import { HeroContent } from '@/components/hero/HeroContent';
import { ForegroundTreeSVG } from '@/components/hero/ForegroundTreeSVG';
import { UndergroundRoomSVG } from '@/components/hero/UndergroundRoomSVG';
import { initGsap, gsap } from '@/animations/gsap';

export const HeroSection: React.FC = () => {
  useEffect(() => {
    initGsap();

    const ctx = gsap.context(() => {

      // ── Hero Content Entrance ────────────────────────────────────────────
      gsap.fromTo(
        '.hero-identity-line',
        { autoAlpha: 0, y: -14 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo(
        '.hero-reveal-line',
        { yPercent: 120, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 1.1,
          stagger: 0.18,
          ease: 'power4.out',
          delay: 0.5,
        }
      );

      // ── Parallax Headline scroll (#hero-headline) ────────────────────────
      // The Staatliches headline slides down on scroll behind the tree layer.
      gsap.to('#hero-headline', {
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: '70% top',
          scrub: 1.2,
        },
        y: 620,
        scale: 0.85,
        ease: 'none',
      });

      // ── Tree gentle breathing ────────────────────────────────────────────
      gsap.to('#foreground-tree', {
        scaleY: 1.013,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        transformOrigin: 'bottom center',
      });

      // ── Cityscape subtle scroll parallax ────────────────────────────────
      ['#cityscape-left', '#cityscape-right'].forEach((id) => {
        gsap.to(id, {
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: '55% top',
            scrub: 2,
          },
          y: -50,
          ease: 'none',
        });
      });

    }, '#hero');

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex flex-col"
    >
      {/* ── Sky Container: Fixed 100vh ─────────────────────────────────── */}
      <div className="relative w-full h-[100vh] shrink-0">
        <BackgroundLayer />

        {/* ── z-10: Nav ──────────────────────────────────────────────────── */}
        <div className="relative z-10 w-full">
          <Navigation />
        </div>

        {/* ── z-10: Hero text content ────────────────────────────────────── */}
        <div className="relative z-10 w-full flex flex-col items-center px-4 pt-4 sm:pt-6">
          <HeroContent />
        </div>

        {/* ── z-[15]: Ground at the horizon ──────────────────────────────── */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[15] pointer-events-none select-none flex justify-center items-end">
          <img 
            src="/Ground.svg" 
            alt="Ground Horizon" 
            className="block max-w-none"
            style={{ width: '2000px', minWidth: '2000px' }}
          />
        </div>

        {/* ── z-20: Foreground Tree at the bottom center of the 100vh sky ── */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center items-end pointer-events-none select-none">
          <div id="foreground-tree" className="w-full flex justify-center items-end">
            <ForegroundTreeSVG />
          </div>
        </div>
      </div>

      {/* ── z-20: Underground Room: naturally follows below the 100vh sky ── */}
      <div className="relative z-20 w-full pointer-events-none select-none -mt-3">
        <UndergroundRoomSVG />
      </div>
    </section>
  );
};
