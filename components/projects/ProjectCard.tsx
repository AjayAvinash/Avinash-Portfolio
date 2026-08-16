import React from 'react';
import Link from 'next/link';
import { Project } from '@/types/project';
import { Card } from '@/components/ui/Card';
import { Heading } from '@/components/ui/Heading';
import { Tag } from '@/components/ui/Tag';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <Card hoverable className="relative flex flex-col justify-between h-full">
        <div>
          <div className="flex items-start justify-between">
            <Heading as="h3" size="md" className="group-hover:text-primary transition-colors">
              {project.title}
            </Heading>
            <ArrowUpRight className="h-5 w-5 text-text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary flex-shrink-0 ml-2" />
          </div>
          <p className="mt-2 text-sm text-text-secondary line-clamp-2">{project.subtitle}</p>

          {project.comic && (
            <div className="mt-4 rounded-lg bg-background/50 p-3 border border-border/50 text-xs text-text-muted">
              <span className="font-semibold text-accent">Comic Feature:</span> {project.comic.title}
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </Card>
    </Link>
  );
};
