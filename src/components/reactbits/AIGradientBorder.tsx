'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, useMotionTemplate, animate } from 'framer-motion';

type AIGradientBorderProps = {
  children: React.ReactNode;
  className?: string;
  duration?: number;
};

export default function AIGradientBorder({
  children,
  className = '',
  duration = 4,
}: AIGradientBorderProps) {
  const turn = useMotionValue(0);

  useEffect(() => {
    const controls = animate(turn, 1, {
      ease: 'linear',
      duration,
      repeat: Infinity,
    });

    return () => controls.stop();
  }, [duration, turn]);

  const gradient = useMotionTemplate`conic-gradient(from ${turn}turn, transparent 0%, #f472b600 5%, #f472b6 10%, #c084fc 18%, #818cf8 26%, #38bdf8 34%, #2dd4bf 42%, #fbbf24 46%, #fbbf2400 52%, transparent 56%)`;

  return (
    <div className={`relative p-[1.5px] ${className}`}>
      {/* Animated Rotating Conic Gradient Border */}
      <motion.div
        style={{ backgroundImage: gradient }}
        className="absolute inset-0 rounded-[inherit]"
      />

      {/* Inner Content Wrapper with Ambient AI Radial Glow Spill Mask */}
      <div className="relative rounded-[inherit] overflow-hidden h-full bg-[#0d0f1d]/95 backdrop-blur-xl">
        <div className="relative h-full flex flex-col justify-between z-20">{children}</div>

        <motion.div
          style={{ backgroundImage: gradient }}
          className="ai-glow-spill-mask opacity-60 blur-2xl pointer-events-none absolute inset-[-40%] z-10 overflow-hidden"
        />
      </div>
    </div>
  );
}
