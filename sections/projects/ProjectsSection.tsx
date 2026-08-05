import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { placeholderProjects } from '@/content/projects/projects';

export const ProjectsSection: React.FC = () => {
  return (
    <Section id="projects">
      <Container size="xl">
        <Heading as="h2" size="xl">
          Featured Projects
        </Heading>
        <p className="mt-2 text-text-secondary">
          Selected case studies featuring system architecture, user comics, and design solutions.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {placeholderProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
