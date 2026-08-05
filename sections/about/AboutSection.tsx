import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';

export const AboutSection: React.FC = () => {
  return (
    <Section id="about">
      <Container size="xl">
        <Heading as="h2" size="xl">
          About Me
        </Heading>
        <p className="mt-2 text-text-secondary max-w-2xl">
          I operate at the intersection of product design, interaction architecture, and frontend systems engineering.
        </p>

        <Card className="mt-8 p-8">
          <p className="text-sm text-text-secondary leading-relaxed">
            With background in design systems, animation state machines, and component architecture, I build interfaces that bridge visual beauty with rigorous engineering standards.
          </p>
        </Card>
      </Container>
    </Section>
  );
};
