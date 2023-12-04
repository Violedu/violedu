import type { NextPage } from "next";
import styles from "./Intro.module.css";

type IntroType = {
  introTitle?: string;
};

const Intro: NextPage<IntroType> = ({ introTitle }) => {
  return (
    <div className={styles.introAbout} data-scroll-to="introAboutContainer">
      <div className={styles.title}>
        <b className={styles.introTitle}>{introTitle}</b>
      </div>
    </div>
  );
};

export default Intro;
