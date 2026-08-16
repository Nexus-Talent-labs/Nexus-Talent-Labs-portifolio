'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuralCanvas from '@/components/NeuralCanvas';
import MouseSpotlight from '@/components/MouseSpotlight';
import AskAIWidget from '@/components/AskAIWidget';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import ShinyText from '@/components/reactbits/ShinyText';
import Magnet from '@/components/reactbits/Magnet';
import { 
  Building2, 
  GraduationCap, 
  Users, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Send, 
  Briefcase, 
  BookOpen, 
  ShieldCheck, 
  Clock,
  ChevronRight,
  Handshake
} from 'lucide-react';

export default function CRTPartnershipsPage() {
  const [partnerType, setPartnerType] = useState<'college' | 'company'>('college');
  const [formData, setFormData] = useState({
    institutionName: '',
    contactName: '',
    designation: '',
    email: '',
    phone: '',
    serviceRequired: 'Campus Recruitment Training (CRT)',
    estimatedLearners: '100 - 500 Students',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#09090b] text-white overflow-hidden selection:bg-blue-600/30 selection:text-cyan-300">
      <NeuralCanvas />
      <MouseSpotlight />
      <Navbar onOpenApply={() => {}} />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 space-y-20">
        
        {/* HEADER */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-extrabold uppercase tracking-widest text-cyan-300 shadow-xl backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <ShinyText text="COLLEGE & CORPORATE PARTNERSHIPS" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-['Outfit']">
            CRT & Institutional Collaborations
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Empowering colleges with campus recruitment training (CRT), faculty development programs, and direct hiring channels for corporate recruiters.
          </p>
        </div>

        {/* DUAL PARTNERSHIP PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Colleges & Universities */}
          <SpotlightCard className="p-8 space-y-6 border-blue-500/30">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-blue-600/20 text-cyan-400 border border-blue-500/30">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-white font-['Outfit']">For Colleges & Universities</h2>
                <p className="text-xs text-zinc-400">Campus placement training & faculty readiness</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              We partner with academic institutions to deliver end-to-end Campus Recruitment Training (CRT), custom curriculum integration, hackathons, and placement enhancement programs.
            </p>

            <div className="space-y-2 pt-2">
              {[
                'Full-Length CRT (Aptitude, Coding & Communication)',
                'Faculty Development Programs (FDPs) in AI & Full Stack',
                'MoU Signings for Center of Excellence (CoE)',
                'On-Campus Hackathons & Competitive Coding Arenas',
                '100% Placement Referral Support for Final-Year Batches'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </SpotlightCard>

          {/* For Corporate Recruiters */}
          <SpotlightCard className="p-8 space-y-6 border-purple-500/30">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-white font-['Outfit']">For Corporate Recruiters</h2>
                <p className="text-xs text-zinc-400">Pre-vetted, industry-ready tech talent</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Hire pre-screened software engineers, AI developers, data scientists, and DevOps specialists trained specifically according to enterprise hiring benchmarks.
            </p>

            <div className="space-y-2 pt-2">
              {[
                'Dedicated Campus & Off-Campus Recruitment Drives',
                'Custom Pre-Hire Bootcamps for Specific Tech Stacks',
                'Zero Recruitment Cost for Talent Pipeline Access',
                'Pre-Assessed Candidates with Coding Scorecards',
                'Immediate Joiner Batches Available Year-Round'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </div>


        {/* INTERACTIVE INQUIRY FORM SECTION */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 space-y-8">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Institutional Contact</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
              Schedule an Institutional Partnership Discussion
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
              Fill out the form below and our Institutional Partnership Director will connect with your management team within 24 hours.
            </p>
          </div>

          {/* Toggle Partner Type */}
          <div className="flex justify-center">
            <div className="p-1 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-2">
              <button
                onClick={() => setPartnerType('college')}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  partnerType === 'college'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <GraduationCap className="w-4 h-4" /> College / University
              </button>
              <button
                onClick={() => setPartnerType('company')}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  partnerType === 'company'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Building2 className="w-4 h-4" /> Company / Corporate Recruiter
              </button>
            </div>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-in fade-in">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-bold text-white font-['Outfit']">Partnership Inquiry Submitted!</h3>
              <p className="text-xs text-zinc-300 max-w-md mx-auto">
                Thank you for contacting Nexus Talent Labs. Our Institutional Partnerships team will contact {formData.contactName || 'you'} at {formData.email || 'your email'} shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                    {partnerType === 'college' ? 'College / University Name *' : 'Company Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={partnerType === 'college' ? 'e.g. Stanford Institute of Tech' : 'e.g. Acme Tech Solutions'}
                    value={formData.institutionName}
                    onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Kumar / Placement Officer"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                    Official Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="placements@institution.edu / hr@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                    Service Required
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#09090b] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                  >
                    <option value="Campus Recruitment Training (CRT)">Campus Recruitment Training (CRT)</option>
                    <option value="Faculty Development Program (FDP)">Faculty Development Program (FDP)</option>
                    <option value="Campus Placement Hiring Drive">Campus Placement Hiring Drive</option>
                    <option value="Center of Excellence (CoE) MoU">Center of Excellence (CoE) MoU</option>
                    <option value="Corporate Pre-Hire Bootcamp">Corporate Pre-Hire Bootcamp</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                    Target Batch / Learner Strength
                  </label>
                  <select
                    value={formData.estimatedLearners}
                    onChange={(e) => setFormData({ ...formData, estimatedLearners: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#09090b] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                  >
                    <option value="Under 100 Students">Under 100 Students</option>
                    <option value="100 - 500 Students">100 - 500 Students</option>
                    <option value="500 - 1000 Students">500 - 1,000 Students</option>
                    <option value="1000+ Students">1,000+ Students</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                  Campus Requirements & Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Share details regarding your preferred training timeline, target batch years, or tech stack requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="text-center pt-2">
                <Magnet strength={20}>
                  <button
                    type="submit"
                    className="px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:opacity-95 font-bold text-xs sm:text-sm text-white shadow-2xl shadow-blue-500/30 inline-flex items-center gap-2"
                  >
                    <Send className="w-4 h-4 text-cyan-300" /> Submit Partnership Proposal
                  </button>
                </Magnet>
              </div>
            </form>
          )}
        </div>

        {/* DIRECT CONTACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SpotlightCard className="p-6 space-y-3">
            <div className="p-3 rounded-2xl bg-blue-600/20 text-cyan-400 border border-blue-500/30 w-fit">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Outfit']">Institutional Email</h3>
            <p className="text-xs text-zinc-400">Direct desk for university & corporate MoUs</p>
            <span className="text-xs font-extrabold text-cyan-300 block pt-1 font-['Space_Grotesk']">
              crt@nexustalentlabs.edu
            </span>
          </SpotlightCard>

          <SpotlightCard className="p-6 space-y-3">
            <div className="p-3 rounded-2xl bg-purple-600/20 text-purple-400 border border-purple-500/30 w-fit">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Outfit']">CRT Hotline</h3>
            <p className="text-xs text-zinc-400">Mon - Sat (9:00 AM to 7:00 PM IST)</p>
            <span className="text-xs font-extrabold text-purple-300 block pt-1 font-['Space_Grotesk']">
              +91 1800-NEXUS-CRT
            </span>
          </SpotlightCard>

          <SpotlightCard className="p-6 space-y-3">
            <div className="p-3 rounded-2xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 w-fit">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Outfit']">Headquarters</h3>
            <p className="text-xs text-zinc-400">Nexus Innovation Campus</p>
            <span className="text-xs font-extrabold text-emerald-300 block pt-1 font-['Space_Grotesk']">
              Tech Hub Sector 5, Cyber City
            </span>
          </SpotlightCard>
        </div>

      </main>

      <Footer />
      <AskAIWidget />
    </div>
  );
}
