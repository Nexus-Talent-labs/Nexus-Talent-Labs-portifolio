'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuralCanvas from '@/components/NeuralCanvas';
import MouseSpotlight from '@/components/MouseSpotlight';
import ProgramModal from '@/components/ProgramModal';
import ApplicationModal from '@/components/ApplicationModal';
import AskAIWidget from '@/components/AskAIWidget';
import SplitText from '@/components/reactbits/SplitText';
import ShinyText from '@/components/reactbits/ShinyText';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import TiltedCard from '@/components/reactbits/TiltedCard';
import Magnet from '@/components/reactbits/Magnet';
import AccordionGallery, { AccordionGalleryItem } from '@/components/reactbits/AccordionGallery';
import DriftWall, { DriftWallItem } from '@/components/reactbits/DriftWall';
import ScrollExpand from '@/components/reactbits/ScrollExpand';
import HiringLogosLoop from '@/components/HiringLogosLoop';
import Stepper, { Step } from '@/components/reactbits/Stepper';
import TypewriterText from '@/components/reactbits/TypewriterText';
import CountUp from '@/components/reactbits/CountUp';
import BounceCards, { BounceCardsItem } from '@/components/reactbits/BounceCards';
import FacultyFlipCard, { FacultyMemberItem } from '@/components/reactbits/FacultyFlipCard';
import Logo3DViewer from '@/components/Logo3DViewer';
import { PROGRAMS_DATA, CourseProgram } from '@/data/programs';
import { PLACEMENT_STATS, HIRING_COMPANIES, SUCCESS_STORIES } from '@/data/placements';
import { STUDENT_PROJECTS, StudentProject } from '@/data/projects';
import ProjectModal from '@/components/ProjectModal';
import { FACULTY_MEMBERS } from '@/data/faculty';
import { FAQS_DATA } from '@/data/faqs';
import { 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  Brain, 
  Code, 
  Cloud, 
  Shield, 
  Zap, 
  Award, 
  Briefcase, 
  Users, 
  ChevronRight, 
  CheckCircle2, 
  ExternalLink, 
  Github, 
  Star, 
  Plus, 
  Minus, 
  ChevronDown, 
  Cpu, 
  Layers, 
  TrendingUp, 
  Building2, 
  Play,
  Monitor,
  Server,
  Lock,
  Compass
} from 'lucide-react';

export default function HomePage() {
  const [selectedProgramModal, setSelectedProgramModal] = useState<CourseProgram | null>(null);
  const [selectedProjectModal, setSelectedProjectModal] = useState<StudentProject | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [activeApplyProgramId, setActiveApplyProgramId] = useState<string | undefined>(undefined);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [faqCategory, setFaqCategory] = useState<string>('CRT Programs');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeLabTab, setActiveLabTab] = useState<number>(0);
  const [isMounted, setIsMounted] = useState(false);
  const [typingText, setTypingText] = useState('');

  // 3D Card Tilt State
  const [cardRotateX, setCardRotateX] = useState(0);
  const [cardRotateY, setCardRotateY] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCardRotateX(-y / 15);
    setCardRotateY(x / 15);
  };

  const handleCardMouseLeave = () => {
    setCardRotateX(0);
    setCardRotateY(0);
  };

  // Typing effect for Hero
  const fullHeadline = "Build the Future with AI, Data Science & Full Stack Engineering";
  useEffect(() => {
    if (!isMounted) return;
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullHeadline.length) {
        setTypingText(fullHeadline.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 35);
    return () => clearInterval(timer);
  }, [isMounted]);

  // Auto-switch Campus Labs tabs
  useEffect(() => {
    if (!isMounted) return;
    const labTimer = setInterval(() => {
      setActiveLabTab((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(labTimer);
  }, [isMounted]);

  const handleOpenApply = (programId?: string) => {
    setActiveApplyProgramId(programId);
    setIsApplyModalOpen(true);
  };

  const filteredPrograms = activeCategory === 'All'
    ? PROGRAMS_DATA
    : PROGRAMS_DATA.filter(p => p.category === activeCategory);

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Industry Mentors',
      description: 'Learn directly from Senior Staff Engineers at Google, Vercel, AWS & Stanford AI research labs.',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Terminal,
      title: 'Live Industry Projects',
      description: 'Build production-ready codebases with real API telemetry, GitOps CI/CD pipelines, and microservices.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Dedicated AI Labs',
      description: 'Access high-performance GPU clusters (NVIDIA H100) for fine-tuning LLMs and training neural networks.',
      color: 'from-cyan-400 to-emerald-400'
    },
    {
      icon: Briefcase,
      title: 'Guaranteed Internships',
      description: 'Gain 3 months of hands-on internship experience with venture-backed tech startups and enterprise labs.',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      icon: Award,
      title: '100% Placement Support',
      description: 'Dedicated recruitment team conducting mock system design rounds, resume reviews, and direct referral pushes.',
      color: 'from-blue-600 to-purple-600'
    },
    {
      icon: Zap,
      title: '1-on-1 Career Guidance',
      description: 'Personalized career roadmap tailoring your portfolio projects to top tier tech salary brackets (12+ LPA).',
      color: 'from-amber-400 to-orange-500'
    }
  ];

  const learningSteps = [
    { step: '01', title: 'Discover & Onboard', desc: 'Select track and set personalized career targets', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80' },
    { step: '02', title: 'Deep Technical Learn', desc: 'Master concepts with live interactive lab sessions', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80' },
    { step: '03', title: 'Hands-on Practice', desc: 'Solve 100+ real engineering scenarios', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80' },
    { step: '04', title: 'Capstone Projects', desc: 'Architect production-grade applications', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80' },
    { step: '05', title: 'Hackathon Arenas', desc: 'Participate in 48-hour competitive coding Sprints', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80' },
    { step: '06', title: 'Start Internship', desc: 'Work on live commercial products with real impact', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80' },
    { step: '07', title: 'Resume Building', desc: 'Craft high-converting, ATS-friendly portfolios', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80' },
    { step: '08', title: 'Mock Interviews', desc: 'Survive intense FAANG-level technical rounds', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80' },
    { step: '09', title: 'Placement & Offer', desc: 'Receive offer letters with high LPA packages', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80' }
  ];

  const campusLabs = [
    { title: 'Neural AI Research Lab', icon: Brain, image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80', desc: 'Multi-node GPU server cluster for LLM RAG research and model training.' },
    { title: 'Cloud Infrastructure Center', icon: Server, image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80', desc: 'Dedicated bare-metal server racks for Kubernetes orchestration and eBPF networking.' },
    { title: 'Cyber Offense & Threat Arena', icon: Lock, image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80', desc: 'Isolated sandbox environment for live penetration testing and SOC monitoring.' },
    { title: 'Innovation Hackathon Arena', icon: Terminal, image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80', desc: 'Collaborative round-the-clock coding space for student project teams.' }
  ];

  const faqs = FAQS_DATA;

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="relative min-h-screen bg-[#09090b] text-white overflow-hidden selection:bg-blue-600/30 selection:text-cyan-300">
      
      {/* Background Canvas & Spotlight */}
      <NeuralCanvas />
      <MouseSpotlight />

      {/* Global Navbar */}
      <Navbar onOpenApply={() => handleOpenApply()} />

      {/* HERO SECTION - STACK CARD 1 */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="sticky top-0 z-10 w-full min-h-screen bg-[#09090b] border-b border-white/10 flex flex-col justify-center pt-28 pb-20 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full relative">
          {/* Background Aurora Blob Glows */}
          <div className="aurora-glow w-[550px] h-[550px] bg-blue-600/25 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
          <div className="aurora-glow w-[450px] h-[450px] bg-purple-600/20 top-1/3 right-10 animate-pulse-glow" style={{ animationDelay: '2s' }} />

          {/* Side-by-Side Grid: Text Content on Left & 3D Rotating GLB Logo on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side: Hero Text Content */}
            <motion.div 
              className="lg:col-span-7 space-y-6 text-left"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              
              {/* Headline Separated into 2 Sentences with Typewriter Loops */}
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] font-['Outfit'] space-y-2" suppressHydrationWarning>
                <div className="text-white block">
                  <TypewriterText
                    text="Unlock Your Potential."
                    addDotsAfterPart1={true}
                    loop={true}
                    pauseDuration={2000}
                    speed={35}
                    delay={100}
                  />
                </div>
                <div className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-orange-400 to-cyan-300 block">
                  Build the Skills That Shape Your Future.
                </div>
              </motion.h1>

              {/* Subheadline & Description */}
              <motion.div variants={itemVariants} className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
                <p>
                  Every successful career begins with the right knowledge, guidance, and opportunity. At <strong className="text-white font-bold">Nexus Talent Labs</strong>, we empower students and professionals to transform their aspirations into achievements through industry-driven training, advanced technology programs, and expert mentorship.
                </p>
                <p>
                  Learn the technologies shaping tomorrow — <strong className="text-cyan-300 font-semibold">Generative AI, AI Agents, Prompt Engineering, Data Science, Cloud Computing, Full Stack Development, and emerging technologies</strong> — with practical learning experiences designed around real-world industry standards and company expectations.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Side: Seamless Borderless Floating 3D Rotating GLB Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 w-full relative flex flex-col items-center justify-center bg-transparent border-none shadow-none"
            >
              <Logo3DViewer modelPath="public/glb/logo.glb" className="w-full h-[380px] sm:h-[460px]" />
            </motion.div>

          </div>
        </div>
      </motion.section>


      {/* WHY CHOOSE NEXUS TALENT LABS - STACK CARD 2 (COMPLETELY COVERS CARD 1) */}
      <motion.section 
        initial={{ y: 100, opacity: 0.6 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 z-20 w-full min-h-screen bg-[#0c0c12] border-t border-blue-500/30 shadow-[0_-30px_80px_rgba(0,0,0,0.98)] flex flex-col justify-center py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto w-full space-y-16">
        
        {/* Intro Header with Typewriter & Glass Frame Animation */}
        <motion.div 
          className="text-center space-y-6 w-full glass-panel rounded-3xl p-8 sm:p-12 border border-cyan-500/30 relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Ambient Glow Effects */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block font-mono">
            The Nexus Advantage
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
            <TypewriterText
              text="Why Choose Nexus Talent Labs?"
              speed={40}
              delay={200}
              className="bg-gradient-to-r from-white via-zinc-100 to-cyan-200 bg-clip-text text-transparent"
            />
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 text-left sm:text-center text-zinc-300 leading-relaxed font-sans"
          >
            <p className="text-sm sm:text-base leading-relaxed">
              <strong className="text-white font-semibold">Nexus Talent Labs</strong> is a leading <strong className="text-cyan-300 font-semibold">training institute</strong> committed to transforming students, graduates, and professionals into highly skilled, industry-ready talent. We deliver career-focused training programs that combine technical excellence, practical learning, and professional development to help learners thrive in today’s rapidly evolving technology landscape.
            </p>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Our programs are built on <strong className="text-white">industry standards, real-world practices, and company hiring expectations</strong>, ensuring every learner gains hands-on experience and confidence. Beyond individual training, we partner with <strong className="text-white">colleges, universities, faculty mentors, and academic institutions</strong> to improve employability and bridge the gap between academia and industry.
            </p>
          </motion.div>
        </motion.div>

        {/* 10 CORE REASONS WHY INSTITUTIONS & STUDENTS CHOOSE NEXUS */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Pillars of Excellence</span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit']">10 Reasons Why Students & Institutions Choose Us</h3>
          </div>

          <div className="w-full pt-4 overflow-hidden">
            <AccordionGallery
              items={[
                {
                  number: '01',
                  label: 'Industry-Aligned Curriculum',
                  description: 'Continuously updated with GenAI, Agentic AI, Cloud, and Full Stack with AI technologies.',
                  image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&q=80'
                },
                {
                  number: '02',
                  label: 'Corporate Hiring Standards',
                  description: 'Training designed according to company hiring expectations and market demands.',
                  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80'
                },
                {
                  number: '03',
                  label: 'Expert Trainers & Mentors',
                  description: 'Learn directly from senior engineers with extensive industry experience.',
                  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80'
                },
                {
                  number: '04',
                  label: 'Hands-On Labs & Live Projects',
                  description: 'Practical learning through production-grade capstones and real case studies.',
                  image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80'
                },
                {
                  number: '05',
                  label: 'Specialized AI & Future Tech',
                  description: 'GenAI, Prompt Engineering, LLMs, RAG, and Agentic AI workflows.',
                  image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=900&q=80'
                },
                {
                  number: '06',
                  label: 'Personalized Mentoring',
                  description: 'Continuous performance assessments and 1-on-1 escalation reviews.',
                  image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80'
                },
                {
                  number: '07',
                  label: 'Placement-Focused CRT',
                  description: 'Comprehensive coding assessments, mock interviews, and HR prep.',
                  image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80'
                },
                {
                  number: '08',
                  label: 'Customized Institutional Solutions',
                  description: 'Tailored learning programs for colleges, universities, and organizations.',
                  image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80'
                },
                {
                  number: '09',
                  label: 'Certification-Oriented Tracks',
                  description: 'Programs structured to enhance global credentials and employability.',
                  image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&q=80'
                },
                {
                  number: '10',
                  label: 'Lifelong Innovation & Support',
                  description: 'Strong focus on problem solving, career growth, and continuous learning.',
                  image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&q=80'
                }
              ]}
              defaultIndex={0}
              expandRatio={0.45}
              trigger="hover"
              accentColor="#38bdf8"
              overlayColor="#060010"
              textColor="#ffffff"
              showLabels
              duration={0.6}
              ease="power3.out"
              parallax={0.5}
              tilt={6}
              stagger={0.05}
              height={480}
              gap={10}
              radius={20}
              orientation="horizontal"
            />
          </div>
        </div>



        {/* CAMPUS RECRUITMENT TRAINING & SKILL DEVELOPMENT WITH SCROLL EXPAND */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Institutional Placement Excellence</span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit']">Campus Recruitment Training (CRT)</h3>
          </div>

          <div className="w-full h-[540px] rounded-3xl overflow-hidden border border-white/15 bg-[#060010] relative shadow-2xl">
            <ScrollExpand
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&auto=format&fit=crop&q=80"
              alt="Campus Recruitment Training"
              title="Campus Recruitment Training (CRT)"
              scrollHint="Scroll frame to expand placement training details"
              startWidth={42}
              startHeight={58}
              startRadius={24}
              endRadius={0}
              mediaZoom={1.35}
              scrollDistance={1.2}
              holdDistance={0.35}
              smoothing={0.1}
              overlayScrim={0.5}
              enabled={true}
            >
              <div className="max-w-4xl mx-auto space-y-6 text-center">
                <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-blue-600/20 border border-cyan-400/40 text-cyan-300 inline-block uppercase tracking-wider backdrop-blur-md">
                  Placement-Focused CRT Modules
                </span>
                
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit'] drop-shadow-md">
                  Engineered to Clear Recruitment Benchmarks of MNCs & Tech Startups
                </h3>

                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed max-w-2xl mx-auto">
                  Comprehensive training modules designed for engineering colleges, academic institutions, and technology graduates:
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-white font-semibold pt-2">
                  {[
                    'Quantitative Aptitude',
                    'Logical & Analytical Reasoning',
                    'Verbal Ability & Communication',
                    'Coding Assessments & Problem Solving',
                    'Group Discussions',
                    'Resume & LinkedIn Optimization',
                    'Technical Interview Prep',
                    'Mock Interviews with Feedback'
                  ].map((crt, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-black/75 border border-white/20 backdrop-blur-lg flex items-center justify-center gap-2 shadow-lg hover:border-cyan-400/50 transition-all">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-[11px] font-bold">{crt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollExpand>
          </div>
        </div>

        {/* OUR MISSION STATEMENT BANNER */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-blue-500/30 text-center space-y-4 relative overflow-hidden shadow-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
            Our Core Mission
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit'] max-w-3xl mx-auto">
            <TypewriterText
              text="Empowering Learners Beyond the Classroom"
              speed={35}
              delay={200}
              className="text-white"
            />
          </h3>
          <div className="text-xs sm:text-sm text-zinc-300 max-w-3xl mx-auto leading-relaxed pt-2">
            <TypewriterText
              text="At Nexus Talent Labs, we believe learning should go beyond the classroom. Our mission is to empower learners with future-ready skills, industry knowledge, and practical experience that enable them to excel in an AI-driven, technology-first world. By combining advanced technical training, professional skill development, and expert mentorship, we create confident, innovative, and job-ready professionals prepared for today's global workforce."
              speed={15}
              delay={1200}
              className="text-zinc-300"
            />
          </div>
        </div>
        </div>
      </motion.section>



      {/* LEARNING JOURNEY ANIMATED TIMELINE - STACK CARD 4 (COMPLETELY COVERS CARD 3) */}
      <motion.section 
        initial={{ y: 100, opacity: 0.6 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 z-40 w-full min-h-screen bg-[#0a0a10] border-t border-cyan-500/30 shadow-[0_-30px_80px_rgba(0,0,0,0.98)] flex flex-col justify-center py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto w-full">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Roadmap to Success
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
            Your 9-Step Learning Journey
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            From Day 1 onboarding to final offer negotiation, our structured milestone pipeline ensures complete industry readiness.
          </p>
        </div>
        {/* SCROLL EXPAND SHOWCASE FOR LEARNING JOURNEY */}
        <div className="w-full h-[460px] rounded-3xl overflow-hidden border border-cyan-500/20 bg-[#060010] relative mb-12 shadow-2xl">
          <ScrollExpand
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&auto=format&fit=crop&q=80"
            alt="9-Step Learning Journey"
            title="9-Step Learning Journey"
            scrollHint="Scroll frame to expand roadmap stage"
            startWidth={40}
            startHeight={55}
            startRadius={20}
            mediaZoom={1.3}
            overlayScrim={0.5}
            enabled={true}
          >
            <div className="max-w-3xl mx-auto space-y-4 text-center">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-cyan-600/20 border border-cyan-400/40 text-cyan-300 inline-block uppercase tracking-wider backdrop-blur-md">
                Milestone-Based Career Architecture
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit']">
                Structured From Day 1 Onboarding To Final Offer Letter
              </h3>
              <p className="text-xs sm:text-sm text-zinc-200 max-w-xl mx-auto">
                100+ Engineering Scenarios • 48-Hour Hackathon Sprints • 3-Month Commercial Internships.
              </p>
            </div>
          </ScrollExpand>
        </div>

        {/* ANIMATED STEPPER FOR 9-STEP LEARNING JOURNEY */}
        <div className="w-full max-w-7xl mx-auto pt-4">
          <Stepper
            initialStep={1}
            autoPlay={true}
            autoPlayInterval={3500}
          >
            {learningSteps.map((s, idx) => (
              <Step key={idx}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-4">
                  {/* Left Half: Step Details */}
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 font-['Space_Grotesk']">
                        {s.step}
                      </span>
                      <div>
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-blue-500/10 border border-blue-500/20 text-cyan-300">
                          Milestone Stage {s.step} / 09
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] mt-1">
                          {s.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
                      {s.desc}
                    </p>

                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <span className="text-zinc-400 font-semibold flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Guaranteed Evaluation Milestone
                      </span>
                      <button 
                        onClick={() => handleOpenApply()}
                        className="text-xs font-bold text-cyan-300 hover:text-white hover:underline flex items-center gap-1"
                      >
                        Enquire for Track <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Half: Half-Width Milestone Image */}
                  <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl h-[260px] sm:h-[320px] group">
                    <img 
                      src={s.image} 
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-white">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 font-bold">
                        Phase {s.step}: {s.title}
                      </span>
                      <span className="text-cyan-300 font-mono text-[11px] font-bold">Nexus Labs</span>
                    </div>
                  </div>
                </div>
              </Step>
            ))}
          </Stepper>
        </div>
        </div>
      </motion.section>

      {/* STUDENT PROJECTS SHOWCASE - STACK CARD 5 (COMPLETELY COVERS CARD 4) */}
      <motion.section 
        initial={{ y: 100, opacity: 0.6 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 z-[50] w-full min-h-screen bg-[#09090b] border-t border-white/20 shadow-[0_-30px_80px_rgba(0,0,0,0.98)] flex flex-col justify-center py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Lab Showcase
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
                Featured Student Projects
              </h2>
            </div>
            <a
              href="/projects"
              className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1"
            >
              Explore All 120+ Student Repos <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 3D DRIFTING WALL SHOWCASE */}
          <div className="w-full h-[480px] rounded-3xl overflow-hidden border border-white/15 bg-[#060010] relative mb-12 shadow-2xl">
            <DriftWall
              items={STUDENT_PROJECTS.map((proj) => ({
                image: proj.image,
                title: proj.title,
                onClick: () => setSelectedProjectModal(proj)
              }))}
              columns={4}
              tileWidth={220}
              tileHeight={140}
              gap={16}
              tilt={14}
              turn={-12}
              perspective={1200}
              depth={100}
              speed={38}
              direction="up"
              variance={0.4}
              parallax={0.6}
              lift={60}
              fade={0.5}
              dim={0.6}
              overlayColor="#060010"
              radius={14}
              pauseOnHover={false}
              grayscale={false}
            />
            <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-black/70 border border-cyan-500/40 text-cyan-300 backdrop-blur-md">
                ⚡ Click Any Project Tile to Open Live Technical Modal
              </span>
            </div>
          </div>


        </div>
      </motion.section>

      {/* TRUSTED COMPANIES MARQUEE & PLACEMENT STATS - STACK CARD 6 (COMPLETELY COVERS CARD 5) */}
      <motion.section 
        initial={{ y: 100, opacity: 0.6 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 z-[60] w-full min-h-screen bg-[#0b0c14] border-t border-emerald-500/30 shadow-[0_-30px_80px_rgba(0,0,0,0.98)] flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto w-full space-y-12">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">
            Our Fellows Are Recruited By Top Hyderabad Startups & Mid-Range Tech Leaders
          </p>
          <HiringLogosLoop />

          {/* SCROLL EXPAND SHOWCASE FOR HIRING & PLACEMENT STATS */}
          <div className="w-full h-[440px] rounded-3xl overflow-hidden border border-emerald-500/25 bg-[#060010] relative shadow-2xl">
            <ScrollExpand
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80"
              alt="Hyderabad Tech Hiring Partners"
              title="140+ Tech & Startup Hiring Partners"
              scrollHint="Scroll frame to expand placement outcomes"
              startWidth={40}
              startHeight={55}
              startRadius={20}
              mediaZoom={1.3}
              overlayScrim={0.5}
              enabled={true}
            >
              <div className="max-w-3xl mx-auto space-y-4 text-center">
                <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-600/20 border border-emerald-400/40 text-emerald-300 inline-block uppercase tracking-wider backdrop-blur-md">
                  Dedicated 100% Placement Cell
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit']">
                  Connecting Talent Directly With Silicon Valley & Global Tech Hubs
                </h3>
                <p className="text-xs sm:text-sm text-zinc-200 max-w-xl mx-auto">
                  96.4% Placement Rate • 16 LPA Highest CTC Offer • 2,850+ Graduates Working at Top Tech Companies.
                </p>
              </div>
            </ScrollExpand>
          </div>
        </div>

        <div className="glass-panel rounded-3xl p-10 border border-white/15 grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk']">
              <CountUp to={2850} suffix="+" duration={2} />
            </span>
            <span className="text-xs text-zinc-400 block mt-1">Students Trained</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-['Space_Grotesk']">
              <CountUp to={96.4} decimals={1} suffix="%" duration={2} />
            </span>
            <span className="text-xs text-zinc-400 block mt-1">Placement Rate</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-purple-400 font-['Space_Grotesk']">
              <CountUp to={140} suffix="+" duration={2} />
            </span>
            <span className="text-xs text-zinc-400 block mt-1">Hiring Partners</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-['Space_Grotesk']">
              <CountUp to={16} suffix=" LPA" duration={2} />
            </span>
            <span className="text-xs text-zinc-400 block mt-1">Highest CTC Offer</span>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-amber-300 font-['Space_Grotesk']">
              <CountUp to={1800} suffix="+" duration={2} />
            </span>
            <span className="text-xs text-zinc-400 block mt-1">Interviews Conducted</span>
          </div>
        </div>
      </motion.section>

      {/* SUCCESS STORIES & FACULTY - STACK CARD 7 (COMPLETELY COVERS CARD 6) */}
      <motion.section 
        initial={{ y: 100, opacity: 0.6 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 z-[70] w-full min-h-screen bg-[#09090e] border-t border-amber-500/30 shadow-[0_-30px_80px_rgba(0,0,0,0.98)] flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto w-full space-y-16">
          <div>
            <div className="text-center space-y-3 mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Real Career Impact
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
                Graduate Success Stories
              </h2>
            </div>

            {/* SCROLL EXPAND SHOWCASE FOR MENTORSHIP & SUCCESS */}
            <div className="w-full h-[440px] rounded-3xl overflow-hidden border border-amber-500/25 bg-[#060010] relative mb-12 shadow-2xl">
              <ScrollExpand
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80"
                alt="Research Mentors & Success Stories"
                title="World-Class Research Mentors"
                scrollHint="Scroll frame to expand mentorship panel"
                startWidth={40}
                startHeight={55}
                startRadius={20}
                mediaZoom={1.3}
                overlayScrim={0.5}
                enabled={true}
              >
                <div className="max-w-3xl mx-auto space-y-4 text-center">
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-amber-600/20 border border-amber-400/40 text-amber-300 inline-block uppercase tracking-wider backdrop-blur-md">
                    1-on-1 Mentorship & Career Guidance
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit']">
                    Learn Directly From Senior Engineers at Google, AWS & Vercel
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-200 max-w-xl mx-auto">
                    Personalized career roadmaps, mock system design rounds, and direct referral pushes.
                  </p>
                </div>
              </ScrollExpand>
            </div>

            {/* REACTION & BOUNCE CARDS FOR SUCCESS STORIES */}
            <div className="w-full flex flex-col items-center justify-center pt-4">
              <BounceCards
                items={[
                  {
                    id: 'story-as',
                    initials: 'AS',
                    studentName: 'Aarav Sharma',
                    roleAtCompany: 'Full Stack Engineer at Darwinbox',
                    courseTaken: 'Full Stack MERN & Next.js Architecture',
                    previousPackage: 'Junior Python Dev (3.5 LPA)',
                    newPackage: '16 LPA',
                    quote: 'Nexus Talent Labs completely transformed my engineering skills. Building microservices during the lab hackathons was the key highlight in clearing my Darwinbox interviews!'
                  },
                  {
                    id: 'story-pn',
                    initials: 'PN',
                    studentName: 'Priya Nair',
                    roleAtCompany: 'Frontend Developer at Keka HR',
                    courseTaken: 'UI/UX & Modern Frontend Development',
                    previousPackage: 'Fresh Graduate',
                    newPackage: '12 LPA',
                    quote: 'The 1-on-1 mentorship and practical project reviews helped me build a portfolio that stood out directly to Keka HR technical recruiters.'
                  },
                  {
                    id: 'story-rm',
                    initials: 'RM',
                    studentName: 'Rohan Mehta',
                    roleAtCompany: 'Cloud DevOps Associate at CtrlS Datacenters',
                    courseTaken: 'Cloud Native DevOps & Kubernetes Master',
                    previousPackage: 'System Associate (3.2 LPA)',
                    newPackage: '14 LPA',
                    quote: 'Managing live server infrastructure in the Nexus Cloud Lab gave me hands-on confidence for real bare-metal cloud deployment rounds.'
                  },
                  {
                    id: 'story-av',
                    initials: 'AV',
                    studentName: 'Ananya Verma',
                    roleAtCompany: 'Data Engineer at HighRadius',
                    courseTaken: 'Data Science & Big Data Engineering',
                    previousPackage: 'Data Analyst (4 LPA)',
                    newPackage: '15 LPA',
                    quote: 'The ETL pipeline and SQL optimization modules prepared me thoroughly for HighRadius FinTech technical evaluations!'
                  }
                ]}
                containerHeight={460}
                animationDelay={0.3}
                animationStagger={0.08}
                easeType="elastic.out(1, 0.8)"
                enableHover={true}
              />
              <p className="text-xs text-zinc-400 font-mono mt-4">
                💡 Hover over any fellow story card to inspect placement career transformation
              </p>
            </div>
          </div>

          {/* FACULTY SUB-BLOCK */}
          <div className="pt-8 border-t border-white/10">
            <div className="text-center space-y-3 mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                World-Class Mentors
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
                Learn from Research Leaders
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {[
                {
                  id: 'dsj',
                  initials: 'DSJ',
                  name: 'Dr. Sarah Jenkins',
                  role: 'Head of AI & Quantum Research',
                  company: 'Former Lead AI Scientist at DeepMind & Stanford AI Alumna',
                  bio: 'Pioneer in Transformer optimization and RAG architectures. Author of 18 IEEE AI papers and advisor to leading Silicon Valley startups.',
                  photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80'
                },
                {
                  id: 'vr',
                  initials: 'VR',
                  name: 'Vikramaditya Roy',
                  role: 'Distinguished Fellow - Systems & Cloud',
                  company: 'Principal Infrastructure Engineer at AWS Cloud Architecture',
                  bio: 'Engineered mission-critical cloud infrastructure handling 5M+ req/sec. Certified Kubernetes Administrator (CKA) and CNCF speaker.',
                  photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80'
                },
                {
                  id: 'er',
                  initials: 'ER',
                  name: 'Elena Rostova',
                  role: 'Principal Full Stack Architect',
                  company: 'Senior Staff Engineer at Vercel & Stripe',
                  bio: 'Specialist in hyper-performant client-side state, WebAssembly modules, and enterprise Next.js design systems.',
                  photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80'
                },
                {
                  id: 'mv',
                  initials: 'MV',
                  name: 'Marcus Vance',
                  role: 'Head of Cybersecurity & Threat Labs',
                  company: 'Ex-Defense Cyber Analyst & Offensive Security Lead',
                  bio: 'Discovered 14 CVE vulnerabilities in enterprise cloud frameworks. OSCP, CISSP certified security veteran.',
                  photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80'
                }
              ].map((member) => (
                <FacultyFlipCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CAMPUS LABS, FAQS & FINAL CTA BANNER - STACK CARD 8 (COMPLETELY COVERS CARD 7) */}
      <motion.section 
        initial={{ y: 100, opacity: 0.6 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 z-[80] w-full min-h-screen bg-gradient-to-b from-[#0e0e18] via-[#09090d] to-[#09090b] border-t border-cyan-500/35 shadow-[0_-30px_80px_rgba(0,0,0,0.98)] flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto w-full space-y-16">
        <div className="text-center space-y-3 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            State of the Art Facilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
            Campus & Specialized Research Labs
          </h2>
        </div>

        {/* SCROLL EXPAND SHOWCASE FOR RESEARCH FACILITIES */}
        <div className="w-full h-[440px] rounded-3xl overflow-hidden border border-cyan-500/25 bg-[#060010] relative mb-10 shadow-2xl">
          <ScrollExpand
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&auto=format&fit=crop&q=80"
            alt="Campus & Specialized Research Labs"
            title="State-of-the-Art Research Labs"
            scrollHint="Scroll frame to expand lab environment"
            startWidth={40}
            startHeight={55}
            startRadius={20}
            mediaZoom={1.3}
            overlayScrim={0.5}
            enabled={true}
          >
            <div className="max-w-3xl mx-auto space-y-4 text-center">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-cyan-600/20 border border-cyan-400/40 text-cyan-300 inline-block uppercase tracking-wider backdrop-blur-md">
                High-Performance Computing Infrastructure
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit']">
                NVIDIA H100 GPU Clusters & Kubernetes Bare-Metal Racks
              </h3>
              <p className="text-xs sm:text-sm text-zinc-200 max-w-xl mx-auto">
                Neural AI Research Lab • Cloud Infrastructure Center • Cyber Threat Arena • Hackathon Arenas.
              </p>
            </div>
          </ScrollExpand>
        </div>

        {/* Tab Switcher with Auto-Switching Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {campusLabs.map((lab, idx) => {
            const isActive = activeLabTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveLabTab(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all relative ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 border border-blue-400/50 scale-105'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping absolute -top-1 -right-1" />
                )}
                <lab.icon className="w-4 h-4 text-cyan-400" />
                {lab.title}
              </button>
            );
          })}
        </div>

        {/* Active Lab Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLabTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glass-panel rounded-3xl overflow-hidden border border-white/15 grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center space-y-4 border-r border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-600/20 text-cyan-400 border border-blue-500/30">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Environment Specs</span>
                  <h4 className="text-lg font-bold text-white font-['Outfit']">{campusLabs[activeLabTab].title}</h4>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
                  <span className="text-[10px] text-zinc-400 block font-semibold uppercase">Cloud Cluster</span>
                  <span className="font-extrabold text-white font-mono">10Gbps Fiber Backbone</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
                  <span className="text-[10px] text-zinc-400 block font-semibold uppercase">Hardware Nodes</span>
                  <span className="font-extrabold text-emerald-400 font-mono">Dedicated GPU Clusters</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center space-y-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-blue-500/10 text-cyan-300 border border-blue-500/20 w-max">
                Lab Environment #{activeLabTab + 1}
              </span>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-white font-['Outfit']">
                {campusLabs[activeLabTab].title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {campusLabs[activeLabTab].desc}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Available for On-Campus & Remote Access
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        </div>
      </motion.section>

      {/* FAQ SECTION - STACK CARD 9 (COMPLETELY COVERS CARD 8) */}
      <motion.section 
        initial={{ y: 100, opacity: 0.6 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 z-[90] w-full min-h-screen bg-[#09090d] border-t border-purple-500/30 shadow-[0_-30px_80px_rgba(0,0,0,0.98)] flex flex-col justify-center py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto w-full space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['CRT Programs', 'Placements', 'Fees & Grants', 'Institute & Labs'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFaqCategory(cat);
                  setOpenFaqIndex(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  faqCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400/50 scale-105'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {faqs.filter(f => f.category === faqCategory).map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? 'bg-gradient-to-r from-blue-950/50 via-purple-950/40 to-cyan-950/50 border-cyan-400/60 shadow-[0_10px_35px_rgba(56,189,248,0.2)] backdrop-blur-md'
                      : 'glass-panel border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className={`w-full p-5 text-left font-bold text-sm transition-colors flex items-center justify-between gap-4 ${
                      isOpen ? 'text-cyan-300' : 'text-white hover:text-cyan-200'
                    }`}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <Minus className="w-4 h-4 text-cyan-400 shrink-0" /> : <Plus className="w-4 h-4 text-zinc-400 shrink-0" />}
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 pb-5 text-xs text-zinc-300 leading-relaxed border-t border-white/5 pt-3 font-sans"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* FINAL GRADIENT BANNER CTA - STACK CARD 10 (COMPLETELY COVERS CARD 9) */}
      <motion.section 
        initial={{ y: 100, opacity: 0.6 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 z-[100] w-full min-h-screen bg-gradient-to-b from-[#09090e] to-[#09090b] border-t border-cyan-500/40 shadow-[0_-30px_80px_rgba(0,0,0,0.98)] flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="glass-panel rounded-3xl p-10 sm:p-16 border border-white/20 relative overflow-hidden text-center space-y-6">
            <div className="aurora-glow w-96 h-96 bg-blue-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 inline-block">
              Start Your Tech Career Transformation
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit'] max-w-2xl mx-auto">
              Ready to Build the Future with Nexus Talent Labs?
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed">
              Reserve your lab seat today. Join 2,850+ graduates working at Google, AWS, Microsoft, and high-growth AI startups.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => handleOpenApply()}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:opacity-95 font-bold text-xs sm:text-sm text-white shadow-2xl shadow-blue-500/30 flex items-center gap-2 transition-all active:scale-95"
              >
                <Sparkles className="w-4 h-4" /> Apply Now for Admissions
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Global Footer */}
      <div className="relative z-[110] bg-[#09090b] border-t border-white/10">
        <Footer />
      </div>

      {/* Program Details Modal */}
      <ProgramModal
        program={selectedProgramModal}
        onClose={() => setSelectedProgramModal(null)}
        onApply={(progId) => handleOpenApply(progId)}
      />

      {/* Student Project Detail Modal Popup */}
      <ProjectModal
        project={selectedProjectModal}
        onClose={() => setSelectedProjectModal(null)}
      />

      {/* Application Multi-Step Modal */}
      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        initialProgramId={activeApplyProgramId}
      />

      {/* Floating Ask AI Assistant Widget */}
      <AskAIWidget />
    </div>
  );
}
