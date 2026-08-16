'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { PROGRAMS_DATA } from '@/data/programs';
import { X, Check, Sparkles, User, Mail, Phone, GraduationCap, Briefcase, Calculator, CheckCircle2, ArrowRight } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgramId?: string;
}

export default function ApplicationModal({ isOpen, onClose, initialProgramId }: ApplicationModalProps) {
  const [step, setStep] = useState(1);
  const [selectedProgram, setSelectedProgram] = useState(initialProgramId || PROGRAMS_DATA[0].id);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '0-1 Years',
    qualification: 'Bachelor Degree',
    scholarshipOpt: true,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#7c3aed', '#22d3ee', '#10b981'],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    triggerConfetti();
  };

  const currentProgramObj = PROGRAMS_DATA.find((p) => p.id === selectedProgram) || PROGRAMS_DATA[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Nexus Admissions Portal 2026
              </span>
              <h2 className="text-2xl font-extrabold text-white font-['Outfit']">
                Apply for {currentProgramObj.title}
              </h2>
              <p className="text-xs text-zinc-400">
                Complete your application in under 2 minutes to reserve your lab seat.
              </p>
            </div>

            {/* Step Indicators */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex-1 flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all ${
                      step >= s
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-white/5 text-zinc-500 border border-white/10'
                    }`}
                  >
                    {step > s ? <Check className="w-4 h-4" /> : s}
                  </div>
                  <div
                    className={`h-1 flex-1 rounded-full ${
                      step > s ? 'bg-blue-600' : 'bg-white/10'
                    }`}
                  />
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                      Select Program Track
                    </label>
                    <select
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                    >
                      {PROGRAMS_DATA.map((prog) => (
                        <option key={prog.id} value={prog.id} className="bg-[#09090b] text-white">
                          {prog.title} ({prog.duration} • {prog.fee})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                        Experience Level
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                      >
                        <option value="0-1 Years" className="bg-[#09090b]">0-1 Years (Fresh Graduate)</option>
                        <option value="1-3 Years" className="bg-[#09090b]">1-3 Years (Working Pro)</option>
                        <option value="3+ Years" className="bg-[#09090b]">3+ Years (Senior Lead)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                        Highest Qualification
                      </label>
                      <select
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                      >
                        <option value="Bachelor Degree" className="bg-[#09090b]">B.Tech / B.E. / BCA / B.Sc</option>
                        <option value="Master Degree" className="bg-[#09090b]">M.Tech / MCA / M.Sc</option>
                        <option value="Other" className="bg-[#09090b]">Diploma / Self-Taught</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs text-white flex items-center justify-center gap-2 transition-all mt-4"
                  >
                    Next Step: Personal Information <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Mercer"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">Phone Number</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 py-3 rounded-xl bg-white/5 hover:bg-white/10 font-bold text-xs text-zinc-300"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="w-2/3 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs text-white flex items-center justify-center gap-2"
                    >
                      Next: Review & Scholarship <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Applicant:</span>
                      <span className="font-bold text-white">{formData.fullName || 'Not provided'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Email:</span>
                      <span className="font-bold text-white">{formData.email || 'Not provided'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Selected Track:</span>
                      <span className="font-bold text-cyan-400">{currentProgramObj.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Base Tuition Fee:</span>
                      <span className="font-bold text-white">{currentProgramObj.fee}</span>
                    </div>
                  </div>

                  {/* Scholarship toggle */}
                  <label className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.scholarshipOpt}
                      onChange={(e) => setFormData({ ...formData, scholarshipOpt: e.target.checked })}
                      className="w-4 h-4 accent-emerald-500"
                    />
                    <div className="text-xs">
                      <span className="font-bold text-emerald-400 block">Apply for 25% Merit Scholarship Grant</span>
                      <span className="text-zinc-400">Evaluated based on your background interview.</span>
                    </div>
                  </label>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-1/3 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 font-bold text-xs text-zinc-300"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:opacity-90 font-bold text-xs text-white shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" /> Submit Application
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>
            <h3 className="text-2xl font-extrabold text-white font-['Outfit']">
              Application Submitted Successfully!
            </h3>
            <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
              Congratulations <span className="text-cyan-300 font-bold">{formData.fullName}</span>! Your application for <span className="text-cyan-300 font-bold">{currentProgramObj.title}</span> has been received. Our career counselor will contact you at <span className="text-white font-mono">{formData.email}</span> within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs text-white"
              >
                Close & Return to Site
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
