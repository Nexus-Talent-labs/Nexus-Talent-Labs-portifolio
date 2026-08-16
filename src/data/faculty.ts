export interface FacultyMember {
  id: string;
  initials: string;
  name: string;
  role: string;
  category: 'Founder & Executive Board' | 'CTO & Tech Leadership' | 'Research Faculty' | 'Industry Mentor';
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
  // ==========================================
  // 1. FOUNDERS & EXECUTIVE GOVERNING BOARD
  // ==========================================
  {
    id: 'founder-1',
    initials: 'RKV',
    name: 'Dr. Rajesh K. Varma',
    role: 'Founder & Chief Education Officer',
    category: 'Founder & Executive Board',
    experience: '18+ Years',
    previousCompany: 'Ex-Director of AI Research & IIT Madras Alumnus',
    specialization: ['AI System Design', 'Neural Architectures', 'EdTech Innovation', 'Enterprise Mentorship'],
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
    bio: 'Pioneered outcome-based tech education models across 140+ corporate partners. Former AI Research Director with 24 international IEEE publications and 3 patents.',
    linkedIn: 'https://linkedin.com',
    coursesTaught: ['AI & Machine Learning Engineering', 'AGI Concepts & Trends'],
    publicationsCount: 24
  },
  {
    id: 'founder-2',
    initials: 'AD',
    name: 'Ananya Deshmukh',
    role: 'Co-Founder & Executive Director of Alliances',
    category: 'Founder & Executive Board',
    experience: '15+ Years',
    previousCompany: 'Former VP of Talent Acquisition at Microsoft & Tech Lead',
    specialization: ['Corporate Hiring Alliances', 'Talent Pipeline Strategy', 'Executive Coaching', 'Tech Recruitment'],
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    bio: 'Architected campus-to-corporate hiring pipelines placing 2,850+ engineers into Silicon Valley startups, product tech firms, and Fortune 500 enterprises.',
    linkedIn: 'https://linkedin.com',
    coursesTaught: ['Campus Recruitment Training (CRT)', 'Executive HR Prep'],
    publicationsCount: 8
  },
  {
    id: 'founder-3',
    initials: 'SK',
    name: 'Dr. Sivarama Krishna',
    role: 'Managing Director & Governing Board Lead',
    category: 'Founder & Executive Board',
    experience: '22+ Years',
    previousCompany: 'Former University Vice-Chancellor & Tech Advisor',
    specialization: ['Academic Governance', 'Institutional MoUs', 'Research Accreditation', 'Global Alliances'],
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
    bio: 'Oversees global university partnerships, NAAC/NIRF academic alignment, and institutional strategy for technical research excellence.',
    linkedIn: 'https://linkedin.com',
    coursesTaught: ['Faculty Development Programs (FDPs)', 'Institutional Strategy'],
    publicationsCount: 31
  },

  // ==========================================
  // 2. CHIEF TECHNOLOGY OFFICER (CTO) & TECH LEADERSHIP
  // ==========================================
  {
    id: 'cto-1',
    initials: 'KR',
    name: 'Karthik Ramanathan',
    role: 'Chief Technology Officer (CTO)',
    category: 'CTO & Tech Leadership',
    experience: '16+ Years',
    previousCompany: 'Former Principal Systems Architect at Google Cloud & Ex-Meta Lead',
    specialization: ['High-Concurrency Distributed Systems', 'LLM Infrastructure', 'Cloud Microservices', 'Compiler Optimization'],
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    bio: 'Leads engineering infrastructure and AI platform architecture at Nexus Talent Labs. Previously built hyper-scale cloud infrastructure at Google and Meta.',
    linkedIn: 'https://linkedin.com',
    coursesTaught: ['C & C++ High Performance', 'REST APIs & AI Microservices'],
    publicationsCount: 15
  },
  {
    id: 'cto-2',
    initials: 'PK',
    name: 'Priya Krishnamurthy',
    role: 'Chief Product Officer (CPO)',
    category: 'CTO & Tech Leadership',
    experience: '13+ Years',
    previousCompany: 'Ex-Director of Product at Stripe & OpenAI Product Fellow',
    specialization: ['Product Strategy', 'Full Stack AI Apps', 'User Experience Systems', 'API Ecosystems'],
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80',
    bio: 'Spearheads curriculum product strategy and hands-on SaaS project suites. Led developer product experiences at Stripe and OpenAI.',
    linkedIn: 'https://linkedin.com',
    coursesTaught: ['AI App Development', 'Product UI/UX & Design Technologies'],
    publicationsCount: 7
  },
  {
    id: 'cto-3',
    initials: 'DC',
    name: 'David Chen',
    role: 'Director of Engineering & Cloud Operations',
    category: 'CTO & Tech Leadership',
    experience: '14+ Years',
    previousCompany: 'Former VP of Infrastructure at Cloudflare & AWS Principal',
    specialization: ['Kubernetes Clusters', 'Zero Trust Cloud', 'Bare-Metal Edge Servers', 'SRE Operations'],
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80',
    bio: 'Directs bare-metal cloud lab operations, hands-on student sandbox servers, and DevOps infrastructure pipelines.',
    linkedIn: 'https://linkedin.com',
    coursesTaught: ['AWS, Azure & GCP Cloud', 'Docker & Kubernetes'],
    publicationsCount: 9
  },

  // ==========================================
  // 3. RESEARCH FACULTY & TECHNICAL MENTORS
  // ==========================================
  {
    id: 'fac-1',
    initials: 'DSJ',
    name: 'Dr. Sarah Jenkins',
    role: 'Head of AI & Quantum Research',
    category: 'Research Faculty',
    experience: '14+ Years',
    previousCompany: 'Former Lead AI Scientist at DeepMind & Stanford AI Alumna',
    specialization: ['Generative AI', 'Large Language Models', 'PyTorch Architecture', 'Computer Vision'],
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80',
    bio: 'Pioneer in Transformer optimization and RAG architectures. Author of 18 IEEE AI papers and advisor to leading Silicon Valley startups.',
    linkedIn: 'https://linkedin.com',
    coursesTaught: ['AI & Machine Learning Engineering', 'Data Science & Predictive Analytics'],
    publicationsCount: 18
  },
  {
    id: 'fac-2',
    initials: 'VR',
    name: 'Vikramaditya Roy',
    role: 'Distinguished Fellow - Systems & Cloud',
    category: 'Research Faculty',
    experience: '12+ Years',
    previousCompany: 'Principal Infrastructure Engineer at AWS Cloud Architecture',
    specialization: ['Kubernetes Internal Architecture', 'eBPF Kernel', 'Multi-Cloud Terraform', 'GitOps'],
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=80',
    bio: 'Engineered mission-critical cloud infrastructure handling 5M+ req/sec. Certified Kubernetes Administrator (CKA) and CNCF speaker.',
    linkedIn: 'https://linkedin.com',
    coursesTaught: ['AWS, Azure & GCP Cloud', 'DevOps & GitOps', 'Docker & Kubernetes'],
    publicationsCount: 6
  },
  {
    id: 'fac-3',
    initials: 'ER',
    name: 'Elena Rostova',
    role: 'Principal Full Stack Architect',
    category: 'Research Faculty',
    experience: '10+ Years',
    previousCompany: 'Senior Staff Engineer at Vercel & Stripe',
    specialization: ['Next.js App Router', 'React Micro-Frontends', 'Distributed Node.js Systems', 'GraphQL'],
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80',
    bio: 'Specialist in hyper-performant client-side state, WebAssembly modules, and enterprise Next.js design systems.',
    linkedIn: 'https://linkedin.com',
    coursesTaught: ['JavaScript & React.js AI Copilots', 'MERN Stack with AI'],
    publicationsCount: 9
  },
  {
    id: 'fac-4',
    initials: 'MV',
    name: 'Marcus Vance',
    role: 'Head of Cybersecurity & Threat Labs',
    category: 'Research Faculty',
    experience: '15+ Years',
    previousCompany: 'Ex-Defense Cyber Analyst & Offensive Security Lead',
    specialization: ['Ethical Hacking', 'Zero-Day Vulnerabilities', 'SOC SIEM Response', 'Cloud Penetration Testing'],
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80',
    bio: 'Discovered 14 CVE vulnerabilities in enterprise cloud frameworks. OSCP, CISSP certified security veteran.',
    linkedIn: 'https://linkedin.com',
    coursesTaught: ['Cloud Security & Compliance'],
    publicationsCount: 12
  },

  // ==========================================
  // 4. INDUSTRY MENTORS & TECHNICAL LEADS
  // ==========================================
  {
    id: 'fac-5',
    initials: 'AS',
    name: 'Aarav Sundaram',
    role: 'Lead Data Scientist & GenAI Fellow',
    category: 'Industry Mentor',
    experience: '9+ Years',
    previousCompany: 'Staff AI Researcher at Google Brain & Meta AI Lab',
    specialization: ['LLM Fine-Tuning', 'Vector Search & RAG', 'Synthetic Data', 'Reinforcement Learning'],
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80',
    bio: 'Spearheaded domain-specific LLM fine-tuning pipelines. Contributor to PyTorch Core and HuggingFace Transformers.',
    linkedIn: 'https://linkedin.com',
    coursesTaught: ['LLMs & RAG', 'Generative AI (GenAI)'],
    publicationsCount: 11
  },
  {
    id: 'fac-6',
    initials: 'MN',
    name: 'Meera Nambiar',
    role: 'Lead UI/UX Product Strategist',
    category: 'Industry Mentor',
    experience: '8+ Years',
    previousCompany: 'Design Lead at Adobe Creative Cloud & Figma Fellow',
    specialization: ['Design Systems', 'Figma Auto Layout 5', 'Micro-Interactions', 'User Research'],
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
    bio: 'Architected global design systems used by millions. Mentor to 500+ product designers across global design agencies.',
    linkedIn: 'https://linkedin.com',
    coursesTaught: ['Figma Masterclass', 'UI/UX Product Design & User Research'],
    publicationsCount: 5
  }
];
