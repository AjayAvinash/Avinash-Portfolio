import React from 'react';
import { cn } from '@/lib/utils';

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export const Tag: React.FC<TagProps> = ({ className, children, ...props }) => {
  return (
    <span
      className={cn(
        'inline-flex items-center text-xs font-mono text-text-muted bg-surface/50 border border-border/50 px-2 py-0.5 rounded',
        className
      )}
      {...props}
    >
      #{children}
    </span>
  );
};
