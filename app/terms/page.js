import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TermsContent from '@/components/legal/TermsContent';

export const metadata = {
  title: 'Terms of Service — Violedu',
  description:
    'The terms governing your use of the Violedu website and enrollment in the 6-Week Audition Intensive — the free 30-minute call and the free resources.',
};

export default function TermsPage() {
  return (
    <main className="relative overflow-hidden bg-bg text-ink-dim grain">
      <Header />
      <TermsContent />
      <Footer />
    </main>
  );
}
