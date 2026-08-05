import React from 'react';
import { Character } from '@/components/common/Character';

export const CharacterLayer: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center p-4">
      <Character className="w-full max-w-sm aspect-square" />
    </div>
  );
};
