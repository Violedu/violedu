import type { NextPage } from "next";
import styles from "./Testemonials.module.css";

const Testemonials: NextPage = () => {
  return (
    <div className={styles.testemonials}>
      <div className={styles.frame}>
        <div className={styles.title}>
          <div className={styles.introTitle}>What They Say.</div>
        </div>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        <video
          className={styles.video}
          controls
          controlsList="nodownload"
          poster="/video_poster_2.PNG"
        >
          <source src="https://d2cvlhxoblnid8.cloudfront.net/about_video_1080.mp4" />
        </video>
      </div>
    </div>
  );
};

export default Testemonials;
