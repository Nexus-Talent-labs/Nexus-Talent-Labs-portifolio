export interface CourseModuleItem {
  id: string;
  title: string;
  category: 'AI & ML' | 'Full Stack with AI' | 'Cloud & DevOps' | 'UI/UX Design';
  badge: string;
  desc: string;
  fullDesc: string;
  image: string;
  duration: string;
  skillLevel: string;
  curriculum: string[];
  tools: string[];
  projects: string[];
  careerOutcome: string;
}

export const ALL_COURSE_MODULES: CourseModuleItem[] = [
  // ==========================================
  // DOMAIN 1: AI & ML (8 MODULES)
  // ==========================================
  {
    id: 'generative-ai',
    title: 'Generative AI (GenAI)',
    category: 'AI & ML',
    badge: 'Core AI Track',
    desc: 'Master Transformer architectures, Diffusion Models, GANs, Neural Image & Text Synthesis, and GenAI production deployment.',
    fullDesc: 'Generative AI is revolutionizing technology industries. This comprehensive curriculum covers Transformer models, Attention Mechanisms, VAEs, Stable Diffusion, Audio/Video synthesis, and deploying enterprise GenAI microservices.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80',
    duration: '6 Weeks (48 Hours)',
    skillLevel: 'Intermediate',
    curriculum: [
      'Foundations of Neural Networks & Attention Mechanisms',
      'Transformer Architecture (Encoder, Decoder, Self-Attention)',
      'Diffusion Models & Image Generation (Stable Diffusion, Midjourney API)',
      'Multimodal Generative Models (Text-to-Image, Audio & Video)',
      'Deploying GenAI Models with TensorRT & Triton Inference Server'
    ],
    tools: ['PyTorch', 'HuggingFace', 'Stable Diffusion', 'TensorRT', 'Python'],
    projects: ['Multimodal Text-to-Image Generator App', 'Enterprise GenAI Microservice'],
    careerOutcome: 'Qualify for Generative AI Engineer, AI Solutions Architect, and Machine Learning Researcher roles.'
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    category: 'AI & ML',
    badge: 'High Demand',
    desc: 'Master Few-shot, Chain-of-Thought, Tree-of-Thoughts, System Prompts, Guardrails, and LLM steering techniques.',
    fullDesc: 'Prompt Engineering is the critical skill for unlocking maximum intelligence from LLMs. Learn systemic prompt design, Few-shot learning, Chain-of-Thought reasoning, ReAct prompting, automated prompt optimization, and AI safety guardrails.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    duration: '4 Weeks (32 Hours)',
    skillLevel: 'Beginner to Intermediate',
    curriculum: [
      'System Prompt Architecture & Context Window Management',
      'Few-Shot & Zero-Shot In-Context Learning Strategies',
      'Chain-of-Thought (CoT) & Tree-of-Thoughts (ToT) Reasoning',
      'Automated Prompt Tuning (DSPy & Guidance Frameworks)',
      'LLM Safety, Jailbreak Prevention & Guardrail Implementation'
    ],
    tools: ['OpenAI API', 'DSPy', 'NeMo Guardrails', 'Anthropic Claude', 'LangChain'],
    projects: ['Automated Code Generation Prompt Suite', 'Enterprise Guardrail Enforcement System'],
    careerOutcome: 'Become an AI Prompt Engineer, AI Operations Specialist, or LLM Integration Analyst.'
  },
  {
    id: 'ai-agents',
    title: 'AI Agents & Agentic AI',
    category: 'AI & ML',
    badge: 'Autonomous AI',
    desc: 'Build multi-agent autonomous teams, tool-calling loops, memory persistence, and self-healing agentic workflows.',
    fullDesc: 'Move beyond basic chatbots to Autonomous Agentic AI systems. Learn to build goal-oriented AI agents equipped with web tools, API execution capabilities, vector memory, multi-agent orchestration (CrewAI, AutoGen), and human-in-the-loop controls.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80',
    duration: '6 Weeks (48 Hours)',
    skillLevel: 'Advanced',
    curriculum: [
      'Agentic System Design & ReAct Loop Execution',
      'Tool Calling, Web Scraping & Database API Integration',
      'Long-Term & Short-Term Vector Memory Persistence',
      'Multi-Agent Orchestration with CrewAI & Microsoft AutoGen',
      'Human-in-the-Loop Safeguards & Autonomous Error Recovery'
    ],
    tools: ['CrewAI', 'AutoGen', 'LangGraph', 'Python', 'Qdrant'],
    projects: ['Autonomous Market Research Agent Squad', 'Self-Healing DevOps Remediation Agent'],
    careerOutcome: 'Prepare for AI Agent Architect, Autonomous Systems Lead, and Senior AI Developer positions.'
  },
  {
    id: 'llms-rag',
    title: 'LLMs & RAG',
    category: 'AI & ML',
    badge: 'Enterprise Standard',
    desc: 'Architect Retrieval-Augmented Generation (RAG) pipelines, Vector DBs, Hybrid Search, and Model Fine-tuning.',
    fullDesc: 'Retrieval-Augmented Generation (RAG) allows LLMs to query enterprise knowledge bases securely without hallucination. Master chunking strategies, embedding models, vector databases, hybrid BM25 + dense retrieval, and LoRA/QLoRA fine-tuning.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    duration: '6 Weeks (48 Hours)',
    skillLevel: 'Intermediate to Advanced',
    curriculum: [
      'Document Parsing, Tokenization & Chunking Strategies',
      'Vector Embedding Models & Similarity Metrics (Cosine, Dot)',
      'Vector Databases (Pinecone, ChromaDB, Weaviate, pgvector)',
      'Advanced RAG: Re-ranking, HyDE, GraphRAG & Parent-Child Retrieval',
      'Open-Source LLM Fine-Tuning with LLaMA 3, QLoRA & Unsloth'
    ],
    tools: ['Pinecone', 'ChromaDB', 'LlamaIndex', 'Unsloth', 'LLaMA 3'],
    projects: ['Enterprise PDF Knowledge Base RAG System', 'Custom LLaMA 3 Domain Fine-Tuned Model'],
    careerOutcome: 'Qualify as RAG Systems Architect, Search AI Engineer, or LLM Infrastructure Lead.'
  },
  {
    id: 'ai-app-dev',
    title: 'AI App Development',
    category: 'AI & ML',
    badge: 'Full Stack AI',
    desc: 'Build full-stack AI web & mobile applications integrating Vercel AI SDK, Next.js 14, Streaming APIs, and OpenAI.',
    fullDesc: 'Transform AI models into commercial web & mobile applications. Master streaming responses, Vercel AI SDK, Next.js Server Actions, Firebase AI Logic, and reactive UI component architectures.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    duration: '5 Weeks (40 Hours)',
    skillLevel: 'Intermediate',
    curriculum: [
      'Full-Stack AI Application Architecture with Next.js 14',
      'Vercel AI SDK & Real-Time Server-Sent Streaming UI',
      'Integrating OpenAI, Anthropic, & Google Gemini APIs',
      'Managing State, Optimistic UI & Local Storage Sync',
      'Production Deployment, Caching & Usage Rate-Limiting'
    ],
    tools: ['Next.js 14', 'Vercel AI SDK', 'TypeScript', 'Tailwind CSS', 'OpenAI'],
    projects: ['SaaS AI Workspace with Real-Time Streaming', 'Mobile AI Copilot Application'],
    careerOutcome: 'Become a Full Stack AI Engineer, AI Product Developer, or Tech Startup Founder.'
  },
  {
    id: 'ai-automation',
    title: 'AI Intelligent Automation',
    category: 'AI & ML',
    badge: 'Workflow Tech',
    desc: 'Automate business workflows using AI, Zapier, n8n, Python RPA, document OCR extraction, and API webhooks.',
    fullDesc: 'Replace repetitive manual tasks with Intelligent Automation. Learn n8n workflow engines, Python RPA scripts, document OCR processing, automated email routing, and AI-driven business process optimization.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
    duration: '4 Weeks (32 Hours)',
    skillLevel: 'Beginner to Intermediate',
    curriculum: [
      'Intelligent Business Process Automation Architecture',
      'n8n & Zapier Advanced AI Workflow Orchestration',
      'Document OCR Extraction & Structured JSON Parsing',
      'Automated Email & Customer Support AI Dispatchers',
      'Monitoring, Error Handling & Logging Pipelines'
    ],
    tools: ['n8n', 'Zapier', 'Python', 'Tesseract OCR', 'Make.com'],
    projects: ['Automated Invoice Processing & ERP Sync', 'AI Executive Assistant Workflow Engine'],
    careerOutcome: 'Prepare for Automation Engineer, RPA Developer, and AI Workflow Specialist roles.'
  },
  {
    id: 'agi-concepts',
    title: 'AGI Concepts & Trends',
    category: 'AI & ML',
    badge: 'Future Tech',
    desc: 'Explore Artificial General Intelligence (AGI) theories, World Models, Q* algorithms, Neuro-symbolic AI, and scaling laws.',
    fullDesc: 'Stay ahead of the next frontier of computing: Artificial General Intelligence (AGI). Understand compute scaling laws, World Models (Sora, JEPA), Neuro-symbolic reasoning, synthetic data generation, and future AI paradigms.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
    duration: '4 Weeks (32 Hours)',
    skillLevel: 'Advanced',
    curriculum: [
      'Compute Scaling Laws & Emergent Capabilities',
      'World Models & Physical Simulation AI (JEPA, Sora)',
      'Neuro-Symbolic Reasoning & Hybrid Cognitive Architectures',
      'Synthetic Data Generation & Self-Improving AI Loops',
      'Roadmap to Artificial General Intelligence (AGI)'
    ],
    tools: ['Python', 'PyTorch', 'Synthetic Data Pipelines', 'JAX'],
    projects: ['World Model Simulation Sandbox', 'Emergent Reasoning Benchmark Suite'],
    careerOutcome: 'Become an AI Futurist, Research Scientist, or Strategic AI Consultant.'
  },
  {
    id: 'responsible-ai',
    title: 'Responsible AI & Ethics',
    category: 'AI & ML',
    badge: 'Governance & Safety',
    desc: 'Master AI alignment, bias mitigation, EU AI Act compliance, copyright safety, privacy controls, and red-teaming.',
    fullDesc: 'As AI transforms industry, governance and safety are paramount. Master AI alignment, model red-teaming, bias detection, privacy protection (Differential Privacy), EU AI Act regulations, and enterprise AI auditing.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
    duration: '4 Weeks (32 Hours)',
    skillLevel: 'All Levels',
    curriculum: [
      'AI Alignment & Reinforcement Learning from Human Feedback (RLHF)',
      'Algorithmic Bias Detection & Mitigation Frameworks',
      'Red-Teaming & Adversarial Prompting Audits',
      'EU AI Act, NIST AI Risk Management & Compliance Standards',
      'Data Privacy, Copyright Protection & Enterprise Security'
    ],
    tools: ['Fairlearn', 'AIF360', 'NIST Framework', 'Presidio'],
    projects: ['Enterprise AI Ethics & Bias Audit Report', 'Model Red-Teaming Safety Assessment'],
    careerOutcome: 'Qualify for AI Ethics Officer, AI Risk & Compliance Manager, or Governance Specialist.'
  },

  // ==========================================
  // DOMAIN 2: FULL STACK WITH AI (8 MODULES)
  // ==========================================
  {
    id: 'python-ai-automation',
    title: 'Python & AI Automation',
    category: 'Full Stack with AI',
    badge: 'Core Programming',
    desc: 'Build high-concurrency backends, microservices, AI agents, LLM tool-calling APIs, and automated scraping engines in Python 3.12.',
    fullDesc: 'Master modern Python 3.12 from OOP to async FastAPI backends, web scrapers, and AI tool integrations.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&auto=format&fit=crop&q=80',
    duration: '6 Weeks (48 Hours)',
    skillLevel: 'Beginner to Intermediate',
    curriculum: [
      'Python 3.12 Advanced Data Structures & Generators',
      'Asynchronous Programming with Asyncio & FastAPI',
      'Web Scraping & Automation with Playwright & BeautifulSoup',
      'Database ORM with SQLAlchemy & PostgreSQL',
      'Integrating OpenAI & LangChain into Python Backends'
    ],
    tools: ['Python', 'FastAPI', 'Playwright', 'PostgreSQL', 'Docker'],
    projects: ['Async Web Scraping Pipeline', 'FastAPI AI Microservice'],
    careerOutcome: 'Qualify for Python Developer, Backend AI Specialist, and Automation Engineer roles.'
  },
  {
    id: 'c-cpp-performance',
    title: 'C & C++ High Performance',
    category: 'Full Stack with AI',
    badge: 'Low-Level Systems',
    desc: 'Master memory management, pointers, multi-threading, CUDA GPU acceleration, and low-latency system architectures.',
    fullDesc: 'Deep dive into systems programming with C and modern C++20 for high-frequency trading, game engines, and CUDA GPU kernels.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=80',
    duration: '8 Weeks (64 Hours)',
    skillLevel: 'Intermediate to Advanced',
    curriculum: [
      'Pointers, Dynamic Memory & Cache Alignment in C',
      'Modern C++20 Concepts, Smart Pointers & Move Semantics',
      'POSIX Multi-Threading, Mutexes & Atomic Operations',
      'CUDA C++ Programming for GPU Acceleration',
      'Optimizing Low-Latency Algorithmic Execution'
    ],
    tools: ['GCC/Clang', 'C++20', 'CUDA', 'Valgrind', 'CMake'],
    projects: ['High-Speed In-Memory Cache Engine', 'CUDA GPU Matrix Multiplier'],
    careerOutcome: 'Prepare for Systems Engineer, Low-Latency C++ Developer, and CUDA Acceleration Specialist.'
  },
  {
    id: 'js-react-copilots',
    title: 'JavaScript & React.js AI Copilots',
    category: 'Full Stack with AI',
    badge: 'Modern Frontend',
    desc: 'Build reactive user interfaces, custom hooks, state management, and embedded AI Copilot widgets with React 18 & ES6+.',
    fullDesc: 'Engineered for modern frontend architects. Build high-performance React 18 applications integrated with AI Copilots and real-time state sync.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80',
    duration: '6 Weeks (48 Hours)',
    skillLevel: 'Beginner to Intermediate',
    curriculum: [
      'Modern ES6+ JavaScript Mastery (Async/Await, Closures, Proxy)',
      'React 18 Architecture: Virtual DOM, Concurrent Mode & Hooks',
      'State Management with Zustand & Redux Toolkit',
      'Integrating In-App AI Assistant Copilots & Chat Widgets',
      'Performance Tuning: Memoization, Virtualization & Code Splitting'
    ],
    tools: ['React 18', 'JavaScript ES6+', 'Zustand', 'Vite', 'Tailwind CSS'],
    projects: ['SaaS Dashboard with AI Copilot Assistant', 'E-Commerce React Platform'],
    careerOutcome: 'Become a React Frontend Specialist, UI Architect, or Frontend AI Lead.'
  },
  {
    id: 'angular-node-apis',
    title: 'Angular & Node.js AI APIs',
    category: 'Full Stack with AI',
    badge: 'Enterprise Architecture',
    desc: 'Develop enterprise single-page apps with Angular 17, RxJS observables, and scalable Node.js RESTful AI microservices.',
    fullDesc: 'Enterprise web development combining Angular 17 signals, RxJS reactive patterns, and Node.js microservices.',
    image: 'https://images.unsplash.com/photo-1537884944318-390069bb8665?w=800&auto=format&fit=crop&q=80',
    duration: '6 Weeks (48 Hours)',
    skillLevel: 'Intermediate',
    curriculum: [
      'Angular 17 Standalone Components & Signals Architecture',
      'Reactive Programming with RxJS & NgRx State Management',
      'Node.js & Express.js REST API Microservices Design',
      'JWT Authentication, RBAC Security & API Gateways',
      'Integrating AI Text & Speech Processing APIs'
    ],
    tools: ['Angular 17', 'Node.js', 'Express', 'RxJS', 'TypeScript'],
    projects: ['Enterprise ERP System with Angular 17', 'Node.js AI API Gateway'],
    careerOutcome: 'Qualify for Full Stack Angular Developer, Enterprise Architect, and Node.js Lead.'
  },
  {
    id: 'mern-stack-ai',
    title: 'MERN Stack with AI',
    category: 'Full Stack with AI',
    badge: 'Full Stack Mastery',
    desc: 'Master MongoDB, Express.js, React.js, Node.js, and integrate GenAI capabilities into full-stack commercial web apps.',
    fullDesc: 'Complete MERN stack boot track extended with AI APIs, vector search in MongoDB Atlas, and production cloud deployment.',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&auto=format&fit=crop&q=80',
    duration: '8 Weeks (64 Hours)',
    skillLevel: 'All Levels',
    curriculum: [
      'MongoDB Atlas & Vector Search Indexing',
      'Express.js & Node.js Middleware & Security Controls',
      'React.js SPA Development & Tailwind CSS Styling',
      'Full Stack Authentication, Stripe Payment & Webhooks',
      'Embedding OpenAI APIs & Vector Search into MERN Apps'
    ],
    tools: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind'],
    projects: ['AI Powered Content Creator SaaS Platform', 'Full Stack Social Platform'],
    careerOutcome: 'Become a MERN Stack Engineer, Full Stack Web Developer, or SaaS Founder.'
  },
  {
    id: 'fullstack-java-dotnet',
    title: 'Full Stack Java & .NET with AI',
    category: 'Full Stack with AI',
    badge: 'Corporate Standard',
    desc: 'Build enterprise backends using Spring Boot 3, ASP.NET Core 8, Microservices architecture, and Azure AI Services.',
    fullDesc: 'Corporate backend engineering with Java Spring Boot and .NET 8, featuring microservice event-driven architecture and Azure AI.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    duration: '8 Weeks (64 Hours)',
    skillLevel: 'Intermediate to Advanced',
    curriculum: [
      'Spring Boot 3 REST APIs & Hibernate ORM',
      'ASP.NET Core 8 Web APIs & Entity Framework Core',
      'Microservice Event Bus: RabbitMQ & Apache Kafka',
      'Azure AI Services & Cognitive Search Integration',
      'CI/CD DevOps & Kubernetes Deployment'
    ],
    tools: ['Java', 'Spring Boot', '.NET 8', 'Azure AI', 'Kafka'],
    projects: ['Banking Microservices Engine', 'Healthcare Portal with Azure AI'],
    careerOutcome: 'Prepare for Senior Java Engineer, .NET Backend Specialist, and Enterprise Architect.'
  },
  {
    id: 'mobile-app-device-ai',
    title: 'Mobile App Dev & On-Device AI',
    category: 'Full Stack with AI',
    badge: 'Mobile Systems',
    desc: 'Develop cross-platform iOS & Android apps with Flutter, React Native, TensorFlow Lite, and CoreML on-device models.',
    fullDesc: 'Build high-performance mobile apps running lightweight AI models directly on mobile devices without server latency.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    duration: '6 Weeks (48 Hours)',
    skillLevel: 'Intermediate',
    curriculum: [
      'Flutter & Dart Cross-Platform Mobile Architecture',
      'React Native with Expo & Native Modules',
      'TensorFlow Lite & Apple CoreML Model Quantization',
      'On-Device Camera Computer Vision & OCR Processing',
      'App Store & Google Play Publishing Pipeline'
    ],
    tools: ['Flutter', 'React Native', 'TF Lite', 'CoreML', 'Firebase'],
    projects: ['On-Device AI Document Scanner App', 'Fitness AI Pose Detection App'],
    careerOutcome: 'Qualify for Mobile App Engineer, Flutter Lead, and On-Device AI Specialist.'
  },
  {
    id: 'rest-apis-microservices',
    title: 'REST APIs & AI Microservices',
    category: 'Full Stack with AI',
    badge: 'API Engineering',
    desc: 'Design OpenAPI 3.0 specs, GraphQL, gRPC protocols, rate-limiting, OAuth2, and scalable AI microservices.',
    fullDesc: 'Architect robust distributed microservice networks communicating via gRPC, GraphQL, and REST APIs.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    duration: '5 Weeks (40 Hours)',
    skillLevel: 'Intermediate',
    curriculum: [
      'OpenAPI 3.0 Specification & Swagger Documentation',
      'gRPC Protocol Buffers & High-Speed Binary Streaming',
      'GraphQL Schema Design, Resolvers & Apollo Server',
      'API Gateway, Rate-Limiting & OAuth2 / OIDC Security',
      'Containerizing Microservices with Docker & Helm Charts'
    ],
    tools: ['gRPC', 'GraphQL', 'Docker', 'Kong Gateway', 'Swagger'],
    projects: ['Distributed AI Translation Microservice', 'Enterprise API Gateway'],
    careerOutcome: 'Become an API Engineer, Microservices Architect, or Integration Specialist.'
  },

  // ==========================================
  // DOMAIN 3: CLOUD & DEVOPS (8 MODULES)
  // ==========================================
  {
    id: 'data-science-ml',
    title: 'Data Science & ML',
    category: 'Cloud & DevOps',
    badge: 'Data Science',
    desc: 'Extract actionable insights using Python Pandas, NumPy, Scikit-Learn, XGBoost, feature engineering, and statistical modeling.',
    fullDesc: 'Comprehensive data science pipeline from raw dataset cleaning to statistical hypothesis testing and ML modeling.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    duration: '6 Weeks (48 Hours)',
    skillLevel: 'Beginner to Intermediate',
    curriculum: [
      'Exploratory Data Analysis (EDA) with Pandas & Seaborn',
      'Statistical Hypothesis Testing & Feature Selection',
      'Supervised Learning: Regression, Decision Trees, XGBoost',
      'Unsupervised Learning: K-Means, PCA, & Anomaly Detection',
      'Model Evaluation Metrics (ROC-AUC, Precision/Recall, F1)'
    ],
    tools: ['Python', 'Pandas', 'Scikit-Learn', 'XGBoost', 'Jupyter'],
    projects: ['Customer Churn Prediction Model', 'Sales Forecasting Engine'],
    careerOutcome: 'Qualify for Data Scientist, Machine Learning Engineer, and Data Analyst.'
  },
  {
    id: 'data-analytics-bi',
    title: 'Data Analytics & BI',
    category: 'Cloud & DevOps',
    badge: 'Analytics Track',
    desc: 'Transform enterprise big data into executive dashboards using Power BI, Tableau, SQL queries, and DAX expressions.',
    fullDesc: 'Business intelligence mastery. Learn complex SQL data warehousing, Power BI DAX formulas, and interactive dashboard storytelling.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    duration: '5 Weeks (40 Hours)',
    skillLevel: 'Beginner',
    curriculum: [
      'Advanced SQL Window Functions & Subqueries',
      'Data Warehousing Concepts (Star Schema, Snowflake Schema)',
      'Power BI Data Modeling & DAX Expression Writing',
      'Tableau Desktop Interactive Storyboards & Charts',
      'KPI Tracking & Executive Report Automation'
    ],
    tools: ['SQL', 'Power BI', 'Tableau', 'Excel', 'Snowflake'],
    projects: ['Executive Financial Performance Dashboard', 'Supply Chain Analytics Portal'],
    careerOutcome: 'Become a BI Developer, Business Data Analyst, or Reporting Specialist.'
  },
  {
    id: 'aws-azure-gcp',
    title: 'AWS, Azure & GCP Cloud',
    category: 'Cloud & DevOps',
    badge: 'Multi-Cloud',
    desc: 'Architect resilient multi-cloud infrastructure on AWS, Microsoft Azure, and Google Cloud Platform (GCP).',
    fullDesc: 'Multi-cloud architecture covering AWS EC2/S3/Lambda, Azure VMs/Blob, and GCP Compute/BigQuery.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
    duration: '8 Weeks (64 Hours)',
    skillLevel: 'Intermediate',
    curriculum: [
      'AWS Core: VPC, EC2, S3, IAM, Lambda & CloudFront',
      'Azure Core: VNets, App Services, Blob Storage & Entra ID',
      'GCP Core: Compute Engine, Cloud Storage & BigQuery',
      'Cloud Network Security, Firewalls & VPN Gateways',
      'Cost Optimization, FinOps & High-Availability Design'
    ],
    tools: ['AWS', 'Azure', 'Google Cloud', 'IAM', 'VPC'],
    projects: ['Multi-Cloud Disaster Recovery Setup', 'Global CDN & Serverless Architecture'],
    careerOutcome: 'Prepare for Cloud Architect, Multi-Cloud Engineer, and AWS/Azure Specialist.'
  },
  {
    id: 'devops-gitops',
    title: 'DevOps & GitOps',
    category: 'Cloud & DevOps',
    badge: 'Infrastructure Automation',
    desc: 'Master Infrastructure as Code (IaC) with Terraform, Ansible, GitOps workflow with ArgoCD, and Linux administration.',
    fullDesc: 'Automate modern cloud environments using Terraform declarative IaC, Ansible playbooks, and ArgoCD GitOps pipelines.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=80',
    duration: '6 Weeks (48 Hours)',
    skillLevel: 'Intermediate to Advanced',
    curriculum: [
      'Linux Administration & Bash Shell Scripting',
      'Infrastructure as Code (IaC) with HashiCorp Terraform',
      'Configuration Management with Ansible Playbooks',
      'GitOps Principles & ArgoCD Kubernetes Synchronization',
      'Monitoring & Alerting with Prometheus & Grafana'
    ],
    tools: ['Terraform', 'Ansible', 'ArgoCD', 'Prometheus', 'Grafana'],
    projects: ['Automated AWS Cloud Infrastructure with Terraform', 'GitOps Deployment Pipeline'],
    careerOutcome: 'Become a DevOps Engineer, Site Reliability Engineer (SRE), or GitOps Specialist.'
  },
  {
    id: 'docker-kubernetes',
    title: 'Docker & Kubernetes',
    category: 'Cloud & DevOps',
    badge: 'Containerization',
    desc: 'Containerize applications with Docker, orchestrate microservices with Kubernetes (K8s), Helm, and Ingress controllers.',
    fullDesc: 'Container orchestration from writing optimized Dockerfiles to managing production Kubernetes clusters, Helm charts, and auto-scaling.',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&auto=format&fit=crop&q=80',
    duration: '6 Weeks (48 Hours)',
    skillLevel: 'Intermediate',
    curriculum: [
      'Docker Architecture: Images, Containers, Layers & Volumes',
      'Docker Compose Multi-Container Orchestration',
      'Kubernetes Core: Pods, Deployments, Services, ConfigMaps',
      'K8s Storage (PV/PVC), Ingress Controllers & Cert-Manager',
      'Helm Package Management & Horizontal Pod Autoscaling (HPA)'
    ],
    tools: ['Docker', 'Kubernetes', 'Helm', 'Minikube', 'NGINX Ingress'],
    projects: ['Production Kubernetes Microservice Cluster', 'Custom Helm Chart Repository'],
    careerOutcome: 'Qualify for Kubernetes Administrator (CKA), Container Specialist, and Cloud Native Engineer.'
  },
  {
    id: 'cicd-automation',
    title: 'CI/CD Automation',
    category: 'Cloud & DevOps',
    badge: 'Pipeline Tech',
    desc: 'Build automated continuous integration & deployment pipelines using GitHub Actions, GitLab CI, and Jenkins.',
    fullDesc: 'Automate software delivery cycles with GitHub Actions workflows, automated unit testing, SonarQube quality gates, and automated deployment.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop&q=80',
    duration: '4 Weeks (32 Hours)',
    skillLevel: 'Beginner to Intermediate',
    curriculum: [
      'CI/CD Concepts: Automated Builds, Testing & Deployment',
      'GitHub Actions: Workflows, Triggers, Matrix Builds & Secrets',
      'GitLab CI/CD Pipelines & Runner Configuration',
      'Static Code Analysis with SonarQube & Security Scanning',
      'Zero-Downtime Deployment Strategies (Blue-Green, Canary)'
    ],
    tools: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'SonarQube', 'Docker'],
    projects: ['Zero-Downtime Multi-Stage CI/CD Pipeline', 'Security Scan Automation Workflow'],
    careerOutcome: 'Prepare for CI/CD Automation Engineer, Release Manager, and Build Specialist.'
  },
  {
    id: 'big-data-engineering',
    title: 'Big Data Engineering',
    category: 'Cloud & DevOps',
    badge: 'Big Data',
    desc: 'Build high-throughput data pipelines using Apache Spark, PySpark, Apache Kafka, Airflow, and Databricks.',
    fullDesc: 'Process petabyte-scale data streams with Apache Spark distributed computing, Kafka streaming queues, and Airflow DAG orchestration.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    duration: '8 Weeks (64 Hours)',
    skillLevel: 'Intermediate to Advanced',
    curriculum: [
      'Apache Hadoop & HDFS Architecture Overview',
      'Distributed Processing with Apache Spark & PySpark DataFrames',
      'Real-Time Event Streaming with Apache Kafka',
      'Data Pipeline Orchestration with Apache Airflow DAGs',
      'Delta Lake & Databricks Lakehouse Architecture'
    ],
    tools: ['Apache Spark', 'PySpark', 'Apache Kafka', 'Airflow', 'Databricks'],
    projects: ['Real-Time Financial Transaction Streaming Engine', 'Databricks ETL Pipeline'],
    careerOutcome: 'Become a Big Data Engineer, Data Platform Architect, or PySpark Specialist.'
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security & Compliance',
    category: 'Cloud & DevOps',
    badge: 'Cyber Security',
    desc: 'Protect cloud workloads with Zero Trust architecture, IAM policy hardening, SIEM monitoring, and SOC2 compliance.',
    fullDesc: 'Secure cloud environments against cyber threats using Zero Trust principles, IAM policies, AWS GuardDuty, and compliance frameworks.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80',
    duration: '6 Weeks (48 Hours)',
    skillLevel: 'Intermediate to Advanced',
    curriculum: [
      'Zero Trust Network Security Model & Micro-Segmentation',
      'Cloud Identity & Access Management (IAM) Hardening',
      'KMS Encryption (Data-at-Rest & Data-in-Transit)',
      'Cloud SIEM & Threat Detection (AWS GuardDuty, Azure Sentinel)',
      'SOC2, ISO 27001, & GDPR Cloud Compliance Auditing'
    ],
    tools: ['AWS Security Hub', 'Azure Sentinel', 'Vault', 'Wireshark', 'IAM'],
    projects: ['Enterprise Cloud Security Posture Audit', 'Automated Threat Detection System'],
    careerOutcome: 'Qualify for Cloud Security Engineer, SOC Security Analyst, and Compliance Consultant.'
  },

  // ==========================================
  // DOMAIN 4: UI/UX DESIGN (8 MODULES)
  // ==========================================
  {
    id: 'figma-masterclass',
    title: 'Figma Masterclass & Auto Layout',
    category: 'UI/UX Design',
    badge: 'Design Leader',
    desc: 'Master Figma 2026 features: Auto Layout 5.0, Component Variables, Interactive Components, and Prototyping.',
    fullDesc: 'Complete Figma masterclass covering responsive Auto Layout, design tokens, component variants, and realistic micro-interaction prototypes.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80',
    duration: '5 Weeks (40 Hours)',
    skillLevel: 'Beginner to Advanced',
    curriculum: [
      'Figma Interface, Frame Grids & Vector Networks',
      'Auto Layout 5.0: Responsive Padding, Spacing & Constraints',
      'Component Properties, Variants & Nesting Architecture',
      'Variables & Design Tokens (Color, Typography, Spacing)',
      'Advanced Interactive Prototyping & Smart Animate'
    ],
    tools: ['Figma', 'FigJam', 'Tokens Studio', 'Aninix'],
    projects: ['Responsive Mobile & Desktop SaaS App Design', 'Interactive Design System Library'],
    careerOutcome: 'Become a Senior Figma Specialist, Product Designer, or UI Specialist.'
  },
  {
    id: 'adobe-ps-ai-assets',
    title: 'Adobe Photoshop & Illustrator UI Assets',
    category: 'UI/UX Design',
    badge: 'Visual Design',
    desc: 'Design high-fidelity UI vector graphics, icon sets, brand visual assets, and photo manipulations with Adobe Creative Cloud.',
    fullDesc: 'Create visual assets for digital products using Adobe Illustrator vector tools and Photoshop photo manipulation techniques.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80',
    duration: '4 Weeks (32 Hours)',
    skillLevel: 'Beginner',
    curriculum: [
      'Adobe Illustrator Vector Pen Tool & Pathfinders',
      'Designing Custom Icon Sets & Vector Branding Assets',
      'Adobe Photoshop Selection Masks, Layers & Retouching',
      'Exporting SVG, WebP & High-DPI Retina UI Assets',
      'Visual Composition, Color Theory & Grid Alignment'
    ],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe CC', 'SVG'],
    projects: ['Custom Custom Icon System & Illustration Set', 'Brand Identity Visual Assets'],
    careerOutcome: 'Qualify for Visual Designer, UI Graphic Specialist, and Brand Designer.'
  },
  {
    id: 'adobe-xd-prototyping',
    title: 'Adobe XD & Prototyping Workflows',
    category: 'UI/UX Design',
    badge: 'Prototyping',
    desc: 'Create wireframes, interactive user flows, voice prototyping, and developer handoff specs with Adobe XD.',
    fullDesc: 'Master wireframing and user experience prototyping in Adobe XD, including voice triggers, auto-animate, and developer handoffs.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    duration: '4 Weeks (32 Hours)',
    skillLevel: 'Beginner to Intermediate',
    curriculum: [
      'Adobe XD Workspace, Artboards & Repeat Grids',
      'Interactive Micro-Animations with Auto-Animate',
      'Voice Prototyping & Speech Recognition Triggers',
      'Design Handoff: Generating Developer CSS Specs & Assets',
      'Usability Testing & Live Link Preview Sharing'
    ],
    tools: ['Adobe XD', 'Zeplin', 'Miro', 'Adobe Cloud'],
    projects: ['Interactive E-Commerce Prototype', 'Voice-Controlled Smart Assistant UI'],
    careerOutcome: 'Become an Interaction Designer, UX Prototyper, or Product Designer.'
  },
  {
    id: 'ui-ux-product-research',
    title: 'UI/UX Product Design & User Research',
    category: 'UI/UX Design',
    badge: 'Product Strategy',
    desc: 'Conduct user research interviews, affinity mapping, user personas, journey mapping, and usability testing.',
    fullDesc: 'End-to-end UX research methodology: conducting qualitative user interviews, synthesizing insights, creating personas, and validating designs.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80',
    duration: '6 Weeks (48 Hours)',
    skillLevel: 'All Levels',
    curriculum: [
      'Qualitative & Quantitative User Research Methods',
      'Affinity Mapping, User Personas & Empathy Maps',
      'User Journey Mapping & Task Analysis Flowcharts',
      'Usability Testing Protocols (Moderated & Unmoderated)',
      'Measuring UX Metrics: SUS, System Usability Score, & NPS'
    ],
    tools: ['Miro', 'Maze', 'UserTesting', 'Optimal Workshop', 'Figma'],
    projects: ['Comprehensive UX Case Study', 'Mobile App Redesign Research Report'],
    careerOutcome: 'Prepare for UX Researcher, Product Designer, and UX Strategy Lead.'
  },
  {
    id: 'enterprise-design-systems',
    title: 'Enterprise Design Systems & Tokens',
    category: 'UI/UX Design',
    badge: 'Design Architecture',
    desc: 'Architect scalable enterprise design systems, design tokens, component documentation, and cross-platform token sync.',
    fullDesc: 'Build enterprise design systems from atomic design principles to color tokens, typography scales, and syncing with React code bases.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    duration: '5 Weeks (40 Hours)',
    skillLevel: 'Intermediate to Advanced',
    curriculum: [
      'Atomic Design Methodology (Atoms, Molecules, Organisms)',
      'Design Token Architecture (Global, Alias, Component Tokens)',
      'Establishing Accessibility Color Contrast & Typography Systems',
      'Documenting Components for Engineering Alignment',
      'Syncing Design Tokens with React/Tailwind Codebases'
    ],
    tools: ['Figma', 'Style Dictionary', 'Storybook', 'Zeroheight'],
    projects: ['Complete Enterprise Design System Library', 'Design Token Sync Pipeline'],
    careerOutcome: 'Become a Design System Architect, Lead UI Designer, or Design Operations Lead.'
  },
  {
    id: 'interactive-motion-framer',
    title: 'Interactive Motion Design (Framer & Lottie)',
    category: 'UI/UX Design',
    badge: 'Motion Tech',
    desc: 'Create realistic motion UI micro-interactions, Lottie animations, and interactive web experiences using Framer & After Effects.',
    fullDesc: 'Add life to digital interfaces with spring physics animations, Lottie vectors, After Effects micro-interactions, and Framer websites.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
    duration: '4 Weeks (32 Hours)',
    skillLevel: 'Intermediate',
    curriculum: [
      'Principles of UI Motion & Timing Functions',
      'Framer Interactive Motion & Spring Physics Controls',
      'Adobe After Effects UI Motion & Lottie Export',
      'Scroll-Driven Animations & Page Transitions',
      'Optimizing Lottie JSON Files for Web & Mobile Apps'
    ],
    tools: ['Framer', 'After Effects', 'LottieFiles', 'ProtoPie'],
    projects: ['Interactive Animated Landing Page', 'Mobile Micro-Interaction Library'],
    careerOutcome: 'Qualify for Motion UI Designer, Interaction Designer, and Webflow/Framer Developer.'
  },
  {
    id: 'information-architecture',
    title: 'Information Architecture & Wireframing',
    category: 'UI/UX Design',
    badge: 'UX Architecture',
    desc: 'Structure complex web applications using sitemaps, card sorting, low-fidelity wireframes, and navigation trees.',
    fullDesc: 'Master Information Architecture (IA) to organize large-scale software systems, card sorting, sitemap trees, and wireframing.',
    image: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?w=800&auto=format&fit=crop&q=80',
    duration: '4 Weeks (32 Hours)',
    skillLevel: 'Beginner',
    curriculum: [
      'Information Architecture Fundamentals & Organization Schemes',
      'Open & Closed Card Sorting Techniques',
      'Sitemap Trees & Navigation Hierarchy Design',
      'Low-Fidelity & Mid-Fidelity Wireframing in Balsamiq & Figma',
      'Content Strategy & Microcopy Fundamentals'
    ],
    tools: ['Balsamiq', 'Miro', 'Figma', 'Whimsical'],
    projects: ['Complex Enterprise Portal Sitemap & Wireframes', 'E-Learning Platform IA Blueprint'],
    careerOutcome: 'Become an Information Architect, UX Planner, or Product Architect.'
  },
  {
    id: 'design-accessibility-wcag',
    title: 'Design Accessibility (WCAG & Color Systems)',
    category: 'UI/UX Design',
    badge: 'Accessibility',
    desc: 'Design inclusive interfaces meeting WCAG 2.2 AA standards, screen reader compatibility, and color contrast compliance.',
    fullDesc: 'Ensure digital products are accessible to all users by applying WCAG 2.2 AA guidelines, focus states, and accessible color scales.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    duration: '3 Weeks (24 Hours)',
    skillLevel: 'All Levels',
    curriculum: [
      'WCAG 2.2 Principles: Perceivable, Operable, Understandable, Robust',
      'Accessible Color Contrast Ratios (4.5:1 & 7:1 Rules)',
      'Designing Focus States, Keyboard Navigation & Screen Reader Labels',
      'Accessibility Testing Tools (Stark, Axe, WAVE)',
      'Building Inclusive & Accessible UI Components'
    ],
    tools: ['Stark', 'Axe DevTools', 'Figma', 'WAVE Auditor'],
    projects: ['Accessibility Audit & Remediation Plan', 'Accessible Design Token Palette'],
    careerOutcome: 'Prepare for Accessibility Specialist, Inclusive Design Lead, and Product Auditor.'
  }
];
