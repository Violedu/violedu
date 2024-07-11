import { useEffect, useRef, useState } from 'react';
import { animate } from "motion";
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

  const introTitleRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLImageElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  const [hasAnimatedTitle, setHasAnimatedTitle] = useState(false);
  const [hasAnimatedImage1, setHasAnimatedImage1] = useState(false);
  const [hasAnimatedText1, setHasAnimatedText1] = useState(false);
  const [hasAnimatedImage2, setHasAnimatedImage2] = useState(false);
  const [hasAnimatedText2, setHasAnimatedText2] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (introTitleRef.current && !hasAnimatedTitle) {
            animate(introTitleRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8 });
            setHasAnimatedTitle(true);
          }
          if (image1Ref.current && !hasAnimatedImage1 && hasAnimatedTitle) {
            animate(image1Ref.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8, delay: 0.2 });
            setHasAnimatedImage1(true);
          }
          if (text1Ref.current && !hasAnimatedText1 && hasAnimatedImage1) {
            animate(text1Ref.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8, delay: 0.4 });
            setHasAnimatedText1(true);
          }
          if (image2Ref.current && !hasAnimatedImage2 && hasAnimatedText1) {
            animate(image2Ref.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8, delay: 0.6 });
            setHasAnimatedImage2(true);
          }
          if (text2Ref.current && !hasAnimatedText2 && hasAnimatedImage2) {
            animate(text2Ref.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8, delay: 0.8 });
            setHasAnimatedText2(true);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    if (introTitleRef.current) {
      observer.observe(introTitleRef.current);
    }
    if (image1Ref.current) {
      observer.observe(image1Ref.current);
    }
    if (text1Ref.current) {
      observer.observe(text1Ref.current);
    }
    if (image2Ref.current) {
      observer.observe(image2Ref.current);
    }
    if (text2Ref.current) {
      observer.observe(text2Ref.current);
    }

    return () => {
      if (introTitleRef.current) {
        observer.unobserve(introTitleRef.current);
      }
      if (image1Ref.current) {
        observer.unobserve(image1Ref.current);
      }
      if (text1Ref.current) {
        observer.unobserve(text1Ref.current);
      }
      if (image2Ref.current) {
        observer.unobserve(image2Ref.current);
      }
      if (text2Ref.current) {
        observer.unobserve(text2Ref.current);
      }
    };
  }, [hasAnimatedTitle, hasAnimatedImage1, hasAnimatedText1, hasAnimatedImage2, hasAnimatedText2]);

  return (
    <div className={styles.inPersonAndOnline}>
      <div className={styles.title}>
        <div
          className={styles.introTitle}
          ref={introTitleRef}
          style={{ opacity: 0, transform: 'translateY(24px)' }} // Initial style to hide and position the element
        >
          In Person And Online.
        </div>
      </div>
      <div className={styles.options}>
        <div className={styles.topContent}>
          <img
            className={styles.imageIcon}
            alt=""
            src="/stuttgart-354557_1280.jpg"
            loading="lazy"
            ref={image1Ref}
            style={{ opacity: 0, transform: 'translateY(24px)' }} // Initial style to hide and position the element
          />
          <div className={styles.topText} ref={text1Ref} style={{ opacity: 0, transform: 'translateY(24px)' }}>
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
          <img
            className={styles.imageIcon1}
            alt=""
            src="/image5@2x.png"
            loading="lazy"
            ref={image2Ref}
            style={{ opacity: 0, transform: 'translateY(24px)' }} // Initial style to hide and position the element
          />
          <div className={styles.topText} ref={text2Ref} style={{ opacity: 0, transform: 'translateY(24px)' }}>
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
