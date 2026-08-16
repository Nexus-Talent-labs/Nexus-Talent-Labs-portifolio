'use client';

import React from 'react';

interface ShinyTextProps {
  text: string;
  className?: string;
  shimmerWidth?: number;
}

export default function ShinyText({ text, className = '', shimmerWidth = 100 }: ShinyTextProps) {
  return (
    <span
      className={`relative inline-block overflow-hidden bg-clip-text text-transparent bg-neutral-100 ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.4) 100%)',
        backgroundSize: '200% 100%',
        animation: 'shiny-text 3s linear infinite',
      }}
    >
      {text}
      <style jsx>{`
        @keyframes shiny-text {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
      `}</style>
    </span>
  );
}
