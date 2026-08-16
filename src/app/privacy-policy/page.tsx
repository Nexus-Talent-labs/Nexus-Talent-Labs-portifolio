'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AskAIWidget from '@/components/AskAIWidget';
import { ShieldCheck, Lock, CheckCircle2, ArrowLeft, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-blue-600/30 selection:text-cyan-300 relative overflow-hidden">
      <Navbar onOpenApply={() => {}} />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10 space-y-12">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Page Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            NEXUS DATA PROTECTION
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Privacy & Data Security Policy
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            Nexus Talent Labs is committed to shielding student and candidate data with enterprise-grade encryption and privacy compliance standards.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8 text-zinc-300 text-sm leading-relaxed">
          <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
            <h2 className="text-xl font-bold text-white font-['Outfit'] flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-cyan-400" /> 1. Information Collection & Usage
            </h2>
            <p>
              We collect information provided during course enrollment, placement advisory inquiries, and mock interview bookings (such as name, email, phone number, and resume documents) strictly for academic and corporate referral purposes.
            </p>
          </section>

          <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
            <h2 className="text-xl font-bold text-white font-['Outfit'] flex items-center gap-2.5">
              <Lock className="w-5 h-5 text-emerald-400" /> 2. Data Protection & Encryption
            </h2>
            <p>
              All personal student records and placement resumes are encrypted at rest using AES-256 and transmitted via TLS 1.3 encryption protocols across our partner hiring network.
            </p>
          </section>
        </div>
      </main>

      <Footer />
      <AskAIWidget />
    </div>
  );
}
