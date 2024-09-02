import { useEffect, useRef, useState } from 'react';
import { animate } from "motion";
import type { NextPage } from "next";
import styles from "./Mentor.module.css";

const Mentor: NextPage = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  // State variables to track if animations have run
  const [hasAnimatedTitle, setHasAnimatedTitle] = useState(false);
  const [hasAnimatedImage, setHasAnimatedImage] = useState(false);
  const [hasAnimatedText, setHasAnimatedText] = useState(false);
  const [hasAnimatedButtons, setHasAnimatedButtons] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (titleRef.current && !hasAnimatedTitle) {
            animate(titleRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8 });
            setHasAnimatedTitle(true); // Set the flag to true after animation
          }
          if (imageRef.current && !hasAnimatedImage) {
            animate(imageRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8, delay: 0.2 });
            setHasAnimatedImage(true); // Set the flag to true after animation
          }
          if (textRef.current && !hasAnimatedText) {
            animate(textRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8, delay: 0.4 });
            setHasAnimatedText(true); // Set the flag to true after animation
          }
          if (buttonsRef.current && !hasAnimatedButtons) {
            animate(buttonsRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8, delay: 0.6 });
            setHasAnimatedButtons(true); // Set the flag to true after animation
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    if (buttonsRef.current) {
      observer.observe(buttonsRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
      if (buttonsRef.current) {
        observer.unobserve(buttonsRef.current);
      }
    };
  }, [hasAnimatedTitle, hasAnimatedImage, hasAnimatedText, hasAnimatedButtons]); // Depend on animation flags

  return (
    <div className={styles.mentor}>
      <div className={styles.title} ref={titleRef}>
        <div className={styles.introTitle}>Work With Kalina.</div>
      </div>
      <div className={styles.frame}>
        <img className={styles.imageIcon} alt="" src="/image8@2x.png" ref={imageRef} />
        <div className={styles.text} ref={textRef}>
          <div className={styles.mentorTextParent}>
            <div className={styles.mentorText}>
              Kalina is a versatile and accomplished violinist with over a decade of teaching experience. As a solo musician, she has captivated audiences with her virtuosity, and as a member of the renowned chamber ensemble "Silhouettes" since 2010, she has graced international stages.
            </div>
            <div className={styles.mentorText1}>
              With a doctoral degree in violin and a deep passion for education, Kalina brings a wealth of expertise to her teaching, making her the perfect guide for your violin journey.
            </div>
            <div className={styles.buttons} ref={buttonsRef}>
              <a className={styles.button} href="https://www.instagram.com/kalinageorgieva_violinist/" target="_blank">
                <div className={styles.instagram}>
                  <div className={styles.icon}>
                    <img className={styles.iconinstagram} alt="" src="/iconinstagram.svg" />
                  </div>
                  <div className={styles.footerText}>Instagram</div>
                </div>
              </a>
              <a className={styles.button} href="https://www.youtube.com/@kalinamiteva5965" target="_blank">
                <div className={styles.instagram}>
                  <div className={styles.icon}>
                    <img className={styles.iconyoutube} alt="" src="/iconyoutube.svg" />
                  </div>
                  <div className={styles.footerText}>YouTube</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
