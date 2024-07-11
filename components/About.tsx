import type { NextPage } from "next";
import styles from "./About.module.css";

//test new link

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
        <img className={styles.imageIcon} alt="" src="/image@2x.png" loading="lazy"/>
        <video
          className={styles.video}
          controls
          controlsList="nodownload"
          poster="/about_cover.jpg"
        >
          <source src="https://d2cvlhxoblnid8.cloudfront.net/about_video_1080p_h264_25fps_cmp.mp4" />
        </video>
      </div>
    </div>
  );
};

export default About;
