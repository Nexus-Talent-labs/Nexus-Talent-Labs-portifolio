'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Target, 
  Award,
  BookOpen
} from 'lucide-react';
import AIGradientBorder from '@/components/reactbits/AIGradientBorder';
import { CRTModuleItem } from '@/data/crtModules';

interface CRTModuleDetailModalProps {
  module: CRTModuleItem | null;
  onClose: () => void;
  onOpenApply: () => void;
}

export default function CRTModuleDetailModal({
  module,
  onClose,
  onOpenApply
}: CRTModuleDetailModalProps) {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (module) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [module, onClose]);

  if (!module) return null;

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
                {/* Visual Header Image Banner */}
                <div className="relative h-40 rounded-2xl overflow-hidden border border-white/10 group">
                  <img 
                    src={module.image} 
                    alt={module.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b16] via-[#090b16]/60 to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase bg-blue-600/80 text-cyan-200 border border-blue-400/40 backdrop-blur-md">
                    {module.tag}
                  </span>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit'] drop-shadow-md">
                      {module.title}
                    </h2>
                  </div>
                </div>

                {/* Detailed Overview Paragraph */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 font-mono">
                    <BookOpen className="w-3.5 h-3.5" /> Module Overview & Training Methodology
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans bg-white/[0.03] p-4 rounded-2xl border border-white/10">
                    {module.fullDesc}
                  </p>
                </div>

                {/* Key Topics & Syllabus */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5 font-mono">
                    <Zap className="w-3.5 h-3.5" /> Key Syllabus & Practice Modules
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {module.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/15 text-xs text-zinc-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Placement Impact */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5 font-mono">
                    <Target className="w-3.5 h-3.5 text-amber-400" /> Placement & Recruitment Benefit
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {module.outcome}
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
                  <span>Enroll in CRT Training</span>
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
