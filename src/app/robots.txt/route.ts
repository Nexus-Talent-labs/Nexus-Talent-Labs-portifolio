import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# robots.txt for https://nexustalentlabs.com

User-agent: *
Allow: /

# Exclude private endpoints
Disallow: /api/

# XML Sitemaps
Sitemap: https://nexustalentlabs.com/sitemap.xml
Sitemap: https://nexustalentlabs.com/site-map.xml
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
