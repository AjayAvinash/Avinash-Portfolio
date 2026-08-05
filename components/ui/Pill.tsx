import React from 'react';
import { cn } from '@/lib/utils';

interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral';
  children: React.ReactNode;
}

export const Pill: React.FC<PillProps> = ({
  variant = 'neutral',
  className,
  children,
  ...props
}) => {
  const variantClasses = {
    primary: 'bg-primary/10 text-primary border-primary/20',
    secondary: 'bg-secondary/10 text-secondary border-secondary/20',
    accent: 'bg-accent/10 text-accent border-accent/20',
    neutral: 'bg-surface text-text-secondary border-border',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
