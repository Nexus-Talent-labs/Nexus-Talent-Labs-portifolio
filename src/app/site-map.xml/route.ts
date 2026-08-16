import { NextResponse } from 'next/server';
import { GET as getSitemap } from '../sitemap.xml/route';

export async function GET() {
  return getSitemap();
}
