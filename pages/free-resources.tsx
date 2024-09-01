import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { animate } from "motion";
import NavBar from "../components/NavBar";
import { NavBarProvider } from "../components/NavBarContext";
import GeneralFooter from "../components/GeneralFooter";
import Card from "../components/Card";
import styles from "./free-resources.module.css";

const FreeResources: NextPage = () => {
  const cards = [
    {
      imageSrc: "/stuttgart-354557_1280.jpg",
      title: "Card Title 1",
      text: "This is a description for card 1.",
      buttonText: "Download The Worksheet",
      buttonLink: "/resources/worksheet"
    },
    {
      imageSrc: "/stuttgart-354557_1280.jpg",
      title: "Card Title 2",
      text: "This is a description for card 2.",
      buttonText: "Download The Handbook",
      buttonLink: "/explore-2"
    },
    {
      imageSrc: "/stuttgart-354557_1280.jpg",
      title: "Card Title 3",
      text: "This is a description for card 3.",
      buttonText: "Download The Handbook",
      buttonLink: "/read-more-3"
    },
    {
      imageSrc: "/stuttgart-354557_1280.jpg",
      title: "Card Title 4",
      text: "This is a description for card 4.",
      buttonText: "Download The Handbook",
      buttonLink: "/get-started-4"
    },
  ];

  // References for the headline and cards
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const [hasAnimatedHeadline, setHasAnimatedHeadline] = useState(false);
  const [hasAnimatedCards, setHasAnimatedCards] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (headlineRef.current && !hasAnimatedHeadline) {
            animate(headlineRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8 });
            setHasAnimatedHeadline(true);

            setTimeout(() => {
              if (!hasAnimatedCards) {
                cardRefs.current.forEach((card, index) => {
                  if (card) {
                    animate(card, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8, delay: 0.2 * index });
                  }
                });
                setHasAnimatedCards(true);
              }
            }, 300);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    if (headlineRef.current) {
      observer.observe(headlineRef.current);
    }
    cardRefs.current.forEach(card => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      if (headlineRef.current) {
        observer.unobserve(headlineRef.current);
      }
      cardRefs.current.forEach(card => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, [hasAnimatedHeadline, hasAnimatedCards]);

  return (
    <NavBarProvider>
      <>
        <Head>
          <title>Violedu - Free Resources</title>
          <link rel="icon" href="/head_logo.png" />
        </Head>
        <NavBar />
        <div className={styles.freeResources}>
          <div className={styles.content}>
            <div className={styles.title} ref={headlineRef} style={{ opacity: 0, transform: 'translateY(24px)' }}>
              <div className={styles.titleLine}>
                <span>A Violinist's </span>
                <span className={styles.blueWording}>Must</span>
                <span> Have</span>
              </div>
              <div className={styles.titleLine}>
                <span className={styles.blueWording}>Free </span>
                <span>Resources</span>
                <span>.</span>
              </div>
            </div>
            <div className={styles.cardsContainer}>
              {cards.map((card, index) => (
                <div
                  key={index}
                  ref={(el) => cardRefs.current[index] = el}
                  style={{ opacity: 0, transform: 'translateY(24px)' }}
                >
                  <Card
                    imageSrc={card.imageSrc}
                    title={card.title}
                    text={card.text}
                    buttonText={card.buttonText}
                    buttonLink={card.buttonLink}
                  />
                </div>
              ))}
            </div>
          </div>
          <GeneralFooter />
        </div>
      </>
    </NavBarProvider>
  );
};

export default FreeResources;
