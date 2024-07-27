import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./Drawer.module.css";
import { useNavBar } from "../components/NavBarContext";

type DrawerType = {
  onClose?: () => void;
};

const Drawer: NextPage<DrawerType> = ({ onClose }) => {
  const { onAboutClick, onLearningPathClick, onMentorClick, onRequestLessonClick } = useNavBar();

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

  const handleClick = (callback: () => void) => {
    return () => {
      callback();
      if (onClose) onClose();
    };
  };

  return (
    <div className={styles.drawer} data-animate-on-scroll>
      <div className={styles.navBar}>
        <div className={styles.navBar1}>
          <div className={styles.menu}>
            <a className={styles.menuItem} onClick={handleClick(onAboutClick)}>
              About
            </a>
            <a className={styles.menuItem} onClick={handleClick(onLearningPathClick)}>
              Learning Path
            </a>
            <a className={styles.menuItem} onClick={handleClick(onMentorClick)}>
              Mentor
            </a>
          </div>
          <button className={styles.button} onClick={handleClick(onRequestLessonClick)}>
            <div className={styles.text}>Request a lesson</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
