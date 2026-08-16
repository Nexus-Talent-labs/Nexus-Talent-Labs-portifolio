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
import { ALL_COURSE_MODULES, CourseModuleItem } from '@/data/allCourseModules';
import AICurriculumModal from '@/components/AICurriculumModal';
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
  const [selectedModule, setSelectedModule] = useState<CourseModuleItem | null>(null);
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
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
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
          const categoryModules = ALL_COURSE_MODULES.filter(m => m.category === domain.categoryKey);

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
                  <p className="text-xs text-zinc-400">
                    Hover over any course card to reveal the Curriculum button and view the full detailed syllabus.
                  </p>
                </div>
              </div>

              {/* Grid Layout of Course Cards with Thumbnail Images & Hover Curriculum Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categoryModules.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => setSelectedModule(course)}
                    className="text-left group cursor-pointer h-full"
                  >
                    <SpotlightCard className="h-full p-5 flex flex-col justify-between border-white/10 hover:border-cyan-400/60 group-hover:scale-[1.03] transition-all duration-300 space-y-4">
                      <div className="space-y-3">
                        {/* Course Visual Image Header */}
                        <div className="relative h-32 rounded-xl overflow-hidden border border-white/10 group-hover:border-cyan-400/40 transition-colors">
                          <img 
                            src={course.image} 
                            alt={course.title}
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80';
                            }}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-black/30" />
                          <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[9px] font-mono font-bold uppercase tracking-wider bg-blue-600/80 text-cyan-200 backdrop-blur-md border border-blue-400/30">
                            {course.category}
                          </span>
                        </div>

                        {/* Title & Short Description */}
                        <div className="space-y-1">
                          <h3 className="text-base font-extrabold text-white group-hover:text-cyan-300 transition-colors font-['Outfit'] leading-snug">
                            {course.title}
                          </h3>
                          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-sans">
                            {course.desc}
                          </p>
                        </div>
                      </div>

                      {/* Hover-Revealed Curriculum Button (Hidden initially, visible on cursor hover) */}
                      <div className="pt-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedModule(course);
                          }}
                          className="w-full py-2.5 px-3 rounded-xl bg-cyan-500/15 group-hover:bg-cyan-500/30 border border-cyan-500/30 group-hover:border-cyan-300 text-xs font-bold text-cyan-300 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg shadow-cyan-500/10"
                        >
                          <span>Curriculum</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-cyan-300" />
                        </button>
                      </div>
                    </SpotlightCard>
                  </div>
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
                    {/* Visual Course Image Header */}
                    <div className="relative h-40 rounded-2xl overflow-hidden border border-white/10 group-hover:border-cyan-400/40 transition-colors">
                      <img 
                        src={prog.image} 
                        alt={prog.title}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-black/30" />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-blue-600/80 text-cyan-200 backdrop-blur-md border border-blue-400/30">
                          {prog.category}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-300 backdrop-blur-md border border-emerald-500/30">
                          {prog.badge}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {prog.placementRate} Placed
                      </span>
                      <span className="text-xs text-zinc-400 font-medium">
                        {prog.projectsCount}+ Projects
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

                  <div className="pt-4 border-t border-white/10 flex items-center justify-end">
                    <div className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-xs font-bold text-white group-hover:opacity-90 shadow-lg flex items-center justify-center gap-1">
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

      <AICurriculumModal
        module={selectedModule}
        onClose={() => setSelectedModule(null)}
        onOpenApply={() => handleOpenApply('crt-partnership')}
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
