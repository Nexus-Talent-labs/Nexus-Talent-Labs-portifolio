export interface CRTModuleItem {
  id: string;
  title: string;
  tag: string;
  desc: string;
  fullDesc: string;
  image: string;
  highlights: string[];
  outcome: string;
}

export const CRT_MODULES_DATA: CRTModuleItem[] = [
  {
    id: 'quant',
    title: 'Quantitative Aptitude',
    tag: 'Math & Speed Reasoning',
    desc: 'Core arithmetic, algebra, geometry, speed math, and data interpretation.',
    fullDesc: 'Master speed mathematics, numerical reasoning, data interpretation, and quantitative problem-solving techniques specifically designed to clear first-round online elimination tests for Tier-1 IT companies, product firms, and MNCs.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'Permutation & Combination and Probability',
      'Time, Work, Distance, and Speed Shortcuts',
      'Profit & Loss, Simple & Compound Interest',
      'Data Interpretation (Pie Charts, Bar Graphs, Caselets)'
    ],
    outcome: 'Drastically boosts speed and accuracy during timed online preliminary assessment rounds.'
  },
  {
    id: 'logical',
    title: 'Logical & Analytical Reasoning',
    tag: 'Critical Thinking',
    desc: 'Puzzles, seating arrangements, syllogisms, coding-decoding, and logical deductions.',
    fullDesc: 'Develop sharp analytical thinking and puzzle-solving agility. Learn structured approaches to solve complex analytical reasoning questions, seating arrangements, and logical deductions under timed pressure.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'Linear & Circular Seating Arrangements',
      'Blood Relations & Direction Sense Analysis',
      'Syllogisms & Venn Diagram Logic',
      'Clocks, Calendars, and Sequence Coding'
    ],
    outcome: 'Enhances logical problem-solving ability required in competitive aptitude evaluations.'
  },
  {
    id: 'verbal',
    title: 'Verbal Ability',
    tag: 'Grammar & Comprehension',
    desc: 'Reading comprehension, sentence correction, vocabulary, and paragraph jumbles.',
    fullDesc: 'Strengthen core English grammar, vocabulary, reading comprehension, and error detection skills necessary to excel in corporate verbal ability tests like TCS NQT, Infosys InfyTq, and AMCAT.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'Reading Comprehension & Critical Passages',
      'Sentence Completion & Para Jumbles',
      'Antonyms, Synonyms & Vocabulary Building',
      'Error Spotting & Idioms/Phrases'
    ],
    outcome: 'Ensures high scores in verbal sections of major national-level hiring drives.'
  },
  {
    id: 'communication',
    title: 'Communication Skills',
    tag: 'Professional Speaking',
    desc: 'Business communication, public speaking, active listening, and email etiquette.',
    fullDesc: 'Master professional verbal communication, clear articulation, and persuasive speaking techniques needed to impress hiring managers, clients, and cross-functional corporate teams.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'Phonetics, Accent Neutralization & Articulation',
      'Professional Email & Slack Communication',
      'Body Language, Posture & Executive Presence',
      'Pitch Presentation & Active Listening Drills'
    ],
    outcome: 'Builds executive confidence during technical discussions and corporate interactions.'
  },
  {
    id: 'coding',
    title: 'Coding Assessments',
    tag: 'Algorithmic Testing',
    desc: 'Data structures, algorithms, live coding challenges, and time complexity optimization.',
    fullDesc: 'Intensive hands-on preparation for online coding rounds on platforms like HackerRank, LeetCode, and CodeSignal. Practice data structures, dynamic programming, and algorithmic optimization.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'Arrays, Linked Lists, Stacks & Queues',
      'Trees, Graphs, Sorting & Searching Algorithms',
      'Dynamic Programming & Greedy Algorithms',
      'Recursion, Backtracking & Time Complexity'
    ],
    outcome: 'Empowers candidates to solve medium-to-hard algorithmic problems within tight time constraints.'
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    tag: 'Analytical Logic',
    desc: 'Algorithmic thinking, edge case analysis, pseudo-coding, and logic building.',
    fullDesc: 'Learn step-by-step methodologies to decompose complex real-world software requirements into clean logic flowcharts, pseudo-code, and edge-case handling frameworks.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'Flowcharting & Logic Decomposition',
      'Pseudo-code Generation & Dry Running',
      'Edge Case Discovery & Boundary Testing',
      'Optimization & Memory Trade-off Analysis'
    ],
    outcome: 'Develops the fundamental engineering mindset required to tackle unfamiliar coding problems.'
  },
  {
    id: 'gd',
    title: 'Group Discussions',
    tag: 'Team Dynamics',
    desc: 'GD strategies, topic analysis, voice modulation, and team collaboration.',
    fullDesc: 'Master high-impact group discussion strategies. Learn topic analysis techniques, how to initiate GDs effectively, construct persuasive counter-arguments, and demonstrate leadership.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'Current Affairs, Social & Case-based GD Topics',
      'Initiation, Conclusion & Intervention Strategies',
      'Handling Aggressive Participants & Conflict Resolution',
      'Body Language, Voice Modulation & Assertiveness'
    ],
    outcome: 'Helps candidates clear competitive group discussion rounds in corporate hiring drives.'
  },
  {
    id: 'technical-interviews',
    title: 'Technical Interviews',
    tag: 'Core Domain Prep',
    desc: 'Mock technical rounds, system design, OOPs concepts, DBMS, and core CS fundamentals.',
    fullDesc: 'Simulated 1-on-1 technical interview loops with senior engineering mentors. Deep dive into Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, and System Design.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'Core Computer Science Concepts (DBMS, OS, CN)',
      'Object-Oriented Programming (C++, Java, Python)',
      'System Design Basics & Database Normalization',
      'Live Whiteboard Coding & Code Review Drills'
    ],
    outcome: 'Prepares candidates to answer complex technical domain questions with clarity.'
  },
  {
    id: 'hr-interviews',
    title: 'HR Interviews',
    tag: 'Behavioral Skills',
    desc: 'Behavioral questions, situational answers, STAR methodology, and salary negotiation.',
    fullDesc: 'Prepare compelling responses for HR and culture-fit interviews. Learn the STAR (Situation, Task, Action, Result) framework to highlight achievements and navigate behavioral evaluation questions.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'STAR Technique for Behavioral Scenarios',
      'Handling Tricky Questions ("Weaknesses", "Gaps")',
      'Corporate Culture Fit & Career Goals Alignment',
      'Professional Salary Negotiation Etiquette'
    ],
    outcome: 'Ensures flawless performance during final HR and executive interview rounds.'
  },
  {
    id: 'resume-building',
    title: 'Resume Building & LinkedIn',
    tag: 'Profile Optimization',
    desc: 'ATS-friendly resume templates, project descriptions, GitHub, and LinkedIn optimization.',
    fullDesc: 'Build a recruiter-ready, ATS-compliant resume and LinkedIn profile that gets noticed by corporate talent acquisition teams. Learn to format technical project achievements into impact metrics.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'ATS Resume Optimization & Formatting Rules',
      'Quantifying Impact in Project Descriptions',
      'LinkedIn Profile Optimization & Networking Strategies',
      'GitHub Portfolio Packaging & Readme Showcase'
    ],
    outcome: 'Maximizes recruiter response rates and shortlisting chances across top job portals.'
  }
];
