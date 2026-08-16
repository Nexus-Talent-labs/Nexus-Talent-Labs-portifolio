export interface PlacementRecord {
  id: string;
  studentName: string;
  role: string;
  company: string;
  companyLogo: string;
  package: string;
  previousRole: string;
  courseTaken: string;
  photo: string;
  linkedIn: string;
  quote: string;
}

export const PLACEMENT_STATS = {
  totalTrained: '2,850+',
  placementRate: '96.4%',
  hiringPartners: '140+',
  highestPackage: '16 LPA',
  avgPackage: '8.5 LPA',
  interviewsConducted: '1,800+/month'
};

export const HIRING_COMPANIES = [
  { name: 'Darwinbox', logo: '/logos/darwinbox.svg' },
  { name: 'HighRadius', logo: '/logos/highradius.svg' },
  { name: 'Keka HR', logo: '/logos/keka.svg' },
  { name: 'Zenoti', logo: '/logos/zenoti.svg' },
  { name: 'Cyient', logo: '/logos/cyient.svg' },
  { name: 'Persistent Systems', logo: '/logos/persistent.svg' },
  { name: 'CtrlS Datacenters', logo: '/logos/ctrls.svg' },
  { name: 'ValueMomentum', logo: '/logos/valuemomentum.svg' },
  { name: 'Happiest Minds', logo: '/logos/happiestminds.svg' },
  { name: 'Zeta', logo: '/logos/zeta.svg' },
  { name: 'Sonata Software', logo: '/logos/sonata.svg' },
  { name: 'Birlasoft', logo: '/logos/birlasoft.svg' }
];

export const SUCCESS_STORIES: PlacementRecord[] = [
  {
    id: 'story-1',
    studentName: 'Aarav Sharma',
    role: 'Full Stack Engineer',
    company: 'Darwinbox',
    companyLogo: 'Darwinbox',
    package: '16 LPA',
    previousRole: 'Junior Python Dev (3.5 LPA)',
    courseTaken: 'Full Stack MERN & Next.js Architecture',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    linkedIn: 'https://linkedin.com',
    quote: 'Nexus Talent Labs completely transformed my engineering skills. Building microservices during the lab hackathons was the key highlight in clearing my Darwinbox interviews!'
  },
  {
    id: 'story-2',
    studentName: 'Priya Nair',
    role: 'Frontend Developer',
    company: 'Keka HR',
    companyLogo: 'Keka HR',
    package: '12 LPA',
    previousRole: 'Fresh Graduate',
    courseTaken: 'UI/UX & Modern Frontend Development',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
    linkedIn: 'https://linkedin.com',
    quote: 'The 1-on-1 mentorship and practical project reviews helped me build a portfolio that stood out directly to Keka HR technical recruiters.'
  },
  {
    id: 'story-3',
    studentName: 'Rohan Mehta',
    role: 'Cloud DevOps Associate',
    company: 'CtrlS Datacenters',
    companyLogo: 'CtrlS',
    package: '14 LPA',
    previousRole: 'System Associate (3.2 LPA)',
    courseTaken: 'Cloud Native DevOps & Kubernetes Master',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    linkedIn: 'https://linkedin.com',
    quote: 'Managing live server infrastructure in the Nexus Cloud Lab gave me hands-on confidence for real bare-metal cloud deployment rounds.'
  },
  {
    id: 'story-4',
    studentName: 'Ananya Verma',
    role: 'Data Engineer',
    company: 'HighRadius',
    companyLogo: 'HighRadius',
    package: '15 LPA',
    previousRole: 'Data Analyst (4 LPA)',
    courseTaken: 'Data Science & Big Data Engineering',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    linkedIn: 'https://linkedin.com',
    quote: 'The ETL pipeline and SQL optimization modules prepared me thoroughly for HighRadius FinTech technical evaluations!'
  }
];
