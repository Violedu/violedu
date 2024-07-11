import { useEffect, useRef, useState } from 'react';
import { animate } from "motion";
import type { NextPage } from "next";
import styles from "./Knowledge.module.css";

const Knowledge: NextPage = () => {
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
            <p className={styles.deepenYourUnderstanding}>Knowledge.</p>
            <p className={styles.deepenYourUnderstanding}>
              Deepen Your Understanding.
            </p>
          </div>
        </div>
        <div className={styles.paragraph}>
          <div
            className={styles.text1}
            ref={paragraphRef}
            style={{ opacity: 0, transform: 'translateY(24px)' }} // Initial style to hide and position the element
          >{`Curiosity and constant renewal of knowledge are the most powerful tools for developing ourselves as artists and people. The understanding behind the score lies in questions concerning not only the historical background but also finding the 'right' tempo, shaping of melody, the language on which the pieces are built, as well as the rhetorical figures, the ability to recognize movement impulses, and so much more. `}</div>
        </div>
      </div>
      <img
        className={styles.imageIcon}
        alt=""
        src="/image2@2x.png"
        loading="lazy"
        ref={imageRef}
        style={{ opacity: 0, transform: 'translateY(24px)' }} // Initial style to hide and position the element
      />
    </div>
  );
};

export default Knowledge;
