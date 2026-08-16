import React from 'react';
import { NotebookItem } from '@/types/notebook';

interface NotebookCardProps {
  item: NotebookItem;
}

export const NotebookCard: React.FC<NotebookCardProps> = ({ item }) => {
  return (
    <article className="group flex flex-col justify-between bg-[#f7f6f2] border border-[#e5e0d8] rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div>
        {/* Category + read time */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[#111111] bg-[#e5e0d8] px-2.5 py-1 rounded-full">
            {item.category}
          </span>
          <span className="text-xs text-[#999080]">{item.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="font-staatliches text-2xl sm:text-3xl text-[#111111] leading-tight mb-2 group-hover:text-[#555555] transition-colors">
          {item.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[#666058] leading-relaxed line-clamp-3">{item.excerpt}</p>
      </div>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-[#e5e0d8] flex items-center justify-between">
        <span className="text-xs text-[#999080]">
          {new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
        </span>
        <span className="text-xs font-medium text-[#111111] group-hover:underline underline-offset-2">
          Read →
        </span>
      </div>
    </article>
  );
};
