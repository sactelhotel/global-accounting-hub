import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { CTA } from '@/components/CTA';
import { Methodology } from '@/components/Methodology';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <CTA />
      <Methodology />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
