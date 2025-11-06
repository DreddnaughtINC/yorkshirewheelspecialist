
import { Container } from '@/components/Container';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FeaturedProducts from '@/components/FeaturedProduct';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import GalleryPreview from '@/components/GalleryPreview';
import buildMetadata from '@/lib/seo';
import SeoMeta from '@/components/SeoMeta';

export const metadata = buildMetadata({
  title: 'Home',
  description: 'Yorkshire Wheel Specialist — expert alloy wheel refurbishment, repair and sales across Sheffield & Yorkshire. Call 07455298619.',
  pathname: '/',
});

export default function Home() {
  return (
    <>
      <SeoMeta
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Yorkshire Wheel Specialist',
          url: 'https://yorkshirewheelspecialist.co.uk',
        }}
      />
      <Hero />
      <Services />
      <FeaturedProducts />
      {/* Gallery preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <GalleryPreview /> {/* uses DEMO_ITEMS with PLACEHOLDER by default */}
        </div>
      </section>
      <Contact />
    </>
  );
}
