import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { placeholderProjects } from '@/content/projects/projects';
import { ProjectDetailPage } from '@/components/projects/ProjectDetailPage';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return placeholderProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = placeholderProjects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Avinash`,
    description: project.scope,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = placeholderProjects.find((p) => p.slug === slug);

  if (!project) notFound();

  return <ProjectDetailPage project={project} />;
}
