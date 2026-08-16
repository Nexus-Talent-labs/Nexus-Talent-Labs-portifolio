export interface AIModuleItem {
  id: string;
  title: string;
  category: 'AI & ML';
  badge: string;
  desc: string;
  fullDesc: string;
  image: string;
  iconName: string;
  duration: string;
  skillLevel: string;
  curriculum: string[];
  tools: string[];
  projects: string[];
  careerOutcome: string;
}

export const AI_ML_MODULES: AIModuleItem[] = [
  {
    id: 'generative-ai',
    title: 'Generative AI (GenAI)',
    category: 'AI & ML',
    badge: 'Core AI Track',
    desc: 'Master Transformer architectures, Diffusion Models, GANs, Neural Image & Text Synthesis, and GenAI production deployment.',
    fullDesc: 'Generative AI is revolutionizing technology industries. This comprehensive curriculum covers Transformer models, Attention Mechanisms, VAEs, Stable Diffusion, Audio/Video synthesis, and deploying enterprise GenAI microservices.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80',
    iconName: 'Sparkles',
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
    iconName: 'Terminal',
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
    iconName: 'Bot',
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
    iconName: 'Database',
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
    iconName: 'Code2',
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
    iconName: 'Zap',
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
    iconName: 'Globe',
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
    iconName: 'ShieldCheck',
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
  }
];
