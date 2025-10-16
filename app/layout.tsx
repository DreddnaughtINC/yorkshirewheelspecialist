import type { Metadata } from 'next';
import './globals.css';
import { site } from '../config/site'; // switch to default import if your export is default
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Yorkshire Wheel Specialist | Alloy Wheel Repair & Refurbishment Sheffield',
  description: 'Expert alloy wheel refurbishment, repair, and custom finishes in Sheffield & Yorkshire. Mobile service, fast turnaround, premium quality. Call 07455298619.',
  keywords: 'alloy wheel repair Sheffield, wheel refurbishment Yorkshire, mobile wheel service, alloy wheel sales, curb rash repair, powder coating wheels',
  authors: [{ name: 'Yorkshire Wheel Specialist' }],
  creator: 'Yorkshire Wheel Specialist',
  publisher: 'Yorkshire Wheel Specialist',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yorkshirewheelspecialist.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Yorkshire Wheel Specialist | Premium Alloy Wheel Services',
    description: 'Sheffield\'s leading alloy wheel repair and refurbishment specialists. Mobile service across Yorkshire with 4.9/5 rating.',
    url: 'https://yorkshirewheelspecialist.co.uk',
    siteName: 'Yorkshire Wheel Specialist',
    images: [
      {
        url: '/images/services/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Yorkshire Wheel Specialist Logo',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yorkshire Wheel Specialist | Sheffield Alloy Wheel Experts',
    description: 'Mobile alloy wheel repair & refurbishment across Yorkshire. Fast, professional service with premium finishes.',
    images: ['/images/services/logo.jpeg'],
    creator: '@YorkshireWheels',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Yorkshire Wheel Specialist",
        "description": "Expert alloy wheel refurbishment, repair, and custom finishes in Sheffield & Yorkshire.",
        "url": "https://yorkshirewheelspecialist.co.uk",
        "telephone": "+447455298619",
        "email": "joe@yorkshirewheelspecialist.co.uk",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Industrial Estate",
          "addressLocality": "Sheffield",
          "addressRegion": "South Yorkshire",
          "postalCode": "S1 2AB",
          "addressCountry": "GB"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 53.3811,
          "longitude": -1.4701
        },
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 53.3811,
            "longitude": -1.4701
          },
          "geoRadius": 50000
        },
        "openingHours": [
          "Mo-Fr 08:00-18:00",
          "Sa 08:00-16:00"
        ],
        "priceRange": "££",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "200"
        },
        "serviceType": "Alloy Wheel Services",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Wheel Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Wheel Repair",
                "description": "Crack welding, curb rash repair, and structural fixes"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Refurbishment",
                "description": "Diamond cutting, powder coating, and custom finishes"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mobile Service",
                "description": "On-site wheel repair and fitting across Yorkshire"
              }
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://yorkshirewheelspecialist.co.uk"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://yorkshirewheelspecialist.co.uk/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Gallery",
            "item": "https://yorkshirewheelspecialist.co.uk/gallery"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Contact",
            "item": "https://yorkshirewheelspecialist.co.uk/contact"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
