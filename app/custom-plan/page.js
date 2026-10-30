import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomPlanHero from '@/components/custom-plan/CustomPlanHero';
import CustomPlanHowItWorks from '@/components/custom-plan/CustomPlanHowItWorks';
import CustomPlanPricing from '@/components/custom-plan/CustomPlanPricing';
import Testimonials from '@/components/Testimonials';
import CustomPlanFAQ from '@/components/custom-plan/CustomPlanFAQ';
import CustomPlanCTA from '@/components/custom-plan/CustomPlanCTA';

// Unlisted "secret" page — sent directly to leads who pass on the 6-Week
// Intensive. Not linked from the nav, and kept out of search engines.
export const metadata = {
  title: 'Flexible 1-on-1 Coaching — Violedu',
  description:
    'Pay-as-you-go violin coaching. Book 45-minute 1-on-1 sessions one at a time — as many as you need, on your own schedule. €90 per session.',
  robots: { index: false, follow: false },
};

export default function CustomPlanPage() {
  return (
    <main className="relative overflow-hidden bg-bg text-ink-dim grain">
      <Header />
      <CustomPlanHero />
      <CustomPlanHowItWorks />
      <CustomPlanPricing />
      <Testimonials />
      <CustomPlanFAQ />
      <CustomPlanCTA />
      <Footer />
    </main>
  );
}
