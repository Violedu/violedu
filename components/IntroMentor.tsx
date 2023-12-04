import type { NextPage } from "next";
import styles from "./IntroMentor.module.css";

const IntroMentor: NextPage = () => {
  return (
    <div className={styles.introMentor} data-scroll-to="introMentorContainer">
      <div className={styles.whiteBg} />
      <div className={styles.background}>
        <div className={styles.title}>
          <b className={styles.introTitle}>Meet your mentor.</b>
        </div>
      </div>
      <div className={styles.whiteBg} />
    </div>
  );
};

export default IntroMentor;
