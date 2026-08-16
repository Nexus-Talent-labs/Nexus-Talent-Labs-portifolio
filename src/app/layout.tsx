import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import GlobalAppLoader from '@/components/GlobalAppLoader';

export const metadata: Metadata = {
  title: 'Nexus Talent Labs Institute | AI, Cloud & Full Stack Excellence',
  description: 'Premier advanced technology training institute specializing in Artificial Intelligence, Machine Learning, Data Science, Full Stack Next.js Systems, Cloud Native DevOps, Cybersecurity, and Product Design.',
  keywords: ['AI Institute', 'Machine Learning Bootcamp', 'Full Stack Next.js', 'DevOps Certification', 'Cyber Security Training', 'Nexus Talent Labs'],
  icons: {
    icon: '/nexus-logo.png',
  },
  openGraph: {
    title: 'Nexus Talent Labs Institute',
    description: 'Transform your technical career with real-world labs, expert mentors, and guaranteed placement support.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#09090b] text-zinc-100 antialiased selection:bg-blue-600/30 selection:text-cyan-300">
        <GlobalAppLoader />
        {children}
      </body>
    </html>
  );
}
