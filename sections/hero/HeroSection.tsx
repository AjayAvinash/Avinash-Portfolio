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

      // ── Hero Content Entrance (on site reload) ──────────────────────────
      gsap.fromTo(
        '.hero-identity-line',
        { autoAlpha: 0, y: -24 },
        { autoAlpha: 1, y: 0, duration: 1.0, ease: 'power3.out', delay: 0.2 }
      );

      gsap.fromTo(
        '.hero-reveal-line',
        { yPercent: 120, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 1.2,
          stagger: 0.18,
          ease: 'power4.out',
          delay: 0.45,
        }
      );

      // ── Parallax Headline scroll (#hero-headline) ────────────────────────
      const getHeadlineRestingOffset = () => {
        const headline = document.querySelector<HTMLElement>('#hero-headline');
        const floor = document.querySelector<HTMLElement>('#underground-floor');

        if (!headline || !floor) return 0;

        return Math.max(
          0,
          floor.getBoundingClientRect().top - headline.getBoundingClientRect().bottom - 12
        );
      };

      // Headline travels smoothly on scroll and settles just above the visible floor.
      gsap.to('#hero-headline', {
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: () => `+=${Math.max(550, getHeadlineRestingOffset())}`,
          scrub: 1.2,
          pin: true,
          invalidateOnRefresh: true,
        },
        y: getHeadlineRestingOffset,
        scale: 1,
        ease: 'power2.out',
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

        {/* Navigation */}
        <div className="relative z-40 w-full">
          <Navigation />
        </div>

        {/* Hero text content */}
        <div className="relative z-20 w-full flex flex-col items-center px-4 pt-4 sm:pt-6">
          <HeroContent />
        </div>

        {/* Ground horizon */}
        <div className="absolute bottom-0 left-1/2 z-30 -translate-x-1/2 pointer-events-none select-none flex justify-center items-end">
          <img
            src="/Ground.svg"
            alt="Ground Horizon"
            className="block max-w-none"
            style={{ width: '2000px', minWidth: '2000px' }}
          />
        </div>

        {/* Foreground tree */}
        <div className="absolute bottom-0 left-0 right-0 z-40 flex justify-center items-end pointer-events-none select-none">
          <div id="foreground-tree" className="w-full flex justify-center items-end">
            <ForegroundTreeSVG />
          </div>
        </div>
      </div>

      {/* ── Underground Room: follows below sky ── */}
      <div className="relative w-full pointer-events-none select-none -mt-[76px]">
        <UndergroundRoomSVG />
      </div>
    </section>
  );
};
