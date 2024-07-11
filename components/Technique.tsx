import { useEffect, useRef, useState } from 'react';
import { animate } from "motion";
import type { NextPage } from "next";
import styles from "./Technique.module.css";

const Technique: NextPage = () => {
  const introTitleRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageRef1 = useRef<HTMLImageElement>(null);

  // State variables to track if animations have run
  const [hasAnimatedTitle, setHasAnimatedTitle] = useState(false);
  const [hasAnimatedParagraph, setHasAnimatedParagraph] = useState(false);
  const [hasAnimatedImage, setHasAnimatedImage] = useState(false);
  const [hasAnimatedImage1, setHasAnimatedImage1] = useState(false);

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
          if (imageRef1.current && !hasAnimatedImage1) {
            animate(imageRef1.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8, delay: 0.6 });
            setHasAnimatedImage1(true); // Set the flag to true after animation
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
    if (imageRef1.current) {
      observer.observe(imageRef1.current);
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
      if (imageRef1.current) {
        observer.unobserve(imageRef1.current);
      }
    };
  }, [hasAnimatedTitle, hasAnimatedParagraph, hasAnimatedImage, hasAnimatedImage1]); // Depend on animation flags

  return (
    <div className={styles.technique}>
      <div className={styles.text}>
        <div className={styles.title}>
          <div
            className={styles.introTitle}
            ref={introTitleRef}
            style={{ opacity: 0, transform: 'translateY(24px)' }} // Initial style to hide and position the element
          >
            <p className={styles.precisionAndAwareness}>Technique.</p>
            <p className={styles.precisionAndAwareness}>
              Precision and Awareness
            </p>
            <p className={styles.precisionAndAwareness}>in Every Note.</p>
          </div>
        </div>
        <div className={styles.paragraph}>
          <div
            className={styles.text1}
            ref={paragraphRef}
            style={{ opacity: 0, transform: 'translateY(24px)' }} // Initial style to hide and position the element
          >
            A stable instrumental technique is the ground upon which a
            musician´s self-confidence is built. The fine-tuned synchronization
            of controlled bow and left-hand technique, high sensitivity to
            intonation and sound quality, and feeling comfortable in your own
            body and mind are what lead you to play at an advanced level.
          </div>
        </div>
      </div>
      <img
        className={styles.imageIcon}
        alt=""
        src="/image@2x.png"
        ref={imageRef}
        style={{ opacity: 0, transform: 'translateY(24px)' }} // Initial style to hide and position the element
      />
      <img
        className={styles.imageIcon1}
        alt=""
        src="/image1@2x.png"
        ref={imageRef1}
        style={{ opacity: 0, transform: 'translateY(24px)' }} // Initial style to hide and position the element
      />
    </div>
  );
};

export default Technique;
