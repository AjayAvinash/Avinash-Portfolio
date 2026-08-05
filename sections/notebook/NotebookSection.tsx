import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { NotebookCard } from '@/components/notebook/NotebookCard';
import { placeholderNotebook } from '@/content/notebook/notebook';

export const NotebookSection: React.FC = () => {
  return (
    <Section id="notebook">
      <Container size="xl">
        <Heading as="h2" size="xl">
          Product Notebook
        </Heading>
        <p className="mt-2 text-text-secondary">
          Short essays, system teardowns, and design-engineering research notes.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {placeholderNotebook.map((item) => (
            <NotebookCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
