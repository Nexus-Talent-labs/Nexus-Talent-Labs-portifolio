'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Headphones, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import Magnet from '@/components/reactbits/Magnet';
import ApplicationModal from '@/components/ApplicationModal';

export default function ThreeAnimeCTA() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <div className="relative w-full rounded-3xl p-6 sm:p-12 lg:p-14">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-7xl mx-auto">
        
        {/* LEFT COLUMN: Text Content & CTA Buttons */}
        <div className="lg:col-span-7 space-y-7 text-left">
          {/* Animated Header Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-md"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Take The Next Step</span>
          </motion.div>

          {/* Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-['Outfit'] leading-tight tracking-tight"
          >
            Your Dream Career Starts With The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400">
              Right Skills
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed font-sans"
          >
            Join Nexus Talent Labs and transform your knowledge into industry-ready expertise with expert training and placement support.
          </motion.p>

          {/* Key Value Micro-Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-zinc-300 pt-1"
          >
            <div className="flex items-center gap-2.5 bg-white/[0.04] p-3 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Direct Corporate Hiring Referrals</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/[0.04] p-3 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>1-on-1 Senior CTO Mentorship</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/[0.04] p-3 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <span>ATS Resume & GitHub Audit</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/[0.04] p-3 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-pink-400 flex-shrink-0" />
              <span>Guaranteed Placement Push</span>
            </div>
          </motion.div>

          {/* CTA Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Magnet strength={20}>
              <button
                onClick={() => setIsApplyOpen(true)}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:opacity-95 font-bold text-sm text-white shadow-[0_0_30px_rgba(56,189,248,0.4)] flex items-center gap-3 transition-transform hover:scale-105 group"
              >
                <Rocket className="w-5 h-5 text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform" />
              </button>
            </Magnet>

            <button
              onClick={() => setIsApplyOpen(true)}
              className="px-7 py-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 font-bold text-sm text-zinc-200 hover:text-white transition-all flex items-center gap-2.5 backdrop-blur-md hover:scale-105"
            >
              <Headphones className="w-5 h-5 text-purple-400" />
              <span>Talk To Career Advisor</span>
            </button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: CLEAN 3D ANIME APPLICANT IMAGE ONLY (NO BORDERS, NO OVERLAYS, NO BACKGROUND GLOWS) */}
        <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/anime_student_3d_cta.jpg"
              alt="Realistic 3D Anime Student Applying for Institute"
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>
        </div>

      </div>

      {/* Application Modal */}
      <ApplicationModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </div>
  );
}
