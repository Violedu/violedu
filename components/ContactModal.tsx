import React, { useState } from "react";
import styles from "./ContactModal.module.css";
import { TextField } from "@mui/material";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    email: false,
    message: false,
  });

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {
      email: !email || !emailRegex.test(email),
      message: message.trim() === "",
    };

    setErrors(newErrors);
    return !newErrors.email && !newErrors.message;
  };

  const onSendMessage = async () => {
    if (validateForm()) {
      onClose();

      try {
        const apiUrl = "https://oerf0eurlb.execute-api.eu-central-1.amazonaws.com/production";
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            message,
          }),
        });

        if (response.ok) {
          setEmail("");
          setMessage("");
          setErrors({ email: false, message: false });
        } else {
          console.error("API request failed:", response.status, response.statusText);
        }
      } catch (error) {
        console.error("Error during API request:", error);
      }
    }
  };

  const handleClose = () => {
    setEmail(""); // Clear email field when closing modal
    setMessage(""); // Clear message field when closing modal
    setErrors({ email: false, message: false }); // Clear any errors
    onClose(); // Close the modal
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalWrapper} onClick={handleClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()} // Prevent click propagation to the wrapper
      >
        <div className={styles.modalHeader}>
          <span className={styles.modalHeaderText}>Send a message</span>
          <img
            src="/close_icon.png"
            alt="Close"
            className={styles.closeIcon}
            onClick={handleClose}
          />
        </div>
        <div className={styles.mainContent}>
          <div className={styles.content}>
            <div className={styles.circleWrapper}>
              <div className={`${styles.profileCircle} ${styles.firstCircle}`}>
                <img
                  src="/profile_kalina.png"
                  alt="Profile"
                  className={styles.profileImage}
                />
              </div>
              <div className={`${styles.profileCircle} ${styles.secondCircle}`}>
                <img
                  src="/profile_ivo.png"
                  alt="Profile"
                  className={styles.profileImage}
                />
              </div>
            </div>
            <p className={styles.replyText}>We typically reply within a day</p>
            <p className={styles.helperText}>
              We are here to help you reach your violin goals.
            </p>
          </div>
          <div className={styles.formButtonContainer}>
            <div className={styles.form}>
              <TextField
                className={styles.textField}
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
                helperText={errors.email ? "Please enter a valid email address" : ""}
              />
              <TextField
                className={styles.textField}
                label="Message"
                variant="outlined"
                multiline
                rows={5}
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={errors.message}
                helperText={errors.message ? "Message cannot be empty" : ""}
              />
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.sendButton} onClick={onSendMessage}>
                <div className={styles.submitRequest}>Send a message</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
