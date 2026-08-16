'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuralCanvas from '@/components/NeuralCanvas';
import MouseSpotlight from '@/components/MouseSpotlight';
import ApplicationModal from '@/components/ApplicationModal';
import AskAIWidget from '@/components/AskAIWidget';
import FacultyFlipCard from '@/components/reactbits/FacultyFlipCard';
import AIGradientBorder from '@/components/reactbits/AIGradientBorder';
import ShinyText from '@/components/reactbits/ShinyText';
import { FACULTY_MEMBERS, FacultyMember } from '@/data/faculty';
import { Sparkles, Award, Brain, Users, Crown, Cpu, Linkedin, BookOpen, Building2 } from 'lucide-react';

export default function FacultyPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const founders = FACULTY_MEMBERS.filter(m => m.category === 'Founder & Executive Board');
  const ctoLeadership = FACULTY_MEMBERS.filter(m => m.category === 'CTO & Tech Leadership');
  const researchFaculty = FACULTY_MEMBERS.filter(m => m.category === 'Research Faculty');
  const industryMentors = FACULTY_MEMBERS.filter(m => m.category === 'Industry Mentor');

  return (
    <div className="relative min-h-screen bg-[#09090b] text-white overflow-hidden selection:bg-blue-600/30 selection:text-cyan-300">
      <NeuralCanvas />
      <MouseSpotlight />
      <Navbar onOpenApply={() => setIsApplyOpen(true)} />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 space-y-20">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-extrabold uppercase tracking-widest text-cyan-300 shadow-xl backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <ShinyText text="EXECUTIVE BOARD, CTO & RESEARCH LEADERS" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-['Outfit']">
            Directors, CTO & Research Faculty
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Guided by former Vice-Chancellors, Google Cloud Principal Architects, Stripe Product Directors, DeepMind AI Scientists, and AWS Infrastructure Leaders. Hover over any card below to flip and inspect full leadership credentials!
          </p>
        </div>

        {/* SECTION 1: FOUNDERS & EXECUTIVE GOVERNING BOARD */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/20">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                Founders & Executive Governing Board
              </h2>
              <p className="text-xs text-zinc-400">
                Pioneers shaping outcome-based tech education, academic governance, and corporate hiring alliances.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {founders.map((member) => (
              <FacultyFlipCard
                key={member.id}
                member={{
                  id: member.id,
                  initials: member.initials,
                  name: member.name,
                  role: member.role,
                  company: member.previousCompany,
                  bio: member.bio,
                  photo: member.photo
                }}
              />
            ))}
          </div>
        </div>

        {/* SECTION 2: CTO & TECHNICAL LEADERSHIP */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                CTO & Technical Engineering Leadership
              </h2>
              <p className="text-xs text-zinc-400">
                Directing lab infrastructure, cloud sandbox environments, product engineering, and AI platforms.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ctoLeadership.map((member) => (
              <FacultyFlipCard
                key={member.id}
                member={{
                  id: member.id,
                  initials: member.initials,
                  name: member.name,
                  role: member.role,
                  company: member.previousCompany,
                  bio: member.bio,
                  photo: member.photo
                }}
              />
            ))}
          </div>
        </div>

        {/* SECTION 3: DISTINGUISHED RESEARCH FACULTY */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                Distinguished Research Faculty & Mentors
              </h2>
              <p className="text-xs text-zinc-400">
                Former DeepMind, AWS, Vercel, and Cyber Defense scientists leading advanced technical modules.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchFaculty.map((member) => (
              <FacultyFlipCard
                key={member.id}
                member={{
                  id: member.id,
                  initials: member.initials,
                  name: member.name,
                  role: member.role,
                  company: member.previousCompany,
                  bio: member.bio,
                  photo: member.photo
                }}
              />
            ))}
          </div>
        </div>

        {/* SECTION 4: INDUSTRY MENTORS & TECHNICAL LEADS */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/20">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                Industry Mentors & Product Design Fellows
              </h2>
              <p className="text-xs text-zinc-400">
                Staff researchers and product design fellows providing 1-on-1 code reviews and career mentorship.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {industryMentors.map((member) => (
              <FacultyFlipCard
                key={member.id}
                member={{
                  id: member.id,
                  initials: member.initials,
                  name: member.name,
                  role: member.role,
                  company: member.previousCompany,
                  bio: member.bio,
                  photo: member.photo
                }}
              />
            ))}
          </div>
        </div>

        {/* FACULTY DETAILED HIGHLIGHT CARDS LIST */}
        <div className="pt-12 border-t border-white/10 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono">
              Comprehensive Leadership Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
              Leadership Specializations & Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FACULTY_MEMBERS.map((fac) => (
              <AIGradientBorder key={fac.id} duration={6} className="rounded-3xl h-full">
                <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start h-full bg-[#0c0e1a]/95">
                  <img
                    src={fac.photo}
                    alt={fac.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80';
                    }}
                    className="w-24 h-24 rounded-2xl object-cover shrink-0 border-2 border-cyan-400/30 shadow-xl"
                  />
                  <div className="space-y-3 flex-1">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-blue-600/20 text-cyan-300 border border-blue-400/30">
                          {fac.category}
                        </span>
                        <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                          <Award className="w-3.5 h-3.5" /> {fac.experience} Exp
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white font-['Outfit'] mt-2">{fac.name}</h3>
                      <p className="text-xs font-semibold text-cyan-300">{fac.role}</p>
                      <p className="text-[11px] text-zinc-400 mt-0.5">{fac.previousCompany}</p>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                      {fac.bio}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {fac.specialization.map((spec, i) => (
                        <span key={i} className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.04] text-cyan-200 border border-white/10">
                          {spec}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 flex items-center justify-between text-xs text-zinc-400 border-t border-white/10">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                        <strong className="text-white">{fac.publicationsCount}</strong> Research Papers
                      </span>
                      <a 
                        href={fac.linkedIn} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-blue-400 hover:text-cyan-300 font-semibold flex items-center gap-1 transition-colors"
                      >
                        <Linkedin className="w-3.5 h-3.5" /> LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </AIGradientBorder>
            ))}
          </div>
        </div>

      </main>

      <Footer />
      <ApplicationModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
      <AskAIWidget />
    </div>
  );
}
