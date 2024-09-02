import type { NextPage } from "next";
import styles from "./IntroTestemonials.module.css";

const IntroTestemonials: NextPage = () => {
  return (
    <div className={styles.introTestemonials}>
      <div className={styles.whiteBg} />
      <div className={styles.background}>
        <div className={styles.title}>
          <b className={styles.introTitle}>Testimonials.</b>
        </div>
      </div>
      <div className={styles.whiteBg} />
    </div>
  );
};

export default IntroTestemonials;
