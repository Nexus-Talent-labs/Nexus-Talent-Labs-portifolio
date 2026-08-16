'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Star, Clock, Layers, UserCheck, Code2, Sparkles } from 'lucide-react';
import { StudentProject } from '@/data/projects';

interface ProjectModalProps {
  project: StudentProject | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Dark Glass Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#0d0e17] border border-white/20 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9)] z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header Banner Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e17] via-[#0d0e17]/50 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 border border-white/20 text-zinc-300 hover:text-white hover:bg-white/10 transition-all z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badges on Banner */}
            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 border border-blue-400/40 text-cyan-300 backdrop-blur-md">
                  {project.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] mt-2">
                  {project.title}
                </h2>
              </div>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1">
            
            {/* Metadata Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs">
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase font-semibold">Difficulty</span>
                <span className="font-bold text-white flex items-center gap-1 mt-0.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" /> {project.difficulty}
                </span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase font-semibold">Build Duration</span>
                <span className="font-bold text-white flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-purple-400" /> {project.duration}
                </span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase font-semibold">GitHub Stars</span>
                <span className="font-bold text-amber-400 flex items-center gap-1 mt-0.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {project.stars}
                </span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase font-semibold">Status</span>
                <span className="font-bold text-emerald-400 flex items-center gap-1 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5" /> Production Ready
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Code2 className="w-4 h-4" /> Technical Project Description
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Chips */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Technologies & Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-white/[0.05] border border-white/10 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Built By Section */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={project.builtBy.avatar}
                  alt={project.builtBy.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-cyan-400/50"
                />
                <div>
                  <span className="text-[10px] text-zinc-500 block uppercase font-bold">Built By Fellow</span>
                  <span className="text-sm font-bold text-white font-['Outfit']">{project.builtBy.name}</span>
                  <span className="text-xs text-cyan-400 block">{project.builtBy.batch}</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <UserCheck className="w-3 h-3" /> Verified Student Code
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-bold text-white flex items-center justify-center gap-2 transition-all"
              >
                <Github className="w-4 h-4" /> View GitHub Repository
              </a>
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-5 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:opacity-95 text-xs font-bold text-white shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all"
              >
                <ExternalLink className="w-4 h-4" /> Launch Live Interactive Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
