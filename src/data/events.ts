export interface InstituteEvent {
  id: string;
  title: string;
  category: 'Hackathon' | 'Workshop' | 'Seminar' | 'Bootcamp';
  date: string;
  time: string;
  speaker: string;
  image: string;
  description: string;
  location: string;
  registrationsCount: number;
  featured: boolean;
}

export const INSTITUTE_EVENTS: InstituteEvent[] = [
  {
    id: 'evt-ai-hackathon-2026',
    title: 'Nexus National AI & Autonomous RAG Hackathon',
    category: 'Hackathon',
    date: 'August 28 - 30, 2026',
    time: '48-Hour Live Sprint',
    speaker: 'Keynote by Stanford AI Researchers & Google Engineers',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80',
    description: 'Build cutting-edge agentic AI apps and RAG tools. ₹5,00,000 in cash prizes, direct placement interview invites from Google & Microsoft.',
    location: 'Hybrid (Nexus Innovation Arena & Online)',
    registrationsCount: 1420,
    featured: true
  },
  {
    id: 'evt-k8s-cloud-workshop',
    title: 'Zero to Production: Kubernetes & GitOps Masterclass',
    category: 'Workshop',
    date: 'September 5, 2026',
    time: '10:00 AM - 4:00 PM IST',
    speaker: 'Vikramaditya Roy (Principal AWS Cloud Fellow)',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80',
    description: 'Hands-on session deploying multi-region EKS clusters, setting up Helm, ArgoCD, and automated canary deployments.',
    location: 'Live Interactive Virtual Arena',
    registrationsCount: 680,
    featured: false
  },
  {
    id: 'evt-nextjs14-architecture',
    title: 'Building Sub-50ms Next.js 14 Apps at Scale',
    category: 'Seminar',
    date: 'September 12, 2026',
    time: '6:00 PM - 8:00 PM IST',
    speaker: 'Elena Rostova (Former Staff Vercel Engineer)',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
    description: 'Deep dive into Next.js App Router Server Components, Edge caching, Streaming SSR, and bundle size reduction techniques.',
    location: 'Nexus Auditorium & YouTube Live',
    registrationsCount: 950,
    featured: false
  }
];
