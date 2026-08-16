import React from 'react';

const stats = [
  { value: '6+', label: 'Products shipped' },
  { value: '4', label: 'Industries worked in' },
  { value: '∞', label: 'Figma frames created' },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#f7f6f2] px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1600px]">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — Copy */}
          <div>
            <h2 className="section-heading text-4xl text-[#111111] sm:text-5xl lg:text-6xl mb-8">
              About Me
            </h2>

            <div className="space-y-5 text-[#444444] text-base leading-relaxed">
              <p>
                I'm Avinash — a product designer who operates at the intersection of design, engineering, and systems thinking. I don't just make things look good. I make them work, scale, and make sense.
              </p>
              <p>
                I've worked across logistics, manufacturing, fintech, retail, and accounting — each project teaching me that the hardest design problems are rarely about aesthetics. They're about understanding what's actually happening in the room where the product is used.
              </p>
              <p>
                I write code. I read PRDs. I sit in on sprint planning. I believe the best designer is one who understands the full stack of decisions — from the business brief to the border-radius.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-12 flex gap-10 sm:gap-16">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-staatliches text-4xl text-[#111111]">{s.value}</p>
                  <p className="text-xs text-[#999080] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Currently / Tools */}
          <div className="space-y-6">
            <div className="bg-white border border-[#e5e0d8] rounded-xl p-6">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#999080] mb-4">Currently</p>
              <ul className="space-y-3 text-sm text-[#333333]">
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#37dc7d] flex-shrink-0" />
                  Open to senior IC and lead product design roles
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#2ba5f5] flex-shrink-0" />
                  Building this portfolio with Next.js + GSAP
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#af9dff] flex-shrink-0" />
                  Learning Rive for production-grade animation
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#e5e0d8] rounded-xl p-6">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#999080] mb-4">Toolkit</p>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'React', 'TypeScript', 'Next.js', 'GSAP', 'Rive', 'Framer', 'Tailwind CSS', 'Storybook', 'Notion'].map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-medium text-[#333333] bg-[#f7f6f2] border border-[#e5e0d8] px-2.5 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
