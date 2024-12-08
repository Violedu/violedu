import React, { useState, useEffect } from "react";
import styles from "./ContactIcon.module.css";
import ContactModal from "./ContactModal";

const ContactIcon: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false); // Tracks if icon should stay visible
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight / 2) {
        setHasScrolled(true); // Make icon persist after showing
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleIconClick = () => {
    setIsModalOpen((prev) => !prev); // Toggle the modal
  };

  return (
    <>
      {(hasScrolled || isModalOpen) && ( // Icon stays visible once scrolled down
        <div
          className={`${styles.contactIcon} ${hasScrolled ? styles.visible : ""}`}
          onClick={handleIconClick}
        >
          <img
            src={isModalOpen ? "/contact_icon_open.png" : "/contact_icon.png"} // Change the icon based on modal state
            alt="Contact Us"
          />
        </div>
      )}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ContactIcon;
