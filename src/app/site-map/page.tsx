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
import Link from 'next/link';
import { Compass, GraduationCap, Star, Mail, ShieldCheck, ArrowUpRight, Map, Sparkles } from 'lucide-react';

export default function SitemapPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const categories = [
    {
      title: 'Core Navigation',
      icon: Compass,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'All Programs', href: '/programs' },
        { label: 'Pricing & Benefits', href: '/pricing' },
        { label: 'Testimonials', href: '/testimonials' }
      ]
    },
    {
      title: 'Programs & Enrollment',
      icon: GraduationCap,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      links: [
        { label: 'Apply Now', href: '/pricing' },
        { label: 'Regular Track', href: '/programs' },
        { label: 'Fast-Track Batch', href: '/programs' },
        { label: 'Student Projects', href: '/projects' }
      ]
    },
    {
      title: 'Faculty & Community',
      icon: Star,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      links: [
        { label: 'Faculty Members', href: '/faculty' },
        { label: 'Placement Stats', href: '/placements' },
        { label: 'Upcoming Events', href: '/events' },
        { label: 'Tech Blog & Insights', href: '/blog' }
      ]
    },
    {
      title: 'Get in Touch',
      icon: Mail,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'Office Locations', href: '/contact' },
        { label: 'Admissions Desk', href: '/contact' }
      ]
    },
    {
      title: 'Legal & Info',
      icon: ShieldCheck,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Use', href: '/terms' },
        { label: 'Sitemap Index', href: '/site-map' }
      ]
    }
  ];

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
            <ShinyText text="ARCHITECTURAL OVERVIEW" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-['Outfit'] tracking-tight max-w-3xl mx-auto leading-tight">
            Site Map & Navigation Index
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            A complete architectural index of the Nexus Talent Labs platform. Easily navigate all sections, programs, and career resources.
          </p>
        </div>

        {/* 5 CATEGORY CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((cat, idx) => (
            <SpotlightCard key={idx} className="h-full space-y-6">
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${cat.color}`}>
                <cat.icon className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-white font-['Outfit']">{cat.title}</h3>

              <ul className="space-y-3">
                {cat.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between p-2.5 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/[0.04] transition-all text-xs font-medium text-zinc-300 hover:text-cyan-300"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                    </Link>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          ))}
        </div>

      </main>

      <Footer />
      <ApplicationModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
      <AskAIWidget />
    </div>
  );
}
