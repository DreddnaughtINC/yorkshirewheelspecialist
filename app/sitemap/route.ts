
import { site } from '@/config/site';

const routes = ['/', '/services', '/gallery', '/shop', '/business', '/contact'];

function buildUrl(path: string) {
  const url = new URL(path, site.url).toString();
  return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n  </url>`;
}

export async function GET() {
  const urls = routes.map(buildUrl).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
    },
  });
}
