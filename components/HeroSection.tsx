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

  return (
    <div className={styles.heroSection}>
      <div className={styles.heroSection1}>
        <div className={styles.actionCall}>
          <div className={styles.text}>
            <b className={styles.title}>
              <p className={styles.stepUp}>{`Step Up `}</p>
              <p className={styles.stepUp}>Your Next Performance.</p>
            </b>
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
        <img className={styles.imageIcon} alt="" src="image-1@2x.png" />
      </div>
    </div>
  );
};

export default HeroSection;
