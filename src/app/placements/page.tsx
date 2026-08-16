'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuralCanvas from '@/components/NeuralCanvas';
import MouseSpotlight from '@/components/MouseSpotlight';
import ApplicationModal from '@/components/ApplicationModal';
import AskAIWidget from '@/components/AskAIWidget';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import ShinyText from '@/components/reactbits/ShinyText';
import Magnet from '@/components/reactbits/Magnet';
import { SUCCESS_STORIES, HIRING_COMPANIES } from '@/data/placements';
import { 
  Award, 
  Briefcase, 
  Users, 
  Building2, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  BookOpen, 
  Code, 
  UserCheck, 
  MessageSquare, 
  FileText, 
  Compass, 
  Headphones, 
  Rocket, 
  Sparkle
} from 'lucide-react';

export default function PlacementsPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#09090b] text-white overflow-hidden selection:bg-blue-600/30 selection:text-cyan-300">
      <NeuralCanvas />
      <MouseSpotlight />
      <Navbar onOpenApply={() => setIsApplyOpen(true)} />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 space-y-24">
        
        {/* 1. HERO SECTION – PLACEMENT EXCELLENCE */}
        <section className="text-center space-y-8 max-w-5xl mx-auto pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-extrabold uppercase tracking-widest text-cyan-300 shadow-xl backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <ShinyText text="FROM LEARNING SKILLS TO BUILDING SUCCESSFUL CAREERS" />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-['Outfit'] tracking-tight leading-[1.1]">
            Empowering Students with Skills, Confidence & Career Opportunities
          </h1>

          <p className="text-sm sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            At Nexus Talent Labs, we bridge the gap between talent and industry by providing technology training, placement preparation, and career support aligned with company expectations.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Magnet strength={20}>
              <button
                onClick={() => setIsApplyOpen(true)}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:opacity-95 font-bold text-xs sm:text-sm text-white shadow-2xl shadow-blue-500/30 flex items-center gap-2"
              >
                <Rocket className="w-4 h-4 text-cyan-300" /> Start Your Career Journey
              </button>
            </Magnet>
            
            <button
              onClick={() => setIsApplyOpen(true)}
              className="px-8 py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 font-bold text-xs sm:text-sm text-zinc-200 hover:text-white transition-all flex items-center gap-2"
            >
              <UserCheck className="w-4 h-4 text-purple-400" /> Get Placement Support
            </button>
          </div>

          {/* Highlight Statistics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10">
            {[
              { label: 'Students Trained', value: '5,000+', desc: 'Graduates & Tech Professionals', color: 'text-cyan-400' },
              { label: 'Hiring Connections', value: '100+', desc: 'MNCs, Startups & Tech Giants', color: 'text-purple-400' },
              { label: 'Placement Assistance', value: '95%', desc: 'Verified 120-Day Placement Rate', color: 'text-emerald-400' },
              { label: 'Industry-Aligned', value: '100%', desc: 'Updated Corporate Curricula', color: 'text-amber-400' }
            ].map((stat, idx) => (
              <SpotlightCard key={idx} className="p-6 space-y-2 text-left">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">{stat.label}</span>
                <span className={`text-3xl sm:text-4xl font-extrabold ${stat.color} font-['Space_Grotesk'] block`}>
                  {stat.value}
                </span>
                <span className="text-[11px] text-zinc-400 block">{stat.desc}</span>
              </SpotlightCard>
            ))}
          </div>
        </section>


        {/* 2. OUR PLACEMENT APPROACH (6-STEP TIMELINE PROCESS) */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Structured Roadmap</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">Our Placement Approach</h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto">
              A systematic 6-step career acceleration model designed to transition learners into confident corporate professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Skill Assessment',
                desc: 'Evaluate student technical capabilities, logical reasoning, and career goals to construct personalized learning pathways.',
                icon: Target,
                color: 'text-cyan-400 bg-cyan-600/20 border-cyan-500/30'
              },
              {
                step: '02',
                title: 'Industry-Focused Training',
                desc: 'Train learners on production technologies, real enterprise projects, and hiring company requirements.',
                icon: BookOpen,
                color: 'text-purple-400 bg-purple-600/20 border-purple-500/30'
              },
              {
                step: '03',
                title: 'Placement Preparation',
                desc: 'Comprehensive training in aptitude, coding assessments, technical communication, resume optimization, and LinkedIn profiling.',
                icon: FileText,
                color: 'text-emerald-400 bg-emerald-600/20 border-emerald-500/30'
              },
              {
                step: '04',
                title: 'Mock Interviews',
                desc: 'Rigorous technical, HR, and managerial interview simulations conducted by experienced tech leads with actionable feedback.',
                icon: MessageSquare,
                color: 'text-amber-400 bg-amber-600/20 border-amber-500/30'
              },
              {
                step: '05',
                title: 'Company Connect',
                desc: 'Direct referral pushes connecting trained candidates with matching job roles across our 100+ corporate hiring network.',
                icon: Building2,
                color: 'text-blue-400 bg-blue-600/20 border-blue-500/30'
              },
              {
                step: '06',
                title: 'Career Support',
                desc: 'Continuous mentorship and guidance throughout interview rounds, salary negotiation, and onboarding.',
                icon: Compass,
                color: 'text-pink-400 bg-pink-600/20 border-pink-500/30'
              }
            ].map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <SpotlightCard key={idx} className="h-full space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-white/30 font-['Space_Grotesk']">
                      STEP {step.step}
                    </span>
                    <div className={`p-3 rounded-2xl border ${step.color}`}>
                      <StepIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-['Outfit']">{step.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
                </SpotlightCard>
              );
            })}
          </div>
        </section>


        {/* 4. WHY COMPANIES CHOOSE NEXUS TALENT LABS STUDENTS */}
        <section className="glass-panel rounded-3xl p-8 sm:p-14 border border-white/15 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">The Employer Advantage</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
              Why Companies Choose Nexus Talent Labs Students
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto">
              Our graduates possess the practical skills, corporate mindset, and adaptability required by modern software teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Industry-ready technical skills aligned with modern enterprise tech stacks',
              'Hands-on project experience built in production-simulated lab environments',
              'Strong analytical problem-solving abilities and algorithmic thinking',
              'Generative AI and emerging technology exposure for high-velocity coding',
              'Professional verbal & written communication tailored for corporate settings',
              'Corporate work culture readiness, sprint discipline, and team accountability',
              'Practical knowledge grounded in commercial software business requirements'
            ].map((reason, idx) => (
              <SpotlightCard key={idx} className="flex items-start gap-3.5 p-5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-medium">
                  {reason}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </section>


        {/* 5. STUDENT SUCCESS STORIES */}
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Verified Offers</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">Student Success Stories</h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto">
              Hear directly from our graduates who secured high-growth engineering roles across leading global tech organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SUCCESS_STORIES.map((story) => {
              const initials = story.studentName
                .split(' ')
                .map((n) => n[0])
                .join('');

              return (
                <SpotlightCard key={story.id} className="h-full space-y-6 p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-lg shadow-lg border border-white/20">
                      {initials}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-['Outfit']">{story.studentName}</h3>
                      <p className="text-xs font-semibold text-cyan-300">{story.role} at {story.company}</p>
                      <p className="text-[11px] text-zinc-400 mt-0.5">Track: {story.courseTaken}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-zinc-500 block text-[10px]">Previous Background</span>
                      <span className="text-zinc-300 font-semibold">{story.previousRole}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-emerald-400 block text-[10px] font-bold">Offer Package</span>
                      <span className="text-emerald-400 font-extrabold text-xl font-['Space_Grotesk']">{story.package}</span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-300 italic leading-relaxed">
                    "{story.quote}"
                  </p>
                </SpotlightCard>
              );
            })}
          </div>
        </section>


        {/* 6. HIRING PARTNERS SECTION */}
        <section className="space-y-8 text-center">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Corporate Network</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
              Our Students Are Prepared For Leading Organizations
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto">
              Recruiters from Fortune 500 enterprises, tech startups, and MNCs hire directly from Nexus Talent Labs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {HIRING_COMPANIES.map((company, idx) => (
              <SpotlightCard key={idx} className="p-6 flex items-center justify-center space-x-2 group">
                <Building2 className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-base font-bold text-white font-['Outfit'] group-hover:text-cyan-300 transition-colors">
                  {company.name}
                </span>
              </SpotlightCard>
            ))}
          </div>
        </section>


        {/* 7. PLACEMENT SUPPORT FEATURES */}
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">End-to-End Assistance</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
              Complete Career Support Ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Dedicated Placement Assistance', desc: 'Active team coordinating interview slots and company referrals.', icon: Briefcase },
              { title: 'Industry Mentor Guidance', desc: '1-on-1 career directions from senior engineering leads.', icon: Users },
              { title: 'Resume & Portfolio Review', desc: 'ATS-friendly resume formatting and GitHub project showcases.', icon: FileText },
              { title: 'Interview Preparation', desc: 'Intense mock rounds simulating real corporate hiring benchmarks.', icon: MessageSquare },
              { title: 'Job Opportunity Updates', desc: 'Real-time alerts for active job openings across partner companies.', icon: Sparkle },
              { title: 'Career Counseling', desc: 'Personalized guidance tailored to individual strengths and targets.', icon: Headphones },
              { title: 'Internship Guidance', desc: 'Hands-on commercial project exposure during training.', icon: Target },
              { title: 'Professional Development Support', desc: 'Soft skills, presentation, and executive corporate etiquette.', icon: Award }
            ].map((feature, idx) => {
              const FeatureIcon = feature.icon;
              return (
                <SpotlightCard key={idx} className="space-y-3 p-6">
                  <div className="p-3 rounded-2xl bg-blue-600/20 text-cyan-400 border border-blue-500/30 w-fit">
                    <FeatureIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-['Outfit']">{feature.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{feature.desc}</p>
                </SpotlightCard>
              );
            })}
          </div>
        </section>


        {/* 8. FINAL CTA BANNER */}
        <section className="glass-panel rounded-3xl p-8 sm:p-16 border border-blue-500/30 text-center space-y-6 relative overflow-hidden">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Take The Next Step</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit'] max-w-3xl mx-auto">
            Your Dream Career Starts With The Right Skills
          </h2>
          <p className="text-xs sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Join Nexus Talent Labs and transform your knowledge into industry-ready expertise with expert training and placement support.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Magnet strength={20}>
              <button
                onClick={() => setIsApplyOpen(true)}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:opacity-95 font-bold text-xs sm:text-sm text-white shadow-2xl shadow-blue-500/30 flex items-center gap-2"
              >
                <Rocket className="w-4 h-4 text-cyan-300" /> Enroll Now
              </button>
            </Magnet>
            
            <button
              onClick={() => setIsApplyOpen(true)}
              className="px-8 py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 font-bold text-xs sm:text-sm text-zinc-200 hover:text-white transition-all flex items-center gap-2"
            >
              <Headphones className="w-4 h-4 text-purple-400" /> Talk To Career Advisor
            </button>
          </div>
        </section>

      </main>

      <Footer />
      <ApplicationModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
      <AskAIWidget />
    </div>
  );
}
