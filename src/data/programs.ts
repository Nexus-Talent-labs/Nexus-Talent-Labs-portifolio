export interface CourseProgram {
  id: string;
  title: string;
  category: 'AI & ML' | 'Full Stack with AI' | 'Cloud & DevOps' | 'Data Science' | 'UI/UX Design';
  description: string;
  duration: string;
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  mode: 'Live Online' | 'Hybrid' | 'On-Campus';
  projectsCount: number;
  expectedSalary: string;
  placementRate: string;
  badge: string;
  icon: string;
  modules: string[];
  tools: string[];
  fee: string;
  nextBatch: string;
  popular: boolean;
}

export const PROGRAMS_DATA: CourseProgram[] = [
  {
    id: 'ai-ml-engineering',
    title: 'AI & Machine Learning Engineering',
    category: 'AI & ML',
    description: 'Master Deep Learning, Large Language Models (LLMs), PyTorch, MLOps, Transformer architectures, and Generative AI agents.',
    duration: '6 Months',
    skillLevel: 'Intermediate',
    mode: 'Hybrid',
    projectsCount: 12,
    expectedSalary: '14 - 32 LPA',
    placementRate: '98%',
    badge: 'Flagship Program',
    icon: 'Brain',
    modules: [
      'Advanced Mathematics & Matrix Calculus for AI',
      'Supervised & Unsupervised Machine Learning Algorithms',
      'Deep Neural Networks with PyTorch & TensorFlow',
      'Computer Vision & Convolutional Neural Nets',
      'Natural Language Processing & Transformer Architecture',
      'LLM Fine-tuning (LoRA, QLoRA) & LangChain RAG Pipelines',
      'MLOps, Model Deployment & Triton Inference Server'
    ],
    tools: ['PyTorch', 'TensorFlow', 'Python', 'LangChain', 'HuggingFace', 'Docker', 'Kubernetes', 'MLflow'],
    fee: '₹1,25,000',
    nextBatch: 'August 20, 2026',
    popular: true
  },
  {
    id: 'data-science-mastery',
    title: 'Data Science & Predictive Analytics',
    category: 'Data Science',
    description: 'Transform enterprise big data into high-value business intelligence using Python, SQL, Statistics, PySpark, and Machine Learning.',
    duration: '5 Months',
    skillLevel: 'Beginner',
    mode: 'Live Online',
    projectsCount: 10,
    expectedSalary: '10 - 22 LPA',
    placementRate: '96%',
    badge: 'High Demand',
    icon: 'BarChart',
    modules: [
      'Advanced Statistical Analysis & Hypothesis Testing',
      'Python for Data Science (Pandas, NumPy, Scipy)',
      'SQL Query Optimization & Data Warehousing',
      'Data Storytelling with Tableau & Power BI',
      'Applied Machine Learning & Feature Engineering',
      'Big Data Ecosystem (Apache Spark & PySpark)',
      'Executive Analytics Dashboard Creation'
    ],
    tools: ['Python', 'SQL', 'Pandas', 'Power BI', 'Tableau', 'Spark', 'Scikit-Learn'],
    fee: '₹95,000',
    nextBatch: 'August 25, 2026',
    popular: true
  },
  {
    id: 'python-dev',
    title: 'Python Software Engineering & AI Automation',
    category: 'Full Stack with AI',
    description: 'Build high-concurrency backends, microservices, AI agents, LLM tool-calling APIs, and automated scraping engines in Python 3.12.',
    duration: '4 Months',
    skillLevel: 'Beginner',
    mode: 'Live Online',
    projectsCount: 8,
    expectedSalary: '8 - 18 LPA',
    placementRate: '95%',
    badge: 'AI Powered',
    icon: 'Code',
    modules: [
      'Python Data Structures & OOP Architectural Patterns',
      'Asynchronous Programming with Asyncio & FastAPI',
      'Django Enterprise Web Framework & AI Agents',
      'LangChain & LlamaIndex Vector Integration',
      'PostgreSQL & pgvector Database Schema Design',
      'REST API Design, JWT Authentication & OpenAI Integration'
    ],
    tools: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'PostgreSQL', 'Redis', 'Docker'],
    fee: '₹78,000',
    nextBatch: 'September 1, 2026',
    popular: false
  },
  {
    id: 'java-fullstack',
    title: 'Java Enterprise AI Full Stack Architecture',
    category: 'Full Stack with AI',
    description: 'Architect mission-critical enterprise platforms with Java 21, Spring Boot 3, Spring AI, Vector DBs, Microservices, and Angular/React.',
    duration: '6 Months',
    skillLevel: 'Beginner',
    mode: 'Hybrid',
    projectsCount: 11,
    expectedSalary: '10 - 24 LPA',
    placementRate: '97%',
    badge: 'Enterprise Gold',
    icon: 'Layers',
    modules: [
      'Core & Advanced Java 21 Functional Programming',
      'Spring Boot 3 REST APIs & Spring AI LLM Integration',
      'Microservices Architecture with Spring Cloud Gateway',
      'Kafka Distributed Messaging & Vector Database RAG',
      'Angular/React Frontend Integration with AI Chat Widgets',
      'Docker, Kubernetes & AWS Cloud Deployment'
    ],
    tools: ['Java 21', 'Spring Boot', 'Spring AI', 'Kafka', 'React', 'pgvector', 'Docker'],
    fee: '₹1,10,000',
    nextBatch: 'August 30, 2026',
    popular: true
  },
  {
    id: 'mern-fullstack',
    title: 'MERN & Next.js 14 Full Stack with AI',
    category: 'Full Stack with AI',
    description: 'Master hyper-scalable modern web apps with React 18, Next.js 14 App Router, Vercel AI SDK, LLM Agents, TypeScript, and MongoDB/PostgreSQL.',
    duration: '5 Months',
    skillLevel: 'Beginner',
    mode: 'Live Online',
    projectsCount: 12,
    expectedSalary: '11 - 25 LPA',
    placementRate: '97%',
    badge: 'Most Popular',
    icon: 'Terminal',
    modules: [
      'Modern JavaScript (ESNext) & TypeScript Deep Dive',
      'React 18 Component Architecture & AI Copilot Integration',
      'Next.js 14 App Router, Server Components & Vercel AI SDK',
      'Node.js RESTful APIs & AI Agent Tool Calling',
      'MongoDB & Pinecone/pgvector Schema Optimization',
      'CI/CD Pipelines, Vercel & AWS Deployment'
    ],
    tools: ['React', 'Next.js', 'Vercel AI SDK', 'OpenAI', 'Node.js', 'TypeScript', 'PostgreSQL'],
    fee: '₹98,000',
    nextBatch: 'August 22, 2026',
    popular: true
  },
  {
    id: 'cloud-computing',
    title: 'AWS & Multi-Cloud Solutions Architect',
    category: 'Cloud & DevOps',
    description: 'Design resilient, high-availability multi-cloud infrastructure on AWS, Azure, and GCP with IaC Terraform and security controls.',
    duration: '4 Months',
    skillLevel: 'Intermediate',
    mode: 'Live Online',
    projectsCount: 9,
    expectedSalary: '12 - 26 LPA',
    placementRate: '96%',
    badge: 'AWS Certified',
    icon: 'Cloud',
    modules: [
      'AWS Cloud Networking (VPC, Transit Gateway, Route53)',
      'Serverless Architectures with AWS Lambda & API Gateway',
      'Database Managed Services (RDS, DynamoDB, ElastiCache)',
      'Terraform Infrastructure as Code (IaC)',
      'Cloud Security, IAM Policies & KMS Encryption'
    ],
    tools: ['AWS', 'Terraform', 'Python', 'CloudWatch', 'Docker', 'Linux'],
    fee: '₹88,000',
    nextBatch: 'September 5, 2026',
    popular: false
  },
  {
    id: 'devops-kubernetes',
    title: 'Cloud Native DevOps & Kubernetes Master',
    category: 'Cloud & DevOps',
    description: 'Automate CI/CD pipelines, container orchestration, eBPF network observability, and GitOps with Kubernetes & ArgoCD.',
    duration: '5 Months',
    skillLevel: 'Intermediate',
    mode: 'Hybrid',
    projectsCount: 10,
    expectedSalary: '13 - 28 LPA',
    placementRate: '98%',
    badge: 'CKA Aligned',
    icon: 'Cpu',
    modules: [
      'Linux Kernel Administration & Shell Automation',
      'Docker Multi-Stage Builds & Security Scanning',
      'Kubernetes Cluster Architecture & Helm Charts',
      'GitOps Pipelines with ArgoCD & GitHub Actions',
      'Prometheus, Grafana & ELK Stack Observability'
    ],
    tools: ['Kubernetes', 'Docker', 'ArgoCD', 'Prometheus', 'Grafana', 'Helm', 'Terraform'],
    fee: '₹95,000',
    nextBatch: 'August 28, 2026',
    popular: true
  },
  {
    id: 'ui-ux-design',
    title: 'Product UI/UX & Design Technologies (Figma & Adobe CC)',
    category: 'UI/UX Design',
    description: 'Master world-class product design using Figma, Adobe Illustrator, Adobe Photoshop, Adobe XD, Framer, micro-animations, and enterprise design systems.',
    duration: '4 Months',
    skillLevel: 'Beginner',
    mode: 'Live Online',
    projectsCount: 8,
    expectedSalary: '8 - 18 LPA',
    placementRate: '95%',
    badge: 'Design Tech Master',
    icon: 'Layout',
    modules: [
      'Figma Masterclass, Auto Layout 5 & Component Variants',
      'Adobe Illustrator & Photoshop for Vector Graphics & UI Assets',
      'User Research, Persona Mapping & Usability Testing',
      'Information Architecture & Low-Fi to High-Fi Wireframing',
      'Enterprise Design Systems & Accessible Color Tokens',
      'Interactive Motion Design with Framer, ProtoPie & Lottie'
    ],
    tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD', 'Framer', 'ProtoPie', 'LottieFiles', 'Miro'],
    fee: '₹75,000',
    nextBatch: 'September 12, 2026',
    popular: true
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Business Intelligence',
    category: 'Data Science',
    description: 'Turn raw data into actionable decision-making metrics using SQL, Advanced Excel, Python, Power BI, and Tableau dashboards.',
    duration: '4 Months',
    skillLevel: 'Beginner',
    mode: 'Live Online',
    projectsCount: 8,
    expectedSalary: '7 - 15 LPA',
    placementRate: '94%',
    badge: 'Fast Track',
    icon: 'TrendingUp',
    modules: [
      'Advanced Excel Data Modeling & Pivot Tables',
      'SQL Query Optimization & Data Cleaning',
      'Python Pandas & Data Analysis Foundations',
      'Power BI Data Visualization & DAX Expressions',
      'Executive KPI Storytelling & Stakeholder Reports'
    ],
    tools: ['SQL', 'Power BI', 'Excel', 'Python', 'Tableau'],
    fee: '₹68,000',
    nextBatch: 'September 2, 2026',
    popular: false
  }
];
