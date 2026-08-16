'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  FileText, 
  MessageSquare, 
  Sparkles, 
  Headphones, 
  Target, 
  Award,
  RotateCw,
  Compass
} from 'lucide-react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';

const SUPPORT_CARDS = [
  {
    id: 1,
    title: 'Dedicated Placement Assistance',
    desc: 'Active team coordinating interview slots, scheduling drives, and direct corporate referral pushes.',
    icon: Briefcase,
    color: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-400/40',
    textColor: 'text-cyan-300'
  },
  {
    id: 2,
    title: 'Industry Mentor Guidance',
    desc: '1-on-1 strategic career direction and technical feedback from senior engineering leaders.',
    icon: Users,
    color: 'from-blue-500 to-indigo-600',
    borderColor: 'border-blue-400/40',
    textColor: 'text-blue-300'
  },
  {
    id: 3,
    title: 'Resume & Portfolio Review',
    desc: 'ATS-friendly resume optimization, LinkedIn profile polish, and GitHub commercial project showcases.',
    icon: FileText,
    color: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-400/40',
    textColor: 'text-purple-300'
  },
  {
    id: 4,
    title: 'Interview Preparation',
    desc: 'Intense mock rounds simulating real corporate technical, HR, and managerial hiring benchmarks.',
    icon: MessageSquare,
    color: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-400/40',
    textColor: 'text-emerald-300'
  },
  {
    id: 5,
    title: 'Job Opportunity Updates',
    desc: 'Real-time notification alerts for active job openings across our 100+ corporate hiring network.',
    icon: Sparkles,
    color: 'from-amber-500 to-orange-600',
    borderColor: 'border-amber-400/40',
    textColor: 'text-amber-300'
  },
  {
    id: 6,
    title: 'Career Counseling',
    desc: 'Personalized guidance tailored to individual student strengths, skill gaps, and target roles.',
    icon: Headphones,
    color: 'from-pink-500 to-rose-600',
    borderColor: 'border-pink-400/40',
    textColor: 'text-pink-300'
  },
  {
    id: 7,
    title: 'Internship Guidance',
    desc: 'Hands-on commercial project exposure and real-world software architecture sprint discipline.',
    icon: Target,
    color: 'from-cyan-500 to-emerald-500',
    borderColor: 'border-cyan-400/40',
    textColor: 'text-cyan-300'
  },
  {
    id: 8,
    title: 'Professional Development Support',
    desc: 'Soft skills training, executive presentation mastery, and corporate work culture readiness.',
    icon: Award,
    color: 'from-purple-500 to-indigo-600',
    borderColor: 'border-purple-400/40',
    textColor: 'text-purple-300'
  }
];

export default function SpiralScrollSupport() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-rotate spiral continuous loop
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.6) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const handleNext = () => {
    setRotationAngle((prev) => prev + 45);
  };

  const handlePrev = () => {
    setRotationAngle((prev) => prev - 45);
  };

  return (
    <div 
      ref={containerRef}
      className="relative py-12 px-4 w-full flex flex-col items-center justify-center overflow-hidden min-h-[640px]"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* 3D Spiral Helix Controls Badge */}
      <div className="absolute top-4 z-30 flex items-center gap-3 bg-[#080a1c]/90 border border-cyan-500/30 px-4 py-2 rounded-full backdrop-blur-xl shadow-[0_0_20px_rgba(56,189,248,0.2)]">
        <Compass className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
        <span className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase">
          3D SPIRAL HELIX SCROLL
        </span>
        <button 
          onClick={handlePrev}
          className="w-7 h-7 rounded-full bg-white/10 hover:bg-cyan-500/20 flex items-center justify-center text-xs font-bold text-white transition-colors"
          title="Rotate Left"
        >
          ←
        </button>
        <button 
          onClick={handleNext}
          className="w-7 h-7 rounded-full bg-white/10 hover:bg-cyan-500/20 flex items-center justify-center text-xs font-bold text-white transition-colors"
          title="Rotate Right"
        >
          →
        </button>
      </div>

      {/* 3D Perspective Stage Container */}
      <div className="relative w-full max-w-5xl h-[520px] flex items-center justify-center perspective-[1200px] z-10 pt-12">
        {SUPPORT_CARDS.map((card, idx) => {
          const totalCards = SUPPORT_CARDS.length;
          const stepAngle = 360 / totalCards;
          const currentAngle = (idx * stepAngle + rotationAngle) * (Math.PI / 180);

          // 3D Helix Cylindrical Math
          const radius = 340; // horizontal radius
          const x = Math.sin(currentAngle) * radius;
          const z = Math.cos(currentAngle) * radius - radius / 2; // depth
          const y = (idx - totalCards / 2) * 24 + Math.cos(currentAngle) * 20; // vertical spiral incline

          // Normalize depth opacity and scale
          const depthProgress = (z + radius) / (radius * 1.5);
          const scale = Math.max(0.75, Math.min(1.12, 0.75 + depthProgress * 0.35));
          const opacity = Math.max(0.35, Math.min(1, 0.35 + depthProgress * 0.65));
          const zIndex = Math.round(z + 500);

          const FeatureIcon = card.icon;

          return (
            <motion.div
              key={card.id}
              className="absolute w-[280px] sm:w-[320px] cursor-pointer"
              style={{
                transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease'
              }}
              onClick={() => {
                setRotationAngle(-idx * stepAngle);
              }}
            >
              <SpotlightCard className={`h-full p-6 space-y-4 rounded-3xl border ${card.borderColor} bg-[#0b0e24]/95 backdrop-blur-xl shadow-2xl relative group hover:border-cyan-400 transition-all`}>
                {/* Helix Step Tag */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[10px] font-mono font-extrabold tracking-widest text-cyan-400 bg-cyan-950/50 px-2.5 py-1 rounded-full border border-cyan-500/30">
                    SPIRAL STEP 0{card.id}
                  </span>
                  <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${card.color} text-white shadow-lg`}>
                    <FeatureIcon className="w-4.5 h-4.5" />
                  </div>
                </div>

                {/* Card Main Info */}
                <div className="space-y-2">
                  <h3 className={`text-lg font-extrabold text-white font-['Outfit'] group-hover:${card.textColor} transition-colors`}>
                    {card.title}
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-zinc-500 border-t border-white/5">
                  <span>CAREER ECOSYSTEM</span>
                  <span className="text-cyan-400 font-bold">CLICK TO FOCUS</span>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>

      {/* Helper Scroll/Rotate Hint */}
      <p className="text-center text-xs font-mono text-zinc-400 mt-4 z-20 flex items-center gap-2">
        <RotateCw className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
        Hover to pause auto-spin :: Click any card to bring to front
      </p>
    </div>
  );
}
