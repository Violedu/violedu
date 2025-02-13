import React, { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';
import { setCookie } from 'nookies';

// Add type declarations for Google Analytics globals
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: Record<string, any>[];
    'ga-disable-G-S7PW6X8LQ1'?: boolean;
  }
}

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const storedAcceptance = localStorage.getItem('cookieAccepted');
    if (!storedAcceptance) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setCookie(null, 'cookieAccepted', 'true', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });

    // Type-safe access using bracket notation
    window['ga-disable-G-S7PW6X8LQ1'] = false;
    
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-S7PW6X8LQ1');
    }

    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieAccepted', 'false');
    setCookie(null, 'cookieAccepted', 'false', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });

    window['ga-disable-G-S7PW6X8LQ1'] = true;
    
    document.cookie.split(';').forEach(cookie => {
      const [name] = cookie.split('=');
      if (name.trim().startsWith('_ga')) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      }
    });

    setShowBanner(false);
  };

  if (!showBanner) {
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