
import { Container } from '@/components/Container';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FeaturedProducts from '@/components/FeaturedProducts';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProducts />
      <Testimonials />
      <Contact />
    </>
  );
}
