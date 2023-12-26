import type { NextPage } from "next";
import styles from "./About.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.about}>
      <div className={styles.whiteBg} />
      <div className={styles.frame}>
        <div className={styles.title}>
          <div className={styles.introTitle}>
            <p className={styles.fromIntermediate}>From Intermediate</p>
            <p className={styles.fromIntermediate}>To Advanced.</p>
          </div>
        </div>
        <img className={styles.imageIcon} alt="" src="/violedu/image@2x.png" />
        <video
          className={styles.video}
          controls
          controlsList="nodownload"
          poster="/violedu/video_poster_1.PNG"
        >
          <source src="/violedu/pexels-c-technical-7095746_(2160p).mp4" />
        </video>
      </div>
    </div>
  );
};

export default About;
