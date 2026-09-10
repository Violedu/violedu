import Script from 'next/script';
import './globals.css';
import HelpWidget from '@/components/HelpWidget';
import CookieConsentBridge from '@/components/CookieConsentBridge';

export const metadata = {
  title: 'Violedu — The 6-Week Audition Intensive for Violinists',
  description:
    'A 6-week, twice-weekly 1-on-1 coaching intensive that takes your audition program from "can play through it" to audition-ready — for conservatoire pre-screens, orchestral auditions, and diploma and grade exams.',
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XWZHCP1E0Z';
const IS_DEV = process.env.NODE_ENV !== 'production';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/head_logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Britti Sans isn't on Google Fonts. Use a close grotesque substitute.
            Newsreader is the editorial serif for the hero headline — the closest
            free match to GT Super Text (warm, moderate contrast, large x-height). */}
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {GA_ID && (
          <Script id="ga-consent-default" strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });
            `}
          </Script>
        )}
      </head>
      <body className="font-sans">
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { debug_mode: ${IS_DEV} });
              `}
            </Script>
          </>
        )}

        {children}
        <HelpWidget />
        <CookieConsentBridge />
      </body>
    </html>
  );
}
