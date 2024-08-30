import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { animate } from "motion";
import GeneralNavBar from "../../components/GeneralNavBar";
import GeneralFooter from "../../components/GeneralFooter";
import styles from "./worksheet.module.css";

const Worksheet: NextPage = () => {

  // References for the headline and cards
  const headlineRef = useRef<HTMLDivElement>(null);

  const [hasAnimatedHeadline, setHasAnimatedHeadline] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (headlineRef.current && !hasAnimatedHeadline) {
            animate(headlineRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8 });
            setHasAnimatedHeadline(true);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    if (headlineRef.current) {
      observer.observe(headlineRef.current);
    }

    return () => {
      if (headlineRef.current) {
        observer.unobserve(headlineRef.current);
      }
    };
  }, [hasAnimatedHeadline]);

  return (
    <>
      <Head>
        <title>Violedu - Worksheet</title>
        <link rel="icon" href="/head_logo.png" />
      </Head>
      <div className={styles.worksheet}>
        <GeneralNavBar />
        <div className={styles.content}>
          <div className={styles.title} ref={headlineRef} style={{ opacity: 0, transform: 'translateY(24px)' }}>
            <div className={styles.titleLine}>
              <span>The Ultimate </span>
              <span className={styles.blueWording}>Worksheet</span>
            </div>
            <div className={styles.titleLine}>
              <span>To Sound Like A </span>
              <span className={styles.blueWording}>Pro </span>
              <span>Violinist</span>
              <span>.</span>
            </div>
          </div>
        </div>
        <GeneralFooter />
      </div>
    </>
  );
};

export default Worksheet;
