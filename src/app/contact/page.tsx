'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuralCanvas from '@/components/NeuralCanvas';
import MouseSpotlight from '@/components/MouseSpotlight';
import ApplicationModal from '@/components/ApplicationModal';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#09090b] text-white overflow-hidden">
      <NeuralCanvas />
      <MouseSpotlight />
      <Navbar onOpenApply={() => setIsApplyOpen(true)} />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 inline-block">
            Get In Touch With Counselors
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-['Outfit']">
            Contact Admissions & Support
          </h1>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Have questions about track selection, batch timings, or merit scholarships? Talk directly to our career advisors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-6">
              <h2 className="text-xl font-bold text-white font-['Outfit']">Headquarters & Hotline</h2>
              
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-600/20 text-cyan-300 border border-blue-500/30">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Campus Location</span>
                    <span className="text-zinc-400">Nexus Innovation Campus, Tech Hub Sector 5, Cyber City</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/30">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Counseling Phone</span>
                    <span className="text-zinc-400">+91 1800-NEXUS-LABS / +91 98765 43210</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-600/20 text-cyan-300 border border-cyan-500/30">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Email Support</span>
                    <span className="text-zinc-400">support@nexustalentlabs.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/30">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Office Hours</span>
                    <span className="text-zinc-400">Monday - Saturday: 9:00 AM - 8:00 PM IST</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Chat */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <MessageSquare className="w-4 h-4" /> Chat on WhatsApp Instant
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 border border-white/15 space-y-6">
              <h2 className="text-2xl font-bold text-white font-['Outfit']">Send Us a Direct Message</h2>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Lin"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="maya@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">Your Message / Query</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your background and career targets..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:opacity-90 font-bold text-xs text-white shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Send Message to Advisor
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-['Outfit']">Message Sent Successfully!</h3>
                  <p className="text-xs text-zinc-400">Our senior career advisor will get back to you at {formData.email} within 4 hours.</p>
                </div>
              )}
            </div>
          </div>

        </div>

      </main>

      <Footer />
      <ApplicationModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </div>
  );
}
