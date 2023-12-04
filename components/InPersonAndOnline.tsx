import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./InPersonAndOnline.module.css";

const InPersonAndOnline: NextPage = () => {
  const router = useRouter();

  const onLinkClick = useCallback(() => {
    router.push("/Request1");
  }, [router]);

  const onLink1Click = useCallback(() => {
    router.push("/Request1");
  }, [router]);

  return (
    <div className={styles.inPersonAndOnline}>
      <div className={styles.title}>
        <b className={styles.introTitle}>In Person And Online.</b>
      </div>
      <div className={styles.options}>
        <div className={styles.topContent}>
          <img className={styles.imageIcon} alt="" src="/image4@2x.png" />
          <div className={styles.topText}>
            <div className={styles.liveText}>
              Engaging in face-to-face sessions held in Stuttgart, Germany,
              enables you to comprehend the subtle nuances of in-person guidance
              customized to meet your specific musical goals.
            </div>
            <a className={styles.link} onClick={onLinkClick}>
              <div className={styles.requestALesson}>
                Request a Lesson In Person
              </div>
              <img className={styles.linkChild} alt="" src="/vector-5.svg" />
            </a>
          </div>
        </div>
        <div className={styles.bottomContent}>
          <img className={styles.imageIcon1} alt="" src="/image5@2x.png" />
          <div className={styles.topText}>
            <div className={styles.liveText}>
              Experience the convenience and flexibility of learning online.
              Discover how technology can enhance your musical journey.
            </div>
            <a className={styles.link} onClick={onLink1Click}>
              <div className={styles.requestALesson}>
                Request a Lesson Online
              </div>
              <img className={styles.linkChild} alt="" src="/vector-5.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InPersonAndOnline;
