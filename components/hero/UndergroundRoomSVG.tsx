import React from 'react';

/** The heading (#hero-headline) scrolls into this room and rests on its floor. */
export const UndergroundRoomSVG: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full select-none pointer-events-none ${className}`}
      style={{ minHeight: 'clamp(32rem, 48vw, 52rem)' }}
    >
      <img
        src="/Underground_bg.svg"
        alt=""
        aria-hidden="true"
        className="absolute left-1/2 top-0 w-[2000px] max-w-none -translate-x-1/2"
      />

      {/* Placeholder for the future interactive Rive character. */}
      <img
        src="/Character.png"
        alt=""
        aria-hidden="true"
        className="absolute z-25 bottom-[clamp(1rem,5vw,2rem)] right-[clamp(0.25rem,2vw,1rem)] w-[clamp(10rem,55vw,17rem)] h-auto sm:bottom-[clamp(3rem,10vw,8.5rem)] sm:right-[clamp(0.5rem,4vw,5rem)] sm:w-[clamp(16rem,35vw,24rem)] lg:w-[clamp(22rem,26vw,30rem)]"
      />

      <div
        id="underground-floor"
        className="absolute inset-x-0 bottom-0 z-0"
      >
        <img
          src="/Underground_floor.svg"
          alt=""
          aria-hidden="true"
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
};
