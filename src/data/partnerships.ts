export interface PartnershipItem {
  id: string;
  num: string;
  title: string;
  tag: string;
  desc: string;
  fullDesc: string;
  image: string;
  duration: string;
  targetAudience: string;
  corePillars: string[];
  curriculum: string[];
  institutionalBenefit: string;
  executionModel: string;
  outcomes: string[];
}

export const PARTNERSHIPS_DATA: PartnershipItem[] = [
  {
    id: 'crt',
    num: '01',
    title: 'Campus Recruitment Training (CRT)',
    tag: 'Placement Prep',
    desc: 'Customized on-campus recruitment training engineered to help college students crack Tier-1 IT, product companies, and startup placement drives.',
    fullDesc: 'Our Campus Recruitment Training (CRT) program is a high-intensity, placement-driven curriculum engineered to elevate students from core academic foundations to corporate recruitment standards. Designed in consultation with corporate hiring managers, CRT covers quantitative aptitude, logical reasoning, verbal ability, advanced coding, and mock interview loops.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80',
    duration: '60 - 120 Hours (Bootcamp / Semester Embedded)',
    targetAudience: 'Pre-final and Final Year Engineering, MCA, and Degree Students',
    corePillars: [
      'Quantitative Aptitude & Data Interpretation',
      'Logical & Analytical Reasoning Puzzles',
      'Verbal Ability & Technical English',
      'Data Structures & Algorithmic Coding',
      'Group Discussions & Behavioral HR Prep'
    ],
    curriculum: [
      'Speed Mathematics & Shortcut Problem Solving',
      'Complex Seating Arrangements & Syllogism Logic',
      'TCS NQT, Infosys InfyTQ & AMCAT Pattern Solves',
      'Hands-on LeetCode / HackerRank Coding Challenges',
      'Resume ATS Optimization & Mock HR Panels'
    ],
    institutionalBenefit: 'Increases overall campus recruitment selection rates by up to 45% and attracts premium high-package hiring partners.',
    executionModel: 'Delivered through on-campus expert trainers, interactive sandbox labs, and continuous diagnostic assessment scorecards.',
    outcomes: [
      'Substantial reduction in first-round online elimination test dropouts',
      'Enhanced confidence during technical whiteboarding and panel interviews',
      'Higher placement package offers across Tier-1 IT & Product Firms'
    ]
  },
  {
    id: 'skill-enhancement',
    num: '02',
    title: 'Skill Enhancement Programs',
    tag: 'Industry Upskilling',
    desc: 'Hands-on technical modules in AI, GenAI, Cloud Computing, Full-Stack Development, and Data Analytics integrated directly into academic timetables.',
    fullDesc: 'Skill Enhancement Programs bridge the gap between traditional academic curricula and fast-evolving industry requirements. We partner with college departments to deliver semester-embedded courses in GenAI, Full-Stack Next.js, Cloud DevOps, and Data Engineering.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80',
    duration: '30 - 45 Hours per Semester',
    targetAudience: '1st to 3rd Year B.Tech, BCA, MCA, and B.Sc Computer Science Students',
    corePillars: [
      'Generative AI & LLM Application Building',
      'Modern Full Stack Development (React, Node, Next.js)',
      'Cloud Native DevOps & Microservices Architecture',
      'Data Science, Python & SQL Business Analytics'
    ],
    curriculum: [
      'Foundations of Modern Software Engineering',
      'Live Commercial Project Development Drills',
      'Version Control, GitOps & Agile Team Workflows',
      'Cloud Deployment on AWS & Vercel Environments'
    ],
    institutionalBenefit: 'Empowers institutions to offer industry-aligned elective courses without revising standard university syllabi.',
    executionModel: 'Blended learning model combining live expert instructor sessions with cloud sandbox hands-on coding environments.',
    outcomes: [
      'Students build verifiable GitHub project portfolios before final year',
      'Improved NAAC & NBA accreditation criteria scoring for industry collaboration',
      'Higher student engagement and practical application mastery'
    ]
  },
  {
    id: 'fdp',
    num: '03',
    title: 'Faculty Development Programs (FDPs)',
    tag: 'Academic Upskilling',
    desc: 'Empowering educators with cutting-edge knowledge in AI, Machine Learning, Cloud Architecture, and modern research methodologies.',
    fullDesc: 'Faculty Development Programs (FDPs) equip professors, department heads, and academic mentors with hands-on expertise in emergent technologies. FDPs cover Generative AI architectures, MLOps, Cloud Infrastructure, and modern pedagogical tools.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80',
    duration: '5 - 7 Days Intensive Workshop or 2-Week Hybrid FDP',
    targetAudience: 'Professors, Associate Professors, Assistant Professors, and Research Scholars',
    corePillars: [
      'Generative AI & LLM Prompt Engineering for Academia',
      'Cloud Computing Infrastructure & Serverless Management',
      'Data Science & Research Analytics Tools',
      'Modern Pedagogical Technologies & AI Teaching Assistants'
    ],
    curriculum: [
      'Hands-on PyTorch & HuggingFace Model Training',
      'Building AI-Assisted Academic Assessment Workflows',
      'Research Paper Publication Strategies in IEEE & Springer',
      'Grants & R&D Project Proposal Design'
    ],
    institutionalBenefit: 'Fosters an innovative research culture and improves institutional NIRF ranking scores.',
    executionModel: 'Delivered by industry veterans, former DeepMind researchers, and principal cloud architects.',
    outcomes: [
      'Faculty members gain practical industry insights to mentor student projects',
      'Increased research publications and patent filings by institutional faculty',
      'Official FDP Certification issued for NBA / NAAC documentation'
    ]
  },
  {
    id: 'workshops',
    num: '04',
    title: 'Technology Workshops',
    tag: 'Hands-On Tech',
    desc: 'High-energy 2 to 3 day immersive workshops on Generative AI, Cyber Security, Cloud DevOps, and Autonomous AI Agents.',
    fullDesc: 'Our Technology Workshops are fast-paced, high-impact experiential learning sessions designed to expose students to state-of-the-art developer tools. Students build working applications in real-time under expert guidance.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
    duration: '2 - 3 Days (12 - 18 Hours)',
    targetAudience: 'All Undergraduate and Postgraduate Tech Students & Tech Clubs',
    corePillars: [
      'Building AI Agents with CrewAI & LangChain',
      'Full Stack App Building in 48 Hours',
      'Ethical Hacking & Cyber Security Defense',
      'Containerization with Docker & Kubernetes'
    ],
    curriculum: [
      'Live Coding & Architecture Setup Demonstrations',
      'Interactive Hackathon & Rapid Prototyping Challenge',
      'API Integration & Cloud Deployment Lab',
      'Project Demo Showcase & Peer Review Panel'
    ],
    institutionalBenefit: 'Energizes campus technical culture and provides high-impact practical exposure outside standard lectures.',
    executionModel: '100% practical, lab-based execution with zero slide decks; every student builds and deploys live code.',
    outcomes: [
      'Students build working prototypes by the end of the workshop',
      'Immediate exposure to industry standard developer tools',
      'Certificates of accomplishment for all verified project submissions'
    ]
  },
  {
    id: 'certifications',
    num: '05',
    title: 'Certification Courses',
    tag: 'Industry Credentials',
    desc: 'Industry-recognized certification programs in AI Engineering, Cloud DevOps, Data Science, and Full-Stack Development.',
    fullDesc: 'Nexus Certification Courses offer structured, outcome-based learning paths designed to earn industry-backed credentials. Programs incorporate rigorous project assessments and proctored technical evaluations.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
    duration: '8 - 12 Weeks (Weekend / Evening Online Batches)',
    targetAudience: 'Students, Working Professionals, and Career Switchers',
    corePillars: [
      'Certified AI & Machine Learning Specialist',
      'Certified Full Stack Next.js Architect',
      'Certified Cloud DevOps & Kubernetes Engineer',
      'Certified Data Analyst & Business Intelligence Expert'
    ],
    curriculum: [
      'Comprehensive Theory & Production Code Patterns',
      'CapStone Project Evaluation by Industry Leads',
      'Proctored Final Certification Exam',
      'Verifiable Digital Credentials & Credly Badges'
    ],
    institutionalBenefit: 'Provides students with globally verifiable credentials that boost resume ATS shortlisting.',
    executionModel: 'Online live interactive lectures paired with 24/7 cloud sandbox environments and project reviews.',
    outcomes: [
      'Verifiable digital certificate shareable on LinkedIn and portfolios',
      'Direct inclusion in Nexus Corporate Hiring Partner recommendation pool',
      'Proven mastery of enterprise technical stacks'
    ]
  },
  {
    id: 'mentoring',
    num: '06',
    title: 'Internship & Project Mentoring',
    tag: 'Hands-On Mentorship',
    desc: 'Guiding students through real-world commercial projects, major academic projects, and industry internship experiences.',
    fullDesc: 'Our Internship & Project Mentoring initiative connects student teams with experienced industry engineers to execute commercial-grade software projects, IEEE capstones, and industry internships.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    duration: '2 - 6 Months (Semester Project / Internship)',
    targetAudience: 'Final Year B.Tech, M.Tech, and MCA Students',
    corePillars: [
      'Commercial Software Product Architecture',
      'IEEE & Springer Research Project Mentorship',
      'Agile Sprint Reviews & GitHub Code Inspections',
      'Industry Internship Completion Certificates'
    ],
    curriculum: [
      'Project Problem Statement Definition & Requirements',
      'System Design, Database Schemas & API Blueprints',
      'Weekly Code Review & Sprint Feedback Loops',
      'Final Project Documentation, Demo & Presentation Prep'
    ],
    institutionalBenefit: 'Ensures 100% of final-year academic projects meet production-quality engineering standards.',
    executionModel: 'Dedicated senior developer mentors assigned to small student teams (4-5 students per mentor).',
    outcomes: [
      'Students graduate with production-ready commercial software projects',
      'Official Internship Certificates issued for academic credit submission',
      'Higher selection rates in product company technical project rounds'
    ]
  },
  {
    id: 'readiness',
    num: '07',
    title: 'Industry Readiness Programs',
    tag: 'Career Transition',
    desc: 'Comprehensive career transition bootcamps covering system design, mock technical interviews, and corporate etiquette.',
    fullDesc: 'Industry Readiness Programs transform academic graduates into corporate-ready tech professionals. We simulate real corporate office environments, agile sprint ceremonies, code reviews, and executive communication.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
    duration: '4 - 8 Weeks Intensive Finishing School',
    targetAudience: 'Graduating Batch Students & Career Changers',
    corePillars: [
      'System Design & Distributed Architecture',
      'Corporate Etiquette, Agile & Jira Workflows',
      'Mock Technical Interview Loops & Feedback',
      'Salary Negotiation & Executive Presentation'
    ],
    curriculum: [
      'Simulated Corporate Engineering Environment',
      'Daily Standups, Sprint Planning & Code Reviews',
      'Whiteboard Technical System Design Drills',
      '1-on-1 Behavioral & Culture Fit Mock Panels'
    ],
    institutionalBenefit: 'Dramatically improves campus placement conversion rates during corporate hiring drives.',
    executionModel: 'Full-time immersive finishing school model with daily performance tracking and feedback scorecards.',
    outcomes: [
      'Seamless transition from campus environment to corporate tech roles',
      'Zero onboarding ramp-up time required by hiring employers',
      'Higher career retention and rapid first-year promotions'
    ]
  },
  {
    id: 'placement-support',
    num: '08',
    title: 'Placement Support Initiatives',
    tag: 'Hiring Pipeline',
    desc: 'Connecting partner institutions with 140+ corporate recruiters, exclusive hiring drives, and dedicated placement portals.',
    fullDesc: 'Our Placement Support Initiative acts as a bridge between academic institutions and top-tier tech employers. We organize exclusive campus hiring drives, off-campus referral pushes, and direct recruiter connects.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    duration: 'Year-Round Continuous Placement Support',
    targetAudience: 'Partner Colleges, Universities, and Qualified Graduates',
    corePillars: [
      'Exclusive On-Campus & Off-Campus Hiring Drives',
      'Direct Recruiter Resume Shortlisting Portal',
      'High-Package Product Company Referral Drives',
      'Diagnostic Student Skill Assessment Reports'
    ],
    curriculum: [
      'Custom Student Profile Matrix & Skill Scoring',
      'Automated Recruiter Matching Algorithms',
      'Interview Scheduling & Logistics Coordination',
      'Post-Interview Feedback & Offer Letter Assistance'
    ],
    institutionalBenefit: 'Expands institutional hiring partner network by 140+ tech companies and startups.',
    executionModel: 'Managed by dedicated Placement Relationship Managers working closely with college TPOs.',
    outcomes: [
      'Significant increase in campus placement percentage and average CTC',
      'Attracts new Tier-1 hiring partners for campus recruitment drives',
      'Continuous employment opportunities for non-placed students'
    ]
  }
];
