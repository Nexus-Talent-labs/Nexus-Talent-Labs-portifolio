import { NextResponse } from 'next/server';
import { PROGRAMS_DATA } from '@/data/programs';
import { BLOG_POSTS } from '@/data/blog';

export async function GET() {
  const baseUrl = 'https://nexustalentlabs.com';
  const currentDate = new Date().toISOString();

  const staticUrls = [
    { loc: baseUrl, priority: '1.0', changefreq: 'daily' },
    { loc: `${baseUrl}/about`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${baseUrl}/programs`, priority: '0.9', changefreq: 'daily' },
    { loc: `${baseUrl}/placements`, priority: '0.9', changefreq: 'daily' },
    { loc: `${baseUrl}/faculty`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${baseUrl}/projects`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${baseUrl}/events`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${baseUrl}/blog`, priority: '0.9', changefreq: 'daily' },
    { loc: `${baseUrl}/contact`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${baseUrl}/crt-partnerships`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${baseUrl}/pricing`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${baseUrl}/testimonials`, priority: '0.7', changefreq: 'weekly' },
    { loc: `${baseUrl}/site-map`, priority: '0.5', changefreq: 'monthly' },
    { loc: `${baseUrl}/privacy`, priority: '0.3', changefreq: 'yearly' },
    { loc: `${baseUrl}/terms`, priority: '0.3', changefreq: 'yearly' },
  ];

  const programUrls = PROGRAMS_DATA.map((p) => ({
    loc: `${baseUrl}/programs?id=${p.id}`,
    priority: '0.85',
    changefreq: 'weekly',
  }));

  const blogUrls = BLOG_POSTS.map((b) => ({
    loc: `${baseUrl}/blog?id=${b.id}`,
    priority: '0.75',
    changefreq: 'monthly',
  }));

  const allUrls = [...staticUrls, ...programUrls, ...blogUrls];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (item) => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(xmlContent, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
