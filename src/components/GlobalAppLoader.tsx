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

  if (!isOverlayVisible) return null;

  return (
    <div
      id="global-initial-loader"
      className={`fixed inset-0 z-[99999] bg-[#09090b] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
        loading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Ambient Glowing Background Effect */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-cyan-500/20 rounded-full blur-[140px] animate-pulse pointer-events-none" />

      <div className="relative flex flex-col items-center space-y-9 z-10 p-6 max-w-sm w-full text-center">
        
        {/* Central Dotted Spinner Container */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center">
          
          {/* 1. Outer Reverse Dotted Orbit Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dotted border-cyan-400/40 animate-spin [animation-duration:8s] [animation-direction:reverse]" />
          
          {/* 2. Middle Dotted Spinner Circle (12 Radial Glowing Dots) */}
          <div className="absolute inset-2 animate-spin [animation-duration:1.8s] [animation-timing-function:linear]">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.95)]"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 30}deg) translate(0, -70px) translate(-50%, -50%)`,
                  opacity: 0.25 + (i / 12) * 0.75,
                  scale: `${0.6 + (i / 12) * 0.5}`,
                }}
              />
            ))}
          </div>

          {/* 3. Inner Pulsing Dotted Accent Ring */}
          <div className="absolute inset-6 rounded-full border border-dashed border-purple-500/30 animate-spin [animation-duration:4s]" />

          {/* 4. Center Logo Icon with Glowing Pulse */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 p-3 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl">
            <img
              src="/nexus-logo.png"
              alt="Nexus Logo"
              className="w-full h-full object-contain drop-shadow-[0_0_18px_rgba(59,130,246,0.85)] animate-pulse"
            />
          </div>

        </div>

        {/* Progress Percentage Counter & Dotted Status Display */}
        <div className="flex flex-col items-center space-y-4 w-full">
          
          {/* Animated Bouncing Dotted Spinner Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, idx) => (
              <span
                key={idx}
                className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-[0_0_8px_rgba(34,211,238,0.85)] animate-bounce"
                style={{ animationDelay: `${idx * 0.15}s` }}
              />
            ))}
          </div>

          {/* Percentage Display */}
          <div className="flex items-baseline space-x-1 font-mono">
            <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 tracking-tighter">
              {progress}
            </span>
            <span className="text-2xl font-bold text-cyan-400">%</span>
          </div>

          {/* Progress Track Bar */}
          <div className="w-full max-w-[260px] h-2.5 rounded-full bg-white/10 overflow-hidden p-[1px] border border-white/15 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(34,211,238,0.9)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Status Subtitle Text */}
          <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-zinc-400 pt-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>
              {progress < 100
                ? 'Loading 3D Phoenix Engine...'
                : 'System Ready • Launching Nexus'}
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
