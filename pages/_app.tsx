// violedu/pages/_app.tsx
import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script"; // <-- New: Import Script for GA
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { DialogProvider } from '../components/DialogContext';
import { LearningPathProvider } from "../components/LearningPathContext";
import CookieBanner from '../components/CookieBanner';
import "./global.css";

// GA Measurement ID
const GA_TRACKING_ID = "G-S7PW6X8LQ1";

// --- Custom Hook to get the client-side consent state ---
const useConsentState = () => {
    // State to hold the consent status: true (Accepted), false (Declined), null (No choice yet)
    const [cookiesAccepted, setCookiesAccepted] = useState<boolean | null>(null);

    useEffect(() => {
        // This runs client-side only, after hydration
        const storedAcceptance = localStorage.getItem('cookieAccepted');
        if (storedAcceptance === 'true') {
            setCookiesAccepted(true);
        } else if (storedAcceptance === 'false') {
            setCookiesAccepted(false);
        } else {
            setCookiesAccepted(null);
        }
    }, []);

    return cookiesAccepted;
}
// --------------------------------------------------------

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const cookiesAccepted = useConsentState(); // Get the current consent state

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const muiTheme = createTheme();

  // Determine the initial consent state for the inline script
  const initialConsent = cookiesAccepted === true ? 'granted' : 'denied';

  // Script to load GA and set initial consent mode (before the config/page_view)
  const gaConsentInit = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    // Set default consent to 'denied' if no choice is made, or 'granted' if accepted
    gtag('consent', 'default', {
      'analytics_storage': '${initialConsent}',
      'ad_storage': 'denied' // Keep ad storage denied unless you need it
    });

    // Only configure GA (which automatically sends the initial pageview) if consent is granted
    if ('${initialConsent}' === 'granted') {
        gtag('config', '${GA_TRACKING_ID}', {
          send_page_view: true 
        });
    }
  `;

  return (
    <LearningPathProvider>
      <DialogProvider>
        <Fragment>
          
          {/* 1. Load the GA script */}
          <Script
            strategy="afterInteractive" 
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          
          {/* 2. GA Consent Initialization Script */}
          <Script
            id="gtag-init-consent"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: gaConsentInit }}
          />

          <Head>
            {/* Title Tag */}
            <title>Online Violin Lessons for Intermediate & Advanced Players | Violedu</title>
            
            {/* Meta Description */}
            <meta
              name="description"
              content="Step up your next violin performance with personalized online violin lessons, expert feedback and progress tracking for intermediate to advanced violinists."
            />
            
            {/* Keywords */}
            <meta
              name="keywords"
              content="violin lessons, learn violin, online violin courses, violin tutorials, music education, violin practice, music lessons online"
            />
            
            {/* Open Graph Tags */}
            <meta property="og:title" content="Online Violin Lessons | Violedu" />
            <meta
              property="og:description"
              content="Step up your next violin performance with personalized online violin lessons, expert feedback and progress tracking for intermediate to advanced violinists."
            />
            <meta property="og:image" content="https://www.violedu.com/logo_open_graph.png" />
            <meta property="og:url" content="https://www.violedu.com" />
            <meta property="og:type" content="website" />

            {/* Structured Data (JSON-LD) */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "http://schema.org",
                  "@type": "Organization",
                  "name": "Violedu",
                  "foundingDate": "2023",
                  "email": "contact@violedu.com",
                  "url": "https://www.violedu.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.violedu.com/logo_structured_data.png",
                    "name": "Violedu Logo",
                    "width": "196",
                    "height": "196"
                  }
                })
              }}
            />
            
            {/* Viewport */}
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <Component {...pageProps} />
            <CookieBanner /> 
          </ThemeProvider>
        </Fragment>
      </DialogProvider>
    </LearningPathProvider>
  );
}
