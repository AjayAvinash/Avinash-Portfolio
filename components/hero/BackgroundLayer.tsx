import React from 'react';

export const BackgroundLayer: React.FC = () => {
  return (
    <>
      {/*
       * ── SKY LAYER ──────────────────────────────────────────────────────
       * Gradient covers ONLY the sky (100vh). It ends at the horizon line
       * and does NOT bleed into the underground section below.
       */}
      <div
        className="absolute top-0 left-0 right-0 z-0 overflow-hidden pointer-events-none select-none"
        style={{
          height: '100vh',
          background: 'linear-gradient(to bottom, #0974FD 0%, #80D1FC 60%, #E4F8F5 100%)',
        }}
      >
        {/* ── TOP-LEFT Cloud (User Asset) ─────────────────────────────── */}
        <div id="cloud-1" className="absolute top-[4%] left-[0%] w-[25%] max-w-[480px]">
          <img
            src="/clouds/cloud-top-left.svg"
            alt=""
            className="w-full h-auto block object-contain object-top-left"
          />
        </div>

        {/* ── TOP-RIGHT Cloud (User Asset) ────────────────────────────── */}
        <div id="cloud-2" className="absolute top-[6%] right-[0%] w-[25%] max-w-[500px]">
          <img
            src="/clouds/cloud-top-right-user.png"
            alt=""
            className="w-full h-auto block object-contain object-top-right"
          />
        </div>

        {/* ── SMALL CENTER Cloud (User Asset) ─────────────────────────── */}
        <div id="cloud-3" className="absolute top-[22%] right-[15%] -translate-x-1/2 w-[10%] max-w-[150px]">
          <img
            src="/clouds/cloud-center-sm-user.png"
            alt=""
            className="w-full h-auto block object-contain"
          />
        </div>

        {/* ── BOTTOM-LEFT Cloud (User Asset) ──────────────────────────── */}
        <div id="cloud-4" className="absolute top-[40%] left-[0%] w-[25%] max-w-[340px]">
          <img
            src="/clouds/cloud-bottom-left.svg"
            alt=""
            className="w-full h-auto block object-contain object-left"
          />
        </div>

        {/* ── BOTTOM-RIGHT Cloud (User Asset - Mirrored) ──────────────── */}
        <div id="cloud-5" className="absolute top-[40%] right-[0%] w-[25 %] max-w-[340px]">
          <img
            src="/clouds/cloud-bottom-right.svg"
            alt=""
            className="w-full h-auto block object-contain object-right"
          />
        </div>

        {/* ── Left Cityscape ────────────────────────────────────────────── */}
        <div
          id="cityscape-left"
          className="absolute bottom-0 left-0 w-[26%] sm:w-[22%] md:w-[18%]"
        >
          <svg viewBox="0 0 340 260" fill="none" className="w-full" preserveAspectRatio="xMinYMax meet">
            <rect x="10" y="100" width="50" height="160" rx="4" fill="#1e52a0" opacity="0.4" />
            <rect x="70" y="60" width="65" height="200" rx="5" fill="#174290" opacity="0.4" />
            <rect x="145" y="110" width="45" height="150" rx="4" fill="#1e52a0" opacity="0.3" />
            <rect x="0" y="130" width="55" height="130" rx="5" fill="#2563eb" opacity="0.82" />
            <rect x="10" y="145" width="8" height="12" rx="1" fill="#bae6fd" />
            <rect x="24" y="145" width="8" height="12" rx="1" fill="#fef9c3" />
            <rect x="38" y="145" width="8" height="12" rx="1" fill="#bae6fd" />
            <rect x="10" y="167" width="8" height="12" rx="1" fill="#fef9c3" />
            <rect x="24" y="167" width="8" height="12" rx="1" fill="#bae6fd" />
            <path d="M65 80 L105 45 L145 80 V260 H65 Z" fill="#1d4ed8" />
            <rect x="80" y="105" width="50" height="155" fill="#1e3a8a" />
            <rect x="90" y="118" width="12" height="22" rx="2" fill="#93c5fd" />
            <rect x="109" y="118" width="12" height="22" rx="2" fill="#fef08a" />
            <rect x="90" y="150" width="12" height="22" rx="2" fill="#93c5fd" />
            <rect x="109" y="150" width="12" height="22" rx="2" fill="#93c5fd" />
            <line x1="105" y1="45" x2="105" y2="16" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
            <circle cx="105" cy="13" r="5" fill="#f87171" />
            <rect x="150" y="160" width="80" height="100" rx="7" fill="#3b82f6" opacity="0.85" />
            <rect x="158" y="175" width="64" height="28" rx="3" fill="#93c5fd" opacity="0.6" />
            <rect x="158" y="212" width="64" height="48" rx="3" fill="#1e3a8a" />
          </svg>
        </div>

        {/* ── Right Cityscape ───────────────────────────────────────────── */}
        <div
          id="cityscape-right"
          className="absolute bottom-0 right-0 w-[26%] sm:w-[22%] md:w-[18%]"
        >
          <svg viewBox="0 0 340 260" fill="none" className="w-full" preserveAspectRatio="xMaxYMax meet">
            <rect x="140" y="80" width="55" height="180" rx="5" fill="#1e52a0" opacity="0.35" />
            <rect x="200" y="100" width="50" height="160" rx="4" fill="#174290" opacity="0.35" />
            <rect x="255" y="120" width="70" height="140" rx="4" fill="#1e52a0" opacity="0.3" />
            <path d="M100 115 L165 65 V260 H100 Z" fill="#2563eb" opacity="0.9" />
            <rect x="112" y="132" width="42" height="128" fill="#1e3a8a" />
            <rect x="120" y="145" width="24" height="14" rx="2" fill="#fef08a" />
            <rect x="120" y="168" width="24" height="14" rx="2" fill="#93c5fd" />
            <rect x="120" y="191" width="24" height="14" rx="2" fill="#fef08a" />
            <rect x="175" y="140" width="95" height="120" rx="7" fill="#3b82f6" opacity="0.85" />
            <rect x="183" y="155" width="79" height="32" rx="3" fill="#93c5fd" opacity="0.62" />
            <rect x="183" y="195" width="79" height="65" rx="3" fill="#1e3a8a" />
            <rect x="275" y="150" width="60" height="110" rx="5" fill="#2563eb" opacity="0.82" />
            <rect x="283" y="163" width="10" height="14" rx="1" fill="#bae6fd" />
            <rect x="299" y="163" width="10" height="14" rx="1" fill="#fef08a" />
            <rect x="315" y="163" width="10" height="14" rx="1" fill="#bae6fd" />
          </svg>
        </div>
      </div>
    </>
  );
};
