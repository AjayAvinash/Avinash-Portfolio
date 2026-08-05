import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';

export const ThinkingSection: React.FC = () => {
  return (
    <Section id="thinking">
      <Container size="xl">
        <Heading as="h2" size="xl">
          How I Think
        </Heading>
        <p className="mt-2 text-text-secondary">
          Product design approach, discovery methodologies, and engineering alignment principles.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-display font-semibold text-primary">01. Problem First</h3>
            <p className="mt-2 text-xs text-text-secondary">
              Deconstructing business intent and user friction before sketching any UI framework.
            </p>
          </Card>
          <Card>
            <h3 className="font-display font-semibold text-secondary">02. Systems Scale</h3>
            <p className="mt-2 text-xs text-text-secondary">
              Building reusable tokens, atomic components, and predictable design contracts.
            </p>
          </Card>
          <Card>
            <h3 className="font-display font-semibold text-accent">03. Interactive Delight</h3>
            <p className="mt-2 text-xs text-text-secondary">
              Employing micro-animations, Rive state machines, and GSAP motion to enchant users.
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
