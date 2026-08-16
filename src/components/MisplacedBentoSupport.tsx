'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  FileText, 
  MessageSquare, 
  Sparkles, 
  Headphones, 
  Target, 
  Award,
  ArrowUpRight,
  CheckCircle2,
  Rocket,
  ShieldCheck
} from 'lucide-react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';

const INITIAL_CARDS = [
  {
    id: '01',
    title: 'Dedicated Placement Assistance',
    desc: 'Active placement cell coordinating direct corporate referral pushes, interview slot bookings, and dedicated hiring pipeline tracking across our 100+ partner network.',
    icon: Briefcase,
    color: 'from-cyan-500/25 via-blue-600/20 to-purple-600/25',
    borderColor: 'border-cyan-400/50',
    textColor: 'text-cyan-300',
    badge: 'Direct Referrals',
    accentGradient: 'from-cyan-500 to-blue-600',
    gridSpan: 'md:col-span-4 lg:col-span-4',
    deliverables: [
      'Direct resume pushes to hiring managers across 100+ corporate partners',
      'Dedicated placement manager assigning priority interview slots',
      'Real-time application status tracking & salary negotiation coaching',
      'Post-placement onboarding mentorship during probation period'
    ],
    outcome: 'Fast-track interview scheduling with 3.5x higher callback rates'
  },
  {
    id: '02',
    title: 'Industry Mentor Guidance',
    desc: '1-on-1 strategic career directions, technical roadmap planning, and architectural code reviews directly from senior engineering leads & CTOs.',
    icon: Users,
    color: 'from-blue-500/25 to-indigo-600/20',
    borderColor: 'border-blue-400/50',
    textColor: 'text-blue-300',
    badge: '1-on-1 Sessions',
    accentGradient: 'from-blue-500 to-indigo-600',
    gridSpan: 'md:col-span-2 lg:col-span-2',
    deliverables: [
      'Weekly 1-on-1 video mentorship sessions with Tech Leads & CTOs',
      'In-depth architectural review of your GitHub production projects',
      'Personalized career roadmap tailored to FAANG & Tier-1 MNC benchmarks',
      'Direct referrals from mentor corporate networks'
    ],
    outcome: 'Production-grade code quality validated by active industry veterans'
  },
  {
    id: '03',
    title: 'Resume & Portfolio Review',
    desc: 'ATS-friendly resume formatting, LinkedIn profile optimization, and production-grade GitHub commercial project showcases built to pass corporate hiring screeners.',
    icon: FileText,
    color: 'from-purple-500/25 to-pink-600/20',
    borderColor: 'border-purple-400/50',
    textColor: 'text-purple-300',
    badge: 'ATS Optimized',
    accentGradient: 'from-purple-500 to-pink-600',
    gridSpan: 'md:col-span-2 lg:col-span-2',
    deliverables: [
      '95+ ATS score resume rebuild tailored for top engineering roles',
      'LinkedIn headline & summary optimization for recruiter inbound messages',
      'GitHub repository README polishing with live production demo links',
      'Portfolio website code audit and responsive UX enhancement'
    ],
    outcome: 'Guaranteed 90%+ ATS screening bypass rate across hiring portals'
  },
  {
    id: '04',
    title: 'Interview Preparation',
    desc: 'Intense mock rounds simulating real corporate technical coding assessments, system design, and managerial hiring benchmarks.',
    icon: MessageSquare,
    color: 'from-emerald-500/25 to-teal-600/20',
    borderColor: 'border-emerald-400/50',
    textColor: 'text-emerald-300',
    badge: 'Mock Sims',
    accentGradient: 'from-emerald-500 to-teal-600',
    gridSpan: 'md:col-span-4 lg:col-span-4',
    deliverables: [
      '10+ live mock technical interviews covering DSA, System Design & Live Coding',
      'Detailed video recordings with line-by-line feedback scorecards',
      'HR & Managerial behavioral question masterclasses',
      'Aptitude & logical reasoning timed assessment preparation'
    ],
    outcome: 'Confidence to clear 4-5 round technical interview pipelines'
  },
  {
    id: '05',
    title: 'Job Opportunity Updates',
    desc: 'Real-time notification alerts for active job openings across Fortune 500 tech hiring networks.',
    icon: Sparkles,
    color: 'from-amber-500/25 to-orange-600/20',
    borderColor: 'border-amber-400/50',
    textColor: 'text-amber-300',
    badge: 'Real-Time Alerts',
    accentGradient: 'from-amber-500 to-orange-600',
    gridSpan: 'md:col-span-4 lg:col-span-4',
    deliverables: [
      'Instant WhatsApp & Telegram alerts for exclusive hiring drives',
      'Early-bird application access before public job portal listings',
      'Salary range transparency and company culture insights',
      'Direct HR contact emails provided for priority application follow-ups'
    ],
    outcome: 'Never miss an active hiring opportunity across 100+ partner firms'
  },
  {
    id: '06',
    title: 'Career Counseling',
    desc: 'Personalized 1-on-1 guidance tailored to individual capabilities, strengths, target job roles, and long-term career growth trajectories.',
    icon: Headphones,
    color: 'from-pink-500/25 to-rose-600/20',
    borderColor: 'border-pink-400/50',
    textColor: 'text-pink-300',
    badge: 'Personalized',
    accentGradient: 'from-pink-500 to-rose-600',
    gridSpan: 'md:col-span-2 lg:col-span-2',
    deliverables: [
      'Skill gap diagnostic assessment and personalized goal setting',
      'Career transition strategy for non-CS & career gap candidates',
      'Salary negotiation tactics to maximize offer packages',
      'Continuous mental & stress management counseling during interview season'
    ],
    outcome: 'Clear actionable roadmap with zero ambiguity in career execution'
  },
  {
    id: '07',
    title: 'Internship Guidance',
    desc: 'Hands-on commercial project exposure during production labs with agile sprint discipline and real enterprise codebases.',
    icon: Target,
    color: 'from-cyan-500/25 to-emerald-500/20',
    borderColor: 'border-cyan-400/50',
    textColor: 'text-cyan-300',
    badge: 'Commercial Labs',
    accentGradient: 'from-cyan-500 to-emerald-600',
    gridSpan: 'md:col-span-4 lg:col-span-4',
    deliverables: [
      'Real commercial software client project allocation with Jira sprint workflows',
      'Git team collaboration, pull request reviews & CI/CD deployment pipelines',
      'Official Internship Experience Certificate & recommendation letter',
      'Live production URL links to feature on your resume'
    ],
    outcome: '6 months of verified commercial project work experience'
  },
  {
    id: '08',
    title: 'Professional Development Support',
    desc: 'Soft skills training, executive presentation mastery, team accountability, and corporate work culture readiness.',
    icon: Award,
    color: 'from-purple-500/25 to-indigo-600/20',
    borderColor: 'border-purple-400/50',
    textColor: 'text-purple-300',
    badge: 'Corporate Etiquette',
    accentGradient: 'from-purple-500 to-indigo-600',
    gridSpan: 'md:col-span-2 lg:col-span-2',
    deliverables: [
      'Corporate communication & email etiquette workshops',
      'Executive presentation and public speaking practice sessions',
      'Agile methodology, Scrum ceremonies & Jira workflow mastery',
      'Workplace conflict resolution and team collaboration training'
    ],
    outcome: 'Corporate readiness to excel from Day 1 on the job'
  }
];

export default function MisplacedBentoSupport() {
  const [cards, setCards] = useState(INITIAL_CARDS);
  const [selectedModule, setSelectedModule] = useState<typeof INITIAL_CARDS[0] | null>(null);
  const [autoShuffle, setAutoShuffle] = useState(true);

  // Auto-shuffle background movement every 7 seconds
  useEffect(() => {
    if (!autoShuffle || selectedModule) return;
    const timer = setInterval(() => {
      setCards((prevCards) => {
        const shuffled = [...prevCards];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        const spans = [
          'md:col-span-4 lg:col-span-4',
          'md:col-span-2 lg:col-span-2',
          'md:col-span-2 lg:col-span-2',
          'md:col-span-4 lg:col-span-4',
          'md:col-span-4 lg:col-span-4',
          'md:col-span-2 lg:col-span-2',
          'md:col-span-4 lg:col-span-4',
          'md:col-span-2 lg:col-span-2'
        ];
        return shuffled.map((item, idx) => ({ ...item, gridSpan: spans[idx] }));
      });
    }, 7000);

    return () => clearInterval(timer);
  }, [autoShuffle, selectedModule]);

  return (
    <div 
      className="relative py-4 px-2 max-w-7xl mx-auto"
      onMouseEnter={() => setAutoShuffle(false)}
      onMouseLeave={() => setAutoShuffle(true)}
    >
      {/* Dynamic Animated Grid Layout */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4 items-start relative"
      >
        <AnimatePresence>
          {cards.map((card) => {
            const FeatureIcon = card.icon;

            return (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ 
                  layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.3 }
                }}
                whileHover={{ y: -4, scale: 1.01 }}
                onClick={() => setSelectedModule(card)}
                className={`${card.gridSpan} h-auto cursor-pointer transition-all duration-300`}
              >
                <SpotlightCard className={`p-5 sm:p-6 flex flex-col justify-between rounded-2xl border ${card.borderColor} bg-[#0b0e24]/95 backdrop-blur-xl relative group shadow-lg overflow-hidden space-y-4 hover:border-cyan-400/80`}>
                  {/* Background Ambient Glow */}
                  <div className={`absolute -top-14 -right-14 w-40 h-40 rounded-full bg-gradient-to-br ${card.color} blur-3xl opacity-35 group-hover:opacity-100 transition-opacity`} />

                  {/* Card Header */}
                  <div className="flex items-start justify-between relative z-10">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                        MODULE //{card.id}
                      </span>
                      <div>
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 ${card.textColor} border border-white/15 backdrop-blur-md inline-block`}>
                          {card.badge}
                        </span>
                      </div>
                    </div>

                    <div className={`p-3 rounded-xl bg-gradient-to-tr ${card.accentGradient} text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <FeatureIcon className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="space-y-2 relative z-10">
                    <h3 className={`text-lg sm:text-xl font-extrabold text-white font-['Outfit'] group-hover:${card.textColor} transition-colors flex items-center justify-between`}>
                      <span>{card.title}</span>
                      <ArrowUpRight className="w-4.5 h-4.5 opacity-80 group-hover:opacity-100 transition-opacity text-cyan-400 flex-shrink-0 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans line-clamp-3">
                      {card.desc}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-400 relative z-10">
                    <span>NEXUS ECOSYSTEM</span>
                    <span className={`${card.textColor} font-bold tracking-wider flex items-center gap-1`}>
                      VIEW MODULE DETAILS <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* MODULE CONTENT POPUP MODAL (Sticky Header/Footer + Scrollable Body + No Cross Symbol) */}
      <AnimatePresence>
        {selectedModule && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            {/* Backdrop Overlay Click to Close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModule(null)}
              className="absolute inset-0 z-0"
            />

            {/* Modal Box Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-2xl bg-[#0c0f28] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(56,189,248,0.25)] flex flex-col max-h-[85vh] overflow-hidden"
            >
              {/* Top Ambient Glow */}
              <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${selectedModule.color} blur-3xl opacity-60 pointer-events-none`} />

              {/* CONSTANT STICKY HEADER (NO CROSS SYMBOL) */}
              <div className="flex-shrink-0 border-b border-white/10 pb-4 relative z-10">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                      MODULE //{selectedModule.id}
                    </span>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 ${selectedModule.textColor} border border-white/15`}>
                      {selectedModule.badge}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                    {selectedModule.title}
                  </h2>
                </div>
              </div>

              {/* ONLY SCROLLABLE MIDDLE CONTENT BODY (SCROLLBAR HIDDEN) */}
              <div className="flex-1 overflow-y-auto space-y-6 py-5 pr-2 relative z-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {/* Module Overview */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
                    Overview & Objective
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                    {selectedModule.desc}
                  </p>
                </div>

                {/* Key Deliverables List */}
                <div className="space-y-3 bg-white/[0.02] p-5 rounded-2xl border border-white/10">
                  <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    Key Student Deliverables & Outcomes
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedModule.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expected Career Impact */}
                <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm">
                  <span className="text-zinc-300 font-semibold">Career Impact Benchmark:</span>
                  <span className="text-cyan-300 font-bold font-mono">{selectedModule.outcome}</span>
                </div>
              </div>

              {/* CONSTANT STICKY FOOTER ACTION BUTTONS */}
              <div className="flex-shrink-0 pt-4 flex flex-wrap items-center justify-end gap-3 relative z-10 border-t border-white/10">
                <button
                  onClick={() => setSelectedModule(null)}
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold text-zinc-300 hover:text-white transition-colors"
                >
                  Close Window
                </button>
                
                <button
                  onClick={() => {
                    setSelectedModule(null);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:opacity-95 font-bold text-xs text-white shadow-lg flex items-center gap-2"
                >
                  <Rocket className="w-4 h-4 text-cyan-300" /> Enroll for this Module
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
