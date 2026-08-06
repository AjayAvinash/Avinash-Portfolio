import React from 'react';

export const ForegroundTreeSVG: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative pointer-events-none select-none flex justify-center ${className}`}>
      <img
        src="/Tree.png"
        alt="Foreground Tree"
        className="w-[240px] sm:w-[300px] md:w-[360px] lg:w-[400px] xl:w-[440px] object-contain drop-shadow-xl"
        style={{ display: 'block' }}
      />
    </div>
  );
};
