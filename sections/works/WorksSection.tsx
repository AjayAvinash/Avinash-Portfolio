'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { WorkCard, WorkItem } from '@/components/works/WorkCard';
import { gsap, initGsap } from '@/animations/gsap';

const works: WorkItem[] = [
  { id: 'tcs', title: 'Redesign and implementation in one week?', name: 'TCS', domain: 'Logistics', accent: 'blue' },
  { id: 'wms', title: 'Designed for Hands in Gloves, Not on a Trackpad', name: 'WMS', domain: 'Manufacturing', accent: 'green' },
  { id: 'accounts-guru', title: 'Went in to redesign and back with a logic bug', name: 'Accounts guru', domain: 'Accounting', accent: 'lilac' },
  { id: 'port-emulator', title: '150 KPIs, and Making Sense of What Users Actually Need', name: 'Port Emulator', domain: 'Port', accent: 'orange' },
  { id: 'r1', title: 'This Work around revealed how users think', name: 'R1', domain: 'Retail', accent: 'pink' },
  { id: 'tide', title: "A Case Study I'd Approach Differently Today", name: 'Tide', domain: 'Fintech', accent: 'yellow' },
];

export const WorksSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    initGsap();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.work-card');
      const grid = sectionRef.current?.querySelector<HTMLElement>('.works-grid');
      if (!grid || cards.length === 0) return;

      gsap.set('.section-heading-reveal', { yPercent: 110 });
      gsap.to('.section-heading-reveal', {
        yPercent: 0,
        duration: 0.9,
        ease: 'power4.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true },
      });

      const media = gsap.matchMedia();
      media.add('(min-width: 768px)', () => {
        const gridCenter = grid.getBoundingClientRect().left + grid.getBoundingClientRect().width / 2;
        const centeredX = (card: HTMLElement) => gridCenter - (card.getBoundingClientRect().left + card.getBoundingClientRect().width / 2);

        gsap.set(cards, {
          x: (_, card) => centeredX(card as HTMLElement),
          scale: 0.96,
          rotation: (index) => (index % 2 === 0 ? -1.2 : 1.2),
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: grid,
            start: 'top 70%',
            end: () => `bottom center+=${cards[cards.length - 1].offsetHeight / 2}`,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        [0, 2, 4].forEach((start) => {
          timeline.to(cards.slice(start, start + 2), {
            x: 0,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: 'power4.out',
          });
        });
      });

      media.add('(max-width: 767px)', () => {
        const stackOffset = 34;
        const layoutTops = cards.map((card) => card.offsetTop);
        gsap.set(cards, {
          y: (index) => layoutTops[0] - layoutTops[index] + index * stackOffset,
          scale: 0.96,
          zIndex: (index) => cards.length - index,
        });
        gsap.set(cards[0], { scale: 1 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: grid,
            start: 'top 72%',
            end: () => `bottom center+=${cards[cards.length - 1].offsetHeight / 2}`,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // Each card releases together with every card below it. This preserves
        // the deck order: 1 sits over 2, 2 over 3, and so on.
        cards.slice(1).forEach((card, index) => {
          const cardIndex = index + 1;
          const distanceToNextRow = layoutTops[cardIndex] - (layoutTops[cardIndex - 1] + stackOffset);

          timeline
            .to(cards.slice(cardIndex), { y: `+=${distanceToNextRow}`, duration: 1, ease: 'power4.out' })
            .to(card, { scale: 1, duration: 1, ease: 'power4.out' }, '<');
        });
      });

      return () => media.revert();
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return <section ref={sectionRef} id="works" className="relative overflow-hidden bg-[#f7f6f2] px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-32"><div className="mx-auto max-w-[1600px]"><div className="works-heading mb-10 text-center sm:mb-14"><div className="overflow-hidden py-3"><h2 className="section-heading section-heading-reveal text-4xl text-[#111111] sm:text-5xl lg:text-6xl">Some of my works</h2></div><p className="section-body mx-auto mt-4 max-w-sm text-sm text-black/55">Selected product experiences, designed from the ground up.</p></div><div className="works-grid grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">{works.map((work) => <WorkCard key={work.id} work={work} />)}</div></div></section>;
};
