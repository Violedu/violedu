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

  const scrollToSection = useCallback((selector: string) => {
    const anchor = document.querySelector(selector);
    const navBarHeight = document.querySelector("[data-scroll-to='navBar']")?.clientHeight || 0;

    if (anchor) {
      const offsetPosition = anchor.getBoundingClientRect().top + window.scrollY - navBarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, []);

  const onAboutClick = useCallback(() => {
    scrollToSection("[data-scroll-to='introAboutContainer']");
    if (onClose) onClose();
  }, [scrollToSection, onClose]);

  const onLearningPathClick = useCallback(() => {
    scrollToSection("[data-scroll-to='introLearningPath']");
    if (onClose) onClose();
  }, [scrollToSection, onClose]);

  const onMentorClick = useCallback(() => {
    scrollToSection("[data-scroll-to='introMentorContainer']");
    if (onClose) onClose();
  }, [scrollToSection, onClose]);

  const onButtonClick = useCallback(() => {
    scrollToSection("[data-scroll-to='offersContainer']");
    if (onClose) onClose();
  }, [scrollToSection, onClose]);

  return (
    <div className={styles.drawer} data-animate-on-scroll>
      <div className={styles.navBar}>
        <div className={styles.navBar1}>
          <div className={styles.menu}>
            <a className={styles.menuItem} onClick={onAboutClick}>
              About
            </a>
            <a className={styles.menuItem} onClick={onLearningPathClick}>
              Learning Path
            </a>
            <a className={styles.menuItem} onClick={onMentorClick}>
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
