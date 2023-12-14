import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Drawer from "./Drawer";
import PortalDrawer from "./PortalDrawer";
import styles from "./NavBar.module.css";

const NavBar: NextPage = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const onLogoImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navBar']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onAboutClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='introAboutContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLearningPathClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='introLearningPath']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onMentorClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='introMentorContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='offersContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  return (
    <>
      <section className={styles.navBar} data-scroll-to="navBar">
        <div className={styles.navBar1}>
          <img
            className={styles.logoIcon}
            alt=""
            src="/violedu/logo.svg"
            onClick={onLogoImageClick}
          />
          <div className={styles.navBar2}>
            <div className={styles.menu}>
              <a className={styles.about} onClick={onAboutClick}>
                About
              </a>
              <a className={styles.about} onClick={onLearningPathClick}>
                Learning Path
              </a>
              <a className={styles.about} onClick={onMentorClick}>
                Mentor
              </a>
            </div>
            <div className={styles.buttons}>
              <button className={styles.button} onClick={onButtonClick}>
                <div className={styles.text}>Request a lesson</div>
              </button>
              <div className={styles.hamburgerMenuWrapper}>
                <button className={styles.hamburgerMenu} onClick={openDrawer}>
                  <div className={styles.hamburgerMenuChild} />
                  <img
                    className={styles.hamburgerMenuItem}
                    alt=""
                    src="/violedu/group-4.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isDrawerOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeDrawer}
        >
          <Drawer onClose={closeDrawer} />
        </PortalDrawer>
      )}
    </>
  );
};

export default NavBar;
