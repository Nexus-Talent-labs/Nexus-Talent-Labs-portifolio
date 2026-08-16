'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuralCanvas from '@/components/NeuralCanvas';
import MouseSpotlight from '@/components/MouseSpotlight';
import ApplicationModal from '@/components/ApplicationModal';
import AskAIWidget from '@/components/AskAIWidget';
import { FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export default function TermsPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#09090b] text-white overflow-hidden selection:bg-blue-600/30 selection:text-cyan-300">
      <NeuralCanvas />
      <MouseSpotlight />
      <Navbar onOpenApply={() => setIsApplyOpen(true)} />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto z-10 space-y-12">
        <div className="text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 border border-blue-500/20 text-cyan-300 inline-block">
            Academic Terms
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
            Terms of Use & Code of Conduct
          </h1>
          <p className="text-xs text-zinc-400">Last updated: August 2026</p>
        </div>

        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 space-y-8 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 font-['Outfit']">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" /> 1. Lab Attendance & Ownership
            </h2>
            <p>
              Students enrolled in Fast-Track Corporate Batches agree to maintain a minimum 85% lab attendance and adhere to corporate sprint deadlines and peer code review standards.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 font-['Outfit']">
              <FileText className="w-5 h-5 text-purple-400" /> 2. Placement Support Policy
            </h2>
            <p>
              Placement support is guaranteed to candidates who complete all assigned capstone repos, clear mock interviews, and maintain professional workplace discipline.
            </p>
          </section>
        </div>
      </main>

      <Footer />
      <ApplicationModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
      <AskAIWidget />
    </div>
  );
}
