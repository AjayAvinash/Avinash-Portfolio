import React from 'react';

export const CityscapeSVG: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full flex justify-between items-end pointer-events-none select-none ${className}`}>
      {/* Left Buildings */}
      <svg
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[280px] sm:w-[360px] md:w-[440px] opacity-85 transition-transform duration-500 hover:scale-[1.01]"
      >
        <g opacity="0.6">
          {/* Back Buildings */}
          <rect x="20" y="80" width="45" height="140" rx="3" fill="#2d6cb5" />
          <rect x="75" y="50" width="55" height="170" rx="4" fill="#1e5494" />
          <rect x="140" y="90" width="40" height="130" rx="3" fill="#2d6cb5" />
        </g>
        {/* Midground Left Buildings */}
        <rect x="5" y="110" width="50" height="110" rx="4" fill="#3b82f6" opacity="0.9" />
        {/* Windows on building */}
        <circle cx="20" cy="130" r="3" fill="#bae6fd" />
        <circle cx="35" cy="130" r="3" fill="#bae6fd" />
        <circle cx="20" cy="150" r="3" fill="#bae6fd" />
        <circle cx="35" cy="150" r="3" fill="#bae6fd" />
        <circle cx="20" cy="170" r="3" fill="#fef08a" />
        <circle cx="35" cy="170" r="3" fill="#bae6fd" />

        {/* Main Architectural Building */}
        <path d="M60 70 L95 40 L130 70 V220 H60 Z" fill="#2563eb" />
        <rect x="75" y="90" width="40" height="130" fill="#1d4ed8" />
        {/* Window Stripes */}
        <rect x="83" y="105" width="10" height="20" rx="2" fill="#93c5fd" />
        <rect x="99" y="105" width="10" height="20" rx="2" fill="#fef08a" />
        <rect x="83" y="135" width="10" height="20" rx="2" fill="#93c5fd" />
        <rect x="99" y="135" width="10" height="20" rx="2" fill="#93c5fd" />
        <rect x="83" y="165" width="10" height="20" rx="2" fill="#fef08a" />
        <rect x="99" y="165" width="10" height="20" rx="2" fill="#93c5fd" />

        {/* Low modern structure */}
        <rect x="140" y="130" width="70" height="90" rx="6" fill="#3b82f6" />
        <line x1="140" y1="160" x2="210" y2="160" stroke="#60a5fa" strokeWidth="2" />
        <rect x="155" y="175" width="40" height="45" rx="3" fill="#1e3a8a" />

        {/* Decorative Antenna / Spire */}
        <line x1="95" y1="40" x2="95" y2="15" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
        <circle cx="95" cy="12" r="4" fill="#ef4444" />
      </svg>

      {/* Right Buildings */}
      <svg
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[280px] sm:w-[360px] md:w-[440px] opacity-85 transition-transform duration-500 hover:scale-[1.01]"
      >
        <g opacity="0.6">
          <rect x="140" y="60" width="50" height="160" rx="4" fill="#1e5494" />
          <rect x="200" y="85" width="45" height="135" rx="3" fill="#2d6cb5" />
          <rect x="250" y="110" width="60" height="110" rx="3" fill="#1e5494" />
        </g>

        {/* Main Right Building with Slanted Roof */}
        <path d="M120 100 L180 60 V220 H120 Z" fill="#2563eb" />
        <rect x="130" y="110" width="40" height="110" fill="#1d4ed8" />
        {/* Glowing Windows */}
        <rect x="140" y="125" width="20" height="12" rx="2" fill="#fef08a" />
        <rect x="140" y="145" width="20" height="12" rx="2" fill="#93c5fd" />
        <rect x="140" y="165" width="20" height="12" rx="2" fill="#fef08a" />

        {/* Front Modern Office Block */}
        <rect x="195" y="120" width="85" height="100" rx="6" fill="#3b82f6" />
        <rect x="205" y="135" width="65" height="30" rx="3" fill="#93c5fd" opacity="0.8" />
        <rect x="205" y="175" width="65" height="45" rx="3" fill="#1e3a8a" />

        {/* Small Tree on Plaza */}
        <path d="M100 200 C90 190 85 170 100 160 C115 170 110 190 100 200 Z" fill="#10b981" />
        <rect x="98" y="200" width="4" height="20" fill="#78350f" />
      </svg>
    </div>
  );
};
