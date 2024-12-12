import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { animate } from "motion";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import GeneralFooter from "../../components/GeneralFooter";
import NavBar from "../../components/NavBar";
import ContactIcon from "../../components/ContactIcon";
import { NavBarProvider } from "../../components/NavBarContext";
import styles from "./worksheet-memory.module.css";

const WorksheetMemory: NextPage = () => {
  const headlineRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null); // Ref for the first image
  const secondImageRef = useRef<HTMLImageElement>(null); // Ref for the second image
  const [hasAnimatedHeadline, setHasAnimatedHeadline] = useState(false);
  const [hasAnimatedForm, setHasAnimatedForm] = useState(false);
  const [hasAnimatedImage, setHasAnimatedImage] = useState(false); // State for first image animation
  const [hasAnimatedSecondImage, setHasAnimatedSecondImage] = useState(false); // State for second image animation
  const [loading, setLoading] = useState(false); // State to track if the request is in progress

  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
  });

  const onInputChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: false,
    }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newErrors = {
      fullName: formData.fullName === "",
      email: !formData.email || !emailRegex.test(formData.email),
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => !error);
  };

  const onButtonClick = async () => {
    if (validateForm() && !loading) { // Prevent multiple clicks while loading
      setLoading(true); // Disable the button by setting loading state
      const resourceName = 'worksheet_memory';
      try {
        const apiUrl = 'https://ze3q72lkwe.execute-api.eu-central-1.amazonaws.com/dev';

        // Make the POST request
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            resourceName: resourceName,
          }),
        });

        if (response.ok) {
          router.push("/").then(() => setLoading(false)); // Re-enable the button after routing
        } else {
          console.error("API request failed:", response.status, response.statusText);
          setLoading(false); // Re-enable button if request fails
        }
      } catch (error) {
        console.error("Error during API request:", error);
        setLoading(false); // Re-enable button if there is an error
      }
    }
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (headlineRef.current && !hasAnimatedHeadline) {
            animate(headlineRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8 });
            setHasAnimatedHeadline(true);
          }
          if (formRef.current && !hasAnimatedForm) {
            animate(formRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8, delay: 0.2 });
            setHasAnimatedForm(true);
          }
          if (imageRef.current && !hasAnimatedImage) {
            animate(imageRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8, delay: 0.2 });
            setHasAnimatedImage(true);
          }
          if (secondImageRef.current && !hasAnimatedSecondImage) {
            animate(secondImageRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8, delay: 0.2 });
            setHasAnimatedSecondImage(true);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    if (headlineRef.current) {
      observer.observe(headlineRef.current);
    }
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    if (secondImageRef.current) {
      observer.observe(secondImageRef.current);
    }

    return () => {
      if (headlineRef.current) {
        observer.unobserve(headlineRef.current);
      }
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      if (secondImageRef.current) {
        observer.unobserve(secondImageRef.current);
      }
    };
  }, [hasAnimatedHeadline, hasAnimatedForm, hasAnimatedImage, hasAnimatedSecondImage]);

  return (
    <NavBarProvider>
      <>
        <Head>
          <title>Violedu - Worksheet</title>
          <link rel="icon" href="/head_logo.png" />
        </Head>
        <NavBar />
        <ContactIcon />
        <div className={styles.worksheet}>
          <div className={styles.content}>
            <div className={styles.title} ref={headlineRef} style={{ opacity: 0, transform: 'translateY(24px)' }}>
              <div>
                <div className={styles.titleLine}>
                  <span>The Ultimate </span>
                  <span className={styles.blueWording}>Worksheet</span>
                </div>
                <div className={styles.titleLine}>
                  <span>To </span>
                  <span className={styles.blueWording}>Learn </span>
                  <span>Music Faster</span>
                  <span>.</span>
                </div>
              </div>
            </div>

            <div className={styles.form} ref={formRef} style={{ opacity: 0, transform: 'translateY(24px)' }}>
              <div className={styles.frame}>
                <div className={styles.box}>
                  <div className={styles.forms}>
                    <div className={styles.personalInfo}>
                      <div className={styles.personalInformation}>
                        With the help of this worksheet, you'll explore how violin pros learn music faster.
                      </div>
                      <TextField
                        className={`${styles.name} ${errors.fullName ? styles.error : ""}`}
                        color="primary"
                        label="Full Name"
                        required={true}
                        variant="outlined"
                        value={formData.fullName}
                        onChange={(e) => onInputChange("fullName", e.target.value)}
                        error={errors.fullName}
                        helperText={errors.fullName ? "Please enter your full name" : ""}
                      />
                      <TextField
                        className={`${styles.name} ${errors.email ? styles.error : ""}`}
                        color="primary"
                        label="Email"
                        required={true}
                        variant="outlined"
                        value={formData.email}
                        onChange={(e) => onInputChange("email", e.target.value)}
                        error={errors.email}
                        helperText={errors.email ? "Please enter a valid email address" : ""}
                      />
                    </div>
                    <button className={styles.button} onClick={onButtonClick} disabled={loading}>
                      <div className={styles.submitRequest}>Send To My Inbox</div>
                    </button>
                  </div>
                </div>
              </div>
              <img
                className={styles.worksheetImg}
                alt=""
                src="/worksheet_memory_cover.png"
                ref={imageRef}
                style={{ opacity: 0, transform: 'translateY(24px)' }}
              />
            </div>
            <img
              className={styles.secondImage}
              alt="Open Worksheet"
              src="/open_worksheet_memory.png"
              ref={secondImageRef}
              style={{ opacity: 0, transform: 'translateY(24px)' }}
            />
          </div>
          <GeneralFooter />
        </div>
      </>
    </NavBarProvider>
  );
};

export default WorksheetMemory;
