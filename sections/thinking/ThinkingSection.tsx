import React from 'react';

const principles = [
  {
    number: '01',
    title: 'Problem Before Pixels',
    body: 'Every design decision starts with a clear problem statement. I spend disproportionate time in the problem space — because the right question makes the solution obvious.',
    accent: '#2ba5f5',
  },
  {
    number: '02',
    title: 'Systems Over Screens',
    body: 'Screens are outputs of a system. I design the rules, constraints, and tokens first — so the screens become predictable, scalable, and consistent without constant supervision.',
    accent: '#37dc7d',
  },
  {
    number: '03',
    title: 'Friction Is Information',
    body: 'When users get stuck, that\'s data. I treat every workaround, support ticket, and hesitation moment as a design signal — not a user failure.',
    accent: '#af9dff',
  },
  {
    number: '04',
    title: 'Motion With Meaning',
    body: 'Animation isn\'t decoration. Every transition, micro-interaction, and state change should communicate something — progress, hierarchy, response, or cause-and-effect.',
    accent: '#ff9d3e',
  },
  {
    number: '05',
    title: 'Ship to Learn',
    body: 'The best research is a live product with real users. I bias toward shipping, measuring, and iterating — over endless pre-launch refinement.',
    accent: '#ff83ba',
  },
  {
    number: '06',
    title: 'Engineering Is Design',
    body: 'Constraints from the codebase are design constraints. I work as close to implementation as possible — because the best interfaces are ones that both look and build cleanly.',
    accent: '#f1d848',
  },
];

export const ThinkingSection: React.FC = () => {
  return (
    <section id="thinking" className="relative bg-[#111111] px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1600px]">

        {/* Heading */}
        <div className="mb-12 sm:mb-16">
          <h2 className="section-heading text-4xl text-white sm:text-5xl lg:text-6xl">
            How I Think
          </h2>
          <p className="section-body mt-4 max-w-sm text-sm text-white/50">
            Six principles that shape every product decision I make.
          </p>
        </div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {principles.map((p) => (
            <div
              key={p.number}
              className="group relative bg-[#111111] p-8 sm:p-10 flex flex-col gap-4 hover:bg-[#1a1a1a] transition-colors duration-300"
            >
              {/* Accent line */}
              <div
                className="w-8 h-[3px] rounded-full transition-all duration-300 group-hover:w-14"
                style={{ backgroundColor: p.accent }}
              />
              <div className="flex items-baseline gap-3">
                <span className="font-staatliches text-5xl leading-none" style={{ color: p.accent }}>
                  {p.number}
                </span>
                <h3 className="font-staatliches text-2xl text-white leading-tight">{p.title}</h3>
              </div>
              <p className="section-body text-sm text-white/55 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
