'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuralCanvas from '@/components/NeuralCanvas';
import MouseSpotlight from '@/components/MouseSpotlight';
import ApplicationModal from '@/components/ApplicationModal';
import { INSTITUTE_EVENTS } from '@/data/events';
import { Calendar, Clock, MapPin, Users, Sparkles, ArrowRight } from 'lucide-react';

export default function EventsPage() {
  const [isApplyOpen, setIsApplyOpen] = React.useState(false);

  return (
    <div className="relative min-h-screen bg-[#09090b] text-white overflow-hidden">
      <NeuralCanvas />
      <MouseSpotlight />
      <Navbar onOpenApply={() => setIsApplyOpen(true)} />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-500/10 border border-purple-500/20 text-purple-300 inline-block">
            Upcoming Tech Gatherings
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-['Outfit']">
            Hackathons, Workshops & Seminars
          </h1>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Join 48-hour competitive coding hackathons, system architecture workshops, and keynote seminars led by industry pioneers.
          </p>
        </div>

        {/* Events Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {INSTITUTE_EVENTS.map((evt) => (
            <div key={evt.id} className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold bg-black/70 backdrop-blur-md text-cyan-300 border border-white/10">
                    {evt.category}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors font-['Outfit']">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {evt.description}
                  </p>

                  <div className="space-y-2 text-xs text-zinc-300 pt-2 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{evt.date} • {evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      <span>{evt.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{evt.registrationsCount}+ Registered</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs text-white flex items-center justify-center gap-2"
                >
                  Register Free <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </main>

      <Footer />
      <ApplicationModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </div>
  );
}
