'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuralCanvas from '@/components/NeuralCanvas';
import MouseSpotlight from '@/components/MouseSpotlight';
import ApplicationModal from '@/components/ApplicationModal';
import AskAIWidget from '@/components/AskAIWidget';
import AIGradientBorder from '@/components/reactbits/AIGradientBorder';
import { PARTNERSHIPS_DATA } from '@/data/partnerships';
import { 
  Building2, 
  Clock, 
  Users, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Target, 
  ArrowLeft, 
  ArrowRight 
} from 'lucide-react';

export default function PartnershipDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const partnershipId = params?.id as string;
  const partnership = PARTNERSHIPS_DATA.find(p => p.id === partnershipId) || PARTNERSHIPS_DATA[0];

  return (
    <div className="relative min-h-screen bg-[#09090b] text-white overflow-hidden selection:bg-purple-600/30 selection:text-purple-300">
      <NeuralCanvas />
      <MouseSpotlight />
      <Navbar onOpenApply={() => setIsApplyOpen(true)} />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10 space-y-10">
        
        {/* Back Button */}
        <button
          onClick={() => router.push('/about')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-zinc-300 hover:text-white transition-all w-max"
        >
          <ArrowLeft className="w-4 h-4 text-purple-400" />
          <span>Back to About & Institutional Partnerships</span>
        </button>

        {/* Main Detailed Card Container */}
        <AIGradientBorder duration={6} className="rounded-3xl shadow-2xl shadow-purple-500/20">
          <div className="p-8 sm:p-12 bg-[#090b18] rounded-3xl space-y-8">
            
            {/* Header Visual Banner Image */}
            <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden border border-white/10 group">
              <img 
                src={partnership.image} 
                alt={partnership.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b18] via-[#090b18]/60 to-transparent" />
              
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="w-10 h-10 rounded-2xl bg-purple-600/80 border border-purple-400/40 flex items-center justify-center text-sm font-black font-['Space_Grotesk'] text-white backdrop-blur-md">
                  {partnership.num}
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase bg-purple-500/30 text-purple-200 border border-purple-400/30 backdrop-blur-md">
                  {partnership.tag}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] drop-shadow-md">
                  {partnership.title}
                </h1>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
                {partnership.title}
              </h1>
            </div>

            {/* Quick Metadata Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-zinc-400 block">Program Duration</span>
                  <span className="font-semibold text-sm text-zinc-200">{partnership.duration}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                <Users className="w-5 h-5 text-purple-400 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-zinc-400 block">Target Audience</span>
                  <span className="font-semibold text-sm text-zinc-200">{partnership.targetAudience}</span>
                </div>
              </div>
            </div>

            {/* Detailed Program Overview */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2 font-mono">
                <BookOpen className="w-4 h-4" /> Detailed Program Overview & Methodology
              </h3>
              <p className="text-xs sm:text-base text-zinc-200 leading-relaxed font-sans bg-white/[0.03] p-6 rounded-2xl border border-white/10">
                {partnership.fullDesc}
              </p>
            </div>

            {/* Core Program Pillars */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 font-mono">
                <Layers className="w-4 h-4" /> Core Program Pillars
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {partnership.corePillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/15 text-xs sm:text-sm text-zinc-200">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="font-medium">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Curriculum Highlights */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2 font-mono">
                <Sparkles className="w-4 h-4 text-purple-400" /> Practical Curriculum Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {partnership.curriculum.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-purple-500/5 border border-purple-500/15 text-xs sm:text-sm text-zinc-200">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Institutional Benefit */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-blue-900/40 border border-purple-500/30 space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-purple-300 flex items-center gap-2 font-mono">
                <Award className="w-5 h-5 text-amber-400" /> Institutional & NAAC / NIRF Impact
              </h3>
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans">
                {partnership.institutionalBenefit}
              </p>
            </div>

            {/* Delivery & Outcomes */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2 font-mono">
                <Target className="w-4 h-4" /> Program Delivery & Measurable Outcomes
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 italic">
                Execution: {partnership.executionModel}
              </p>
              <div className="space-y-2 pt-2">
                {partnership.outcomes.map((out, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Call to Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
              <button
                onClick={() => router.push('/about')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-bold text-zinc-300 hover:text-white transition-all text-center"
              >
                Back to About Page
              </button>
              <button
                onClick={() => setIsApplyOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-95 text-xs font-bold text-white shadow-xl shadow-purple-500/30 flex items-center justify-center gap-2 group transition-all"
              >
                <span>Partner With Us for This Program</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </AIGradientBorder>

      </main>

      <Footer />
      <ApplicationModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} initialProgramId="crt-partnership" />
      <AskAIWidget />
    </div>
  );
}
