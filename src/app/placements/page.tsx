'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuralCanvas from '@/components/NeuralCanvas';
import MouseSpotlight from '@/components/MouseSpotlight';
import ApplicationModal from '@/components/ApplicationModal';
import AskAIWidget from '@/components/AskAIWidget';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import ShinyText from '@/components/reactbits/ShinyText';
import Magnet from '@/components/reactbits/Magnet';
import CountUp from '@/components/reactbits/CountUp';
import AIGradientBorder from '@/components/reactbits/AIGradientBorder';
import HiringLogosLoop from '@/components/HiringLogosLoop';
import MisplacedBentoSupport from '@/components/MisplacedBentoSupport';
import ThreeAnimeCTA from '@/components/ThreeAnimeCTA';
import { SUCCESS_STORIES, HIRING_COMPANIES } from '@/data/placements';
import { 
  Award, 
  Briefcase, 
  Users, 
  Building2, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  BookOpen, 
  Code, 
  UserCheck, 
  MessageSquare, 
  FileText, 
  Compass, 
  Headphones, 
  Rocket, 
  Sparkle,
  Plus,
  Minus
} from 'lucide-react';

export default function PlacementsPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [expandedAdvantages, setExpandedAdvantages] = useState<number[]>([]);

  return (
    <div className="relative min-h-screen bg-[#09090b] text-white overflow-hidden selection:bg-blue-600/30 selection:text-cyan-300">
      <NeuralCanvas />
      <MouseSpotlight />
      <Navbar onOpenApply={() => setIsApplyOpen(true)} />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 space-y-24">
        
        {/* 1. HERO SECTION – PLACEMENT EXCELLENCE */}
        <section className="text-center space-y-8 max-w-5xl mx-auto pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-extrabold uppercase tracking-widest text-cyan-300 shadow-xl backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <ShinyText text="FROM LEARNING SKILLS TO BUILDING SUCCESSFUL CAREERS" />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-['Outfit'] tracking-tight leading-[1.1]">
            Empowering Students with Skills, Confidence & Career Opportunities
          </h1>

          <p className="text-sm sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            At Nexus Talent Labs, we bridge the gap between talent and industry by providing technology training, placement preparation, and career support aligned with company expectations.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Magnet strength={20}>
              <button
                onClick={() => setIsApplyOpen(true)}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:opacity-95 font-bold text-xs sm:text-sm text-white shadow-2xl shadow-blue-500/30 flex items-center gap-2"
              >
                <Rocket className="w-4 h-4 text-cyan-300" /> Start Your Career Journey
              </button>
            </Magnet>
            
            <button
              onClick={() => setIsApplyOpen(true)}
              className="px-8 py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 font-bold text-xs sm:text-sm text-zinc-200 hover:text-white transition-all flex items-center gap-2"
            >
              <UserCheck className="w-4 h-4 text-purple-400" /> Get Placement Support
            </button>
          </div>

          {/* Highlight Statistics Cards with CountUp Animations */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10">
            {[
              { label: 'Students Trained', count: 5000, suffix: '+', desc: 'Graduates & Tech Professionals', color: 'text-cyan-400' },
              { label: 'Hiring Connections', count: 100, suffix: '+', desc: 'MNCs, Startups & Tech Giants', color: 'text-purple-400' },
              { label: 'Placement Assistance', count: 95, suffix: '%', desc: 'Verified 120-Day Placement Rate', color: 'text-emerald-400' },
              { label: 'Industry-Aligned', count: 100, suffix: '%', desc: 'Updated Corporate Curricula', color: 'text-amber-400' }
            ].map((stat, idx) => (
              <SpotlightCard key={idx} className="p-6 space-y-2 text-left">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">{stat.label}</span>
                <span className={`text-3xl sm:text-4xl font-extrabold ${stat.color} font-['Space_Grotesk'] block`}>
                  <CountUp to={stat.count} suffix={stat.suffix} duration={2} />
                </span>
                <span className="text-[11px] text-zinc-400 block">{stat.desc}</span>
              </SpotlightCard>
            ))}
          </div>
        </section>


        {/* 2. OUR PLACEMENT APPROACH (INTERACTIVE CENTRAL VERTICAL TIMELINE) */}
        <section className="space-y-16 py-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono">Structured Roadmap</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
              Our Placement Approach
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              A proven, transparent process that ensures success every step of the way
            </p>
          </div>

          {/* Timeline Container with Step-Triggered Dotted Curves */}
          <div className="relative max-w-5xl mx-auto px-4">
            {/* Dotted Curved Connecting Lines (Desktop) - Only reveals when next card is present */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block" 
              viewBox="0 0 1000 960" 
              preserveAspectRatio="none"
            >
              <defs>
                {[
                  '#38bdf8', // Card 1 -> 2 cyan
                  '#818cf8', // Card 2 -> 3 indigo
                  '#a855f7', // Card 3 -> 4 purple
                  '#ec4899', // Card 4 -> 5 pink
                  '#34d399'  // Card 5 -> 6 emerald
                ].map((color, cIdx) => (
                  <marker
                    key={cIdx}
                    id={`arrowPointer-${cIdx}`}
                    viewBox="0 0 12 12"
                    refX="9"
                    refY="6"
                    markerWidth="10"
                    markerHeight="10"
                    orient="auto"
                  >
                    <path d="M 0 1 L 11 6 L 0 11 L 3 6 Z" fill={color} />
                  </marker>
                ))}
              </defs>

              {/* 5 Individual Curved Segments Triggered when Next Card Enters View */}
              {[
                { path: "M 250 80 C 500 80, 500 240, 750 240", color: "#38bdf8" },
                { path: "M 750 240 C 500 240, 500 400, 250 400", color: "#818cf8" },
                { path: "M 250 400 C 500 400, 500 560, 750 560", color: "#a855f7" },
                { path: "M 750 560 C 500 560, 500 720, 250 720", color: "#ec4899" },
                { path: "M 250 720 C 500 720, 500 880, 750 880", color: "#34d399" }
              ].map((seg, sIdx) => (
                <motion.path
                  key={sIdx}
                  d={seg.path}
                  fill="none"
                  stroke={seg.color}
                  strokeWidth="4"
                  strokeDasharray="8 8"
                  markerEnd={`url(#arrowPointer-${sIdx})`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.95 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                />
              ))}
            </svg>

            {/* Timeline Steps Loop */}
            <div className="space-y-12 md:space-y-16 relative z-10">
              {[
                {
                  step: '01',
                  duration: '1-2 weeks',
                  title: 'Skill Assessment',
                  desc: 'Evaluate student technical capabilities, logical reasoning, and career goals to construct personalized learning pathways.'
                },
                {
                  step: '02',
                  duration: '2-3 weeks',
                  title: 'Industry-Focused Training',
                  desc: 'Train learners on production technologies, real enterprise projects, and hiring company requirements.'
                },
                {
                  step: '03',
                  duration: '4-8 weeks',
                  title: 'Placement Preparation',
                  desc: 'Comprehensive training in aptitude, coding assessments, technical communication, resume optimization, and LinkedIn profiling.'
                },
                {
                  step: '04',
                  duration: '1-2 weeks',
                  title: 'Mock Interviews',
                  desc: 'Rigorous technical, HR, and managerial interview simulations conducted by experienced tech leads with actionable feedback.'
                },
                {
                  step: '05',
                  duration: '3-5 days',
                  title: 'Company Connect',
                  desc: 'Direct referral pushes connecting trained candidates with matching job roles across our 100+ corporate hiring network.'
                },
                {
                  step: '06',
                  duration: 'Ongoing',
                  title: 'Career Support',
                  desc: 'Continuous mentorship and guidance throughout interview rounds, salary negotiation, and onboarding.'
                }
              ].map((item, idx) => {
                const isEven = idx % 2 === 1;

                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex flex-col md:flex-row items-center w-full min-h-[140px]"
                  >
                    {/* Step Card Slot */}
                    <div className={`w-full ${isEven ? 'md:w-[calc(50%-1.5rem)] md:ml-auto' : 'md:w-[calc(50%-1.5rem)] md:mr-auto'}`}>
                      <AIGradientBorder duration={6} className="rounded-3xl shadow-2xl">
                        <div className="glass-panel p-6 sm:p-8 rounded-3xl bg-[#0c0e1a]/95 border border-white/15 space-y-3 relative group hover:border-cyan-400/50 transition-all">
                          <div className="flex items-center justify-between">
                            <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 font-['Space_Grotesk']">
                              {item.step}
                            </span>
                            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 text-zinc-300 border border-white/15 backdrop-blur-md">
                              {item.duration}
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit']">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                            {item.desc}
                          </p>
                        </div>
                      </AIGradientBorder>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>


        {/* 4. WHY COMPANIES CHOOSE NEXUS TALENT LABS STUDENTS (STAGGERED CHEVRON ARROW CASCADE) */}
        <section className="glass-panel rounded-3xl p-6 sm:p-14 border border-white/15 space-y-12 relative overflow-hidden">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono">The Employer Advantage</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
              Why Companies Choose Nexus Talent Labs Students
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Our graduates possess the practical skills, corporate mindset, and adaptability required by modern software teams.
            </p>
          </div>

          {/* Staggered Chevron Arrow Cascade Staircase (Spans 100% Left Edge to Right Edge) */}
          <div className="space-y-6 w-full mx-auto pt-4 relative">
            {[
              {
                tag: 'TECHNICAL MASTERY',
                text: 'Industry-ready technical skills aligned with modern enterprise tech stacks',
                theme: 'orange'
              },
              {
                tag: 'ENTERPRISE LABS',
                text: 'Hands-on project experience built in production-simulated lab environments',
                theme: 'slate'
              },
              {
                tag: 'ALGORITHMIC LOGIC',
                text: 'Strong analytical problem-solving abilities and algorithmic thinking',
                theme: 'orange'
              },
              {
                tag: 'GENAI & AI COPILOTS',
                text: 'Generative AI and emerging technology exposure for high-velocity coding',
                theme: 'slate'
              },
              {
                tag: 'CORPORATE COMMUNICATION',
                text: 'Professional verbal & written communication tailored for corporate settings',
                theme: 'orange'
              },
              {
                tag: 'SPRINT DISCIPLINE',
                text: 'Corporate work culture readiness, sprint discipline, and team accountability',
                theme: 'slate'
              },
              {
                tag: 'COMMERCIAL IMPACT',
                text: 'Practical knowledge grounded in commercial software business requirements',
                theme: 'orange'
              }
            ].map((item, idx) => {
              const isOrange = item.theme === 'orange';
              // Fixed banner width = 270px; midpoint = 135px. Each step starts exactly at the midpoint of the preceding step!
              const stepPaddingPx = idx * 135; 
              const isExpanded = expandedAdvantages.includes(idx);

              return (
                <div 
                  key={idx}
                  style={{ paddingLeft: `${stepPaddingPx}px` }}
                  className="w-full transition-all duration-500 group max-md:!pl-0"
                >
                  <div className="w-full max-w-md lg:max-w-lg">
                    {/* Chevron Arrow Header Banner with + / - Toggle Button */}
                    <button
                      onClick={() => {
                        setExpandedAdvantages(prev =>
                          prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
                        );
                      }}
                      className={`relative inline-flex items-center justify-between gap-3 px-5 py-3 w-[270px] shrink-0 font-extrabold text-xs sm:text-sm uppercase tracking-wider font-['Space_Grotesk'] shadow-2xl pr-10 rounded-l-lg cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] [clip-path:polygon(0_0,calc(100%-20px)_0,100%_50%,calc(100%-20px)_100%,0_100%)] ${
                        isOrange 
                          ? 'bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 text-white shadow-orange-500/30' 
                          : 'bg-gradient-to-r from-slate-900 via-[#121626] to-[#1a2136] text-cyan-300 border-y border-l border-cyan-500/40 shadow-cyan-500/20'
                      }`}
                    >
                      <span className="truncate">{item.tag}</span>
                      <span className="w-6 h-6 rounded-full bg-black/35 border border-white/30 flex items-center justify-center text-white shrink-0 ml-1 shadow-lg transition-transform group-hover:scale-110">
                        {isExpanded ? <Minus className="w-3.5 h-3.5 text-amber-300" /> : <Plus className="w-3.5 h-3.5 text-white" />}
                      </span>
                    </button>

                  {/* Expandable Glass Details Box Below Chevron */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 rounded-2xl bg-[#090b16]/95 border border-white/15 shadow-2xl backdrop-blur-xl group-hover:border-cyan-400/50 transition-all">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${isOrange ? 'text-amber-400' : 'text-cyan-400'}`} />
                            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-medium">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
          </div>
        </section>


        {/* 5. HIRING PARTNERS SECTION WITH INFINITE SCROLLING LOGO LOOP */}
        <section className="space-y-8 text-center">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono">Corporate Network</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
              Our Students Are Prepared For Leading Organizations
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Recruiters from Fortune 500 enterprises, tech startups, and MNCs hire directly from Nexus Talent Labs.
            </p>
          </div>

          {/* Smooth Infinite Marquee Scrolling Logo Loop */}
          <div className="pt-2">
            <HiringLogosLoop />
          </div>
        </section>


        {/* 7. PLACEMENT SUPPORT FEATURES (MISPLACED BENTO MASONRY GRID) */}
        <section className="space-y-6">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono">End-to-End Assistance</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
              Complete Career Support Ecosystem
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Asymmetric misplaced Bento Masonry grid detailing our continuous placement and mentorship ecosystem.
            </p>
          </div>

          {/* Misplaced Bento Masonry Support Component */}
          <MisplacedBentoSupport />
        </section>


        {/* 8. FINAL CTA BANNER (THREE.JS 3D WEBGL & ANIME-STYLE TYPOGRAPHY) */}
        <section className="pt-6">
          <ThreeAnimeCTA />
        </section>

      </main>

      <Footer />
      <ApplicationModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
      <AskAIWidget />
    </div>
  );
}
