import React from 'react';

export const UndergroundRoomSVG: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full select-none pointer-events-none ${className}`}>
      {/* Ground Surface Line & Underground Soil Cutout */}
      <svg
        viewBox="0 0 1200 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          {/* Soil Gradient */}
          <linearGradient id="soilGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#452209" />
            <stop offset="30%" stopColor="#2c1505" />
            <stop offset="100%" stopColor="#140a02" />
          </linearGradient>

          {/* Room Glow */}
          <radialGradient id="lampGlow" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Laptop Screen Glow */}
          <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. TOP GROUND HORIZON SURFACE */}
        {/* Grass Layer */}
        <path
          d="M0 60 Q 300 40, 600 60 T 1200 50 V 120 H0 Z"
          fill="#16a34a"
        />
        <path
          d="M0 65 Q 350 48, 600 65 T 1200 55 V 130 H0 Z"
          fill="#15803d"
        />
        {/* Grass Tufts */}
        <path d="M150 55 L155 42 L160 55 M158 55 L164 45 L170 55" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" />
        <path d="M450 52 L455 38 L460 52 M458 52 L464 42 L470 52" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" />
        <path d="M780 50 L785 36 L790 50 M788 50 L794 40 L800 50" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" />
        <path d="M1020 48 L1025 35 L1030 48" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" />

        {/* 2. UNDERGROUND SOIL STRATA */}
        <rect x="0" y="80" width="1200" height="570" fill="url(#soilGrad)" />

        {/* Rocks & Pebbles in Soil */}
        <ellipse cx="180" cy="140" rx="14" ry="8" fill="#78350f" opacity="0.6" />
        <ellipse cx="980" cy="160" rx="18" ry="10" fill="#78350f" opacity="0.5" />
        <ellipse cx="110" cy="420" rx="22" ry="12" fill="#522504" opacity="0.7" />
        <ellipse cx="1080" cy="480" rx="16" ry="9" fill="#522504" opacity="0.7" />

        {/* 3. TREE ROOT NETWORK */}
        <g stroke="#92400e" strokeLinecap="round">
          {/* Main Central Roots */}
          <path d="M570 80 Q560 160 500 220 T420 310" strokeWidth="12" />
          <path d="M630 80 Q640 160 700 220 T780 300" strokeWidth="12" />
          <path d="M590 80 Q595 190 560 260 T510 380" strokeWidth="9" />
          <path d="M610 80 Q615 180 650 250 T710 360" strokeWidth="9" />

          {/* Finer Tendril Roots spreading over the room */}
          <path d="M500 220 Q440 240 360 230 T260 260" strokeWidth="5" stroke="#b45309" />
          <path d="M700 220 Q760 240 840 230 T940 260" strokeWidth="5" stroke="#b45309" />
          <path d="M560 260 Q480 300 380 290" strokeWidth="4" stroke="#d97706" />
          <path d="M650 250 Q720 300 820 290" strokeWidth="4" stroke="#d97706" />
        </g>

        {/* 4. UNDERGROUND ROOM CUTOUT */}
        {/* Room Frame */}
        <rect x="320" y="240" width="560" height="340" rx="24" fill="#0f172a" stroke="#78350f" strokeWidth="8" />
        <rect x="330" y="250" width="540" height="320" rx="18" fill="#1e293b" />

        {/* Ambient Room Glow */}
        <rect x="330" y="250" width="540" height="320" rx="18" fill="url(#lampGlow)" />

        {/* Wooden Floor Board */}
        <rect x="330" y="540" width="540" height="30" fill="#78350f" />
        <line x1="330" y1="540" x2="870" y2="540" stroke="#92400e" strokeWidth="4" />
        <line x1="420" y1="540" x2="420" y2="570" stroke="#451a03" strokeWidth="2" />
        <line x1="580" y1="540" x2="580" y2="570" stroke="#451a03" strokeWidth="2" />
        <line x1="740" y1="540" x2="740" y2="570" stroke="#451a03" strokeWidth="2" />

        {/* 5. ROOM DETAILS & FURNITURE */}

        {/* A. Left Bookcase */}
        <rect x="350" y="340" width="80" height="200" fill="#451a03" rx="4" />
        {/* Shelves */}
        <line x1="350" y1="390" x2="430" y2="390" stroke="#78350f" strokeWidth="4" />
        <line x1="350" y1="440" x2="430" y2="440" stroke="#78350f" strokeWidth="4" />
        <line x1="350" y1="490" x2="430" y2="490" stroke="#78350f" strokeWidth="4" />
        {/* Colorful Books */}
        <rect x="360" y="355" width="10" height="35" fill="#ef4444" rx="1" />
        <rect x="372" y="350" width="12" height="40" fill="#3b82f6" rx="1" />
        <rect x="386" y="360" width="8" height="30" fill="#10b981" rx="1" />
        <rect x="396" y="352" width="14" height="38" fill="#f59e0b" rx="1" />

        <rect x="362" y="405" width="14" height="35" fill="#8b5cf6" rx="1" />
        <rect x="378" y="400" width="10" height="40" fill="#ec4899" rx="1" />
        <rect x="390" y="410" width="16" height="30" fill="#06b6d4" rx="1" />

        {/* B. Poster on Wall: "IDEAS GROW HERE" */}
        <rect x="460" y="275" width="130" height="85" fill="#0284c7" rx="6" stroke="#e0f2fe" strokeWidth="3" />
        <rect x="466" y="281" width="118" height="73" fill="#0369a1" rx="4" />
        <text x="525" y="310" textAnchor="middle" fill="#fef08a" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
          IDEAS GROW
        </text>
        <text x="525" y="335" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="900" fontFamily="sans-serif">
          HERE 🌱
        </text>

        {/* C. Hanging Bulb Lights */}
        {/* Cord 1 */}
        <line x1="490" y1="250" x2="490" y2="300" stroke="#fbbf24" strokeWidth="2" />
        <circle cx="490" cy="304" r="6" fill="#fef08a" />
        <circle cx="490" cy="304" r="14" fill="#fef08a" opacity="0.3" />

        {/* Cord 2 (Center Low) */}
        <line x1="610" y1="250" x2="610" y2="320" stroke="#fbbf24" strokeWidth="2" />
        <circle cx="610" cy="325" r="8" fill="#fef08a" />
        <circle cx="610" cy="325" r="22" fill="#fef08a" opacity="0.35" />

        {/* Cord 3 */}
        <line x1="720" y1="250" x2="720" y2="290" stroke="#fbbf24" strokeWidth="2" />
        <circle cx="720" cy="294" r="6" fill="#fef08a" />
        <circle cx="720" cy="294" r="14" fill="#fef08a" opacity="0.3" />

        {/* D. Right Ladder to Surface */}
        <g stroke="#78350f" strokeWidth="5" strokeLinecap="round">
          <line x1="810" y1="250" x2="810" y2="540" />
          <line x1="845" y1="250" x2="845" y2="540" />
          {/* Rungs */}
          <line x1="810" y1="280" x2="845" y2="280" strokeWidth="4" />
          <line x1="810" y1="330" x2="845" y2="330" strokeWidth="4" />
          <line x1="810" y1="380" x2="845" y2="380" strokeWidth="4" />
          <line x1="810" y1="430" x2="845" y2="430" strokeWidth="4" />
          <line x1="810" y1="480" x2="845" y2="480" strokeWidth="4" />
        </g>

        {/* E. Center Desk & Chair */}
        {/* Desk */}
        <rect x="520" y="460" width="180" height="12" fill="#78350f" rx="3" />
        <rect x="535" y="472" width="12" height="68" fill="#451a03" />
        <rect x="673" y="472" width="12" height="68" fill="#451a03" />

        {/* Chair */}
        <rect x="615" y="470" width="45" height="10" fill="#1e3a8a" rx="2" />
        <rect x="633" y="480" width="8" height="60" fill="#334155" />
        <line x1="615" y1="535" x2="660" y2="535" stroke="#334155" strokeWidth="4" />

        {/* F. Boy Character at Desk */}
        <g>
          {/* Torso / Hoodie */}
          <path d="M625 435 C615 440 610 460 610 470 H655 C655 460 650 440 640 435 Z" fill="#2563eb" />
          {/* Head */}
          <circle cx="632" cy="420" r="14" fill="#fbcfe8" />
          {/* Hair */}
          <path d="M620 415 C620 402 644 402 644 415 C640 410 625 410 620 415 Z" fill="#1e1b4b" />
          {/* Arms reaching to laptop */}
          <path d="M620 450 Q605 455 595 458" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" />
          <path d="M640 450 Q620 456 600 458" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" />
        </g>

        {/* G. Laptop on Desk */}
        {/* Laptop Base */}
        <rect x="565" y="456" width="45" height="5" fill="#94a3b8" rx="1" />
        {/* Laptop Screen Open */}
        <path d="M570 425 L605 425 L608 456 L567 456 Z" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
        <path d="M572 427 L603 427 L606 454 L569 454 Z" fill="#38bdf8" opacity="0.9" />
        {/* Screen Glow Effect */}
        <circle cx="585" cy="435" r="35" fill="url(#screenGlow)" />

        {/* Small Coffee Mug */}
        <rect x="670" y="446" width="10" height="12" fill="#ef4444" rx="2" />
        <path d="M680 449 C684 449 684 455 680 455" stroke="#ef4444" strokeWidth="2" fill="none" />

        {/* Faint Steam from Coffee */}
        <path d="M673 442 Q676 436 673 430" stroke="#f1f5f9" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
      </svg>
    </div>
  );
};
