'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function GlobalScrollCursorEffect() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Framer Motion useScroll hook
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001
  });

  // Track Mouse Cursor Position & Scroll Percentage across every page
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = Math.min(100, Math.max(0, Math.round((window.scrollY / totalHeight) * 100)));
        setScrollPercentage(currentProgress);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* 1. TOP SCROLL PROGRESS NEON LASER BAR (REFLECTS ON EVERY PAGE) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 z-50 origin-left shadow-[0_0_15px_rgba(56,189,248,0.8)]"
        style={{ scaleX }}
      />

      {/* 2. DYNAMIC CURSOR SPOTLIGHT REFLECTION (FOLLOWS MOUSE & SCROLL) */}
      <div 
        className="fixed pointer-events-none z-40 transition-transform duration-100 ease-out"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        {/* Core Spotlight Lens */}
        <div className="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500/10 via-purple-500/8 to-transparent blur-3xl opacity-70" />
      </div>
    </>
  );
}
