import { useEffect, useRef } from 'react';
import { animate } from "motion";
import type { NextPage } from "next";
import styles from "./Testemonials.module.css";

const Testemonials: NextPage = () => {
  const introTitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && introTitleRef.current) {
          animate(introTitleRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8 });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    if (introTitleRef.current) {
      observer.observe(introTitleRef.current);
    }

    return () => {
      if (introTitleRef.current) {
        observer.unobserve(introTitleRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.testemonials}>
      <div className={styles.frame}>
        <div className={styles.title}>
          <div
            className={styles.introTitle}
            ref={introTitleRef}
            style={{ opacity: 0, transform: 'translateY(24px)' }} // Initial style to hide and position the element
          >
            What They Say.
          </div>
        </div>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" loading="lazy"/>
        <video
          className={styles.video}
          controls
          controlsList="nodownload"
          poster="/testemonial_thumbnail.jpg"
        >
          <source src="https://d2cvlhxoblnid8.cloudfront.net/testemonial_video_1080p_h264_25fps_cmp.mp4" />
        </video>
      </div>
    </div>
  );
};

export default Testemonials;
