'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  FileText, 
  MessageSquare, 
  Sparkles, 
  Headphones, 
  Target, 
  Award
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

export default function VerticalSpiralSupport() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track vertical page scroll through this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Smooth scroll spring for liquid rotation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map vertical scroll progress to 360-degree spiral rotation
  const rotationY = useTransform(smoothProgress, [0, 1], [0, 360]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full py-12 px-4 flex flex-col items-center justify-center min-h-[780px]"
    >
      {/* Central Vertical Glowing Laser Core Axis */}
      <div className="absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-cyan-400 via-purple-500 to-emerald-400 shadow-[0_0_25px_rgba(56,189,248,0.7)] z-0 rounded-full" />

      {/* 3D Vertical Perspective Stage */}
      <div className="relative w-full max-w-4xl h-[680px] flex items-center justify-center perspective-[1200px] z-10">
        {SUPPORT_CARDS.map((card, idx) => {
          const totalCards = SUPPORT_CARDS.length;
          const baseAngle = (idx * (360 / totalCards)) * (Math.PI / 180);

          return (
            <SpiralCard
              key={card.id}
              card={card}
              idx={idx}
              totalCards={totalCards}
              baseAngle={baseAngle}
              smoothProgress={smoothProgress}
            />
          );
        })}
      </div>
    </div>
  );
}

function SpiralCard({ 
  card, 
  idx, 
  totalCards, 
  baseAngle, 
  smoothProgress 
}: { 
  card: typeof SUPPORT_CARDS[0]; 
  idx: number; 
  totalCards: number; 
  baseAngle: number; 
  smoothProgress: any; 
}) {
  const FeatureIcon = card.icon;

  // Individual Framer Motion transforms for valid MotionStyle prop types
  const transform = useTransform(smoothProgress, (p: number) => {
    const currentAngle = baseAngle + p * Math.PI * 2.2;
    const radius = 320;
    const x = Math.sin(currentAngle) * radius;
    const z = Math.cos(currentAngle) * radius - 100;
    const verticalOffset = (idx - totalCards / 2) * 85 + (p - 0.5) * 220;
    const rotateYDeg = (currentAngle * (180 / Math.PI)) % 360;
    const depthProgress = (z + radius) / (radius * 1.5);
    const scale = Math.max(0.72, Math.min(1.1, 0.72 + depthProgress * 0.38));
    return `translate3d(${x}px, ${verticalOffset}px, ${z}px) rotateY(${rotateYDeg}deg) scale(${scale})`;
  });

  const opacity = useTransform(smoothProgress, (p: number) => {
    const currentAngle = baseAngle + p * Math.PI * 2.2;
    const radius = 320;
    const z = Math.cos(currentAngle) * radius - 100;
    const depthProgress = (z + radius) / (radius * 1.5);
    return Math.max(0.3, Math.min(1, 0.3 + depthProgress * 0.7));
  });

  const zIndex = useTransform(smoothProgress, (p: number) => {
    const currentAngle = baseAngle + p * Math.PI * 2.2;
    const radius = 320;
    const z = Math.cos(currentAngle) * radius - 100;
    return Math.round(z + 500);
  });

  return (
    <motion.div
      style={{ transform, opacity, zIndex }}
      className="absolute w-[280px] sm:w-[320px]"
    >
      <SpotlightCard className={`p-6 space-y-4 rounded-3xl border ${card.borderColor} bg-[#0a0c20]/95 backdrop-blur-xl shadow-2xl relative group hover:border-cyan-400 transition-all`}>
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-[10px] font-mono font-extrabold tracking-widest text-cyan-400 bg-cyan-950/50 px-2.5 py-1 rounded-full border border-cyan-500/30">
            HELIX 0{card.id}
          </span>
          <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${card.color} text-white shadow-lg`}>
            <FeatureIcon className="w-4.5 h-4.5" />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className={`text-lg font-extrabold text-white font-['Outfit'] group-hover:${card.textColor} transition-colors`}>
            {card.title}
          </h3>
          <p className="text-xs text-zinc-300 leading-relaxed font-sans">
            {card.desc}
          </p>
        </div>

        <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-zinc-500 border-t border-white/5">
          <span>VERTICAL SPIRAL</span>
          <span className="text-cyan-400 font-bold">ECOSYSTEM</span>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
