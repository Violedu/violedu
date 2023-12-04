import type { NextPage } from "next";
import styles from "./Knowledge.module.css";

const Knowledge: NextPage = () => {
  return (
    <div className={styles.knowledge}>
      <div className={styles.text}>
        <div className={styles.title}>
          <b className={styles.introTitle}>
            Knowledge. Deepen Your Understanding.
          </b>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.text1}>
            <p
              className={styles.curiosityAndConstant}
            >{`Curiosity and constant renewal of knowledge are the most powerful tools for developing ourselves as artists and people. The understanding behind the score lies in questions concerning not only the historical background but also finding the 'right' tempo, shaping of melody, the language on which the pieces are built, as well as the rhetorical figures, the ability to recognize movement impulses, and so much more. `}</p>
            <p className={styles.curiosityAndConstant}>&nbsp;</p>
            <p className={styles.curiosityAndConstant}>
              This knowledge gives you appreciation for how a work is composed,
              and that deep understanding is what makes you perform
              meaningfully.
            </p>
          </div>
        </div>
      </div>
      <img className={styles.imageIcon} alt="" src="./image2@2x.png" />
    </div>
  );
};

export default Knowledge;
