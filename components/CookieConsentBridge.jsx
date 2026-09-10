'use client';

import { CookieConsent } from '@/components/ui/cookie-consent';

export default function CookieConsentBridge() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-XWZHCP1E0Z';

  const handleAccept = (prefs) => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

    // prefs = [essential, analytics, marketing] — order matches DEFAULT_COOKIE_CATEGORIES
    const analytics = !!prefs[1];
    const marketing = !!prefs[2];

    window.gtag('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: marketing ? 'granted' : 'denied',
      ad_user_data: marketing ? 'granted' : 'denied',
      ad_personalization: marketing ? 'granted' : 'denied',
    });

    if (analytics && gaId) {
      window.gtag('config', gaId);
    }
  };

  const handleDecline = () => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  };

  return <CookieConsent onAccept={handleAccept} onDecline={handleDecline} cookiePolicyUrl="/privacy" />;
}
