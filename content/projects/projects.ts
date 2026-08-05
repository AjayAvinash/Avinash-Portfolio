import { Project } from '@/types/project';

export const placeholderProjects: Project[] = [
  {
    id: 'proj-1',
    slug: 'adaptive-design-system',
    title: 'Next-Gen Adaptive Design System',
    subtitle: 'Building a cross-platform component framework for dynamic visual experiences',
    comic: {
      title: 'The Inconsistency Chaos',
      description: 'A visual comic strip capturing the challenge of fragmented UI components.',
      frames: [
        {
          id: 'frame-1',
          title: 'Panel 1: The Multi-Platform Maze',
          caption: 'Designers and developers speaking different UI languages.',
        },
        {
          id: 'frame-2',
          title: 'Panel 2: Token Alignment',
          caption: 'Bridging design tokens across React, iOS, and Web Canvas.',
        },
      ],
    },
    approach: {
      title: 'Systematic Architecture First',
      description:
        'Established single-source-of-truth tokens for colors, motion, typography, and layout bounds.',
      keyTakeaways: ['Token unification', 'Automated export pipelines', 'Accessibility compliance'],
    },
    discovery: {
      title: 'User Friction Points',
      description:
        'Audited 400+ screens to identify duplicated patterns and inconsistent interaction states.',
    },
    solution: {
      title: 'Modular Token Engine',
      description:
        'Engineered an atomic component suite supporting dynamic themes and high-frequency animations.',
    },
    reflection: {
      title: 'Impact & Takeaways',
      description:
        'Reduced design-to-code iteration cycles by 45% while enabling effortless theme scalability.',
    },
    images: ['/illustrations/placeholder-project-1.svg'],
    tags: ['Design Systems', 'Architecture', 'TypeScript', 'Tailwind CSS'],
    featured: true,
  },
  {
    id: 'proj-2',
    slug: 'interactive-canvas-studio',
    title: 'Interactive Spatial Workspace',
    subtitle: 'Empowering product teams to visualize workflows with real-time vector canvas',
    approach: {
      title: 'Human-Centered Canvas Interaction',
      description:
        'Focused on low-latency rendering, fluid gesture controls, and intuitive spatial grouping.',
    },
    discovery: {
      title: 'Spatial Cognition Research',
      description:
        'Observed how creators map complex product decisions visually vs textually.',
    },
    solution: {
      title: 'High-Performance Render Engine',
      description:
        'Leveraged GPU-backed vector layers combined with micro-interactions for seamless canvas zooming.',
    },
    reflection: {
      title: 'Product Growth',
      description:
        'Increased user session engagement by 60% through fluid spatial manipulation.',
    },
    images: ['/illustrations/placeholder-project-2.svg'],
    tags: ['UX Research', 'Interaction Design', 'Rive', 'GSAP'],
    featured: true,
  },
];
