import { useEffect, useRef, useState } from 'react';
import { animate } from "motion";
import type { NextPage } from "next";
import styles from "./About.module.css";

const About: NextPage = () => {
  const introTitleRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false); // State to track if animation has run

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && introTitleRef.current && !hasAnimated) {
          animate(introTitleRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8 });
          setHasAnimated(true); // Set the flag to true after animation
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
  }, [hasAnimated]); // Depend on hasAnimated to prevent re-running

  return (
    <div className={styles.about}>
      <div className={styles.whiteBg} />
      <div className={styles.frame}>
        <div className={styles.title}>
          <div
            className={styles.introTitle}
            ref={introTitleRef}
            style={{ opacity: 0, transform: 'translateY(24px)' }} // Initial style to hide and position the element
          >
            <p className={styles.fromIntermediate}>From Intermediate</p>
            <p className={styles.fromIntermediate}>To Advanced.</p>
          </div>
        </div>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" loading="lazy" />
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
