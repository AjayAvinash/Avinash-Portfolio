import React from 'react';
import Link from 'next/link';

export interface WorkItem {
  id: string;
  title: string;
  name: string;
  domain: string;
  accent: 'blue' | 'green' | 'lilac' | 'orange' | 'pink' | 'yellow';
}

const accents = {
  blue: 'bg-[#2ba5f5]',
  green: 'bg-[#37dc7d]',
  lilac: 'bg-[#af9dff]',
  orange: 'bg-[#ff9d3e]',
  pink: 'bg-[#ff83ba]',
  yellow: 'bg-[#f1d848]',
};

const hoverShadows = {
  blue: 'hover:shadow-[0_20px_60px_rgba(43,165,245,0.35)]',
  green: 'hover:shadow-[0_20px_60px_rgba(55,220,125,0.35)]',
  lilac: 'hover:shadow-[0_20px_60px_rgba(175,157,255,0.35)]',
  orange: 'hover:shadow-[0_20px_60px_rgba(255,157,62,0.35)]',
  pink: 'hover:shadow-[0_20px_60px_rgba(255,131,186,0.35)]',
  yellow: 'hover:shadow-[0_20px_60px_rgba(241,216,72,0.35)]',
};

/** Temporary product-preview artwork, designed to be replaced by case-study imagery. */
const ProductPreview: React.FC = () => (
  <div className="absolute bottom-0 left-1/2 h-[48%] w-[75%] min-w-[22rem] translate-x-[-50%] overflow-hidden rounded-tl-xl border border-black/20 bg-[#f8faf8] shadow-[-12px_-8px_24px_rgba(0,0,0,0.13)] sm:h-[50%]">
    <div className="flex h-9 items-center border-b border-slate-200 bg-white px-3 text-[8px] font-semibold text-slate-800 sm:h-11 sm:px-4 sm:text-[10px]">
      <span>Sales Admin</span>
      <span className="ml-auto rounded-full border border-slate-200 px-4 py-1 text-[6px] font-normal text-slate-400 sm:text-[8px]">Search anything</span>
    </div>
    <div className="flex h-full">
      <aside className="w-[25%] bg-[#07351f] px-3 py-3 text-[6px] text-white/65 sm:px-4 sm:py-4 sm:text-[8px]">
        <div className="mb-5 text-[9px] font-semibold text-white sm:text-[11px]">✳ Studio</div>
        <div className="space-y-3">
          <p className="font-semibold text-[#bbeb39]">▦ &nbsp;Overview</p>
          <p>♙ &nbsp;Statistics</p>
          <p>◎ &nbsp;Customers</p>
          <p>◈ &nbsp;Products</p>
        </div>
      </aside>
      <div className="flex-1 p-3 sm:p-4">
        <p className="text-[9px] font-semibold text-slate-800 sm:text-[11px]">Dashboard</p>
        <p className="mt-1 text-[5px] text-slate-400 sm:text-[7px]">An easy way to manage your work with care.</p>
        <div className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-4 sm:gap-2">
          <div className="col-span-1 rounded-md bg-[#07351f] p-2 text-[5px] text-white sm:p-3 sm:text-[7px]">
            <span className="text-white/60">Update</span>
            <p className="mt-1 font-semibold">Revenue increased<br />40% in 1 week</p>
          </div>
          <div className="rounded-md border border-slate-200 p-2 text-[5px] text-slate-500 sm:p-3 sm:text-[7px]">
            Net income
            <p className="mt-1 text-[12px] font-semibold text-slate-800 sm:text-[17px]">$193k</p>
          </div>
          <div className="rounded-md border border-slate-200 p-2 text-[5px] text-slate-500 sm:p-3 sm:text-[7px]">
            Total return
            <p className="mt-1 text-[12px] font-semibold text-slate-800 sm:text-[17px]">$32k</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const WorkCard: React.FC<{ work: WorkItem }> = ({ work }) => (
  <Link href={`/projects/${work.id}`} className="block">
    <article
      className={`
        work-card group relative isolate min-h-[24rem] overflow-hidden p-6 text-black
        sm:min-h-[29rem] sm:p-8 lg:min-h-[34rem]
        ${accents[work.accent]} ${hoverShadows[work.accent]}
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:scale-[1.015]
        cursor-pointer
      `}
    >
      <div className="relative z-10">
        <h3 className="section-card-heading max-w-[18ch] text-2xl sm:text-3xl lg:text-[2.2rem]">
          {work.title}
        </h3>
        <div className="section-meta mt-4 flex items-center justify-between gap-4 text-xs sm:mt-5 sm:text-sm">
          <p>{work.name}</p>
          <p>{work.domain}</p>
        </div>
      </div>
      <ProductPreview />
      {/* Shine overlay on hover */}
      <div className="pointer-events-none absolute inset-0 bg-white/0 transition-all duration-300 group-hover:bg-white/[0.06]" />
      {/* Border highlight */}
      <div className="pointer-events-none absolute inset-0 border border-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  </Link>
);
