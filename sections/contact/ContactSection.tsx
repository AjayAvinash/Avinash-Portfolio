import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';

export const ContactSection: React.FC = () => {
  return (
    <Section id="contact" spacing="relaxed">
      <Container size="xl" className="text-center">
        <Heading as="h2" size="2xl" className="mx-auto max-w-xl">
          Let’s Build Something Exceptional Together
        </Heading>
        <p className="mt-4 text-text-secondary mx-auto max-w-md">
          Available for product design leadership, design system consulting, and interactive frontend architecture.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button variant="primary" size="lg">
            Get in Touch
          </Button>
        </div>
      </Container>
    </Section>
  );
};
