import type { NextPage } from "next";
import styles from "./IntroLearningPath.module.css";

const IntroLearningPath: NextPage = () => {
  return (
    <div
      className={styles.introLearningPath}
      data-scroll-to="introLearningPath"
    >
      <div className={styles.title}>
        <b className={styles.introTitle}>Tailor your learning path.</b>
      </div>
    </div>
  );
};

export default IntroLearningPath;
