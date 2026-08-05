import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  spacing?: 'compact' | 'normal' | 'relaxed';
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  spacing = 'normal',
  className,
  children,
  ...props
}) => {
  const spacingClasses = {
    compact: 'py-10 lg:py-16',
    normal: 'py-16 lg:py-24',
    relaxed: 'py-24 lg:py-36',
  };

  return (
    <section id={id} className={cn('relative w-full', spacingClasses[spacing], className)} {...props}>
      {children}
    </section>
  );
};
