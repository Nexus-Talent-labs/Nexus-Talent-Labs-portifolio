'use client';

import React from 'react';
import Link from 'next/link';
import { Cpu, Github, Linkedin, Twitter, Youtube, Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#09090b] border-t border-white/10 pt-16 pb-8 overflow-hidden">
      {/* Background aurora glow */}
      <div className="aurora-glow w-96 h-96 bg-blue-600 top-0 left-1/4 -translate-x-1/2" />
      <div className="aurora-glow w-96 h-96 bg-purple-600 bottom-0 right-1/4 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/nexus-logo.png"
                alt="Nexus Talent Labs Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-extrabold tracking-tight text-white font-['Outfit']">
                NEXUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">TALENT LABS</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Premier technology training institute pioneering career transformation in AI, Cloud Architecture, Full-Stack Systems, Cybersecurity, and Data Science.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Admissions Open for Fall 2026
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Github, href: 'https://github.com' },
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Twitter, href: 'https://twitter.com' },
                { icon: Youtube, href: 'https://youtube.com' }
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 text-zinc-400 hover:text-cyan-300 transition-all"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Academic Tracks</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-medium">
              <li><Link href="/programs#ai-ml-architect" className="hover:text-cyan-400 transition-colors">AI & Machine Learning</Link></li>
              <li><Link href="/programs#mern-fullstack" className="hover:text-cyan-400 transition-colors">Full Stack with AI (MERN & Next.js)</Link></li>
              <li><Link href="/programs#cloud-devops" className="hover:text-cyan-400 transition-colors">Cloud Native & DevOps</Link></li>
              <li><Link href="/programs#data-science-analytics" className="hover:text-cyan-400 transition-colors">Data Science & Analytics</Link></li>
              <li><Link href="/programs#ui-ux-design" className="hover:text-cyan-400 transition-colors">Product UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Institute Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Institute & Portals</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-medium">
              <li><Link href="/placements" className="hover:text-cyan-400 transition-colors">Placement Records</Link></li>
              <li><Link href="/crt-partnerships" className="hover:text-cyan-400 transition-colors">CRT & College Partnerships</Link></li>
              <li><Link href="/projects" className="hover:text-cyan-400 transition-colors">Student Projects Showcase</Link></li>
              <li><Link href="/faculty" className="hover:text-cyan-400 transition-colors">Research Faculty</Link></li>
              <li><Link href="/events" className="hover:text-cyan-400 transition-colors">Hackathons & Events</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Headquarters</h4>
            <ul className="space-y-3 text-xs text-zinc-400 font-medium">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Nexus Innovation Campus, Tech Hub Sector 5, Cyber City</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <span>+91 1800-NEXUS-LABS</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>admissions@nexustalentlabs.edu</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
          <p>© {new Date().getFullYear()} Nexus Talent Labs Institute. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/site-map" className="hover:text-cyan-400 transition-colors">Sitemap</Link>
            <Link href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing & Benefits</Link>
            <Link href="/testimonials" className="hover:text-cyan-400 transition-colors">Testimonials</Link>
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
