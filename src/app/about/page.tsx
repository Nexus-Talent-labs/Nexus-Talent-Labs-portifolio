'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuralCanvas from '@/components/NeuralCanvas';
import MouseSpotlight from '@/components/MouseSpotlight';
import ApplicationModal from '@/components/ApplicationModal';
import AskAIWidget from '@/components/AskAIWidget';
import ShinyText from '@/components/reactbits/ShinyText';
import Magnet from '@/components/reactbits/Magnet';
import TypewriterText from '@/components/reactbits/TypewriterText';
import { 
  Building2, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap,
  Briefcase,
  Zap,
  ShieldCheck,
  Compass,
  Rocket
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AboutPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#09090b] text-white overflow-hidden selection:bg-blue-600/30 selection:text-cyan-300">
      <NeuralCanvas />
      <MouseSpotlight />
      <Navbar onOpenApply={() => setIsApplyOpen(true)} />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 space-y-28">
        
        {/* HERO SECTION WITH TYPEWRITER & ENTRANCE REVEAL */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center space-y-6 max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-extrabold uppercase tracking-widest text-cyan-300 shadow-xl backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <ShinyText text="ABOUT NEXUS TALENT LABS" />
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl font-extrabold text-white font-['Outfit'] tracking-tight leading-tight">
            <TypewriterText
              text="Transforming Students & Professionals into Industry-Ready Leaders"
              coloredPart="Industry-Ready Leaders"
              coloredClassName="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300"
              speed={25}
              delay={200}
            />
          </motion.h1>

          <motion.p variants={itemVariants} className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl mx-auto">
            Nexus Talent Labs is a leading training institute committed to transforming students, graduates, and professionals into highly skilled, industry-ready talent. We deliver career-focused training programs that combine technical excellence, practical learning, and professional development to help learners thrive in today's rapidly evolving technology landscape.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Magnet strength={20}>
              <button
                onClick={() => setIsApplyOpen(true)}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:opacity-95 font-bold text-xs sm:text-sm text-white shadow-2xl shadow-blue-500/30 flex items-center gap-2 group transition-transform active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-cyan-300 group-hover:rotate-12 transition-transform" /> 
                Apply for Admission
              </button>
            </Magnet>
          </motion.div>
        </motion.div>

        {/* 10 CORE REASONS WHY INSTITUTIONS & STUDENTS CHOOSE NEXUS (MOVE-UP SCROLL STACK EFFECT) */}
        <div className="space-y-12 relative pt-6 pb-20">
          
          {/* Section Header */}
          <div className="text-center space-y-3 sticky top-28 z-0">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 flex items-center justify-center gap-1.5">
              <Zap className="w-3.5 h-3.5" /> Competitive Excellence
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
              Why Institutions and Students Choose Nexus Talent Labs
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
              Scroll down to explore our 10 pillars of industry-leading technical education
            </p>
          </div>

          {/* Sticky Stacking Cards Container */}
          <div className="space-y-8 relative z-10 max-w-4xl mx-auto pt-8">
            {[
              { title: 'Industry-Aligned Curriculum', desc: 'Updated with Generative AI, Prompt Engineering, Agentic AI, LLMs, Cloud Native, and Full Stack with AI.', icon: Rocket, tag: 'Modern Tech Matrix' },
              { title: 'Corporate Hiring Standards', desc: 'Training designed according to real enterprise recruitment expectations and market demand.', icon: Briefcase, tag: 'Enterprise Alignment' },
              { title: 'Expert Industry Trainers', desc: 'Learn directly from seasoned software architects and tech leads with years of hands-on experience.', icon: GraduationCap, tag: 'Veteran Mentors' },
              { title: 'Practical Learning & Live Labs', desc: 'Hands-on learning through commercial-grade projects, case studies, and live lab environments.', icon: Zap, tag: 'Interactive Sandbox' },
              { title: 'Specialized Future Tech', desc: 'Master GenAI, Prompt Engineering, RAG, Autonomous AI Agents, and AGI concepts.', icon: Sparkles, tag: 'AI & Next-Gen' },
              { title: 'Personalized Mentoring', desc: 'Continuous performance tracking, 1-on-1 code reviews, and tailored career direction.', icon: Compass, tag: '1-on-1 Guidance' },
              { title: 'Placement-Focused CRT', desc: 'Comprehensive quantitative, logical, coding assessment, and technical/HR interview prep.', icon: Award, tag: 'Career Readiness' },
              { title: 'Institutional Partnering', desc: 'Customized learning solutions for colleges, universities, and academic departments.', icon: Building2, tag: 'Academic Alliance' },
              { title: 'Certification-Oriented', desc: 'Industry-recognized certification pathways that enhance job opportunities globally.', icon: ShieldCheck, tag: 'Global Credentials' },
              { title: 'Lifelong Growth Focus', desc: 'Strong foundation in innovation, critical thinking, and continuous professional development.', icon: Zap, tag: 'Continuous Success' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 100, opacity: 0.6 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ top: `${130 + idx * 12}px` }}
                className="sticky z-[10] glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/30 bg-[#0c0e1a]/95 backdrop-blur-2xl shadow-[0_-25px_60px_rgba(0,0,0,0.95)] hover:border-cyan-400/60 transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  
                  {/* Left Side: Number & Icon */}
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-4xl sm:text-5xl font-black font-['Space_Grotesk'] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                      {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>

                    <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-cyan-500/30 flex items-center justify-center text-cyan-300 shadow-xl group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Right Side: Title & Description */}
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CAMPUS RECRUITMENT TRAINING & INSTITUTIONAL PARTNERSHIPS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* CRT Block */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel rounded-3xl p-8 border border-white/15 space-y-6 hover:border-cyan-500/30 transition-colors shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white font-['Outfit'] flex items-center gap-2.5">
              <Award className="w-6 h-6 text-cyan-400" /> Campus Recruitment Training (CRT)
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Our placement-focused CRT programs are designed to meet the recruitment standards of leading IT companies, MNCs, and high-growth tech startups.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300 font-medium">
              {[
                'Quantitative Aptitude', 'Logical & Analytical Reasoning',
                'Verbal Ability', 'Communication Skills',
                'Coding Assessments', 'Problem Solving',
                'Group Discussions', 'Resume & LinkedIn Profile Building',
                'Technical Interview Prep', 'HR & Managerial Interview Prep',
                'Mock Interviews with Feedback', 'Corporate Etiquette'
              ].map((crt, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{crt}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Institutional Partnerships Block */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel rounded-3xl p-8 border border-white/15 space-y-6 hover:border-purple-500/30 transition-colors shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white font-['Outfit'] flex items-center gap-2.5">
              <Building2 className="w-6 h-6 text-purple-400" /> College & Institutional Partnerships
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Nexus Talent Labs collaborates with educational institutions to deliver customized training programs aligned with academic goals and industry needs.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300 font-medium">
              {[
                'Campus Recruitment Training (CRT)', 'Skill Enhancement Programs',
                'Faculty Development Programs (FDPs)', 'Technology Workshops',
                'Certification Courses', 'Internship & Project Mentoring',
                'Industry Readiness Programs', 'Placement Support Initiatives'
              ].map((inst, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>{inst}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* OUR MISSION STATEMENT BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel rounded-3xl p-8 sm:p-14 border border-blue-500/40 text-center space-y-6 relative overflow-hidden shadow-[0_25px_80px_rgba(59,130,246,0.15)] bg-gradient-to-b from-[#0e1122]/90 to-[#09090d]"
        >
          {/* Background Aurora Blob */}
          <div className="aurora-glow w-96 h-96 bg-blue-600/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />

          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 relative z-10 block">
            Our Mission
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit'] max-w-3xl mx-auto relative z-10 leading-tight">
            Empowering Learners Beyond the Classroom
          </h2>

          <p className="text-xs sm:text-base text-zinc-300 max-w-4xl mx-auto leading-relaxed relative z-10">
            At <strong className="text-white">Nexus Talent Labs</strong>, we believe learning should go beyond the classroom. Our mission is to empower learners with <strong className="text-cyan-300 font-semibold">future-ready skills, industry knowledge, and practical experience</strong> that enable them to excel in an AI-driven, technology-first world. By combining advanced technical training, professional skill development, and expert mentorship, we create confident, innovative, and job-ready professionals prepared to meet the expectations of today’s global workforce.
          </p>
        </motion.div>

      </main>

      <Footer />
      <ApplicationModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
      <AskAIWidget />
    </div>
  );
}
