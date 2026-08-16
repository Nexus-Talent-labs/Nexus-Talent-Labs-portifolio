'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuralCanvas from '@/components/NeuralCanvas';
import MouseSpotlight from '@/components/MouseSpotlight';
import ApplicationModal from '@/components/ApplicationModal';
import { FACULTY_MEMBERS } from '@/data/faculty';
import { Linkedin, BookOpen, Award, Sparkles } from 'lucide-react';

export default function FacultyPage() {
  const [isApplyOpen, setIsApplyOpen] = React.useState(false);

  return (
    <div className="relative min-h-screen bg-[#09090b] text-white overflow-hidden">
      <NeuralCanvas />
      <MouseSpotlight />
      <Navbar onOpenApply={() => setIsApplyOpen(true)} />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 border border-blue-500/20 text-cyan-300 inline-block">
            Distinguished Tech Leadership
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-['Outfit']">
            Research Faculty & Mentors
          </h1>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Our faculty consists of former Principal Scientists, Staff Engineers, and Open Source maintainers from Silicon Valley and top research labs.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FACULTY_MEMBERS.map((fac) => (
            <div key={fac.id} className="glass-panel glass-panel-hover rounded-3xl p-8 border border-white/10 flex flex-col sm:flex-row gap-6 items-start">
              <img
                src={fac.photo}
                alt={fac.name}
                className="w-28 h-28 rounded-2xl object-cover shrink-0 border-2 border-cyan-400/30"
              />
              <div className="space-y-3 flex-1">
                <div>
                  <h3 className="text-xl font-bold text-white font-['Outfit']">{fac.name}</h3>
                  <p className="text-xs font-semibold text-cyan-300">{fac.role}</p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">{fac.previousCompany}</p>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {fac.bio}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {fac.specialization.map((spec, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.04] text-zinc-300">
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-zinc-400 border-t border-white/10">
                  <span>{fac.publicationsCount} Research Papers</span>
                  <a href={fac.linkedIn} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline flex items-center gap-1">
                    <Linkedin className="w-3.5 h-3.5" /> LinkedIn Profile
                  </a>
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
