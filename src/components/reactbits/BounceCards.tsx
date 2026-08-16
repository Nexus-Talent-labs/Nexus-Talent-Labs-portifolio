'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TrendingUp, Award, Quote, CheckCircle2 } from 'lucide-react';

export interface BounceCardsItem {
  id: string;
  initials: string;
  studentName: string;
  roleAtCompany: string;
  courseTaken: string;
  previousPackage: string;
  newPackage: string;
  quote: string;
  badgeColor?: string;
}

export interface BounceCardsProps {
  className?: string;
  items: BounceCardsItem[];
  containerWidth?: number | string;
  containerHeight?: number | string;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
}

export default function BounceCards({
  className = '',
  items = [],
  containerWidth = '100%',
  containerHeight = 440,
  animationDelay = 0.5,
  animationStagger = 0.08,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = [
    'rotate(-8deg) translate(-210px)',
    'rotate(-3deg) translate(-70px)',
    'rotate(3deg) translate(70px)',
    'rotate(8deg) translate(210px)'
  ],
  enableHover = true
}: BounceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.bounce-card',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [animationStagger, easeType, animationDelay]);

  const getNoRotationTransform = (transformStr: string) => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, 'rotate(0deg)');
    } else if (transformStr === 'none') {
      return 'rotate(0deg)';
    } else {
      return `${transformStr} rotate(0deg)`;
    }
  };

  const getPushedTransform = (baseTransform: string, offsetX: number) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    } else {
      return baseTransform === 'none' ? `translate(${offsetX}px)` : `${baseTransform} translate(${offsetX}px)`;
    }
  };

  const pushSiblings = (hoveredIdx: number) => {
    if (!enableHover || !containerRef.current) return;

    const q = gsap.utils.selector(containerRef);
    items.forEach((_, i) => {
      const selector = q(`.bounce-card-${i}`);
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || 'none';

      if (i === hoveredIdx) {
        const noRotation = getNoRotationTransform(baseTransform);
        gsap.to(selector, {
          transform: noRotation,
          scale: 1.05,
          zIndex: 40,
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto'
        });
      } else {
        const offsetX = i < hoveredIdx ? -140 : 140;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.04;

        gsap.to(selector, {
          transform: pushedTransform,
          scale: 0.95,
          zIndex: 10,
          duration: 0.4,
          ease: 'back.out(1.4)',
          delay,
          overwrite: 'auto'
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover || !containerRef.current) return;
    const q = gsap.utils.selector(containerRef);
    items.forEach((_, i) => {
      const selector = q(`.bounce-card-${i}`);
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || 'none';
      gsap.to(selector, {
        transform: baseTransform,
        scale: 1,
        zIndex: i + 10,
        duration: 0.4,
        ease: 'back.out(1.4)',
        overwrite: 'auto'
      });
    });
  };

  return (
    <div
      className={`relative flex items-center justify-center w-full max-w-6xl mx-auto py-10 overflow-visible ${className}`}
      style={{
        height: typeof containerHeight === 'number' ? `${containerHeight}px` : containerHeight
      }}
      ref={containerRef}
    >
      {items.map((item, idx) => (
        <div
          key={item.id || idx}
          className={`bounce-card bounce-card-${idx} absolute w-[280px] sm:w-[320px] rounded-3xl p-6 bg-[#0c0d16] border border-white/15 backdrop-blur-xl cursor-pointer select-none transition-shadow group shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:shadow-[0_25px_60px_rgba(56,189,248,0.25)] hover:border-cyan-400/50`}
          style={{
            zIndex: idx + 10,
            transform: transformStyles[idx] || 'none'
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <div className="space-y-4">
            {/* Header: Initials Badge + Verified Icon */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-400 flex items-center justify-center font-extrabold text-sm text-white font-['Space_Grotesk'] shadow-md border border-white/20">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-white font-['Outfit'] leading-tight group-hover:text-cyan-300 transition-colors">
                    {item.studentName}
                  </h4>
                  <p className="text-[11px] font-bold text-cyan-400 font-sans">
                    {item.roleAtCompany}
                  </p>
                </div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            </div>

            {/* Course Program Badge */}
            <div className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-[11px] font-semibold text-zinc-300 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span className="truncate">{item.courseTaken}</span>
            </div>

            {/* Salary Package Breakdown */}
            <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-xs">
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase font-semibold">Previous Package</span>
                <span className="font-semibold text-zinc-300 text-xs block mt-0.5">{item.previousPackage}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase font-semibold">New Offer Package</span>
                <span className="font-extrabold text-emerald-400 text-sm flex items-center gap-1 mt-0.5 font-['Space_Grotesk']">
                  <TrendingUp className="w-3.5 h-3.5" /> {item.newPackage}
                </span>
              </div>
            </div>

            {/* Student Quote */}
            <div className="relative pt-1">
              <Quote className="w-4 h-4 text-cyan-400/40 absolute -top-1 -left-1 rotate-180" />
              <p className="text-[11px] text-zinc-300 italic leading-relaxed pl-3 line-clamp-3">
                "{item.quote}"
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
