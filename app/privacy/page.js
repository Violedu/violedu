import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrivacyContent from '@/components/legal/PrivacyContent';

export const metadata = {
  title: 'Privacy Policy — Violedu',
  description:
    'How Violedu collects, uses, and protects your information when you visit the website, book the free 30-minute call, enroll in a program, or subscribe to the newsletter.',
};

export default function PrivacyPage() {
  return (
    <main className="relative overflow-hidden bg-bg text-ink-dim grain">
      <Header />
      <PrivacyContent />
      <Footer />
    </main>
  );
}
