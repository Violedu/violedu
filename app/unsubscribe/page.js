import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UnsubscribeConfirm from '@/components/UnsubscribeConfirm';

export const metadata = {
  title: 'Unsubscribe — Violedu',
  description: 'Manage your violedu email preferences.',
  robots: { index: false, follow: false },
};

export default function UnsubscribePage() {
  return (
    <main className="relative overflow-hidden bg-bg text-ink-dim grain">
      <Header />
      <UnsubscribeConfirm />
      <Footer />
    </main>
  );
}
