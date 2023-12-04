import type { NextPage } from "next";
import styles from "./Interpretation.module.css";

const Interpretation: NextPage = () => {
  return (
    <div className={styles.interpretation}>
      <img className={styles.whiteBgIcon} alt="" src="./white-bg.svg" />
      <div className={styles.frame}>
        <div className={styles.top}>
          <div className={styles.title}>
            <b className={styles.introTitle}>
              Interpretation. Uncover The Story.
            </b>
          </div>
          <div className={styles.text}>
            <div className={styles.thereIsOftenContainer}>
              <p className={styles.thereIsOften}>
                There is often a concern among young musicians: "Am I allowed to
                have my own interpretation?"
              </p>
              <p className={styles.thereIsOften}>
                The answer is yes, of course, and you definitely should! This is
                the way to express your own intelligence, humor, wisdom, and
                everything that you are in your playing. The key to truly
                uncovering your story, however, is to have the skill and
                knowledge to do so.
              </p>
            </div>
            <div className={styles.thereIsOftenContainer}>
              That means to work on your technical skills with awareness and
              precision so you can "say" exactly what you mean. And to
              continuously feed your curiosity with knowledge about what already
              exists to achieve personal freedom within the framework of
              centuries-old compositions. This makes a big difference because
              every decision you make about your performance is not merely about
              what to do, but about who you are as a musician.
            </div>
          </div>
        </div>
        <img className={styles.imageIcon} alt="" src="./image@2x.png" />
        <img className={styles.imageIcon1} alt="" src="./image3@2x.png" />
      </div>
    </div>
  );
};

export default Interpretation;
