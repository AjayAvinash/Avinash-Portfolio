'use client';

import React, { useState, useEffect } from 'react';

const roles = [
  'Product Designer',
  'Aspiring Product Manager',
  'Design Engineer',
];

export const RoleSwitcher: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Initial entrance animation trigger on page reload
    const timer = setTimeout(() => setIsMounted(true), 200);

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3400); // 3.4s interval for relaxed reading

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <span className="inline-grid text-left font-sedgwick text-white relative align-baseline min-w-[14ch] sm:min-w-[15ch]">
      {roles.map((role, i) => {
        const isActive = i === index;
        const isPrev = i === (index - 1 + roles.length) % roles.length;

        return (
          <span
            key={role}
            className={`col-start-1 row-start-1 whitespace-nowrap transition-all duration-700 ease-in-out transform ${
              isActive && isMounted
                ? 'opacity-100 translate-y-0 filter-none'
                : isPrev
                ? 'opacity-0 -translate-y-3.5 blur-xs'
                : 'opacity-0 translate-y-3.5 blur-xs'
            }`}
          >
            {role}
          </span>
        );
      })}
    </span>
  );
};
