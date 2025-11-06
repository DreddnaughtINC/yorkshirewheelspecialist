import type { Metadata } from 'next';
import { site } from '../config/site';

type BuildOptions = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  keywords?: string[];
  type?: 'website' | 'article';
};

export function buildMetadata(opts: BuildOptions = {}): Metadata {
  const title = opts.title ? `${opts.title} | ${site.name}` : site.name;
  const description = opts.description ?? site.description;
  const url = opts.pathname ? `${site.url.replace(/\/$/, '')}${opts.pathname.startsWith('/') ? '' : '/'}${opts.pathname}` : site.url;
  const image = opts.image ?? '/images/services/logo.jpeg';

  const metadata: Metadata = {
    title,
    description,
    keywords: opts.keywords?.join(', ') ?? 'alloy wheel repair, wheel refurbishment, Yorkshire, Sheffield',
    metadataBase: new URL(site.url),
    alternates: { canonical: opts.pathname ? url : site.url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: opts.type ?? 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
      },
    },
  };

  return metadata;
}

export default buildMetadata;
