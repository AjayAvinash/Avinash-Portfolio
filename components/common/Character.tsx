'use client';

import React from 'react';
import { useRive } from '@rive-app/react-canvas';
import { User, Sparkles } from 'lucide-react';

interface CharacterProps {
  src?: string;
  artboard?: string;
  animation?: string;
  className?: string;
}

export const Character: React.FC<CharacterProps> = ({
  src,
  artboard,
  animation,
  className = '',
}) => {
  // Configured Rive runtime hook. When `src` is provided, it will load the .riv file.
  const { RiveComponent } = useRive({
    src: src || '',
    artboard: artboard,
    autoplay: true,
  });

  // If no .riv file is provided yet, render an interactive placeholder UI
  if (!src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center rounded-2xl border border-border/80 bg-surface/40 p-8 backdrop-blur-sm ${className}`}
        data-testid="character-placeholder"
      >
        <div className="relative mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
          <User className="h-10 w-10" />
          <Sparkles className="absolute -right-1 -top-1 h-5 w-5 text-accent animate-pulse" />
        </div>
        <p className="font-display text-sm font-medium text-text-primary">
          Rive Character Canvas
        </p>
        <span className="mt-1 text-xs text-text-muted">
          Placeholder Component — Provide .riv asset path to activate
        </span>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      <RiveComponent />
    </div>
  );
};

export default Character;
