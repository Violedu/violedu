import type { NextPage } from "next";
import styles from "./Interpretation.module.css";

const Interpretation: NextPage = () => {
  return (
    <div className={styles.interpretation}>
      <div className={styles.frame}>
        <div className={styles.text}>
          <div className={styles.title}>
            <div className={styles.introTitle}>
              Interpretation. Uncover The Story.
            </div>
          </div>
          <div className={styles.paragraph}>
            <div className={styles.text1}>
              There is often a concern among young musicians: "Am I allowed to
              have my own interpretation?" The answer is yes, of course, and you
              definitely should! This is the way to express your own
              intelligence, humor, wisdom, and everything that you are in your
              playing. The key to truly uncovering your story, however, is to
              have the skill and knowledge to do so.
            </div>
          </div>
        </div>
        <img className={styles.imageIcon} alt="" src="/image3@2x.png" />
      </div>
      <img className={styles.whiteBgIcon} alt="" src="/white-bg.svg" />
    </div>
  );
};

export default Interpretation;
