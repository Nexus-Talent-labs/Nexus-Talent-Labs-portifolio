'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AskAIWidget from '@/components/AskAIWidget';
import { Cookie, ShieldCheck, Lock, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function CookiePolicyPage() {
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
            <Cookie className="w-4 h-4 text-cyan-400" />
            NEXUS PRIVACY CENTER
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Cookie & Local Storage Policy
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            This Cookie & Local Cache Policy explains how Nexus Talent Labs uses cookies, local storage, and caching technologies to ensure site security, analyze performance, and customize learning experiences.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-zinc-300 text-sm leading-relaxed">
          {/* Section 1 */}
          <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
            <h2 className="text-xl font-bold text-white font-['Outfit'] flex items-center gap-2.5">
              <Lock className="w-5 h-5 text-emerald-400" /> 1. Essential & System Cache Cookies
            </h2>
            <p>
              Essential cookies and browser local storage are strictly necessary to enable core site functionality, securely manage user sessions, prevent fraud, and store your active consent choices. These cannot be disabled.
            </p>
            <ul className="space-y-2 pt-2 text-xs font-mono text-zinc-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span><strong className="text-white">nexus_cookie_consent:</strong> Stores your cookie consent choices locally.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span><strong className="text-white">nexus_session_token:</strong> Secures active student portal API requests.</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
            <h2 className="text-xl font-bold text-white font-['Outfit'] flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-cyan-400" /> 2. Performance & Analytics Cookies
            </h2>
            <p>
              We utilize anonymous analytics cookies to track overall website traffic, page load performance metrics, and course page interaction trends. This helps us continually refine course curricula and server speed.
            </p>
          </section>

          {/* Section 3 */}
          <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
            <h2 className="text-xl font-bold text-white font-['Outfit'] flex items-center gap-2.5">
              <Cookie className="w-5 h-5 text-purple-400" /> 3. Managing & Revoking Cookie Consent
            </h2>
            <p>
              You can modify or revoke your cookie choices at any time by clearing your browser cache or clicking "Cookie Preferences" in our footer menu.
            </p>
          </section>
        </div>
      </main>

      <Footer />
      <AskAIWidget />
    </div>
  );
}
