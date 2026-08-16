'use client';

import React from 'react';
import LogoLoop, { LogoItem } from '@/components/reactbits/LogoLoop';

const hyderabadStartupLogos: LogoItem[] = [
  {
    src: '/logos/darwinbox.svg',
    alt: 'Darwinbox',
    title: 'Darwinbox',
    href: 'https://darwinbox.com'
  },
  {
    src: '/logos/keka.svg',
    alt: 'Keka HR',
    title: 'Keka HR',
    href: 'https://keka.com'
  },
  {
    src: '/logos/highradius.svg',
    alt: 'HighRadius',
    title: 'HighRadius',
    href: 'https://highradius.com'
  },
  {
    src: '/logos/zenoti.svg',
    alt: 'Zenoti',
    title: 'Zenoti',
    href: 'https://zenoti.com'
  },
  {
    src: '/logos/cyient.svg',
    alt: 'Cyient',
    title: 'Cyient',
    href: 'https://cyient.com'
  },
  {
    src: '/logos/persistent.svg',
    alt: 'Persistent Systems',
    title: 'Persistent Systems',
    href: 'https://persistent.com'
  },
  {
    src: '/logos/ctrls.svg',
    alt: 'CtrlS Datacenters',
    title: 'CtrlS Datacenters',
    href: 'https://ctrls.in'
  },
  {
    src: '/logos/valuemomentum.svg',
    alt: 'ValueMomentum',
    title: 'ValueMomentum',
    href: 'https://valuemomentum.com'
  },
  {
    src: '/logos/zeta.svg',
    alt: 'Zeta Tech',
    title: 'Zeta Tech',
    href: 'https://zeta.tech'
  },
  {
    src: '/logos/happiestminds.svg',
    alt: 'Happiest Minds',
    title: 'Happiest Minds',
    href: 'https://happiestminds.com'
  }
];

export default function HiringLogosLoop() {
  return (
    <div className="w-full py-6 relative overflow-hidden bg-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-md">
      <LogoLoop
        logos={hyderabadStartupLogos}
        speed={65}
        direction="left"
        logoHeight={36}
        gap={36}
        pauseOnHover={true}
        scaleOnHover={true}
        fadeOut={true}
        fadeOutColor="#0b0c14"
        ariaLabel="Hyderabad Startups and Mid-Range Tech Hiring Partners"
        renderItem={(item, key) => (
          <a
            key={key}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-1.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.08] transition-all group shrink-0"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="h-8 w-auto object-contain group-hover:scale-105 transition-transform"
              loading="lazy"
            />
          </a>
        )}
      />
    </div>
  );
}
