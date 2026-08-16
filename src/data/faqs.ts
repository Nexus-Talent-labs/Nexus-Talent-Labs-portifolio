export interface FaqItem {
  id: string;
  category: 'CRT Programs' | 'Placements' | 'Fees & Grants' | 'Institute & Labs';
  q: string;
  a: string;
}

export const FAQS_DATA: FaqItem[] = [
  // ==========================================
  // SECTION 1: CRT PROGRAMS (10 QUESTIONS)
  // ==========================================
  {
    id: 'crt-1',
    category: 'CRT Programs',
    q: 'What modules are covered under Campus Recruitment Training (CRT)?',
    a: 'Our CRT program covers Quantitative Aptitude, Logical & Analytical Reasoning, Verbal Ability & Communication, Coding Assessments (DSA & Problem Solving), Group Discussions, Resume & LinkedIn Optimization, Technical Interview Prep, and Mock Interviews with personalized 1-on-1 feedback.'
  },
  {
    id: 'crt-2',
    category: 'CRT Programs',
    q: 'Is CRT included for college students preparing for MNC campus drives?',
    a: 'Yes, CRT is fully integrated into our curriculum. It is specifically engineered to clear the recruitment benchmarks of MNCs, Tier-1 tech startups, and campus placement drives.'
  },
  {
    id: 'crt-3',
    category: 'CRT Programs',
    q: 'How are Quantitative Aptitude and Logical Reasoning taught in the CRT module?',
    a: 'We use shortcut speed-math tricks, pattern-recognition methodologies, daily timed quizzes, and AI-driven weak-area tracking to ensure maximum speed and accuracy in online screening exams.'
  },
  {
    id: 'crt-4',
    category: 'CRT Programs',
    q: 'Do you provide 1-on-1 mock technical interviews and resume reviews?',
    a: 'Yes, every candidate undergoes multiple 1-on-1 mock technical interviews conducted by staff engineers from Top Hyderabad Startups & Tech Leaders (Darwinbox, Keka, HighRadius) with written feedback.'
  },
  {
    id: 'crt-5',
    category: 'CRT Programs',
    q: 'How does the program prepare students for Coding Assessments and DSA online rounds?',
    a: 'We conduct 100+ live coding sprints covering Data Structures & Algorithms (Arrays, Trees, Dynamic Programming, Graphs), SQL query challenges, and LeetCode-style problem solving.'
  },
  {
    id: 'crt-6',
    category: 'CRT Programs',
    q: 'Are Group Discussions (GD) and HR behavioral interview practice sessions included?',
    a: 'Yes, we host weekly live GD simulations, public speaking drills, STAR-method HR response framing, and corporate communication workshops.'
  },
  {
    id: 'crt-7',
    category: 'CRT Programs',
    q: 'Is prior coding experience mandatory before enrolling in CRT or tech tracks?',
    a: 'No prior coding experience is required for foundational tracks. For advanced tracks (AI Engineering, Cloud DevOps), we provide a 2-week preparatory bridge course.'
  },
  {
    id: 'crt-8',
    category: 'CRT Programs',
    q: 'Can final-year engineering and degree students enroll alongside their college semesters?',
    a: 'Absolutely! Classes are scheduled in evening and weekend batches with recorded backup sessions so you can seamlessly balance college exams and CRT preparation.'
  },
  {
    id: 'crt-9',
    category: 'CRT Programs',
    q: 'What soft skills and professional etiquette modules are offered?',
    a: 'Our soft skills curriculum includes email writing, corporate meeting etiquette, client presentation skills, salary negotiation, and confident communication.'
  },
  {
    id: 'crt-10',
    category: 'CRT Programs',
    q: 'How are company-specific placement papers (TCS, Infosys, Wipro, Product Startups) practiced?',
    a: 'We maintain an updated archive of previous hiring assessments from top IT service firms and product leaders, providing mock simulations matching exact time limits and question patterns.'
  },

  // ==========================================
  // SECTION 2: PLACEMENTS (10 QUESTIONS)
  // ==========================================
  {
    id: 'place-1',
    category: 'Placements',
    q: 'How does the placement support & interview referral process work?',
    a: 'Our dedicated placement cell schedules mock technical interviews, optimizes ATS resumes, and directly connects you with 140+ hiring partners across Hyderabad, Bangalore, and global tech hubs. We support you with unlimited interview referrals until you land your offer.'
  },
  {
    id: 'place-2',
    category: 'Placements',
    q: 'What is the average and highest CTC offer package achieved by fellows?',
    a: 'Our fellows have achieved a highest CTC offer of 16 LPA with an average starting package of 8.5 LPA across full-stack, AI, cloud, and data engineering roles.'
  },
  {
    id: 'place-3',
    category: 'Placements',
    q: 'Which companies regularly recruit from Nexus Talent Labs?',
    a: 'Our hiring network features top product leaders and regional tech unicorns including Darwinbox, Keka HR, HighRadius, Zenoti, Cyient, Persistent Systems, CtrlS Datacenters, ValueMomentum, Zeta, and Happiest Minds.'
  },
  {
    id: 'place-4',
    category: 'Placements',
    q: 'Is there a guarantee for placement assistance until securing an offer letter?',
    a: 'Yes, we provide dedicated placement support until you successfully clear your interview and receive your official company offer letter.'
  },
  {
    id: 'place-5',
    category: 'Placements',
    q: 'How are student profiles referred directly to hiring managers and HR recruiters?',
    a: 'We bypass standard job portals by sharing verified candidate portfolios, GitHub project links, and capstone assessment scores directly with engineering VPs and tech recruiters.'
  },
  {
    id: 'place-6',
    category: 'Placements',
    q: 'What happens if I fail my first placement interview round?',
    a: 'Our placement team analyzes recruiter feedback, conducts targeted 1-on-1 corrective sessions to address technical gaps, and schedules your next referral interview immediately.'
  },
  {
    id: 'place-7',
    category: 'Placements',
    q: 'Are placement opportunities available for non-CS / non-IT graduates and career gap candidates?',
    a: 'Yes! Over 35% of our successful alumni come from Mechanical, Civil, Electrical, Commerce, and career gap backgrounds. Our practical portfolio approach proves real capability to recruiters.'
  },
  {
    id: 'place-8',
    category: 'Placements',
    q: 'Do you provide placement referrals for remote and international remote engineering roles?',
    a: 'Yes, we partner with remote-first startups in the US, Europe, and UAE offering remote software engineering positions with competitive global salaries.'
  },
  {
    id: 'place-9',
    category: 'Placements',
    q: 'How are ATS-friendly tech resumes and LinkedIn profiles built for candidates?',
    a: 'Our experts write keyword-optimized ATS resumes highlighting production projects, GitHub commits, Docker containers, and live microservice deployments that pass recruiter screeners.'
  },
  {
    id: 'place-10',
    category: 'Placements',
    q: 'What post-placement support or salary negotiation guidance is provided?',
    a: 'Even after receiving an offer, our mentors guide you through CTC breakdown analysis, bond clause evaluations, and counter-offer negotiation tactics to maximize your starting compensation.'
  },

  // ==========================================
  // SECTION 3: FEES & GRANTS (10 QUESTIONS)
  // ==========================================
  {
    id: 'fee-1',
    category: 'Fees & Grants',
    q: 'Are flexible EMI or installment options available for program fees?',
    a: 'Yes, we offer 0% interest EMI options structured across 3, 6, or 12 monthly installments through our financial learning partners with instant instant digital approval.'
  },
  {
    id: 'fee-2',
    category: 'Fees & Grants',
    q: 'Are there merit scholarships or early-bird fee discounts available?',
    a: 'Yes! We award up to 25% merit scholarship grants based on your technical evaluation test and background interview during the admission process.'
  },
  {
    id: 'fee-3',
    category: 'Fees & Grants',
    q: 'Is there any income-share agreement (ISA) option or pay-after-placement structure?',
    a: 'We offer customized partial ISA plans for qualified candidates where a nominal registration fee is paid upfront and the remaining tuition is payable after securing a job above 6 LPA.'
  },
  {
    id: 'fee-4',
    category: 'Fees & Grants',
    q: 'What payment modes are accepted for program fee registration?',
    a: 'We accept credit cards, debit cards, net banking, UPI (Google Pay, PhonePe, Paytm), bank wire transfers, and easy monthly debit EMIs.'
  },
  {
    id: 'fee-5',
    category: 'Fees & Grants',
    q: 'Is there a money-back refund policy during the initial trial period?',
    a: 'Yes, we provide a 7-day no-questions-asked 100% money-back refund guarantee if you decide the program is not the right fit after attending your initial classes.'
  },
  {
    id: 'fee-6',
    category: 'Fees & Grants',
    q: 'Are loan approvals provided with 0% interest through NBFC financial partners?',
    a: 'Yes, we have tie-ups with leading education fintech partners (Propelld, LiquiLoans, Avanse) providing paperless, zero-cost EMI loans with flexible tenures.'
  },
  {
    id: 'fee-7',
    category: 'Fees & Grants',
    q: 'What documentation is required to apply for the 25% merit scholarship grant?',
    a: 'To apply, submit your academic transcripts (college marksheets), updated resume, and complete our online 45-minute logic & coding aptitude assessment.'
  },
  {
    id: 'fee-8',
    category: 'Fees & Grants',
    q: 'Are laptop or hardware lab access costs included in the course fee?',
    a: 'Yes! All cloud lab environments, GPU server access, hackathon arena entry, software licenses, and course materials are 100% included without any hidden extra charges.'
  },
  {
    id: 'fee-9',
    category: 'Fees & Grants',
    q: 'Do working professionals get corporate sponsorship invoice support?',
    a: 'Yes, we issue official GST tax invoices and course syllabus documentation formatted for corporate L&D learning reimbursement policies.'
  },
  {
    id: 'fee-10',
    category: 'Fees & Grants',
    q: 'Are there discounts for group registrations or college batch referrals?',
    a: 'Yes, we offer flat group referral fee discounts when 2 or more candidates enroll together from the same college campus or organization.'
  },

  // ==========================================
  // SECTION 4: INSTITUTE & LABS (10 QUESTIONS)
  // ==========================================
  {
    id: 'inst-1',
    category: 'Institute & Labs',
    q: 'Can I choose between live online and hybrid on-campus learning modes?',
    a: 'Yes! We offer flexible learning schedules including live interactive online sessions for working professionals and hybrid on-campus lab access at our main tech hub.'
  },
  {
    id: 'inst-2',
    category: 'Institute & Labs',
    q: 'What specialized lab facilities are available on campus?',
    a: 'Our campus features high-performance NVIDIA H100 GPU clusters for AI research, dedicated bare-metal Kubernetes server racks, isolated cyber threat arenas, and 24/7 collaborative hackathon spaces.'
  },
  {
    id: 'inst-3',
    category: 'Institute & Labs',
    q: 'Where is the physical campus located and what are the lab operational hours?',
    a: 'Our flagship innovation campus is located in Hitec City, Hyderabad. Labs are open 7 days a week from 8:00 AM to 10:00 PM with dedicated lab mentors.'
  },
  {
    id: 'inst-4',
    category: 'Institute & Labs',
    q: 'Do students get live commercial internship experience?',
    a: 'Yes, every student works on a 3-month commercial capstone internship, building production-grade microservices and live customer-facing products with venture-backed tech startups.'
  },
  {
    id: 'inst-5',
    category: 'Institute & Labs',
    q: 'What GPU hardware clusters are provided for AI & Deep Learning experiments?',
    a: 'Students get cloud credit access to dedicated multi-node NVIDIA H100 & A100 GPU clusters for fine-tuning Large Language Models, PyTorch vision models, and vector database RAG indexing.'
  },
  {
    id: 'inst-6',
    category: 'Institute & Labs',
    q: 'How are hands-on cloud labs structured for DevOps and Kubernetes students?',
    a: 'DevOps fellows get dedicated AWS/GCP sandbox environments to deploy multi-cluster Kubernetes, configure eBPF micro-segmentation, and automate GitOps CI/CD pipelines.'
  },
  {
    id: 'inst-7',
    category: 'Institute & Labs',
    q: 'Is hostel or accommodation assistance available for non-local students near campus?',
    a: 'Yes, our student support desk assists outstation candidates in finding verified, affordable PG hostels and student co-living spaces within walking distance of the campus.'
  },
  {
    id: 'inst-8',
    category: 'Institute & Labs',
    q: 'What certificate or industry credential do I receive upon graduation?',
    a: 'You receive a verified Industry Post Graduate Diploma Certificate along with a 3-Month Internship Experience Certificate and a verifiable digital credential link for LinkedIn.'
  },
  {
    id: 'inst-9',
    category: 'Institute & Labs',
    q: 'How are batch sizes maintained to ensure 1-on-1 mentor guidance?',
    a: 'We strictly cap every cohort at 25-30 students per batch to ensure personalized code reviews, dedicated doubt resolution, and tailored career tracking.'
  },
  {
    id: 'inst-10',
    category: 'Institute & Labs',
    q: 'Can alumni access campus facilities and hackathon arenas after completing the course?',
    a: 'Yes! All Nexus alumni enjoy lifetime access to our community Discord, hackathon arenas, alumni networking meetups, and continuous career upgrade guidance.'
  }
];
