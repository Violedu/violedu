import { useEffect, useRef } from 'react';
import { animate } from "motion"
import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./HeroSection.module.css";

const HeroSection: NextPage = () => {
  const onActionCallButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='offersContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const actionCallRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageRef1 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (actionCallRef.current) {
      animate(actionCallRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8 });
    }

    if (imageRef.current) {
      animate(imageRef.current, { opacity: [0, 1], y: [12, 0] }, { duration: 1 });
    }

    if (imageRef1.current) {
      animate(imageRef1.current, { opacity: [0, 1], y: [12, 0] }, { duration: 1 });
    }
  }, []);

  return (
    <div className={styles.heroSection}>
      <div className={styles.heroSection1}>
        <div className={styles.actionCall} ref={actionCallRef} style={{ opacity: 0 }}>
          <div className={styles.text}>
            <div className={styles.title}>
              <p className={styles.stepUp}>{`Step Up `}</p>
              <p className={styles.stepUp}>Your Next Performance.</p>
            </div>
            <div className={styles.paragraph}>
              Unlock your path to an advanced level of playing. Get guidance
              that will help you step up the potential of your next performance.
            </div>
          </div>
          <button
            className={styles.actionCallButton}
            onClick={onActionCallButtonClick}
          >
            <div className={styles.requestALesson}>Request a Lesson</div>
          </button>
        </div>
        <img className={styles.imageIcon} alt="" src="/image-1@2x.png" ref={imageRef} style={{ opacity: 0 }} />
        <img className={styles.imageIcon1} alt="" src="/image-11@2x.png" ref={imageRef1} style={{ opacity: 0 }} />
      </div>
    </div>
  );
};

export default HeroSection;
