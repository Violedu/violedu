import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutBeliefs from '@/components/about/AboutBeliefs';

export const metadata = {
  title: 'About — Violedu',
  description:
    'Meet Kalina — violinist, doctorate-holding educator, and the coach behind Violedu. The story, the method, and the three beliefs that guide every lesson.',
};

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-bg text-ink-dim grain">
      <Header />
      <AboutHero />
      <AboutBeliefs />
      <Footer />
    </main>
  );
}
