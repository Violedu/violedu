import React from "react";
import styles from "./ContactModal.module.css";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalWrapper} onClick={onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()} // Prevent click propagation to the wrapper
      >
        <div className={styles.modalHeader}>
          <span className={styles.modalHeaderText}>Send a message</span>
        </div>
        {/* Modal content can go here */}
      </div>
    </div>
  );
};

export default ContactModal;
