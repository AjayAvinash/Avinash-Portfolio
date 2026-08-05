import React from 'react';

export const CloudsSVG: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Cloud 1 - Top Left */}
      <svg
        className="absolute top-12 left-[8%] w-48 sm:w-64 opacity-90 animate-pulse"
        style={{ animationDuration: '8s' }}
        viewBox="0 0 200 80"
        fill="none"
      >
        <path
          d="M30 60 C10 60 0 45 15 30 C15 15 40 10 55 20 C70 5 105 5 120 20 C135 15 155 25 155 40 C170 45 165 60 145 60 Z"
          fill="#ffffff"
          fillOpacity="0.85"
        />
      </svg>

      {/* Cloud 2 - Top Right */}
      <svg
        className="absolute top-8 right-[12%] w-56 sm:w-72 opacity-80 animate-pulse"
        style={{ animationDuration: '11s' }}
        viewBox="0 0 240 90"
        fill="none"
      >
        <path
          d="M35 70 C15 70 5 50 20 35 C20 18 50 10 70 22 C90 8 130 8 150 25 C170 18 195 30 195 48 C215 52 210 70 185 70 Z"
          fill="#ffffff"
          fillOpacity="0.75"
        />
      </svg>

      {/* Cloud 3 - Center High */}
      <svg
        className="absolute top-20 left-[45%] -translate-x-1/2 w-40 sm:w-56 opacity-60"
        viewBox="0 0 180 70"
        fill="none"
      >
        <path
          d="M25 50 C10 50 0 38 12 25 C12 12 35 8 48 16 C60 4 90 4 102 16 C115 12 132 20 132 32 C145 36 140 50 120 50 Z"
          fill="#e0f2fe"
          fillOpacity="0.9"
        />
      </svg>
    </div>
  );
};
