import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ className, children, ...props }) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md bg-surface border border-border px-2 py-0.5 text-xs font-medium text-text-secondary',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
