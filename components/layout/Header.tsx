import React from 'react';
import { Container } from '@/components/ui/Container';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <Container size="xl" className="flex h-16 items-center justify-between">
        <span className="font-display text-lg font-bold text-text-primary">
          Product Designer
        </span>
        <nav className="flex space-x-6 text-sm text-text-secondary">
          <a href="#hero" className="hover:text-text-primary transition-colors">Home</a>
          <a href="#thinking" className="hover:text-text-primary transition-colors">Thinking</a>
          <a href="#projects" className="hover:text-text-primary transition-colors">Projects</a>
          <a href="#notebook" className="hover:text-text-primary transition-colors">Notebook</a>
          <a href="#about" className="hover:text-text-primary transition-colors">About</a>
          <a href="#contact" className="hover:text-text-primary transition-colors">Contact</a>
        </nav>
      </Container>
    </header>
  );
};
