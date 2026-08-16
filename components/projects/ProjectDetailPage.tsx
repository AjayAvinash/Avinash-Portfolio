'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Project } from '@/types/project';
import { ProjectComicStrip } from './ProjectComicStrip';
import { ProjectDetailNav } from './ProjectDetailNav';
import { MobileNavFAB } from './MobileNavFAB';
import { gsap, initGsap } from '@/animations/gsap';

interface ProjectDetailPageProps {
  project: Project;
}

/* ─── Section wrapper ─── */
const DetailSection: React.FC<{
  id: string;
  title: string;
  children: React.ReactNode;
}> = ({ id, title, children }) => (
  <section id={id} className="proj-section scroll-mt-24 border-t border-[#e2e8f0] pt-10 pb-12">
    <h2 className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[#64748b] mb-6">
      {title}
    </h2>
    {children}
  </section>
);

/* ─── Metadata cell ─── */
const MetaCell: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <p className="text-[10px] uppercase tracking-widest text-[#64748b] mb-1">{label}</p>
    <p className="text-sm text-[#0f172a] font-medium">{value}</p>
  </div>
);

/* ─── Key takeaway ─── */
const Takeaway: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start gap-3 text-sm text-[#334155]">
    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#0f172a] flex-shrink-0" />
    {text}
  </li>
);

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project }) => {
  const pageRef = useRef<HTMLDivElement>(null);

  /* ── Entry animation ──────────────────────────────────────────── */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    initGsap();

    const ctx = gsap.context(() => {
      // Comic strip: fade + slide down from above
      gsap.fromTo(
        '.proj-comic',
        { autoAlpha: 0, y: -20 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out' }
      );

      // Back link
      gsap.fromTo(
        '.proj-back',
        { autoAlpha: 0, x: -12 },
        { autoAlpha: 1, x: 0, duration: 0.5, ease: 'power2.out', delay: 0.35 }
      );

      // Sidebar nav
      gsap.fromTo(
        '.proj-nav',
        { autoAlpha: 0, x: -16 },
        { autoAlpha: 1, x: 0, duration: 0.6, ease: 'power3.out', delay: 0.4 }
      );

      // Title + sections stagger
      gsap.fromTo(
        '.proj-title, .proj-section',
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          ease: 'power3.out',
          stagger: 0.1,
          delay: 0.45,
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const comicCaptions: [string, string, string] = [
    project.comic?.frames[0]?.caption ?? 'The challenge emerged',
    project.comic?.frames[1]?.caption ?? 'Exploring possibilities',
    project.comic?.frames[2]?.caption ?? 'The solution unfolds',
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-white text-[#0f172a]">

      {/* ── Comic strip ──────────────────────────────────────────── */}
      <div className="proj-comic">
        <ProjectComicStrip
          images={project.comicImages}
          captions={comicCaptions}
          title={project.comic?.title}
        />
      </div>

      {/* ── Page body ────────────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-28">

        {/* Back link */}
        <Link
          href="/#works"
          className="proj-back inline-flex items-center gap-1.5 text-sm text-[#64748b] hover:text-[#0f172a] transition-colors mb-10 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        {/* Two-column layout */}
        <div className="flex gap-12 lg:gap-20">

          {/* ── Left nav (desktop) ───────────────────────────────── */}
          <aside className="hidden lg:block w-44 flex-shrink-0">
            <div className="proj-nav sticky top-10">
              <ProjectDetailNav />
            </div>
          </aside>

          {/* ── Main content ─────────────────────────────────────── */}
          <main className="flex-1 min-w-0">

            {/* Title */}
            <h1 className="proj-title font-staatliches text-4xl sm:text-5xl lg:text-6xl leading-none tracking-tight text-[#0f172a] mb-10 uppercase">
              {project.title}
            </h1>

            {/* ── Overview ───────────────────────────────────────── */}
            <DetailSection id="overview" title="Overview">
              <p className="text-base text-[#475569] leading-relaxed mb-8 max-w-2xl">
                {project.subtitle}
              </p>

              {/* Meta grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6 mb-8">
                <MetaCell label="Project" value={project.id.toUpperCase()} />
                <MetaCell label="Vertical" value={project.vertical} />
                <MetaCell label="Duration" value={project.duration} />
              </div>

              {/* Scope — clean light grey inset box */}
              <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5 shadow-xs">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#64748b] mb-2">
                  Scope
                </p>
                <p className="text-sm text-[#334155] leading-relaxed">{project.scope}</p>
              </div>
            </DetailSection>

            {/* ── Approach ───────────────────────────────────────── */}
            <DetailSection id="approach" title="Approach">
              <h3 className="font-display text-xl font-semibold text-[#0f172a] mb-3">
                {project.approach.title}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6 max-w-2xl">
                {project.approach.description}
              </p>
              {project.approach.keyTakeaways && (
                <ul className="space-y-2.5">
                  {project.approach.keyTakeaways.map((t) => <Takeaway key={t} text={t} />)}
                </ul>
              )}
            </DetailSection>

            {/* ── Discovery ──────────────────────────────────────── */}
            <DetailSection id="discovery" title="Discovery">
              <h3 className="font-display text-xl font-semibold text-[#0f172a] mb-3">
                {project.discovery.title}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6 max-w-2xl">
                {project.discovery.description}
              </p>
              {project.discovery.keyTakeaways && (
                <ul className="space-y-2.5">
                  {project.discovery.keyTakeaways.map((t) => <Takeaway key={t} text={t} />)}
                </ul>
              )}
            </DetailSection>

            {/* ── What I Did ─────────────────────────────────────── */}
            <DetailSection id="what-i-did" title="What I Did">
              <h3 className="font-display text-xl font-semibold text-[#0f172a] mb-3">
                {project.whatIDid.title}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6 max-w-2xl">
                {project.whatIDid.description}
              </p>
              {project.whatIDid.keyTakeaways && (
                <ul className="space-y-2.5">
                  {project.whatIDid.keyTakeaways.map((t) => <Takeaway key={t} text={t} />)}
                </ul>
              )}
            </DetailSection>

            {/* ── Where it Stands ────────────────────────────────── */}
            <DetailSection id="where-it-stands" title="Where it Stands">
              <h3 className="font-display text-xl font-semibold text-[#0f172a] mb-3">
                {project.whereItStands.title}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6 max-w-2xl">
                {project.whereItStands.description}
              </p>
              {project.whereItStands.keyTakeaways && (
                <ul className="space-y-2.5">
                  {project.whereItStands.keyTakeaways.map((t) => <Takeaway key={t} text={t} />)}
                </ul>
              )}
            </DetailSection>

          </main>
        </div>
      </div>

      {/* ── Mobile FAB ───────────────────────────────────────────── */}
      <div className="lg:hidden">
        <MobileNavFAB />
      </div>
    </div>
  );
};
