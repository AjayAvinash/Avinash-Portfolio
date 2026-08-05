import React from 'react';

export const ForegroundTreeSVG: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 400 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[240px] sm:w-[300px] md:w-[360px] lg:w-[400px] xl:w-[440px] drop-shadow-xl"
        style={{ display: 'block' }}
      >
        {/* ── Outer dark canopy ─────────────────────────────────── */}
        <path
          d="M200 18 C125 18 72 72 72 148 C40 148 18 190 40 218 C62 246 118 235 150 235 C162 255 238 255 250 235 C282 235 338 246 360 218 C382 190 360 148 328 148 C328 72 275 18 200 18 Z"
          fill="#15803d"
        />
        {/* ── Mid canopy ────────────────────────────────────────── */}
        <path
          d="M200 34 C145 34 98 76 98 140 C70 140 52 176 68 200 C84 224 128 214 156 214 C167 230 233 230 244 214 C272 214 316 224 332 200 C348 176 330 140 302 140 C302 76 255 34 200 34 Z"
          fill="#16a34a"
        />
        {/* ── Highlight clusters ────────────────────────────────── */}
        <circle cx="155" cy="80"  r="48" fill="#22c55e" opacity="0.92"/>
        <circle cx="235" cy="74"  r="54" fill="#4ade80" opacity="0.88"/>
        <circle cx="112" cy="148" r="38" fill="#22c55e" opacity="0.90"/>
        <circle cx="278" cy="142" r="44" fill="#4ade80" opacity="0.82"/>
        <circle cx="198" cy="136" r="58" fill="#16a34a"/>
        {/* Top crown highlight */}
        <circle cx="200" cy="50"  r="28" fill="#86efac" opacity="0.55"/>

        {/* ── Trunk ─────────────────────────────────────────────── */}
        <path
          d="M174 192 Q184 252 170 340 H230 Q216 252 226 192 Z"
          fill="#78350f"
        />
        <path
          d="M183 200 Q191 255 182 340 H218 Q209 255 217 200 Z"
          fill="#92400e"
        />
        {/* Bark detail lines */}
        <path d="M190 228 Q195 262 189 295" stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M210 235 Q205 268 211 300" stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      </svg>
    </div>
  );
};
