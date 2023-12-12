import type { NextPage } from "next";
import styles from "./Technique.module.css";

const Technique: NextPage = () => {
  return (
    <div className={styles.technique}>

      <div className={styles.text}>
        <div className={styles.title}>
          <div className={styles.introTitle}>
            <p className={styles.precisionAndAwareness}>Technique.</p>
            <p className={styles.precisionAndAwareness}>
              Precision and Awareness
            </p>
            <p className={styles.precisionAndAwareness}>in Every Note.</p>
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.text1}>
            A stable instrumental technique is the ground upon which a
            musician´s self-confidence is built. The fine-tuned synchronization
            of controlled bow and left-hand technique, high sensitivity to
            intonation and sound quality, and feeling comfortable in your own
            body and mind are what lead you to play at an advanced level.
          </div>
        </div>
      </div>
      <img className={styles.imageIcon} alt="" src="image@2x.png" />
      <img className={styles.imageIcon1} alt="" src="image1@2x.png" />
    </div>
  );
};

export default Technique;
