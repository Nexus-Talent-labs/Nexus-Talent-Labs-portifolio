export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  previousCompany: string;
  specialization: string[];
  photo: string;
  bio: string;
  linkedIn: string;
  coursesTaught: string[];
  publicationsCount: number;
}

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'fac-1',
    name: 'Dr. Sarah Jenkins',
    role: 'Head of AI & Quantum Research',
    experience: '14+ Years',
    previousCompany: 'Former Lead AI Scientist at DeepMind & Stanford AI Alumna',
    specialization: ['Generative AI', 'Large Language Models', 'PyTorch Architecture', 'Computer Vision'],
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    bio: 'Pioneer in Transformer optimization and RAG architectures. Author of 18 IEEE AI papers and advisor to leading Silicon Valley startups.',
    linkedIn: 'https://linkedin.com',
    coursesTaught: ['AI & Machine Learning Engineering', 'Data Science & Predictive Analytics'],
    publicationsCount: 18
  },
  {
    id: 'fac-2',
    name: 'Vikramaditya Roy',
    role: 'Distinguished Fellow - Systems & Cloud',
    experience: '12+ Years',
    previousCompany: 'Principal Infrastructure Engineer at AWS Cloud Architecture',
    specialization: ['Kubernetes Internal Architecture', 'eBPF Kernel', 'Multi-Cloud Terraform', 'GitOps'],
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    bio: 'Engineered mission-critical cloud infrastructure handling 5M+ req/sec. Certified Kubernetes Administrator (CKA) and CNCF speaker.',
    linkedIn: 'https://linkedin.com',
    coursesTaught: ['Cloud Native DevOps & Kubernetes Master'],
    publicationsCount: 6
  },
  {
    id: 'fac-3',
    name: 'Elena Rostova',
    role: 'Principal Full Stack Architect',
    experience: '10+ Years',
    previousCompany: 'Senior Staff Engineer at Vercel & Stripe',
    specialization: ['Next.js App Router', 'React Micro-Frontends', 'Distributed Node.js Systems', 'GraphQL'],
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
    bio: 'Specialist in hyper-performant client-side state, WebAssembly modules, and enterprise Next.js design systems.',
    linkedIn: 'https://linkedin.com',
    coursesTaught: ['Full Stack MERN & Next.js Architecture'],
    publicationsCount: 9
  },
  {
    id: 'fac-4',
    name: 'Marcus Vance',
    role: 'Head of Cybersecurity & Threat Labs',
    experience: '15+ Years',
    previousCompany: 'Ex-Defense Cyber Analyst & Offensive Security Lead',
    specialization: ['Ethical Hacking', 'Zero-Day Vulnerabilities', 'SOC SIEM Response', 'Cloud Penetration Testing'],
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    bio: 'Discovered 14 CVE vulnerabilities in enterprise cloud frameworks. OSCP, CISSP certified security veteran.',
    linkedIn: 'https://linkedin.com',
    coursesTaught: ['Cyber Security & Ethical Hacking Expert'],
    publicationsCount: 12
  }
];
