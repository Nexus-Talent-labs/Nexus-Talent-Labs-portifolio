'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Menu, 
  X, 
  ArrowRight,
  Phone,
  Mail,
  ChevronRight,
  ShieldCheck,
  Compass,
  Zap,
  Globe
} from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

interface NavbarProps {
  onOpenApply: () => void;
}

export default function Navbar({ onOpenApply }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 40) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY - 8) {
        setScrollDirection('up');
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu overlay is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Talents', href: '/faculty' },
    { name: 'Programs', href: '/programs' },
    { name: 'Placements', href: '/placements' },
    { name: 'Projects', href: '/projects' },
    { name: 'Events', href: '/events' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'CRT & Partnerships', href: '/crt-partnerships' },
  ];

  const showNavLinks = !isScrolled || scrollDirection === 'up' || isHovered;

  // Stagger variants for mobile items
  const menuContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, y: 15, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <header
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showNavLinks && isScrolled
          ? 'py-3 bg-[#09090b]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-blue-950/20'
          : 'py-3.5 sm:py-4 bg-transparent border-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header Flex Container */}
        <div 
          className={`flex items-center transition-all duration-500 ${
            showNavLinks
              ? 'justify-between'
              : 'justify-between lg:justify-center'
          }`}
        >
          
          {/* Logo Container */}
          <div
            className={`flex items-center gap-3 transition-all duration-500 transform ${
              !showNavLinks && isScrolled
                ? 'scale-105 sm:scale-110 p-1.5 sm:p-2.5 rounded-2xl bg-transparent border-none shadow-none'
                : 'scale-100'
            }`}
          >
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer" title="Go to Home Page">
              <img
                src="/nexus-logo.png"
                alt="Nexus Talent Labs Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain transition-transform group-hover:scale-105"
              />
              
              {showNavLinks && (
                <div className="flex flex-col animate-in fade-in duration-300">
                  <span className="text-base sm:text-lg font-extrabold tracking-tight text-white flex items-center gap-1 font-['Outfit']">
                    NEXUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">TALENT LABS</span>
                  </span>
                  
                  <span className="text-[9px] sm:text-[10px] tracking-widest uppercase text-zinc-400 font-semibold">
                    Advanced Tech Institute
                  </span>
                </div>
              )}
            </Link>
          </div>

          {/* Desktop Nav Links Container */}
          <div
            className={`hidden lg:flex items-center gap-1 transition-all duration-500 ${
              showNavLinks
                ? 'opacity-100 scale-100 pointer-events-auto translate-y-0'
                : 'opacity-0 scale-95 pointer-events-none -translate-y-4 max-h-0 overflow-hidden'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all shrink-0 ${
                    isActive
                      ? 'text-white bg-blue-600/20 border border-blue-500/30 shadow-lg shadow-blue-500/10'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Apply Button */}
          <div 
            className={`hidden lg:flex items-center gap-2.5 transition-all duration-500 ${
              showNavLinks
                ? 'opacity-100 scale-100 pointer-events-auto translate-x-0'
                : 'opacity-0 scale-90 pointer-events-none max-w-0 overflow-hidden translate-x-4'
            }`}
          >
            <button
              onClick={onOpenApply}
              className="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-xs transition-transform active:scale-95 shrink-0"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400 animate-gradient" />
              <span className="relative px-4 py-2 rounded-[11px] bg-[#09090b] text-white flex items-center gap-1.5 group-hover:bg-transparent transition-colors font-bold">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Apply Now
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Mobile Navigation Menu"
            className="lg:hidden p-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-zinc-200 hover:text-white active:scale-95 transition-all shadow-lg ml-auto flex items-center justify-center"
          >
            <Menu className="w-6 h-6 text-cyan-400" />
          </button>
        </div>
      </div>

      {/* FULL-SCREEN IMMERSIVE MOBILE OVERLAY DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 z-[99999] bg-[#05071a] flex flex-col justify-between overflow-y-auto max-w-full min-h-[100dvh]"
          >
            {/* Ambient Background Aura Blobs */}
            <div className="absolute w-80 h-80 bg-blue-600/25 top-0 right-0 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute w-80 h-80 bg-purple-600/20 bottom-0 left-0 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 p-6 sm:p-8 space-y-6 max-w-lg mx-auto w-full flex-1 flex flex-col justify-between">
              
              {/* Overlay Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <Link 
                  href="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <img src="/nexus-logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                  <span className="text-base font-extrabold text-white font-['Outfit']">
                    NEXUS <span className="text-cyan-400">TALENT LABS</span>
                  </span>
                </Link>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close Mobile Navigation Menu"
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white active:scale-90 transition-transform"
                >
                  <X className="w-5 h-5 text-cyan-300" />
                </button>
              </div>

              {/* Animated Staggered Navigation Links */}
              <motion.nav 
                variants={menuContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-auto py-2"
              >
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <motion.div key={link.name} variants={menuItemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all flex items-center justify-between group border ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-600/40 via-purple-600/40 to-cyan-500/30 border-cyan-400 text-white shadow-xl shadow-blue-950/50'
                            : 'bg-white/[0.04] border-white/10 text-zinc-200 hover:text-white hover:bg-white/[0.09] hover:border-white/20'
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          {isActive ? (
                            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                          ) : (
                            <Zap className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                          )}
                          {link.name}
                        </span>
                        <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                          isActive ? 'text-cyan-300' : 'text-zinc-500'
                        }`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>

              {/* Bottom Actions & Contact Info */}
              <div className="space-y-4 pt-2">
                {/* Instant Admissions CTA Button */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenApply();
                  }}
                  className="w-full py-4 rounded-2xl font-bold text-sm bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400 text-white shadow-2xl shadow-blue-600/40 flex items-center justify-center gap-2.5 active:scale-98 transition-transform font-['Outfit']"
                >
                  <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
                  Apply Now for Admissions
                  <ArrowRight className="w-4 h-4 text-cyan-200" />
                </button>

                {/* Contact & Social Matrix */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-zinc-400 font-medium">
                    <a href="tel:+91180063987" className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                      <Phone className="w-3.5 h-3.5 text-purple-400" />
                      +91 1800-NEXUS-LABS
                    </a>
                    <a href="mailto:support@nexustalentlabs.com" className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      support@nexustalentlabs.com
                    </a>
                  </div>

                  <div className="flex items-center justify-center gap-3 pt-1">
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
                        aria-label={s.name}
                        className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-zinc-300 hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-blue-600/20 transition-all active:scale-90"
                      >
                        <s.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
