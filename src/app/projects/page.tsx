'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuralCanvas from '@/components/NeuralCanvas';
import MouseSpotlight from '@/components/MouseSpotlight';
import ApplicationModal from '@/components/ApplicationModal';
import { STUDENT_PROJECTS, StudentProject } from '@/data/projects';
import { Search, Github, ExternalLink, Star, Code, Sparkles, Filter } from 'lucide-react';

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const filteredProjects = selectedTag === 'All'
    ? STUDENT_PROJECTS
    : STUDENT_PROJECTS.filter((p) => p.category === selectedTag);

  return (
    <div className="relative min-h-screen bg-[#09090b] text-white overflow-hidden">
      <NeuralCanvas />
      <MouseSpotlight />
      <Navbar onOpenApply={() => setIsApplyOpen(true)} />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-500/10 border border-purple-500/20 text-purple-300 inline-block">
            Student Engineering Showcase
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-['Outfit']">
            Production Capstone Projects
          </h1>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Browse real-world software applications, AI engines, and cloud setups designed and deployed by Nexus Talent Labs fellows.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {['All', 'AI / ML', 'Full Stack', 'Cloud / DevOps', 'Cybersecurity'].map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedTag === tag
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Pinterest Masonry/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group space-y-4"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold bg-black/70 backdrop-blur-md text-cyan-300 border border-white/10">
                  {proj.category}
                </div>
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold bg-blue-600/80 backdrop-blur-md text-white flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-300 fill-amber-300" /> {proj.stars}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors font-['Outfit']">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.techStack.map((tech, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.04] text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={proj.builtBy.avatar}
                      alt={proj.builtBy.name}
                      className="w-7 h-7 rounded-full object-cover border border-white/10"
                    />
                    <div className="text-[11px]">
                      <span className="text-white font-semibold block leading-tight">{proj.builtBy.name}</span>
                      <span className="text-zinc-500 block text-[9px]">{proj.builtBy.batch}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={proj.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </main>

      <Footer />
      <ApplicationModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </div>
  );
}
