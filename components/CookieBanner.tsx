import React, { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';
import { setCookie, destroyCookie } from 'nookies'; // Import nookies

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);

  useEffect(() => {
    const storedAcceptance = localStorage.getItem('cookieAccepted');
    if (storedAcceptance === 'true') {
      setHasAccepted(true);
    } else if (storedAcceptance === 'false') {
      setHasAccepted(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setCookie(null, 'cookieAccepted', 'true', { // Use nookies to set cookie
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });
    setShowBanner(false);
    setHasAccepted(true);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieAccepted', 'false');
    setCookie(null, 'cookieAccepted', 'false', { // Use nookies to set cookie
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });
    setShowBanner(false);
    setHasAccepted(false);
    disableGoogleAnalytics();
  };

  const disableGoogleAnalytics = () => {
    // Disable Google Analytics tracking
    window['ga-disable-G-S7PW6X8LQ1'] = true;
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
