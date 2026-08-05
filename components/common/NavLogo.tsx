'use client';

import React from 'react';

/**
 * NavLogo — static Logo.svg in the navbar.
 * No animations, no text, no splash tie-in.
 */
export const NavLogo: React.FC = () => {
  return (
    <a
      href="#hero"
      aria-label="Avinash — Home"
      className="inline-flex items-center select-none"
      style={{ textDecoration: 'none' }}
    >
      <img
        src="/Logo.svg"
        alt="Avinash logo"
        style={{
          height: 40,
          width: 'auto',
          display: 'block',
          filter: 'brightness(0) invert(1)', // renders white on blue background
        }}
        draggable={false}
      />
    </a>
  );
};
