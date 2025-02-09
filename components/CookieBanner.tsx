import React, { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);

  useEffect(() => {
    const storedAcceptance = localStorage.getItem('cookieAccepted');
    if (storedAcceptance === 'true') {
      setHasAccepted(true);
    } else {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setShowBanner(false);
    setHasAccepted(true);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieAccepted', 'false');
    setShowBanner(false);
    setHasAccepted(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className={styles.cookieBanner}>
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
  );
};

export default CookieBanner;
