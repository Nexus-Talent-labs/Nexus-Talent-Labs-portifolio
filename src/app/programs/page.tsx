'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuralCanvas from '@/components/NeuralCanvas';
import MouseSpotlight from '@/components/MouseSpotlight';
import ProgramModal from '@/components/ProgramModal';
import ApplicationModal from '@/components/ApplicationModal';
import AskAIWidget from '@/components/AskAIWidget';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import ShinyText from '@/components/reactbits/ShinyText';
import Magnet from '@/components/reactbits/Magnet';
import { PROGRAMS_DATA, CourseProgram } from '@/data/programs';
import { 
  CheckCircle2, 
  Sparkles, 
  Brain, 
  Code, 
  Cloud, 
  Shield, 
  ArrowRight,
  Clock,
  Award,
  ChevronRight,
  Zap
} from 'lucide-react';

export default function ProgramsPage() {
  const [selectedModalProg, setSelectedModalProg] = useState<CourseProgram | null>(null);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [activeApplyId, setActiveApplyId] = useState<string | undefined>(undefined);

  const handleOpenApply = (id?: string) => {
    setActiveApplyId(id);
    setIsApplyOpen(true);
  };

  // Helper to map topic to full program details or dynamic course program
  const handleCardClick = (topicName: string, categoryName: 'AI & ML' | 'Full Stack with AI' | 'Cloud & DevOps' | 'Data Science' | 'UI/UX Design') => {
    const match = PROGRAMS_DATA.find(
      (p) =>
        p.title.toLowerCase().includes(topicName.toLowerCase()) ||
        p.modules.some((m) => m.toLowerCase().includes(topicName.toLowerCase()))
    );

    if (match) {
      setSelectedModalProg(match);
    } else {
      setSelectedModalProg({
        id: topicName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        title: topicName,
        category: categoryName,
        description: `Comprehensive industry certification track focusing on ${topicName}. Engineered with live hands-on lab sessions, 1-on-1 mentorship, real enterprise case studies, and 100% placement support.`,
        duration: '4 - 6 Months',
        skillLevel: 'Beginner',
        mode: 'Hybrid',
        projectsCount: 8,
        expectedSalary: '12 - 28 LPA',
        placementRate: '96.4%',
        badge: 'Industry Standard',
        icon: 'Brain',
        modules: [
          `Foundations & Core Principles of ${topicName}`,
          `Advanced Hands-On Lab Workflows in ${topicName}`,
          `Enterprise System Architecture & Security Controls`,
          `Production Capstone Project & Portfolio Review`
        ],
        tools: ['Python', 'Docker', 'Git', 'AWS', 'VSCode', 'TypeScript'],
        fee: '₹85,000',
        nextBatch: 'August 25, 2026',
        popular: true
      });
    }
  };

  const domainCategories = [
    {
      domainTitle: 'Artificial Intelligence & Future Technologies',
      categoryKey: 'AI & ML' as const,
      icon: Brain,
      color: 'from-blue-600 to-cyan-500',
      borderColor: 'border-blue-500/30',
      badgeColor: 'text-cyan-400 bg-blue-600/20',
      items: [
        'Generative AI (GenAI)',
        'Prompt Engineering',
        'AI Agents & Agentic AI',
        'LLMs & RAG',
        'AI App Development',
        'AI Intelligent Automation',
        'AGI Concepts & Trends',
        'Responsible AI & Ethics'
      ]
    },
    {
      domainTitle: 'Software Engineering & Full Stack with AI',
      categoryKey: 'Full Stack with AI' as const,
      icon: Code,
      color: 'from-purple-600 to-pink-500',
      borderColor: 'border-purple-500/30',
      badgeColor: 'text-purple-400 bg-purple-600/20',
      items: [
        'Python & AI Automation',
        'C & C++ High Performance',
        'JavaScript & React.js AI Copilots',
        'Angular & Node.js AI APIs',
        'MERN Stack with AI',
        'Full Stack Java & .NET with AI',
        'Mobile App Dev & On-Device AI',
        'REST APIs & AI Microservices'
      ]
    },
    {
      domainTitle: 'Data Science, Analytics & Cloud',
      categoryKey: 'Cloud & DevOps' as const,
      icon: Cloud,
      color: 'from-emerald-600 to-teal-500',
      borderColor: 'border-emerald-500/30',
      badgeColor: 'text-emerald-400 bg-emerald-600/20',
      items: [
        'Data Science & ML',
        'Data Analytics & BI',
        'AWS, Azure & GCP',
        'DevOps & GitOps',
        'Docker & Kubernetes',
        'CI/CD Automation',
        'Big Data Engineering',
        'Cloud Security'
      ]
    },
    {
      domainTitle: 'Product Design & Design Technologies',
      categoryKey: 'UI/UX Design' as const,
      icon: Shield,
      color: 'from-amber-500 to-orange-500',
      borderColor: 'border-amber-500/30',
      badgeColor: 'text-amber-400 bg-amber-600/20',
      items: [
        'Figma Masterclass & Auto Layout',
        'Adobe Photoshop & Illustrator UI Assets',
        'Adobe XD & Prototyping Workflows',
        'UI/UX Product Design & User Research',
        'Enterprise Design Systems & Tokens',
        'Interactive Motion Design (Framer & Lottie)',
        'Information Architecture & Low-Fi Wireframing',
        'Design Accessibility (WCAG & Color Systems)'
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#09090b] text-white overflow-hidden selection:bg-blue-600/30 selection:text-cyan-300">
      <NeuralCanvas />
      <MouseSpotlight />
      <Navbar onOpenApply={() => handleOpenApply()} />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 space-y-20">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-extrabold uppercase tracking-widest text-cyan-300 shadow-xl backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <ShinyText text="INTERACTIVE COURSE CATALOG" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-['Outfit']">
            Explore All Training Programs & Courses
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Click on any course card below to view detailed curriculum modules, duration, fee structure, prerequisites, and placement opportunities.
          </p>
        </div>

        {/* 4 DOMAIN CATEGORIES - TOPIC CARDS GRID */}
        {domainCategories.map((domain, domainIdx) => {
          const DomainIcon = domain.icon;
          return (
            <div key={domainIdx} className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${domain.color} text-white shadow-lg`}>
                  <DomainIcon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                    {domain.domainTitle}
                  </h2>
                  <p className="text-xs text-zinc-400">Click any card below to open detailed course specifications</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {domain.items.map((topic, topicIdx) => (
                  <button
                    key={topicIdx}
                    onClick={() => handleCardClick(topic, domain.categoryKey)}
                    className="text-left group transition-all duration-300"
                  >
                    <SpotlightCard className="h-full p-5 flex flex-col justify-between border-white/10 hover:border-cyan-500/40 group-hover:scale-[1.02] transition-transform">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${domain.badgeColor}`}>
                            {domain.categoryKey}
                          </span>
                          <Sparkles className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                        </div>

                        <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-['Outfit'] flex items-center justify-between">
                          <span>{topic}</span>
                        </h3>
                      </div>

                      <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 group-hover:text-cyan-400 font-semibold">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </SpotlightCard>
                  </button>
                ))}
              </div>
            </div>
          );
        })}

        {/* FAST-TRACK FULL PROGRAM CARDS SECTION */}
        <div className="space-y-8 pt-12 border-t border-white/10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Accelerated Corporate Immersion</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
              Fast-Track Career Programs
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto">
              Production-grade fast-track immersion programs with guaranteed internship exposure and 1-on-1 corporate mentoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS_DATA.map((prog) => (
              <button
                key={prog.id}
                onClick={() => setSelectedModalProg(prog)}
                className="text-left group"
              >
                <SpotlightCard className="h-full p-6 flex flex-col justify-between space-y-6 border-white/10 group-hover:border-blue-500/40">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-blue-500/10 border border-blue-500/20 text-cyan-300">
                        {prog.category}
                      </span>
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {prog.placementRate} Placed
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors font-['Outfit']">
                      {prog.title}
                    </h3>

                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {prog.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs pt-2">
                      <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
                        <span className="text-zinc-500 block text-[10px]">Duration</span>
                        <span className="font-bold text-white">{prog.duration}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
                        <span className="text-zinc-500 block text-[10px]">Level</span>
                        <span className="font-bold text-white">{prog.skillLevel}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-400 block uppercase font-semibold">Tuition Fee</span>
                      <span className="text-sm font-extrabold text-white font-['Space_Grotesk']">{prog.fee}</span>
                    </div>

                    <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-xs font-bold text-white group-hover:opacity-90 shadow-lg flex items-center gap-1">
                      <span>Explore Track</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </SpotlightCard>
              </button>
            ))}
          </div>
        </div>

      </main>

      <Footer />

      <ProgramModal
        program={selectedModalProg}
        onClose={() => setSelectedModalProg(null)}
        onApply={(id) => handleOpenApply(id)}
      />

      <ApplicationModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        initialProgramId={activeApplyId}
      />
      <AskAIWidget />
    </div>
  );
}
