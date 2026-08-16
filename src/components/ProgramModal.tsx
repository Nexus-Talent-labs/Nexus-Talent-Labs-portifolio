'use client';

import React from 'react';
import { CourseProgram } from '@/data/programs';
import { X, CheckCircle2, Clock, Award, Briefcase, Calendar, Sparkles, BookOpen } from 'lucide-react';

interface ProgramModalProps {
  program: CourseProgram | null;
  onClose: () => void;
  onApply: (programId: string) => void;
}

export default function ProgramModal({ program, onClose, onApply }: ProgramModalProps) {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Banner Image */}
        <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden border border-white/10 mb-6 group">
          <img 
            src={program.image} 
            alt={program.title}
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80';
            }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent" />
          
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600/80 text-cyan-200 border border-blue-400/40 backdrop-blur-md">
              {program.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
              {program.badge}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] drop-shadow-md">
              {program.title}
            </h2>
          </div>
        </div>

        {/* Header Description */}
        <div className="space-y-3 pb-6 border-b border-white/10">
          <p className="text-sm text-zinc-300 leading-relaxed">
            {program.description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6 border-b border-white/10">
          <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
              <Clock className="w-3.5 h-3.5 text-blue-400" /> Duration
            </div>
            <p className="text-sm font-bold text-white">{program.duration}</p>
          </div>
          <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
              <Briefcase className="w-3.5 h-3.5 text-purple-400" /> Avg Package
            </div>
            <p className="text-sm font-bold text-cyan-300">{program.expectedSalary}</p>
          </div>
          <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
              <Award className="w-3.5 h-3.5 text-emerald-400" /> Placement Rate
            </div>
            <p className="text-sm font-bold text-emerald-400">{program.placementRate}</p>
          </div>
          <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" /> Next Batch
            </div>
            <p className="text-sm font-bold text-white">{program.nextBatch}</p>
          </div>
        </div>

        {/* Curriculum Modules */}
        <div className="py-6 space-y-3 border-b border-white/10">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-cyan-400" /> Comprehensive Curriculum Modules
          </h3>
          <div className="space-y-2">
            {program.modules.map((mod, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{mod}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Covered */}
        <div className="py-6 space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Tools & Stack Mastered</h3>
          <div className="flex flex-wrap gap-2">
            {program.tools.map((t, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-600/10 border border-blue-500/20 text-cyan-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Action */}
        <div className="pt-4 flex items-center justify-end border-t border-white/10">
          <button
            onClick={() => {
              onClose();
              onApply(program.id);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 font-bold text-xs text-white shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Sparkles className="w-4 h-4" /> Enroll in {program.title}
          </button>
        </div>

      </div>
    </div>
  );
}
