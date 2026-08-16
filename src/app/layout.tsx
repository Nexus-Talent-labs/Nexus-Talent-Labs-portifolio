import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import GlobalAppLoader from '@/components/GlobalAppLoader';

export const metadata: Metadata = {
  metadataBase: new URL('https://nexustalentlabs.com'),
  title: {
    default: 'Nexus Talent Labs Institute | AI, Cloud & Full Stack Excellence',
    template: '%s | Nexus Talent Labs Institute'
  },
  description: 'Premier advanced technology training institute specializing in Artificial Intelligence, Machine Learning, Data Science, Full Stack Next.js Systems, Cloud Native DevOps, Cybersecurity, and Product Design.',
  keywords: [
    'AI Institute', 
    'Machine Learning Bootcamp', 
    'Full Stack Next.js', 
    'DevOps Certification', 
    'Cyber Security Training', 
    'Nexus Talent Labs',
    'Data Science Course',
    'GenAI Engineering'
  ],
  alternates: {
    canonical: 'https://nexustalentlabs.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/nexus-logo.png',
    apple: '/nexus-logo.png',
  },
  openGraph: {
    title: 'Nexus Talent Labs Institute | AI, Cloud & Full Stack Excellence',
    description: 'Transform your technical career with real-world labs, expert mentors, and guaranteed placement support.',
    url: 'https://nexustalentlabs.com',
    siteName: 'Nexus Talent Labs Institute',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://nexustalentlabs.com/nexus-logo.png',
        width: 800,
        height: 800,
        alt: 'Nexus Talent Labs Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus Talent Labs Institute',
    description: 'Transform your technical career with real-world labs, expert mentors, and guaranteed placement support.',
    images: ['https://nexustalentlabs.com/nexus-logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://nexustalentlabs.com/#organization',
        'name': 'Nexus Talent Labs Institute',
        'url': 'https://nexustalentlabs.com',
        'logo': 'https://nexustalentlabs.com/nexus-logo.png',
        'description': 'Premier advanced technology training institute specializing in AI, Machine Learning, Data Science, Full Stack Systems, DevOps & Cybersecurity.',
        'sameAs': [
          'https://github.com/Nexus-Talent-labs',
          'https://linkedin.com/company/nexus-talent-labs'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://nexustalentlabs.com/#website',
        'url': 'https://nexustalentlabs.com',
        'name': 'Nexus Talent Labs',
        'publisher': {
          '@id': 'https://nexustalentlabs.com/#organization'
        }
      }
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#09090b] text-zinc-100 antialiased selection:bg-blue-600/30 selection:text-cyan-300">
        <GlobalAppLoader />
        {children}
      </body>
    </html>
  );
}
