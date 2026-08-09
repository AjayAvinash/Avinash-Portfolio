import React from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h2',
  size = 'lg',
  className,
  children,
  ...props
}) => {
  const sizeClasses = {
    sm: 'text-lg font-semibold sm:text-xl',
    md: 'text-xl font-semibold sm:text-2xl',
    lg: 'text-2xl font-bold sm:text-3xl lg:text-4xl',
    xl: 'text-3xl font-extrabold sm:text-4xl lg:text-5xl',
    '2xl': 'text-4xl font-extrabold sm:text-5xl lg:text-6xl',
  };

  return (
    <Component className={cn('section-heading text-text-primary', sizeClasses[size], className)} {...props}>
      {children}
    </Component>
  );
};
