import type { NextPage } from "next";
import styles from "./Knowledge.module.css";

const Knowledge: NextPage = () => {
  return (
    <div className={styles.knowledge}>
      <div className={styles.text}>
        <div className={styles.title}>
          <div className={styles.introTitle}>
            <p className={styles.deepenYourUnderstanding}>Knowledge.</p>
            <p className={styles.deepenYourUnderstanding}>
              Deepen Your Understanding.
            </p>
          </div>
        </div>
        <div className={styles.paragraph}>
          <div
            className={styles.text1}
          >{`Curiosity and constant renewal of knowledge are the most powerful tools for developing ourselves as artists and people. The understanding behind the score lies in questions concerning not only the historical background but also finding the 'right' tempo, shaping of melody, the language on which the pieces are built, as well as the rhetorical figures, the ability to recognize movement impulses, and so much more. `}</div>
        </div>
      </div>
      <img className={styles.imageIcon} alt="" src="/public/image2@2x.png" />
    </div>
  );
};

export default Knowledge;
