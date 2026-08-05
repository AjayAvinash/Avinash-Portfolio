import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  hoverable = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-surface/60 p-6 backdrop-blur-sm transition-all duration-normal',
        hoverable && 'hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
