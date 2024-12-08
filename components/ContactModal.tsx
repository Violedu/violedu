import React, { useState } from "react";
import styles from "./ContactModal.module.css";
import { TextField, Button } from "@mui/material";

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
        <div className={styles.content}>
          <div className={styles.circleWrapper}>
            <div className={`${styles.profileCircle} ${styles.firstCircle}`}>
              <img src="/profile_kalina.png" alt="Profile" className={styles.profileImage} />
            </div>
            <div className={`${styles.profileCircle} ${styles.secondCircle}`}>
              <img src="/profile_ivo.png" alt="Profile" className={styles.profileImage} />
            </div>
          </div>
          <p className={styles.replyText}>We typically reply within a day</p>
          <p className={styles.helperText}>We are here to help you reach your violin goals.</p>
        </div>
        <div className={styles.form}>
          <TextField
            className={styles.textField}
            label="Email"
            variant="outlined"
            fullWidth
          />
          <TextField
            className={styles.textField}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
          />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
