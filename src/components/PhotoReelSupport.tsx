'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  FileText, 
  MessageSquare, 
  Sparkles, 
  Headphones, 
  Target, 
  Award,
  Film
} from 'lucide-react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';

const SUPPORT_FEATURES = [
  {
    frame: 'REEL #01',
    title: 'Dedicated Placement Assistance',
    desc: 'Active team coordinating interview slots, scheduling drives, and direct corporate referral pushes.',
    icon: Briefcase,
    color: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-400/40',
    textColor: 'text-cyan-300'
  },
  {
    frame: 'REEL #02',
    title: 'Industry Mentor Guidance',
    desc: '1-on-1 strategic career direction and technical feedback from senior engineering leaders.',
    icon: Users,
    color: 'from-blue-500 to-indigo-600',
    borderColor: 'border-blue-400/40',
    textColor: 'text-blue-300'
  },
  {
    frame: 'REEL #03',
    title: 'Resume & Portfolio Review',
    desc: 'ATS-friendly resume optimization, LinkedIn profile polish, and GitHub commercial project showcases.',
    icon: FileText,
    color: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-400/40',
    textColor: 'text-purple-300'
  },
  {
    frame: 'REEL #04',
    title: 'Interview Preparation',
    desc: 'Intense mock rounds simulating real corporate technical, HR, and managerial hiring benchmarks.',
    icon: MessageSquare,
    color: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-400/40',
    textColor: 'text-emerald-300'
  },
  {
    frame: 'REEL #05',
    title: 'Job Opportunity Updates',
    desc: 'Real-time notification alerts for active job openings across our 100+ corporate hiring network.',
    icon: Sparkles,
    color: 'from-amber-500 to-orange-600',
    borderColor: 'border-amber-400/40',
    textColor: 'text-amber-300'
  },
  {
    frame: 'REEL #06',
    title: 'Career Counseling',
    desc: 'Personalized guidance tailored to individual student strengths, skill gaps, and target roles.',
    icon: Headphones,
    color: 'from-pink-500 to-rose-600',
    borderColor: 'border-pink-400/40',
    textColor: 'text-pink-300'
  },
  {
    frame: 'REEL #07',
    title: 'Internship Guidance',
    desc: 'Hands-on commercial project exposure and real-world software architecture sprint discipline.',
    icon: Target,
    color: 'from-cyan-500 to-emerald-500',
    borderColor: 'border-cyan-400/40',
    textColor: 'text-cyan-300'
  },
  {
    frame: 'REEL #08',
    title: 'Professional Development Support',
    desc: 'Soft skills training, executive presentation mastery, and corporate work culture readiness.',
    icon: Award,
    color: 'from-purple-500 to-indigo-600',
    borderColor: 'border-purple-400/40',
    textColor: 'text-purple-300'
  }
];

export default function PhotoReelSupport() {
  // Duplicate array for seamless infinite marquee loop
  const reelCards = [...SUPPORT_FEATURES, ...SUPPORT_FEATURES];

  return (
    <div className="relative py-6 space-y-6 overflow-hidden">
      {/* Top Sprocket Hole Filmstrip Border */}
      <div className="w-full bg-[#070914] border-y border-white/10 py-2.5 px-4 flex justify-between items-center overflow-hidden select-none">
        <div className="flex items-center gap-2 text-cyan-400/60 font-mono text-[10px] font-bold tracking-widest uppercase">
          <Film className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          NEXUS PHOTO REEL :: CAREER ECOSYSTEM
        </div>
        <div className="flex gap-2 sm:gap-3">
          {Array.from({ length: 18 }).map((_, i) => (
            <div 
              key={i} 
              className="w-3 sm:w-4 h-2 rounded-[2px] bg-white/10 border border-white/20 shadow-inner"
            />
          ))}
        </div>
        <div className="hidden md:flex items-center gap-2 text-zinc-500 font-mono text-[10px]">
          <span>FPS: 60</span>
          <span>35MM STACK</span>
        </div>
      </div>

      {/* 3D Photo Reel Moving Track */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Vignette Shadows */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#03040b] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#03040b] to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 35,
              ease: 'linear'
            }
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {reelCards.map((item, idx) => {
            const FeatureIcon = item.icon;

            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.04, y: -6, rotateZ: (idx % 2 === 0 ? 1 : -1) }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="w-[300px] sm:w-[340px] flex-shrink-0"
              >
                <SpotlightCard className={`h-full p-6 space-y-4 rounded-3xl border ${item.borderColor} bg-[#0a0c1b]/95 backdrop-blur-xl relative group shadow-2xl overflow-hidden`}>
                  {/* Photo Reel Corner Ticks */}
                  <div className="absolute top-3 left-3 text-[10px] font-mono text-zinc-600 font-bold">+</div>
                  <div className="absolute top-3 right-3 text-[10px] font-mono text-zinc-600 font-bold">+</div>
                  <div className="absolute bottom-3 left-3 text-[10px] font-mono text-zinc-600 font-bold">+</div>
                  <div className="absolute bottom-3 right-3 text-[10px] font-mono text-zinc-600 font-bold">+</div>

                  {/* Reel Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                      {item.frame}
                    </span>
                    <div className={`p-2 rounded-xl bg-gradient-to-tr ${item.color} text-white shadow-lg`}>
                      <FeatureIcon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Feature Content */}
                  <div className="space-y-2 pt-1">
                    <h3 className={`text-lg font-extrabold text-white font-['Outfit'] group-hover:${item.textColor} transition-colors`}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>

                  {/* Photo Frame Footer Bar */}
                  <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-zinc-500 border-t border-white/5">
                    <span>NEXUS ECOSYSTEM</span>
                    <span className={item.textColor}>VERIFIED STEP</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Sprocket Hole Filmstrip Border */}
      <div className="w-full bg-[#070914] border-y border-white/10 py-2.5 px-4 flex justify-between items-center overflow-hidden select-none">
        <div className="flex gap-2 sm:gap-3">
          {Array.from({ length: 18 }).map((_, i) => (
            <div 
              key={i} 
              className="w-3 sm:w-4 h-2 rounded-[2px] bg-white/10 border border-white/20 shadow-inner"
            />
          ))}
        </div>
        <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
          SLIDE REEL :: CONTINUOUS CAREER SUPPORT
        </div>
      </div>
    </div>
  );
}
