import type { NextPage } from "next";
import styles from "./About.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.about}>
      <div className={styles.whiteBg} />
      <div className={styles.frame}>
        <div className={styles.title}>
          <b className={styles.introTitle}>
            <p className={styles.fromIntermediate}>From Intermediate</p>
            <p className={styles.fromIntermediate}>To Advanced.</p>
          </b>
        </div>
        <img className={styles.imageIcon} alt="" src="./image@2x.png" />
        <video className={styles.video} controls>
          <source src="./pexels-c-technical-7095746_(2160p).mp4" />
        </video>
      </div>
    </div>
  );
};

export default About;
