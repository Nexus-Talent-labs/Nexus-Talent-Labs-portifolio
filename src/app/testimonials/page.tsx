'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuralCanvas from '@/components/NeuralCanvas';
import MouseSpotlight from '@/components/MouseSpotlight';
import ApplicationModal from '@/components/ApplicationModal';
import AskAIWidget from '@/components/AskAIWidget';
import ShinyText from '@/components/reactbits/ShinyText';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import Magnet from '@/components/reactbits/Magnet';
import { SUCCESS_STORIES } from '@/data/placements';
import { Sparkles, Quote, Star, ArrowRight, Building2 } from 'lucide-react';

export default function TestimonialsPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#09090b] text-white overflow-hidden selection:bg-blue-600/30 selection:text-cyan-300">
      <NeuralCanvas />
      <MouseSpotlight />
      <Navbar onOpenApply={() => setIsApplyOpen(true)} />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 space-y-16">
        
        {/* HERO */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-extrabold uppercase tracking-widest text-cyan-300 shadow-xl backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <ShinyText text="GRADUATE SUCCESS REVIEWS" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-['Outfit'] tracking-tight max-w-3xl mx-auto leading-tight">
            Student Reviews & Career Success Stories
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Read real stories from fresh graduates who transformed their careers through Nexus Talent Labs corporate readiness programs.
          </p>
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUCCESS_STORIES.map((story, idx) => (
            <SpotlightCard key={idx} className="h-full space-y-4 relative">
              <Quote className="w-8 h-8 text-blue-500/20 absolute top-4 right-4" />

              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed italic">
                "{story.quote}"
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-['Outfit']">{story.studentName}</h4>
                  <span className="text-[11px] text-cyan-400 block">{story.role}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-400 block font-['Space_Grotesk']">{story.package}</span>
                  <span className="text-[10px] text-zinc-400 flex items-center gap-1">
                    <Building2 className="w-3 h-3 text-blue-400" /> {story.company}
                  </span>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* CTA */}
        <div className="glass-panel rounded-3xl p-10 text-center space-y-6 border border-white/15">
          <h2 className="text-3xl font-extrabold text-white font-['Outfit']">Ready to write your success story?</h2>
          <Magnet strength={20} className="inline-block">
            <button
              onClick={() => setIsApplyOpen(true)}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 font-bold text-xs sm:text-sm text-white shadow-xl shadow-blue-500/30 flex items-center gap-2"
            >
              Apply for Next Batch <ArrowRight className="w-4 h-4" />
            </button>
          </Magnet>
        </div>

      </main>

      <Footer />
      <ApplicationModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
      <AskAIWidget />
    </div>
  );
}
