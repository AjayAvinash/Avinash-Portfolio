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

      // ── Parallax Headline ONLY (#hero-headline) ─────────────────────
      // ONLY the Staatliches headline ("I don't just Scratch the surface")
      // scrolls down behind the tree & ground (z-20) into underground room.
      // "Avinash here - [Role]" remains fixed at top!
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

      // ── Cloud Drift (idle) ────────────────────────────────────────
      gsap.to('.cloud-1', { x: 28,  duration: 18, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.cloud-2', { x: -22, duration: 23, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.cloud-3', { x: 14,  duration: 14, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.cloud-4', { x: 18,  duration: 20, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.cloud-5', { x: -16, duration: 17, repeat: -1, yoyo: true, ease: 'sine.inOut' });

      // ── Tree gentle breathing ─────────────────────────────────────
      gsap.to('#foreground-tree', {
        scaleY: 1.013,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        transformOrigin: 'bottom center',
      });

      // ── Cityscape subtle scroll parallax ─────────────────────────
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
      className="relative w-full overflow-hidden"
      style={{ minHeight: '170vh' }}
    >
      {/* ── z-0: Sky gradient + clouds + buildings ──────────────── */}
      <BackgroundLayer />

      {/* ── z-10: Nav (Max width 1920px) ────────────────────────── */}
      <div className="relative z-10 w-full">
        <Navigation />
      </div>

      {/* ── z-10: Identity + Parallax Headline Container ─────────── */}
      <div className="relative z-10 w-full flex flex-col items-center px-4 pt-4 sm:pt-6">
        <HeroContent />
      </div>

      {/* ── z-20: Foreground scene — Tree stacked above Ground ───── */}
      {/* Layout:  [tree div] sits naturally above [underground div]  */}
      {/*          They share a flex-col container pinned to bottom-0 */}
      {/*          z-20 ensures headline slides behind this layer.     */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col justify-end pointer-events-none select-none">

        {/* Tree — above ground in document flow */}
        <div
          id="foreground-tree"
          className="w-full flex justify-center items-end"
        >
          <ForegroundTreeSVG />
        </div>

        {/* Ground horizon + underground room                         */}
        {/* -mt-3 makes grass slightly overlap the tree trunk base   */}
        {/* z-10 within this container so grass renders over trunk   */}
        <div className="relative z-10 w-full -mt-3">
          <UndergroundRoomSVG />
        </div>
      </div>
    </section>
  );
};
