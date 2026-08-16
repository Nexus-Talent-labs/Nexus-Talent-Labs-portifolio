'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  LucideIcon,
  Zap,
  Target,
  GraduationCap
} from 'lucide-react';
import AIGradientBorder from '@/components/reactbits/AIGradientBorder';

export interface PillarDetailItem {
  num: string;
  title: string;
  tag: string;
  desc: string;
  fullDesc: string;
  highlights: string[];
  careerOutcome: string;
  icon: LucideIcon;
}

interface PillarDetailModalProps {
  pillar: PillarDetailItem | null;
  onClose: () => void;
  onOpenApply: () => void;
}

export default function PillarDetailModal({
  pillar,
  onClose,
  onOpenApply
}: PillarDetailModalProps) {

  // Close on Escape Key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (pillar) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [pillar, onClose]);

  if (!pillar) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Dark Glassmorphic Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl z-10"
        >
          <AIGradientBorder className="rounded-3xl shadow-2xl shadow-cyan-500/20">
            <div className="bg-[#090b16] rounded-3xl relative flex flex-col max-h-[85vh] overflow-hidden">
              
              {/* Scrollable Body Content */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1">
                {/* Header Badge & Icon */}
                <div className="flex items-center gap-4">
                  <span className="text-4xl sm:text-5xl font-black font-['Space_Grotesk'] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                    {pillar.num}
                  </span>

                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shadow-xl">
                    <pillar.icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 inline-block">
                      {pillar.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit'] mt-1">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Detailed Overview Paragraph */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 font-mono">
                    <Sparkles className="w-3.5 h-3.5" /> Pillar Overview & Methodology
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans bg-white/[0.03] p-4 rounded-2xl border border-white/10">
                    {pillar.fullDesc}
                  </p>
                </div>

                {/* Key Highlights List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5 font-mono">
                    <Zap className="w-3.5 h-3.5" /> Key Focus Areas & Technologies
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {pillar.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/15 text-xs text-zinc-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Outcome */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5 font-mono">
                    <Target className="w-3.5 h-3.5 text-amber-400" /> Professional & Placement Impact
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {pillar.careerOutcome}
                  </p>
                </div>
              </div>

              {/* Fixed Bottom Action Buttons Bar (Does NOT move/scroll) */}
              <div className="p-4 sm:p-5 bg-[#090b16]/95 backdrop-blur-md border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3 shrink-0 rounded-b-3xl z-20">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-bold text-zinc-300 hover:text-white transition-all text-center"
                >
                  Close Overview
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenApply();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-95 text-xs font-bold text-white shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group transition-all"
                >
                  <span>Apply for Program</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </AIGradientBorder>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
