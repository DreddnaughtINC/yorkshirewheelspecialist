import React from 'react';

type Props = {
  structuredData?: object | object[];
};

/**
 * Small server component to inject JSON-LD structured data into the page.
 * Use in page/server components where you also export metadata via `buildMetadata`.
 */
export default function SeoMeta({ structuredData }: Props) {
  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
