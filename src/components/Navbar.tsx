'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Cpu, 
  Sparkles, 
  Menu, 
  X, 
  ArrowRight
} from 'lucide-react';

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

      // Detect scroll direction:
      // Scrolling DOWN -> CLOSE menu & background into centered logo icon
      // Scrolling UP -> EXPAND menu & restore top bar background
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

  // Show navigation links & top header background bar when:
  // 1. At top of page (!isScrolled)
  // 2. Scrolling UP (scrollDirection === 'up')
  // 3. User hovers over navbar area (isHovered)
  const showNavLinks = !isScrolled || scrollDirection === 'up' || isHovered;

  return (
    <header
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showNavLinks && isScrolled
          ? 'py-3 bg-[#09090b]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-blue-950/20'
          : 'py-4 bg-transparent border-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header Flex Container with Center-to-Left Alignment */}
        <div 
          className={`flex items-center transition-all duration-500 ${
            showNavLinks
              ? 'justify-between'
              : 'justify-center lg:justify-center'
          }`}
        >
          
          {/* Logo Container - When collapsed: background closes into centered logo pill. When expanded: full brand name at left */}
          <div
            className={`flex items-center gap-3 transition-all duration-500 transform ${
              !showNavLinks && isScrolled
                ? 'scale-110 p-2.5 rounded-2xl bg-transparent border-none shadow-none backdrop-blur-none'
                : 'scale-100'
            }`}
          >
            <Link href="/" className="flex items-center gap-3 group">
              {/* Clean Logo Image Without Border */}
              <img
                src="/nexus-logo.png"
                alt="Nexus Talent Labs Logo"
                className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
              />
              
              {/* Institute Name & Description Text - Only shown when expanded */}
              {showNavLinks && (
                <div className="flex flex-col animate-in fade-in duration-300">
                  <span className="text-lg font-extrabold tracking-tight text-white flex items-center gap-1 font-['Outfit']">
                    NEXUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">TALENT LABS</span>
                  </span>
                  
                  <span className="text-[10px] tracking-widest uppercase text-zinc-400 font-semibold">
                    Advanced Tech Institute
                  </span>
                </div>
              )}
            </Link>
          </div>

          {/* Desktop Nav Links Container - Smooth Collapse/Expand Transition */}
          <div
            className={`hidden lg:flex items-center gap-1 bg-white/[0.03] backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 transition-all duration-500 transform origin-center ${
              showNavLinks
                ? 'opacity-100 scale-100 max-w-5xl translate-y-0 pointer-events-auto'
                : 'opacity-0 scale-90 max-w-0 -translate-y-4 pointer-events-none overflow-hidden px-0 border-transparent'
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

          {/* Quick Portal Action Buttons - Fades out when collapsed, returns to right when expanded */}
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

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white ml-auto"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] p-6 glass-panel rounded-b-3xl border-t border-white/10 shadow-2xl animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-200 hover:bg-white/5 hover:text-cyan-400 transition-colors flex items-center justify-between"
              >
                {link.name}
                <ArrowRight className="w-4 h-4 text-zinc-500" />
              </Link>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
              >
                Apply Now for Admissions
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
