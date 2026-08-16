'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Brain, 
  Clock, 
  Award,
  BookOpen,
  Target,
  Wrench,
  Layers,
  Sparkle
} from 'lucide-react';
import AIGradientBorder from '@/components/reactbits/AIGradientBorder';
import { CourseModuleItem } from '@/data/allCourseModules';

interface AICurriculumModalProps {
  module: CourseModuleItem | null;
  onClose: () => void;
  onOpenApply: () => void;
}

export default function AICurriculumModal({
  module,
  onClose,
  onOpenApply
}: AICurriculumModalProps) {

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
          className="relative w-full max-w-3xl z-10 my-8"
        >
          <AIGradientBorder duration={5} className="rounded-3xl shadow-2xl shadow-cyan-500/25">
            <div className="bg-[#080914] rounded-3xl relative flex flex-col max-h-[85vh] overflow-hidden">
              
              {/* Scrollable Body Content */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1">
                
                {/* Course Banner Image & Badges */}
                <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden border border-white/10 group">
                  <img 
                    src={module.image} 
                    alt={module.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080914] via-[#080914]/60 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase bg-blue-600/80 text-cyan-200 border border-blue-400/40 backdrop-blur-md shadow-lg">
                      {module.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 backdrop-blur-md shadow-lg">
                      {module.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] drop-shadow-md">
                      {module.title}
                    </h3>
                  </div>
                </div>

                {/* Quick Specs: Duration & Skill Level */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                    <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase font-mono font-bold text-zinc-400 block">Course Duration</span>
                      <span className="font-semibold text-zinc-200">{module.duration}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                    <Award className="w-4 h-4 text-purple-400 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase font-mono font-bold text-zinc-400 block">Target Skill Level</span>
                      <span className="font-semibold text-zinc-200">{module.skillLevel}</span>
                    </div>
                  </div>
                </div>

                {/* Detailed Overview */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 font-mono">
                    <BookOpen className="w-3.5 h-3.5" /> Course Overview & Methodology
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans bg-white/[0.03] p-4 rounded-2xl border border-white/10">
                    {module.fullDesc}
                  </p>
                </div>

                {/* Full Detailed Curriculum */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5 font-mono">
                    <Layers className="w-3.5 h-3.5" /> Full Detailed Syllabus & Modules
                  </h4>
                  <div className="space-y-2.5">
                    {module.curriculum.map((topic, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-purple-500/5 border border-purple-500/15 text-xs sm:text-sm text-zinc-200">
                        <span className="w-6 h-6 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-xs font-bold font-mono text-purple-300 shrink-0">
                          {idx + 1}
                        </span>
                        <span className="font-medium pt-0.5">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Developer Tools & Frameworks Stack */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 font-mono">
                    <Wrench className="w-3.5 h-3.5" /> Hands-on Tools & Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {module.tools.map((tool, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-semibold text-cyan-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Real-World Projects */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Commercial Projects Included
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {module.projects.map((proj, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/15 text-xs text-zinc-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-medium">{proj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Outcome */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-cyan-900/30 border border-blue-500/30 space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5 font-mono">
                    <Target className="w-3.5 h-3.5 text-amber-400" /> Career & Role Outcome
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    {module.careerOutcome}
                  </p>
                </div>

              </div>

              {/* Fixed Bottom Action Buttons Bar (Does NOT move/scroll) */}
              <div className="p-4 sm:p-5 bg-[#080914]/95 backdrop-blur-md border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3 shrink-0 rounded-b-3xl z-20">
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
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:opacity-95 text-xs font-bold text-white shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group transition-all"
                >
                  <span>Enroll in Course</span>
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
