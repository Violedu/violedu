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
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (actionCallRef.current) {
      animate(actionCallRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8 });
    }

    if (imgRef.current) {
      animate(imgRef.current, { opacity: [0, 1], y: [10, 0] }, { duration: 1 });
    }
  }, []);

  return (
    <div className={styles.heroSection}>
      <div className={styles.heroSection1}>
        <div className={styles.actionCall} ref={actionCallRef}>
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
        <div ref={imgRef}>
          <img className={styles.imageIcon} alt="" src="/image-1@2x.png" />
          <img className={styles.imageIcon1} alt="" src="/image-11@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
