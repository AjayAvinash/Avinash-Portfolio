import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative bg-[#111111] px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1600px]">

        {/* Large heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="section-heading text-5xl text-white sm:text-6xl lg:text-7xl leading-none">
            Let's build something worth using.
          </h2>
        </div>

        {/* Sub-copy */}
        <p className="section-body text-base text-white/55 max-w-md mb-12 leading-relaxed">
          Open to product design roles, design system consulting, and interesting problems across any industry. If it's worth solving, it's worth talking about.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:hello@avinash.design"
            className="inline-flex items-center gap-2 bg-white text-[#111111] text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#f7f6f2] hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
          >
            Say hello →
          </a>
          <a
            href="https://linkedin.com/in/avinash"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-medium px-6 py-3 rounded-full hover:border-white/50 hover:bg-white/5 transition-all duration-200"
          >
            LinkedIn
          </a>
        </div>

        {/* Bottom rule + availability */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="flex items-center gap-2 text-xs text-white/40">
            <span className="w-2 h-2 rounded-full bg-[#37dc7d] animate-pulse" />
            Available for new projects — {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
          </span>
          <span className="text-xs text-white/25">Avinash · Product Designer</span>
        </div>

      </div>
    </section>
  );
};
