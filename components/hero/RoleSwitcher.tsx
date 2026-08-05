'use client';

import React, { useState, useEffect } from 'react';

const roles = [
  'Product Designer',
  'Aspiring Product Manager',
  'Design Engineer',
];

export const RoleSwitcher: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('out');
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFadeState('in');
      }, 300); // fade out duration
    }, 2800); // 2.8s per role

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block font-sedgwick text-white transition-all duration-300">
      <span
        className={`inline-block transition-all duration-300 transform ${
          fadeState === 'in'
            ? 'opacity-100 translate-y-0 filter-none'
            : 'opacity-0 -translate-y-2 blur-xs'
        }`}
      >
        {roles[index]}
      </span>
    </span>
  );
};
