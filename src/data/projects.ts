export interface StudentProject {
  id: string;
  title: string;
  category: 'AI / ML' | 'Full Stack' | 'Cloud / DevOps' | 'Cybersecurity';
  description: string;
  image: string;
  techStack: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Enterprise';
  duration: string;
  githubUrl: string;
  liveDemoUrl: string;
  builtBy: {
    name: string;
    avatar: string;
    batch: string;
  };
  stars: number;
}

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: 'proj-nexus-rag',
    title: 'Nexus Intelligence: Autonomous RAG Code Reviewer',
    category: 'AI / ML',
    description: 'AI engine that automatically reviews GitHub PRs using AST parsing, vector search over codebase embeddings, and fine-tuned Llama 3 model.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    techStack: ['PyTorch', 'LangChain', 'Pinecone', 'Next.js', 'FastAPI'],
    difficulty: 'Enterprise',
    duration: '4 Weeks',
    githubUrl: 'https://github.com',
    liveDemoUrl: 'https://demo.com',
    builtBy: {
      name: 'Vikram Sethi & Team',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
      batch: 'AI Cohort #12'
    },
    stars: 342
  },
  {
    id: 'proj-hyper-mesh',
    title: 'HyperMesh: Zero-Trust Cloud Kubernetes Mesh',
    category: 'Cloud / DevOps',
    description: 'eBPF-powered network observability and micro-segmentation tool for multi-cluster EKS & GKE setups with automated MTLS.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
    techStack: ['Go', 'Kubernetes', 'eBPF', 'Terraform', 'Grafana'],
    difficulty: 'Advanced',
    duration: '3 Weeks',
    githubUrl: 'https://github.com',
    liveDemoUrl: 'https://demo.com',
    builtBy: {
      name: 'Kavya Raman',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80',
      batch: 'DevOps Cohort #08'
    },
    stars: 215
  },
  {
    id: 'proj-pulse-trade',
    title: 'PulseTrade: Real-Time Algorithmic Trading Terminal',
    category: 'Full Stack',
    description: 'High-frequency trading interface with sub-10ms WebSockets order book matching, WebAssembly charts, and Next.js 14 SSR.',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&auto=format&fit=crop&q=80',
    techStack: ['Next.js 14', 'TypeScript', 'Rust', 'WebAssembly', 'Tailwind'],
    difficulty: 'Enterprise',
    duration: '5 Weeks',
    githubUrl: 'https://github.com',
    liveDemoUrl: 'https://demo.com',
    builtBy: {
      name: 'Siddharth Rao',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80',
      batch: 'Full Stack Cohort #15'
    },
    stars: 489
  },
  {
    id: 'proj-sentinel-eye',
    title: 'SentinelEye: Cloud Threat SIEM Visualizer',
    category: 'Cybersecurity',
    description: 'Automated SOC incident response dashboard tracking honeypot intrusions in real time with anomaly scoring.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    techStack: ['Python', 'Elasticsearch', 'Docker', 'React', 'D3.js'],
    difficulty: 'Advanced',
    duration: '3 Weeks',
    githubUrl: 'https://github.com',
    liveDemoUrl: 'https://demo.com',
    builtBy: {
      name: 'Neha Kapoor',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80',
      batch: 'Cyber Cohort #05'
    },
    stars: 180
  },
  {
    id: 'proj-quantum-sim',
    title: 'QuantaLab: Interactive Qubit Circuit Simulator',
    category: 'AI / ML',
    description: 'Browser-based quantum computing simulator for visualization of Grover search algorithm and Shor quantum gate matrices.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=80',
    techStack: ['Qiskit', 'Python', 'Three.js', 'React', 'Tailwind'],
    difficulty: 'Advanced',
    duration: '4 Weeks',
    githubUrl: 'https://github.com',
    liveDemoUrl: 'https://demo.com',
    builtBy: {
      name: 'Arjun Deshmukh',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80',
      batch: 'AI Cohort #11'
    },
    stars: 290
  },
  {
    id: 'proj-dev-forge',
    title: 'DevForge: Collaborative Cloud IDE & Terminal',
    category: 'Full Stack',
    description: 'Multiplayer code editor with real-time CRDT sync, instant container dev environments, and AI inline autocompletion.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    techStack: ['Next.js', 'Node.js', 'Docker API', 'Monaco Editor', 'Socket.io'],
    difficulty: 'Enterprise',
    duration: '6 Weeks',
    githubUrl: 'https://github.com',
    liveDemoUrl: 'https://demo.com',
    builtBy: {
      name: 'Rishabh & Maya',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      batch: 'Full Stack Cohort #14'
    },
    stars: 560
  }
];
