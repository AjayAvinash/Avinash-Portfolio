import React from 'react';
import { NotebookCard } from '@/components/notebook/NotebookCard';
import { placeholderNotebook } from '@/content/notebook/notebook';

export const NotebookSection: React.FC = () => {
  return (
    <section id="notebook" className="relative bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1600px]">

        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <h2 className="section-heading text-4xl text-[#111111] sm:text-5xl lg:text-6xl">
              Product Notebook
            </h2>
            <p className="section-body mt-4 max-w-sm text-sm text-[#999080]">
              Short essays, system teardowns, and design-engineering research notes.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#111111] hover:underline underline-offset-4 shrink-0"
          >
            All notes →
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {placeholderNotebook.map((item) => (
            <NotebookCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
