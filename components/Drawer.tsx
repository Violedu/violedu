import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import styles from "./Drawer.module.css";

type DrawerType = {
  onClose?: () => void;
};

const Drawer: NextPage<DrawerType> = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onAboutClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='introAboutContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    onClose && onClose();
  }, []);

  const onLearningPathClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='introLearningPath']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    onClose && onClose();
  }, []);

  const onMentorClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='mentorContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    onClose && onClose();
  }, []);

  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='offersContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    onClose && onClose();
  }, []);

  return (
    <div className={styles.drawer} data-animate-on-scroll>
      <div className={styles.navBar}>
        <div className={styles.navBar1}>
          <div className={styles.menu}>
            <a className={styles.about} onClick={onAboutClick}>
              About
            </a>
            <div className={styles.menuChild} />
            <a className={styles.about} onClick={onLearningPathClick}>
              Learning Path
            </a>
            <div className={styles.menuChild} />
            <a className={styles.about} onClick={onMentorClick}>
              Mentor
            </a>
          </div>
          <button className={styles.button} onClick={onButtonClick}>
            <div className={styles.text}>Request a lesson</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
