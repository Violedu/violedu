import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Drawer from "./Drawer";
import PortalDrawer from "./PortalDrawer";
import styles from "./NavBar.module.css";
import { useNavBar } from "../components/NavBarContext";

const NavBar: NextPage = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { onAboutClick, onLearningPathClick, onMentorClick, onRequestLessonClick } = useNavBar();

  const onLogoImageClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((prev) => !prev); // Toggle drawer state
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false); // Close drawer explicitly
  }, []);

  return (
    <>
      <section className={styles.navBar} data-scroll-to="navBar">
        <div className={styles.navBar1}>
          <img
            className={styles.logoIcon}
            alt=""
            src="/logo.svg"
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
              <button className={styles.button} onClick={onRequestLessonClick}>
                <div className={styles.text}>Request a lesson</div>
              </button>
              <div className={styles.hamburgerMenuWrapper}>
                <button className={styles.hamburgerMenu} onClick={toggleDrawer}>
                  <div className={styles.hamburgerMenuChild} />
                  <img
                    className={styles.hamburgerMenuItem}
                    alt=""
                    src="/group-4.svg"
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
