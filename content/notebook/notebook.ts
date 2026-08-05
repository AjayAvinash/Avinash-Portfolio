import { NotebookItem } from '@/types/notebook';

export const placeholderNotebook: NotebookItem[] = [
  {
    id: 'note-1',
    slug: 'designing-for-perceived-performance',
    title: 'Designing for Perceived Performance',
    subtitle: 'Why micro-interactions and layout stability shape user perception of speed',
    date: '2026-02-01',
    readTime: '4 min read',
    category: 'Engineering & UX',
    tags: ['Performance', 'Micro-Interactions', 'UX Engineering'],
    excerpt:
      'Actual latency matters, but perceived speed often governs whether a user feels an interface is snappy or sluggish.',
    content: 'Full essay content placeholder...',
    featured: true,
  },
  {
    id: 'note-2',
    slug: 'scalable-design-token-architecture',
    title: 'Scalable Design Token Architecture',
    subtitle: 'Structuring CSS custom variables for dark mode and dynamic theme engines',
    date: '2026-01-18',
    readTime: '6 min read',
    category: 'Design Systems',
    tags: ['CSS Tokens', 'Scalability', 'Design System'],
    excerpt:
      'How to structure token layers from global primitives to component-scoped aliases without clutter.',
    content: 'Full essay content placeholder...',
    featured: true,
  },
];
