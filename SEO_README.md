SEO files and components

What I added

1. lib/seo.ts
- export function buildMetadata(opts)
- Returns a Next.js Metadata object (title, description, openGraph, twitter, robots, alternates)
- Usage: in an app-route page you can do:

```ts
import buildMetadata from '../../lib/seo';

export const metadata = buildMetadata({ title: 'Shop', description: 'Buy wheels', pathname: '/shop' });
```

2. components/SeoMeta.tsx
- Small server component to inject JSON-LD structured data into a page's head/body.
- Usage in a page component (server):

```tsx
import SeoMeta from '@/components/SeoMeta';

const structuredData = { '@context': 'https://schema.org', '@type': 'Product', name: 'Wheel' };

export default function Page(){
  return (
    <>
      <SeoMeta structuredData={structuredData} />
      <main>...</main>
    </>
  );
}
```

Notes & recommendations

- You already have `public/robots.txt`, `public/sitemap.xml`, `public/manifest.json` and site-level metadata in `app/layout.tsx`. Those are important and present.
- For best SEO:
  - Use `export const metadata = buildMetadata({...})` in each page to provide page-specific meta tags and Open Graph values.
  - Use `SeoMeta` to output JSON-LD for Products, BreadcrumbList, LocalBusiness, etc.
  - Keep `robots.txt` permissive (you already allow '/'). Consider adding crawl-delay or disallow for staging.
  - Keep `sitemap.xml` up-to-date. If your site grows, consider generating sitemap dynamically from CMS or site map entries.
  - Ensure canonical URLs are correctly set (buildMetadata sets alternates.canonical when pathname provided).

If you want, I can:
- Convert some of your pages (home, services, shop, gallery) to export metadata via `buildMetadata` and include matching JSON-LD via `SeoMeta`.
- Add a dynamic `/api/sitemap` or `app/sitemap/route.ts` that generates sitemap.xml from your routes programmatically.
- Add automated image metadata extraction for Open Graph images.

Would you like me to update specific pages to use `buildMetadata` and `SeoMeta` now? If so, tell me which ones (home, services, shop, gallery, business).