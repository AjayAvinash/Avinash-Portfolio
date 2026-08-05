import React from 'react';
import { Container } from '@/components/ui/Container';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-border/40 py-8 bg-surface/30">
      <Container size="xl" className="flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted">
        <p>© {new Date().getFullYear()} Product Designer Portfolio. Modular Architecture Foundation.</p>
        <p className="mt-2 sm:mt-0 font-mono">Built with Next.js, Tailwind CSS, GSAP & Rive</p>
      </Container>
    </footer>
  );
};
