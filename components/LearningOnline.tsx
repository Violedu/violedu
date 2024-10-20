import { useEffect, useRef, useState } from 'react';
import { animate } from "motion";
import type { NextPage } from "next";
import styles from "./LearningOnline.module.css";

const LearningOnline: NextPage = () => {
  const introTitleRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  // State variables to track if animations have run
  const [hasAnimatedTitle, setHasAnimatedTitle] = useState(false);
  const [hasAnimatedParagraph, setHasAnimatedParagraph] = useState(false);
  const [hasAnimatedImage, setHasAnimatedImage] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (introTitleRef.current && !hasAnimatedTitle) {
            animate(introTitleRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8 });
            setHasAnimatedTitle(true); // Set the flag to true after animation
          }
          if (paragraphRef.current && !hasAnimatedParagraph) {
            animate(paragraphRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8, delay: 0.2 });
            setHasAnimatedParagraph(true); // Set the flag to true after animation
          }
          if (imageRef.current && !hasAnimatedImage) {
            animate(imageRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8, delay: 0.4 });
            setHasAnimatedImage(true); // Set the flag to true after animation
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    if (introTitleRef.current) {
      observer.observe(introTitleRef.current);
    }
    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (introTitleRef.current) {
        observer.unobserve(introTitleRef.current);
      }
      if (paragraphRef.current) {
        observer.unobserve(paragraphRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [hasAnimatedTitle, hasAnimatedParagraph, hasAnimatedImage]); // Depend on animation flags

  return (
    <div className={styles.knowledge}>
      <div className={styles.text}>
        <div className={styles.title}>
          <div
            className={styles.introTitle}
            ref={introTitleRef}
            style={{ opacity: 0, transform: 'translateY(24px)' }} // Initial style to hide and position the element
          >
            <p className={styles.deepenYourUnderstanding}>Learn Online.</p>
            <p className={styles.deepenYourUnderstanding}>
              From Anywhere.
            </p>
          </div>
        </div>
        <div className={styles.paragraph}>
          <div
            className={styles.text1}
            ref={paragraphRef}
            style={{ opacity: 0, transform: 'translateY(24px)' }} // Initial style to hide and position the element
          >
            {`Experience the convenience of online mentoring, designed to fit your busy schedule. Whether you're at home or traveling, you can access high-quality, personalized instruction tailored to your needs. Our flexible format allows for recorded video feedback, ensuring continuous progress between sessions.`}
          </div>
        </div>
      </div>
      <img
        className={styles.imageIcon}
        alt=""
        src="/image5@2x.png"
        ref={imageRef}
        style={{ opacity: 0, transform: 'translateY(24px)' }} // Initial style to hide and position the element
      />
    </div>
  );
};

export default LearningOnline;
