'use client';

import React, { useEffect, useState } from 'react';

export default function GlobalAppLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  useEffect(() => {
    // Listen for progress updates from 3D model viewer
    const handleProgress = (e: Event) => {
      const customEvent = e as CustomEvent<number>;
      if (typeof customEvent.detail === 'number') {
        setProgress(customEvent.detail);
      }
    };

    const handleLoaded = () => {
      setProgress(100);
      setLoading(false);
      setTimeout(() => {
        setIsOverlayVisible(false);
      }, 700);
    };

    window.addEventListener('3d-model-progress', handleProgress);
    window.addEventListener('3d-model-loaded', handleLoaded);

    // Fallback safety timeout (12 seconds) in case network blocks assets
    const fallbackTimer = setTimeout(() => {
      if (loading) {
        setProgress(100);
        setLoading(false);
        setTimeout(() => setIsOverlayVisible(false), 500);
      }
    }, 12000);

    return () => {
      window.removeEventListener('3d-model-progress', handleProgress);
      window.removeEventListener('3d-model-loaded', handleLoaded);
      clearTimeout(fallbackTimer);
    };
  }, [loading]);

  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDotCount((prev) => (prev % 5) + 1);
    }, 400);
    return () => clearInterval(dotInterval);
  }, []);

  if (!isOverlayVisible) return null;

  return (
    <div
      id="global-initial-loader"
      className={`fixed inset-0 z-[99999] bg-gradient-to-br from-[#070e26] via-[#1c0b2c] to-[#041c2b] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
        loading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Ambient Glowing Radial Aurora Orbs (Matching 'Your Future' Gradient Colors: Blue, Orange/Purple, Cyan) */}
      <div className="absolute w-[650px] h-[650px] bg-gradient-to-tr from-blue-500/35 via-orange-500/25 to-cyan-400/35 rounded-full blur-[170px] animate-pulse pointer-events-none" />
      <div className="absolute w-[450px] h-[450px] bg-gradient-to-bl from-cyan-400/25 via-purple-600/25 to-blue-600/25 rounded-full blur-[130px] animate-pulse pointer-events-none" />

      <div className="relative flex flex-col items-center space-y-9 z-10 p-6 max-w-sm w-full text-center">
        
        {/* Center Logo Icon with Glowing Pulse (Enlarged Size) */}
        <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 p-4 flex items-center justify-center">
          <img
            src="/nexus-logo.png"
            alt="Nexus Logo"
            className="w-full h-full object-contain drop-shadow-[0_0_45px_rgba(56,189,248,0.95)] animate-pulse"
          />
        </div>

        {/* Animated Loading..... Text Display */}
        <div className="flex items-center justify-center pt-2">
          <p className="text-base sm:text-lg font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 font-['Outfit'] select-none">
            Loading<span className="text-cyan-300 font-mono inline-block w-16 text-left">{'.'.repeat(dotCount)}</span>
          </p>
        </div>

      </div>
    </div>
  );
}
