import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FreeResourcesHero from '@/components/free-resources/FreeResourcesHero';
import FreeResourcesLibrary from '@/components/free-resources/FreeResourcesLibrary';

export const metadata = {
  title: 'Free Resources — Violedu',
  description:
    'Worksheets, handbooks, and practice tools for violinists — free downloads built by a teacher who has coached players for over a decade.',
};

export default function FreeResourcesPage() {
  return (
    <main className="relative overflow-hidden bg-bg text-ink-dim grain">
      <Header />
      <FreeResourcesHero />
      <FreeResourcesLibrary />
      <Footer />
    </main>
  );
}
