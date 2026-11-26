export type ServiceCategory = 'all' | 'art' | 'dev' | 'media';

export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  category: Exclude<ServiceCategory, 'all'>;
  tagline: string;
  description: string;
  deliverables: string[];
  tools: string[];
  accent: string;
  badgeColor: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<ServiceCategory, 'all'>;
  discipline: string;
  year: string;
  summary: string;
  metrics: string;
  gradient: string;
  tags: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'art-drawings',
    title: 'Artist & Art Drawings',
    shortTitle: 'Art & Drawings',
    category: 'art',
    tagline: 'Expressive fine art, portraits & hand-drawn originals',
    description:
      'Bespoke graphite, charcoal, ink, and mixed-media drawings crafted with traditional precision and contemporary storytelling.',
    deliverables: [
      'Custom Charcoal & Graphite Portraits',
      'Architectural & Concept Sketches',
      'Canvas Paintings & Line Art',
      'High-Res Print-Ready Scans',
    ],
    tools: ['Charcoal', 'Ink', 'Procreate', 'Fine Canvas'],
    accent: 'from-pink-300/30 via-white/45 to-sky-200/30',
    badgeColor: 'text-pink-600 bg-pink-100/80 border-pink-200',
  },
  {
    id: 'illustrations',
    title: 'Illustrations',
    shortTitle: 'Illustrations',
    category: 'art',
    tagline: 'Editorial, character & brand vector worlds',
    description:
      'Distinctive digital and vector illustrations tailored for books, SaaS brands, album covers, packaging, and storytelling campaigns.',
    deliverables: [
      'Character Design & Mascots',
      'Editorial & Book Illustrations',
      'Custom Brand Iconography',
      'Scalable SVG & Vector Art',
    ],
    tools: ['Illustrator', 'Figma', 'Procreate', 'Vector SVG'],
    accent: 'from-rose-200/35 via-white/45 to-pink-200/30',
    badgeColor: 'text-rose-600 bg-rose-100/80 border-rose-200',
  },
  {
    id: 'web-development',
    title: 'Website Development',
    shortTitle: 'Website Dev',
    category: 'dev',
    tagline: 'Fast, responsive React & TypeScript web experiences',
    description:
      'Modern, SEO-friendly websites and interactive web platforms engineered with React, TypeScript, and Tailwind CSS for speed and conversion.',
    deliverables: [
      'Custom Portfolio & Brand Sites',
      'SaaS Landing Pages & Dashboards',
      'E-Commerce & CMS Integrations',
      'Performance & Accessibility Audits',
    ],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite / Next.js'],
    accent: 'from-sky-300/30 via-white/45 to-cyan-200/30',
    badgeColor: 'text-sky-600 bg-sky-100/80 border-sky-200',
  },
  {
    id: 'app-development',
    title: 'App Development',
    shortTitle: 'App Dev',
    category: 'dev',
    tagline: 'Cross-platform mobile & web applications built to scale',
    description:
      'End-to-end product engineering from interactive UI/UX prototypes to production-ready iOS, Android, and progressive web applications.',
    deliverables: [
      'iOS & Android Mobile Apps',
      'Interactive UI/UX Prototyping',
      'REST / GraphQL API Integration',
      'App Store Deployment & Analytics',
    ],
    tools: ['React Native', 'TypeScript', 'Node.js', 'Firebase'],
    accent: 'from-sky-200/35 via-white/45 to-pink-200/30',
    badgeColor: 'text-sky-700 bg-sky-100/80 border-sky-200',
  },
  {
    id: 'photo-video-editing',
    title: 'Photo & Video Editing',
    shortTitle: 'Photo & Video',
    category: 'media',
    tagline: 'Cinematic color grading, retouching & storytelling cuts',
    description:
      'Studio-grade photo retouching, commercial product photography polish, and dynamic video editing for YouTube, reels, and brand films.',
    deliverables: [
      'Cinematic Color Grading & LUTs',
      'High-End Portrait & Product Retouch',
      'Social Reels, Shorts & Promo Cuts',
      'Motion Graphics & Sound Design',
    ],
    tools: ['Premiere Pro', 'DaVinci Resolve', 'Lightroom', 'After Effects'],
    accent: 'from-cyan-200/30 via-white/45 to-pink-200/30',
    badgeColor: 'text-cyan-700 bg-cyan-100/80 border-cyan-200',
  },
  {
    id: 'ai-video-editing',
    title: 'AI Video Editing',
    shortTitle: 'AI Video Editing',
    category: 'media',
    tagline: 'Next-gen generative visuals, smart pacing & AI VFX',
    description:
      'Cutting-edge AI-assisted video workflows combining generative scene extensions, 4K neural upscaling, auto-captions, and synthetic B-roll.',
    deliverables: [
      'Generative AI Scene & B-Roll',
      'Neural 4K Upscaling & Restoration',
      'AI Voiceover, Dubbing & Captions',
      'Automated Multi-Format Reels',
    ],
    tools: ['Runway', 'Kling / Sora', 'Topaz AI', 'Descript'],
    accent: 'from-pink-300/30 via-white/45 to-sky-300/30',
    badgeColor: 'text-fuchsia-600 bg-pink-100/80 border-pink-200',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'charcoal-series',
    title: 'Monsoon Echoes — Charcoal Series',
    category: 'art',
    discipline: 'Artist & Art Drawings',
    year: '2026',
    summary:
      'A 12-piece hand-drawn charcoal and ink portrait collection exploring light, shadow, and classical South Indian expression.',
    metrics: '12 Originals • Archival Prints',
    gradient: 'from-pink-300/60 via-rose-200/50 to-sky-200/60',
    tags: ['Charcoal', 'Portrait', 'Fine Art'],
  },
  {
    id: 'mythic-illustrations',
    title: 'Aetheris — Editorial & Character Pack',
    category: 'art',
    discipline: 'Illustrations',
    year: '2026',
    summary:
      'Custom vector character system and storybook illustrations created for an independent fantasy anthology and game studio.',
    metrics: '40+ Vector Assets • 4K Print',
    gradient: 'from-rose-300/60 via-pink-200/50 to-sky-200/60',
    tags: ['Character Art', 'Vector', 'Editorial'],
  },
  {
    id: 'lumina-web',
    title: 'Lumina Architecture Web Platform',
    category: 'dev',
    discipline: 'Website Development',
    year: '2026',
    summary:
      'High-conversion portfolio and interactive project estimator built with React, TypeScript, and Tailwind CSS.',
    metrics: '99 Lighthouse • 2.4x Inquiries',
    gradient: 'from-sky-300/60 via-cyan-200/50 to-pink-200/60',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 'pulse-app',
    title: 'CreatorFlow Mobile Companion',
    category: 'dev',
    discipline: 'App Development',
    year: '2026',
    summary:
      'Cross-platform mobile app enabling creators to manage client commissions, review video drafts, and approve milestones.',
    metrics: 'iOS & Android • 4.9★ UX',
    gradient: 'from-sky-300/60 via-blue-200/50 to-rose-200/60',
    tags: ['React Native', 'UI/UX', 'Mobile'],
  },
  {
    id: 'velvet-cinema',
    title: 'Velvet Roast — Brand Film & Stills',
    category: 'media',
    discipline: 'Photo & Video Editing',
    year: '2026',
    summary:
      'Full commercial post-production including DaVinci Resolve film emulation, product retouching, and 60fps launch reels.',
    metrics: '4K Master • 180K+ Organic Views',
    gradient: 'from-cyan-300/60 via-sky-200/50 to-pink-200/60',
    tags: ['DaVinci Resolve', 'Color Grade', 'Retouch'],
  },
  {
    id: 'synth-ai-reel',
    title: 'Nova Horizon — AI Hybrid Commercial',
    category: 'media',
    discipline: 'AI Video Editing',
    year: '2026',
    summary:
      'Blended live-action footage with AI-generated environments, neural rotoscoping, and synchronized multilingual voiceovers.',
    metrics: '3x Faster Turnaround • AI VFX',
    gradient: 'from-pink-300/60 via-fuchsia-200/50 to-sky-300/60',
    tags: ['Generative VFX', 'AI Upscale', 'Reels'],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Concept & Sketch',
    description:
      'We start by understanding your story—sketching visual directions, wireframes, or moodboards before a single line of code or edit begins.',
  },
  {
    step: '02',
    title: 'Design & Prototype',
    description:
      'From hand-drawn compositions and vector illustrations to interactive Figma UI flows and video storyboards, every detail is aligned.',
  },
  {
    step: '03',
    title: 'Build, Edit & Enhance',
    description:
      'Our studio crafts clean TypeScript code, polishes every frame in DaVinci, or integrates AI video workflows for maximum creative impact.',
  },
  {
    step: '04',
    title: 'Launch & Deliver',
    description:
      'You receive production-ready websites, apps, print-ready art files, or 4K video masters—backed by ongoing creative support.',
  },
];
