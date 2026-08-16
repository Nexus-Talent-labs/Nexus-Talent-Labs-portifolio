'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuralCanvas from '@/components/NeuralCanvas';
import MouseSpotlight from '@/components/MouseSpotlight';
import ApplicationModal from '@/components/ApplicationModal';
import AskAIWidget from '@/components/AskAIWidget';
import ShinyText from '@/components/reactbits/ShinyText';
import Magnet from '@/components/reactbits/Magnet';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Zap, Award, HelpCircle } from 'lucide-react';

export default function PricingPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'regular' | 'fasttrack'>('fasttrack');

  const plans = [
    {
      name: 'Regular Track',
      tagline: 'Standard 6-Month Comprehensive Learning & Corporate Prep',
      price: '₹45,000',
      duration: '6 Months',
      popular: false,
      features: [
        '400+ Live Instructor-Led Hours',
        '2 Live Capstone Projects',
        'Weekly 1-on-1 Code Reviews',
        'Resume & LinkedIn Optimization',
        '100% Guaranteed Interview Calls',
        'Access to Nexus Learning LMS'
      ],
      badge: 'Flexible Schedule'
    },
    {
      name: 'Fast-Track Corporate Batch',
      tagline: 'Intensive 8-Month Office Immersion & Guaranteed Placement',
      price: '₹75,000',
      duration: '8 Months (Full Time)',
      popular: true,
      features: [
        '800+ Live Corporate Lab Hours',
        '5+ Production-Grade Client Projects',
        'Daily Office Mentorship & Escalation Syncs',
        'Mock Technical Interviews by Tech Leads',
        'Direct Hiring Partner Referrals (140+ MNCs)',
        '32 LPA Top Package Opportunity',
        'Stipend-backed Live Internship Certificate'
      ],
      badge: 'Most Popular'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#09090b] text-white overflow-hidden selection:bg-blue-600/30 selection:text-cyan-300">
      <NeuralCanvas />
      <MouseSpotlight />
      <Navbar onOpenApply={() => setIsApplyOpen(true)} />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 space-y-16">
        
        {/* HERO SECTION */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-extrabold uppercase tracking-widest text-cyan-300 shadow-xl backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <ShinyText text="TRANSPARENT INVESTMENT" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-['Outfit'] tracking-tight max-w-3xl mx-auto leading-tight">
            Pricing & Career Investment Plans
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Invest in your tech career with transparent, merit-based tuition plans backed by real corporate lab exposure and placement support.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center pt-4">
            <div className="p-1 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-1">
              <button
                onClick={() => setBillingCycle('regular')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  billingCycle === 'regular'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Regular Track
              </button>
              <button
                onClick={() => setBillingCycle('fasttrack')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  billingCycle === 'fasttrack'
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Fast-Track Corporate Batch (August 2026)
              </button>
            </div>
          </div>
        </div>

        {/* PRICING CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <SpotlightCard
              key={idx}
              className={`h-full space-y-6 relative overflow-hidden ${
                plan.popular ? 'border-blue-500/40 bg-blue-950/10' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-2xl bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-white font-['Outfit']">{plan.name}</h3>
                <p className="text-xs text-zinc-400">{plan.tagline}</p>
              </div>

              <div className="flex items-baseline gap-2 border-y border-white/10 py-4">
                <span className="text-4xl sm:text-5xl font-black text-white font-['Space_Grotesk']">{plan.price}</span>
                <span className="text-xs text-zinc-400 font-medium">/ {plan.duration}</span>
              </div>

              <ul className="space-y-3 text-xs text-zinc-300">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Magnet strength={20} className="w-full pt-4">
                <button
                  onClick={() => setIsApplyOpen(true)}
                  className={`w-full py-4 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:opacity-95 text-white shadow-xl shadow-blue-500/30'
                      : 'bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 border border-white/10'
                  }`}
                >
                  Enroll in {plan.name} <ArrowRight className="w-4 h-4" />
                </button>
              </Magnet>
            </SpotlightCard>
          ))}
        </div>

        {/* BENEFIT HIGHLIGHTS */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-3">
            <ShieldCheck className="w-8 h-8 text-cyan-400 mx-auto" />
            <h4 className="text-base font-bold text-white font-['Outfit']">100% Money-Back Guarantee</h4>
            <p className="text-xs text-zinc-400">Full refund if not placed within 6 months post graduation.</p>
          </div>

          <div className="space-y-3">
            <Zap className="w-8 h-8 text-purple-400 mx-auto" />
            <h4 className="text-base font-bold text-white font-['Outfit']">No Cost EMI Available</h4>
            <p className="text-xs text-zinc-400">Flexible 3, 6, or 12 month EMI payment options with 0% interest.</p>
          </div>

          <div className="space-y-3">
            <Award className="w-8 h-8 text-emerald-400 mx-auto" />
            <h4 className="text-base font-bold text-white font-['Outfit']">Merit Scholarships</h4>
            <p className="text-xs text-zinc-400">Up to 40% fee waiver for top performers on entrance assessment.</p>
          </div>
        </div>

      </main>

      <Footer />
      <ApplicationModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
      <AskAIWidget />
    </div>
  );
}
