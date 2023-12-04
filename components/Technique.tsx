import type { NextPage } from "next";
import styles from "./Technique.module.css";

const Technique: NextPage = () => {
  return (
    <div className={styles.technique}>
      <div className={styles.title}>
        <b className={styles.introTitle}>
          <p className={styles.precisionAndAwareness}>Technique.</p>
          <p className={styles.precisionAndAwareness}>
            Precision and Awareness in
          </p>
          <p className={styles.precisionAndAwareness}>Every Note.</p>
        </b>
      </div>
      <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
      <div className={styles.text}>
        <div className={styles.leftTextBox}>
          A stable instrumental technique is the ground upon which a musician´s
          self-confidence is built. The fine-tuned synchronization of controlled
          bow and left-hand technique, high sensitivity to intonation and sound
          quality, and feeling comfortable in your own body and mind are what
          lead you to play at an advanced level.
        </div>
        <div className={styles.leftTextBox}>
          Mastering technique not only ensures precision but also empowers you
          to guide your own musical journey with purpose and grace. This is why
          my goal is for my students to achieve their full potential in the
          fundamental components in order to enjoy the process of successfully
          performing their own musical ideas with conviction and elegance.
        </div>
      </div>
    </div>
  );
};

export default Technique;
