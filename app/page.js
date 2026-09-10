import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrailerSection from '@/components/TrailerSection';
import WhyLearn from '@/components/WhyLearn';
import MasterclassCurriculum from '@/components/masterclass/MasterclassCurriculum';
import StillQuestions from '@/components/StillQuestions';
import MasterclassPricing from '@/components/masterclass/MasterclassPricing';
import MasterclassBonuses from '@/components/masterclass/MasterclassBonuses';
import MasterclassGuarantees from '@/components/masterclass/MasterclassGuarantees';
import Testimonials from '@/components/Testimonials';
import MasterclassFAQ from '@/components/masterclass/MasterclassFAQ';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-bg text-ink-dim grain">
      <Header />
      <Hero />
      <TrailerSection />
      <WhyLearn />
      <MasterclassCurriculum />
      <StillQuestions />
      <MasterclassPricing />
      <MasterclassBonuses />
      <MasterclassGuarantees />
      <Testimonials />
      <MasterclassFAQ />
      <Footer />
    </main>
  );
}
