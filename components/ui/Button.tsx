import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-normal focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none';

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-hover shadow-sm',
    secondary: 'bg-surface text-text-primary hover:bg-surface/80 border border-border',
    outline: 'border border-border text-text-primary hover:bg-surface/50',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-surface/30',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
