
import { Container } from '@/components/Container';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FeaturedProducts from '@/components/FeaturedProducts';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import GalleryPreview from '@/components/GalleryPreview';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
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
