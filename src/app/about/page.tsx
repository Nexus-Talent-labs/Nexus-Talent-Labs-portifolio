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
import PillarDetailModal from '@/components/PillarDetailModal';
import { PILLARS_DATA, PillarItem } from '@/data/pillars';
import AIGradientBorder from '@/components/reactbits/AIGradientBorder';
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
  Rocket,
  ArrowRight
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

import CRTModuleDetailModal from '@/components/CRTModuleDetailModal';
import { CRT_MODULES_DATA, CRTModuleItem } from '@/data/crtModules';
import PartnershipDetailModal from '@/components/PartnershipDetailModal';
import { PARTNERSHIPS_DATA, PartnershipItem } from '@/data/partnerships';

// inside AboutPage:
export default function AboutPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [applyProgramId, setApplyProgramId] = useState<string>('crt-partnership');
  const [selectedPillar, setSelectedPillar] = useState<PillarItem | null>(null);
  const [selectedCRTModule, setSelectedCRTModule] = useState<CRTModuleItem | null>(null);
  const [selectedPartnership, setSelectedPartnership] = useState<PartnershipItem | null>(null);

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
            Nexus Talent Labs is a premier technical training institute and talent incubation hub. We bridge the gap between traditional academic education and modern enterprise recruitment expectations. Through hands-on labs, AI-driven technologies, and veteran mentorship, we empower engineering colleges, graduates, and working professionals to achieve global career success.
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

        {/* WHO WE ARE - OVERVIEW & IMPACT METRICS STATS GRID */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: About Content Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border border-white/15 space-y-6 shadow-2xl bg-[#0b0d1b]/90"
            >
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 inline-block">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit'] leading-tight">
                Pioneering Next-Generation Technical Education & Placement Training
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                At <strong className="text-white">Nexus Talent Labs</strong>, we specialize in high-impact skill development programs tailored for engineering graduates, academic institutions, and tech professionals. Our curriculum is continuously updated with cutting-edge technologies including <strong className="text-cyan-300">Generative AI, Autonomous AI Agents, Cloud Native Systems, Full Stack Web Development, and Advanced Quantitative Aptitude</strong>.
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                We collaborate directly with corporate recruiters and university placement cells to ensure every candidate masters both commercial-grade technical skills and interview performance standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Commercial-Grade Live Labs',
                  '1-on-1 Code Reviews & Mentorship',
                  'Placement CRT & Mock Interviews',
                  'Global Industry Certifications'
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-semibold text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Key Stats & Impact Metrics Grid */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 grid grid-cols-2 gap-4"
            >
              {[
                { number: '2,850+', label: 'Graduates Trained & Placed', color: 'from-cyan-400 to-blue-500' },
                { number: '150+', label: 'Institutional Alliances', color: 'from-purple-400 to-pink-500' },
                { number: '98.4%', label: 'CRT Selection Rate', color: 'from-emerald-400 to-teal-500' },
                { number: '50+', label: 'Veteran Tech Mentors', color: 'from-amber-400 to-orange-500' },
              ].map((stat, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-3xl border border-white/15 text-center space-y-2 hover:border-cyan-500/40 transition-all bg-[#090b17]/80 shadow-xl">
                  <h3 className={`text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                    {stat.number}
                  </h3>
                  <p className="text-xs text-zinc-300 font-medium leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* OUR MISSION STATEMENT BANNER WITH AI GRADIENT BORDER & RICH ANIMATIONS */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <AIGradientBorder duration={5} className="rounded-3xl shadow-[0_25px_90px_rgba(34,211,238,0.2)]">
            <div className="glass-panel rounded-3xl p-8 sm:p-14 text-center space-y-7 relative overflow-hidden bg-gradient-to-b from-[#0d1024]/95 via-[#0a0d1d]/90 to-[#080914] border border-white/15 group">
              
              {/* Animated Aurora Glow Orbs */}
              <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-all duration-700 pointer-events-none animate-pulse" />
              <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-all duration-700 pointer-events-none animate-pulse" />

              {/* Top Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-widest relative z-10 shadow-md"
              >
                <Sparkles className="w-4 h-4 text-cyan-300 animate-spin" />
                <span>Our Mission</span>
              </motion.div>

              {/* Shimmering Animated Title */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-300 font-['Outfit'] max-w-3xl mx-auto relative z-10 leading-tight tracking-tight"
              >
                Empowering Learners Beyond the Classroom
              </motion.h2>

              {/* Detailed Paragraph */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs sm:text-base text-zinc-300 max-w-4xl mx-auto leading-relaxed relative z-10 font-sans"
              >
                At <strong className="text-white">Nexus Talent Labs</strong>, we believe learning should go beyond the classroom. Our mission is to empower learners with future-ready skills, industry knowledge, and practical experience that enable them to excel in an AI-driven, technology-first world. By combining advanced technical training, professional skill development, and expert mentorship, we create confident, innovative, and job-ready professionals prepared to meet the expectations of today’s global workforce.
              </motion.p>

              {/* Interactive Floating Feature Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto relative z-10"
              >
                {[
                  'Future-Ready Skills',
                  'AI & GenAI Mastery',
                  'Expert Mentorship',
                  'Job-Ready Talent'
                ].map((label, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.08, y: -4 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                    className="py-3 px-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all text-xs font-semibold text-zinc-100 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-lg hover:shadow-cyan-500/20 font-['Outfit']"
                  >
                    <span>{label}</span>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </AIGradientBorder>
        </motion.div>

        {/* OUR CORE VALUES */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono">Guided by Principles</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit']">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Innovation-First',
                desc: 'Integrating AI, GenAI, and modern cloud stacks directly into every course module.',
                tag: 'Modern Tech'
              },
              {
                title: 'Practical Mastery',
                desc: '70% of learning happens through commercial projects and live sandbox environments.',
                tag: 'Hands-on Labs'
              },
              {
                title: 'Corporate Alignment',
                desc: 'Training standards engineered according to real enterprise recruitment expectations.',
                tag: 'Hiring Ready'
              },
              {
                title: 'Student Growth',
                desc: 'Dedicated 1-on-1 career guidance, mock interviews, and continuous mentorship.',
                tag: 'Lifelong Mentorship'
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-3xl border border-white/15 space-y-4 hover:border-cyan-500/40 transition-all group bg-[#090b16]/90 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {value.tag}
                  </span>
                  <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-white font-['Outfit'] group-hover:text-cyan-300 transition-colors">
                  {value.title}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 10 CORE REASONS WHY INSTITUTIONS & STUDENTS CHOOSE NEXUS (MOVE-UP SCROLL STACK EFFECT) */}
        <div className="space-y-12 relative pt-6 pb-20">
          
          {/* Section Header */}
          <div className="text-center space-y-3 sticky top-28 z-0">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
              Why Institutions and Students Choose Nexus Talent Labs
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
              Scroll down to explore our 10 pillars of industry-leading technical education
            </p>
          </div>

          {/* 5 COLUMNS GRID LAYOUT (2 ROWS OF 5 CARDS EACH) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 pt-4">
            {PILLARS_DATA.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="h-full"
              >
                <AIGradientBorder duration={4 + (idx % 4)} className="rounded-3xl h-full hover:-translate-y-1.5 transition-all duration-300">
                  <div 
                    onClick={() => setSelectedPillar(item)}
                    className="p-5 flex flex-col justify-between space-y-4 h-full group cursor-pointer"
                  >
                    <div className="space-y-4">
                      {/* Top Row: Number & Glowing Icon */}
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-black font-['Space_Grotesk'] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                          {item.num}
                        </span>
                        <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-300 shadow-md group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-all">
                          <item.icon className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Tag Pill */}
                      <div>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 inline-block">
                          {item.tag}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-2">
                        <h3 className="text-base font-bold text-white font-['Outfit'] group-hover:text-cyan-300 transition-colors leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs text-zinc-300 leading-relaxed font-sans line-clamp-3">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Interactive Overview Popup Trigger Button (Hidden initially, visible on cursor hover) */}
                    <div className="pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPillar(item);
                        }}
                        className="w-full py-2 px-3 rounded-xl bg-cyan-500/15 group-hover:bg-cyan-500/30 border border-cyan-500/40 group-hover:border-cyan-300 text-[11px] font-bold text-cyan-300 flex items-center justify-between transition-all shadow-lg shadow-cyan-500/10"
                      >
                        <span>Overview</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-cyan-300" />
                      </button>
                    </div>
                  </div>
                </AIGradientBorder>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CAMPUS RECRUITMENT TRAINING & INSTITUTIONAL PARTNERSHIPS (STACKED DOWN BY DOWN) */}
        <div className="flex flex-col gap-10">
          
          {/* CRT Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/15 space-y-6 hover:border-cyan-500/30 transition-colors shadow-2xl bg-[#0c0e1a]/95"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono">Placement-Focused Modules</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] flex items-center gap-3">
                <Award className="w-7 h-7 text-cyan-400 shrink-0" /> Campus Recruitment Training (CRT)
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-3xl">
                Our placement-focused CRT programs are designed to meet the recruitment standards of leading IT companies, MNCs, and high-growth tech startups.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-xs text-zinc-300 font-medium pt-2">
              {CRT_MODULES_DATA.map((crt, i) => (
                <motion.div 
                  key={crt.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  onClick={() => setSelectedCRTModule(crt)}
                  className="flex flex-col justify-between p-4 rounded-2xl bg-[#0e1126]/90 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all group cursor-pointer shadow-md hover:shadow-cyan-500/10 space-y-3"
                >
                  <div className="relative h-28 rounded-xl overflow-hidden border border-white/10 group-hover:border-cyan-400/40 transition-colors">
                    <img 
                      src={crt.image} 
                      alt={crt.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80';
                      }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-black/30" />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-[9px] font-mono font-bold uppercase bg-blue-600/80 text-cyan-200 backdrop-blur-md">
                      {crt.tag}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="font-extrabold text-sm text-white group-hover:text-cyan-300 transition-colors">{crt.title}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCRTModule(crt);
                      }}
                      className="w-7 h-7 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/30 border border-cyan-500/30 group-hover:border-cyan-400 flex items-center justify-center text-cyan-300 shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
                      title={`View overview of ${crt.title}`}
                    >
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Institutional Partnerships Block (High Animation & AI Border Glow) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <AIGradientBorder duration={6} className="rounded-3xl shadow-2xl shadow-purple-500/15">
              <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/15 space-y-6 bg-[#0c0e1a]/95 relative overflow-hidden group">
                
                {/* Background Ambient Glow */}
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl group-hover:bg-purple-500/25 transition-all duration-700 pointer-events-none" />

                <div className="space-y-3 relative z-10">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2"
                  >
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase bg-purple-500/15 text-purple-300 border border-purple-500/30 inline-flex items-center gap-1.5 shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" /> Academic Excellence
                    </span>
                  </motion.div>

                  <motion.h3 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-md group-hover:rotate-6 group-hover:scale-110 transition-all">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span>College & Institutional Partnerships</span>
                  </motion.h3>

                  <motion.p 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-3xl"
                  >
                    Nexus Talent Labs collaborates directly with educational institutions, engineering colleges, and universities to deliver customized training programs aligned with academic goals and global industry recruitment needs.
                  </motion.p>
                </div>

                {/* 8 Partnership Initiatives Grid with 3D Tilt, Floating Number Badges, Shimmer Text & Laser Sweep */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-xs text-zinc-300 font-medium pt-3 relative z-10">
                  {PARTNERSHIPS_DATA.map((inst, i) => (
                    <motion.div 
                      key={inst.id}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: false, amount: 0.1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: i * 0.06,
                        type: 'spring',
                        stiffness: 260,
                        damping: 18
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -6,
                        rotate: i % 2 === 0 ? 0.8 : -0.8,
                        transition: { type: 'spring', stiffness: 400, damping: 15 } 
                      }}
                      onClick={() => setSelectedPartnership(inst)}
                      className="relative flex flex-col justify-between p-5 rounded-2xl bg-[#0e1126]/90 border border-white/10 hover:border-purple-400/80 hover:bg-gradient-to-br hover:from-purple-950/60 hover:via-indigo-950/40 hover:to-cyan-950/50 transition-all duration-300 group/card shadow-md hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer overflow-hidden space-y-4"
                    >
                      {/* Interactive Floating Background Particle Orb */}
                      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-500/10 rounded-full blur-xl group-hover/card:scale-175 group-hover/card:bg-cyan-500/25 transition-all duration-500 pointer-events-none" />

                      {/* Course Image Header */}
                      <div className="relative h-28 rounded-xl overflow-hidden border border-white/10 group-hover/card:border-purple-400/50 transition-colors">
                        <img 
                          src={inst.image} 
                          alt={inst.title}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80';
                          }}
                          className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1126] via-transparent to-black/40" />
                        <span className="absolute top-2 left-2 w-6 h-6 rounded-lg bg-purple-600/80 border border-purple-400/40 flex items-center justify-center text-[10px] font-black font-['Space_Grotesk'] text-white backdrop-blur-md">
                          {inst.num}
                        </span>
                        <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md text-[9px] font-mono font-bold uppercase bg-purple-500/30 text-purple-200 border border-purple-400/30 backdrop-blur-md">
                          {inst.tag}
                        </span>
                      </div>

                      {/* Content Title with Holographic Shimmer Effect on Hover */}
                      <div className="space-y-1 relative z-10">
                        <h4 className="font-extrabold text-sm text-zinc-100 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-cyan-300 group-hover/card:via-purple-300 group-hover/card:to-pink-300 font-['Outfit'] leading-snug transition-all">
                          {inst.title}
                        </h4>
                      </div>

                      {/* Bottom Bar: Action Hint & Animated Laser Sweep Underline */}
                      <div className="relative z-10 pt-1 flex items-center justify-between">
                        <span className="text-[10px] font-mono font-semibold text-zinc-400 group-hover/card:text-cyan-300 transition-colors flex items-center gap-1">
                          Explore Module <ArrowRight className="w-3 h-3 group-hover/card:translate-x-1 transition-transform text-cyan-400" />
                        </span>

                        {/* Animated Laser Sweep Underline */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 scale-x-0 group-hover/card:scale-x-100 transition-transform duration-300 origin-left" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AIGradientBorder>
          </motion.div>
        </div>

      </main>

      <Footer />
      <ApplicationModal 
        isOpen={isApplyOpen} 
        onClose={() => setIsApplyOpen(false)} 
        initialProgramId={applyProgramId} 
      />
      <PillarDetailModal 
        pillar={selectedPillar} 
        onClose={() => setSelectedPillar(null)} 
        onOpenApply={() => {
          setApplyProgramId('crt-partnership');
          setIsApplyOpen(true);
        }} 
      />
      <CRTModuleDetailModal 
        module={selectedCRTModule} 
        onClose={() => setSelectedCRTModule(null)} 
        onOpenApply={() => {
          setApplyProgramId('crt-partnership');
          setIsApplyOpen(true);
        }} 
      />
      <PartnershipDetailModal 
        partnership={selectedPartnership} 
        onClose={() => setSelectedPartnership(null)} 
        onOpenApply={() => {
          setApplyProgramId('crt-partnership');
          setIsApplyOpen(true);
        }} 
      />
      <AskAIWidget />
    </div>
  );
}
