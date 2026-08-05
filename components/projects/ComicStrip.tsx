import React from 'react';
import { ProjectComic } from '@/types/project';
import { Card } from '@/components/ui/Card';

interface ComicStripProps {
  comic?: ProjectComic;
  className?: string;
}

export const ComicStrip: React.FC<ComicStripProps> = ({ comic, className = '' }) => {
  if (!comic) {
    return (
      <Card className={`border-dashed text-center p-8 ${className}`}>
        <p className="text-sm text-text-muted">
          ComicStrip Component Placeholder — No comic data provided.
        </p>
      </Card>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="border-b border-border pb-2">
        <h4 className="font-display font-semibold text-text-primary">{comic.title}</h4>
        <p className="text-xs text-text-secondary">{comic.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {comic.frames.map((frame) => (
          <Card key={frame.id} className="bg-background/80">
            <h5 className="text-xs font-semibold text-accent">{frame.title}</h5>
            <p className="mt-1 text-xs text-text-secondary">{frame.caption}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};
