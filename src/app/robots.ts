import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://nexustalentlabs.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/site-map.xml`,
    ],
  };
}
