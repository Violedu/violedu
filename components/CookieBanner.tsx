// violedu/components/CookieBanner.tsx
import React, { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';
import { setCookie } from 'nookies';

const GA_TRACKING_ID = "G-S7PW6X8LQ1";

// Add type declarations for Google Analytics globals
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: Record<string, any>[];
  }
}

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Only show the banner if no choice has been stored
    const storedAcceptance = localStorage.getItem('cookieAccepted');
    if (storedAcceptance === null) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    // 1. Store the user's choice
    localStorage.setItem('cookieAccepted', 'true');
    setCookie(null, 'cookieAccepted', 'true', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    
    // 2. Update GA Consent
    if (typeof window.gtag === 'function') {
      // a. Update the consent status to GRANTED
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
      });

      // b. Send the config/pageview, which was previously missed for this session
      window.gtag('config', GA_TRACKING_ID, {
        'page_title': document.title,
        'page_path': window.location.pathname,
      });
    }
    
    // 3. Hide the banner
    setShowBanner(false);
  };

  const handleDecline = () => {
    // 1. Store the user's choice
    localStorage.setItem('cookieAccepted', 'false');
    setCookie(null, 'cookieAccepted', 'false', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });

    // 2. Update GA Consent (optional, but confirms denial)
    if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
        });
    }
    
    // 3. Clear GA cookies on decline (Good practice)
    document.cookie.split(';').forEach(cookie => {
      const [name] = cookie.split('=');
      if (name.trim().startsWith('_ga')) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      }
    });
    
    // 4. Hide the banner
    setShowBanner(false);
  };

  // Only render the banner if the state says to show it and we are client-side
  if (typeof window === 'undefined' || !showBanner) {
    return null;
  }
  
  return (
    <div className={styles.cookieBanner}>
      <div className={styles.cookieBannerWrapper}>
        <div className={styles.cookieText}>
          We use cookies to improve your experience, analyze site usage, and show personalized content.
        </div>
        <div className={styles.buttons}>
          <button className={styles.acceptButton} onClick={handleAccept}>
            Accept
          </button>
          <button className={styles.declineButton} onClick={handleDecline}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
