import React, { useState, useEffect } from "react";
import styles from "./ContactIcon.module.css";

const ContactIcon: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollPosition > windowHeight/2);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.location.href = "mailto:contact@violedu.com";
  };

  return (
    <>
      {isVisible && (
        <div className={`${styles.contactIcon} ${isVisible ? styles.visible : ""}`} onClick={handleClick}>
          <img src="/contact_icon.png" alt="Contact Us" />
        </div>
      )}
    </>
  );
};

export default ContactIcon;
