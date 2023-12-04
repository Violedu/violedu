import type { NextPage } from "next";
import OnOffFalseDisabledTrue from "./OnOffFalseDisabledTrue";
import styles from "./Testemonials.module.css";

const Testemonials: NextPage = () => {
  return (
    <div className={styles.testemonials}>
      <div className={styles.frame}>
        <div className={styles.title}>
          <b className={styles.introTitle}>What They Say.</b>
        </div>
        <img className={styles.imageIcon} alt="" src="image@2x.png" />
        <video className={styles.video} controls>
          <source src="pexels-mart-production-8471228_(720p) (1).mp4" />
        </video>
        <div className={styles.circles}>
          <OnOffFalseDisabledTrue onOffFalseDisabledTrueCursor="pointer" />
          <OnOffFalseDisabledTrue onOffFalseDisabledTrueCursor="pointer" />
          <OnOffFalseDisabledTrue onOffFalseDisabledTrueCursor="pointer" />
        </div>
      </div>
    </div>
  );
};

export default Testemonials;
