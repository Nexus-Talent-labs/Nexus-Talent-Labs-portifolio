'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Clock, 
  Users, 
  Award,
  BookOpen,
  Target,
  Layers
} from 'lucide-react';
import AIGradientBorder from '@/components/reactbits/AIGradientBorder';
import { PartnershipItem } from '@/data/partnerships';

interface PartnershipDetailModalProps {
  partnership: PartnershipItem | null;
  onClose: () => void;
  onOpenApply: () => void;
}

export default function PartnershipDetailModal({
  partnership,
  onClose,
  onOpenApply
}: PartnershipDetailModalProps) {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (partnership) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [partnership, onClose]);

  if (!partnership) return null;

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
          className="relative w-full max-w-3xl z-10 my-8"
        >
          <AIGradientBorder duration={5} className="rounded-3xl shadow-2xl shadow-purple-500/25">
            <div className="bg-[#090b18] rounded-3xl relative flex flex-col max-h-[85vh] overflow-hidden">
              
              {/* Scrollable Body Content */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1">
                
                {/* Visual Banner Image Header */}
                <div className="relative h-44 rounded-2xl overflow-hidden border border-white/10 group">
                  <img 
                    src={partnership.image} 
                    alt={partnership.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b18] via-[#090b18]/60 to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-purple-600/80 border border-purple-400/40 flex items-center justify-center text-xs font-black font-['Space_Grotesk'] text-white backdrop-blur-md">
                      {partnership.num}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-purple-500/30 text-purple-200 border border-purple-400/30 backdrop-blur-md">
                      {partnership.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit'] drop-shadow-md">
                      {partnership.title}
                    </h2>
                  </div>
                </div>

                {/* Title */}
                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                    {partnership.title}
                  </h3>
                </div>

                {/* Quick Metadata Bar: Duration & Audience */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                    <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase font-mono font-bold text-zinc-400 block">Program Duration</span>
                      <span className="font-semibold text-zinc-200">{partnership.duration}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                    <Users className="w-4 h-4 text-purple-400 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase font-mono font-bold text-zinc-400 block">Target Audience</span>
                      <span className="font-semibold text-zinc-200">{partnership.targetAudience}</span>
                    </div>
                  </div>
                </div>

                {/* Comprehensive Pin-to-Point Explanation */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5 font-mono">
                    <BookOpen className="w-3.5 h-3.5" /> Detailed Program Overview & Methodology
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans bg-white/[0.03] p-4 rounded-2xl border border-white/10">
                    {partnership.fullDesc}
                  </p>
                </div>

                {/* Core Pillars */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 font-mono">
                    <Layers className="w-3.5 h-3.5" /> Core Program Pillars
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {partnership.corePillars.map((pillar, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/15 text-xs text-zinc-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{pillar}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Curriculum Highlights */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5 font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Practical Curriculum Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {partnership.curriculum.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-500/5 border border-purple-500/15 text-xs text-zinc-200">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Institutional Impact Callout */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-blue-900/40 border border-purple-500/30 space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5 font-mono">
                    <Award className="w-4 h-4 text-amber-400" /> Institutional & NAAC / NIRF Impact
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    {partnership.institutionalBenefit}
                  </p>
                </div>

                {/* Execution Model & Outcomes */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 font-mono">
                    <Target className="w-3.5 h-3.5" /> Program Delivery & Measurable Outcomes
                  </h4>
                  <p className="text-xs text-zinc-400 italic">
                    Execution: {partnership.executionModel}
                  </p>
                  <div className="space-y-2 pt-1">
                    {partnership.outcomes.map((out, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-200">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Fixed Bottom Action Buttons Bar (Does NOT move/scroll) */}
              <div className="p-4 sm:p-5 bg-[#090b18]/95 backdrop-blur-md border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3 shrink-0 rounded-b-3xl z-20">
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
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-95 text-xs font-bold text-white shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 group transition-all"
                >
                  <span>Partner With Us</span>
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
