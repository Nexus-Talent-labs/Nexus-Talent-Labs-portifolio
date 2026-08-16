import { 
  Rocket, 
  Briefcase, 
  GraduationCap, 
  Zap, 
  Sparkles, 
  Compass, 
  Award, 
  Building2, 
  ShieldCheck, 
  LucideIcon 
} from 'lucide-react';

export interface PillarItem {
  num: string;
  title: string;
  tag: string;
  desc: string;
  fullDesc: string;
  highlights: string[];
  careerOutcome: string;
  icon: LucideIcon;
}

export const PILLARS_DATA: PillarItem[] = [
  {
    num: '01',
    title: 'Industry-Aligned Curriculum',
    tag: 'Modern Tech Matrix',
    desc: 'Updated with Generative AI, Prompt Engineering, Agentic AI, LLMs, Cloud Native, and Full Stack with AI.',
    fullDesc: 'Our curriculum is continuously benchmarked against Silicon Valley standards and top-tier tech companies. We integrate bleeding-edge developments including Generative AI, Autonomous Agentic Workflows, Retrieval-Augmented Generation (RAG), and Cloud-Native Microservices.',
    highlights: [
      'GenAI & Autonomous AI Agents (LangChain, LlamaIndex, AutoGPT)',
      'Full-Stack Enterprise Architecture with Next.js 14, React & TypeScript',
      'Cloud Native Infrastructure (Docker, Kubernetes, AWS, GCP)',
      'Prompt Engineering & Custom Fine-Tuning Workflows'
    ],
    careerOutcome: 'Graduates possess skills matching senior developer recruitment matrices, enabling immediate contribution to high-scale engineering teams.',
    icon: Rocket
  },
  {
    num: '02',
    title: 'Corporate Hiring Standards',
    tag: 'Enterprise Alignment',
    desc: 'Training designed according to real enterprise recruitment expectations and market demand.',
    fullDesc: 'We mirror the internal technical hiring rubrics of top product firms, Fortune 500 tech divisions, and high-growth startups. Every module is structured to satisfy technical interview loops, system design panels, and coding rounds.',
    highlights: [
      'System Design & Distributed Scalability Prep',
      'Production Code Quality, CI/CD Pipelines & Testing Standards',
      'Enterprise Data Structures & Algorithmic Problem Solving',
      'Mock Technical Round Evaluations with Lead Engineers'
    ],
    careerOutcome: 'Ensures candidates pass initial technical filters and deliver high confidence during multi-stage corporate interviews.',
    icon: Briefcase
  },
  {
    num: '03',
    title: 'Expert Industry Trainers',
    tag: 'Veteran Mentors',
    desc: 'Learn directly from seasoned software architects and tech leads with years of hands-on experience.',
    fullDesc: 'Instruction is delivered exclusively by veteran software architects, principal AI engineers, and engineering managers with extensive real-world experience building large-scale commercial platforms.',
    highlights: [
      'Direct Mentorship from Industry Tech Leads',
      'Real-World Case Studies from Active Enterprise Deployments',
      '1-on-1 Code Audits and Architectural Review Sessions',
      'Industry Networking & Executive Career Guidance'
    ],
    careerOutcome: 'Learners absorb production best practices, architectural decision-making, and industry-grade engineering mindsets.',
    icon: GraduationCap
  },
  {
    num: '04',
    title: 'Practical Learning & Live Labs',
    tag: 'Interactive Sandbox',
    desc: 'Hands-on learning through commercial-grade projects, case studies, and live lab environments.',
    fullDesc: 'Theory is coupled immediately with hands-on application in cloud-hosted live lab environments. Students build multi-tenant applications, AI RAG pipelines, and automated cloud deployments from scratch.',
    highlights: [
      'Cloud-Hosted Interactive Sandbox Environments',
      'Commercial-Grade Production Projects & Open Source Repositories',
      'Real-Time Error Handling, Debugging & Monitoring Drills',
      'Agile Sprint Simulation with GitHub Project Management'
    ],
    careerOutcome: 'Builds a proof-of-work portfolio demonstrating actual engineering execution to hiring managers.',
    icon: Zap
  },
  {
    num: '05',
    title: 'Specialized Future Tech',
    tag: 'AI & Next-Gen',
    desc: 'Master GenAI, Prompt Engineering, RAG, Autonomous AI Agents, and AGI concepts.',
    fullDesc: 'Prepare for the next decade of computing by mastering Next-Gen Artificial Intelligence workflows. Learn to build context-aware AI tools, vector database pipelines, and multi-modal autonomous agentic systems.',
    highlights: [
      'Retrieval-Augmented Generation (RAG) with Vector DBs (Pinecone, Chroma)',
      'Multi-Agent Orchestration & Tool-Calling Agents',
      'Fine-Tuning Open Source LLMs (LLaMA 3, Mistral)',
      'Prompt Security, Guardrails & LLM Reliability'
    ],
    careerOutcome: 'Positions candidates at the forefront of the AI engineering market—one of the fastest-growing and highest-paying career tracks.',
    icon: Sparkles
  },
  {
    num: '06',
    title: 'Personalized Mentoring',
    tag: '1-on-1 Guidance',
    desc: 'Continuous performance tracking, 1-on-1 code reviews, and tailored career direction.',
    fullDesc: 'No student is left behind. Our personalized mentoring ecosystem tracks weekly skill mastery, identifies knowledge gaps, and provides dedicated 1-on-1 coaching sessions.',
    highlights: [
      'Weekly Diagnostic Skill Radar & Progress Tracking',
      '1-on-1 Code Refactoring Sessions with Senior Mentors',
      'Custom Remedial Tracks for Challenging Topics',
      'Personalized Career Path Mapping & Goal Alignment'
    ],
    careerOutcome: 'Eliminates learning bottlenecks and accelerates progression toward senior-level technical competency.',
    icon: Compass
  },
  {
    num: '07',
    title: 'Placement-Focused CRT',
    tag: 'Career Readiness',
    desc: 'Comprehensive quantitative, logical, coding assessment, and technical/HR interview prep.',
    fullDesc: 'Campus Recruitment Training (CRT) delivers complete interview readiness covering Aptitude, Verbal Ability, Technical Assessments, Systems Coding, and Behavioral Communication.',
    highlights: [
      'Timed Quantitative & Analytical Reasoning Simulations',
      'Automated Live Coding & Algorithmic Test Suites',
      'Mock HR & Technical Panel Interviews with Feedback',
      'Resume, Portfolio & LinkedIn Personal Branding'
    ],
    careerOutcome: 'Drastically increases placement conversion rates during campus hiring drives and off-campus recruitment.',
    icon: Award
  },
  {
    num: '08',
    title: 'Institutional Partnering',
    tag: 'Academic Alliance',
    desc: 'Customized learning solutions for colleges, universities, and academic departments.',
    fullDesc: 'We partner closely with engineering colleges, universities, and polytechnics to modernize curricula, upskill faculty, and run structured co-curricular technology bootcamps.',
    highlights: [
      'Customized Co-Curricular & Semester Bootcamps',
      'Faculty Development Programs (FDP) on AI & Cloud',
      'On-Campus Industrial Labs & Hackathon Execution',
      'Institutional Placement Analytics & Outcome Reports'
    ],
    careerOutcome: 'Elevates institutional ranking, student placement percentages, and campus accreditation benchmarks.',
    icon: Building2
  },
  {
    num: '09',
    title: 'Certification-Oriented',
    tag: 'Global Credentials',
    desc: 'Industry-recognized certification pathways that enhance job opportunities globally.',
    fullDesc: 'Our training aligns directly with globally recognized industry certifications from AWS, Google Cloud, Microsoft Azure, Meta, and Docker, giving learners verifiable credentials.',
    highlights: [
      'AWS Certified Solutions Architect & Developer Alignment',
      'Google Cloud & TensorFlow AI Professional Pathways',
      'Meta Full-Stack & React Professional Credentials',
      'Verifiable Digital Certificates & GitHub Badges'
    ],
    careerOutcome: 'Validates expertise on resume screening systems (ATS) and opens international job opportunities.',
    icon: ShieldCheck
  },
  {
    num: '10',
    title: 'Lifelong Growth Focus',
    tag: 'Continuous Success',
    desc: 'Strong foundation in innovation, critical thinking, and continuous professional development.',
    fullDesc: 'We cultivate lifelong learning, technical curiosity, and adaptability. Alumni gain ongoing access to updated learning modules, alumni community networks, and career support.',
    highlights: [
      'Lifetime Access to Updated Curriculum & AI Upgrades',
      'Alumni Peer Community & Tech Guild Access',
      'Ongoing Mid-Career Mentorship & Senior Role Transitions',
      'Exclusive Tech Seminars, Webinars & Masterclasses'
    ],
    careerOutcome: 'Ensures long-term career growth, continuous upskilling, and resilience in a fast-changing tech economy.',
    icon: Zap
  }
];
