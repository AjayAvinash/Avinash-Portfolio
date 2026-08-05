import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <nav className="w-full max-w-[1920px] mx-auto flex items-center justify-between py-6 px-6 sm:px-12">
      {/* Brand */}
      <span className="font-sedgwick text-2xl text-white drop-shadow-md tracking-wide">
        Avinash
      </span>

      {/* Right side: nav links + CTA */}
      <div className="flex items-center gap-6 sm:gap-8">
        <a
          href="#projects"
          className="text-sm font-medium text-white/85 hover:text-white transition-colors duration-200 tracking-wide"
        >
          Projects
        </a>
        <a
          href="#about"
          className="text-sm font-medium text-white/85 hover:text-white transition-colors duration-200 tracking-wide"
        >
          About me
        </a>
        <a
          href="#contact"
          className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-white text-[#0974FD] hover:bg-sky-50 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Let&apos;s connect
        </a>
      </div>
    </nav>
  );
};
