'use client';

import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#09090b] border-t border-white/10 pt-16 pb-8 overflow-hidden z-10">
      {/* Background aurora glow */}
      <div className="aurora-glow w-96 h-96 bg-blue-600 top-0 left-1/4 -translate-x-1/2" />
      <div className="aurora-glow w-96 h-96 bg-purple-600 bottom-0 right-1/4 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group cursor-pointer" title="Go to Home Page">
              <img
                src="/nexus-logo.png"
                alt="Nexus Talent Labs Logo"
                className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
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
            {/* Official Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/company/nexus-talent-labs/' },
                { name: 'Facebook', icon: FaFacebook, href: 'https://www.facebook.com/nexustalentlabs' },
                { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/nexustalentlabsofficial/' },
                { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/?text=Hello%20Nexus%20Talent%20Labs' }
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  title={s.name}
                  aria-label={s.name}
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 text-zinc-400 hover:text-cyan-300 transition-all"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navbar Navigation Links (2-Column Grid Layout) */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Navigation Menu</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs text-zinc-400 font-medium">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Institute</Link></li>
              <li><Link href="/faculty" className="hover:text-cyan-400 transition-colors">Our Talents</Link></li>
              <li><Link href="/programs" className="hover:text-cyan-400 transition-colors">Training Programs</Link></li>
              <li><Link href="/placements" className="hover:text-cyan-400 transition-colors">Placement Records</Link></li>
              <li><Link href="/projects" className="hover:text-cyan-400 transition-colors">Student Projects</Link></li>
              <li><Link href="/events" className="hover:text-cyan-400 transition-colors">Hackathons & Events</Link></li>
              <li><Link href="/blog" className="hover:text-cyan-400 transition-colors">Blogs & Insights</Link></li>
              <li><Link href="/crt-partnerships" className="hover:text-cyan-400 transition-colors">CRT & Partnerships</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Academic Tracks */}
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

          {/* Headquarters Contact */}
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
                <span>support@nexustalentlabs.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
          <p>© {new Date().getFullYear()} Nexus Talent Labs Institute. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/cookie-policy" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
            <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link href="/site-map" className="hover:text-cyan-400 transition-colors">Sitemap</Link>
            <Link href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing & Benefits</Link>
            <Link href="/testimonials" className="hover:text-cyan-400 transition-colors">Testimonials</Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
