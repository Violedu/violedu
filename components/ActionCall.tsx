import { useCallback } from "react";
import styles from "./ActionCall.module.css";
import { useNavBar } from "../components/NavBarContext";

const ActionCall = () => {
  const { onRequestLessonClick } = useNavBar();

  const onActionCallButtonClick = useCallback(() => {
    onRequestLessonClick();
  }, [onRequestLessonClick]);

  return (
    <div className={styles.actionCall}>
      <div className={styles.actionCall1}>
        <div className={styles.text}>
          <div className={styles.title}>
            <p className={styles.stepUp}>{`Step Up `}</p>
            <p className={styles.stepUp}>Your Next Performance.</p>
          </div>
          <div className={styles.paragraph}>
            Unlock your path to an advanced level of playing. Get guidance that
            will help you step up the potential of your next performance.
          </div>
        </div>
        <button
          className={styles.actionCallButton}
          onClick={onActionCallButtonClick}
        >
          <div className={styles.requestALesson}>Request a Lesson</div>
        </button>
      </div>
    </div>
  );
};

export default ActionCall;
