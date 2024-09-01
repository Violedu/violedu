import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { animate } from "motion";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import GeneralNavBar from "../../components/GeneralNavBar";
import GeneralFooter from "../../components/GeneralFooter";
import styles from "./worksheet.module.css";

const Worksheet: NextPage = () => {
  const headlineRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null); // Ref for the first image
  const secondImageRef = useRef<HTMLImageElement>(null); // Ref for the second image
  const [hasAnimatedHeadline, setHasAnimatedHeadline] = useState(false);
  const [hasAnimatedForm, setHasAnimatedForm] = useState(false);
  const [hasAnimatedImage, setHasAnimatedImage] = useState(false); // State for first image animation
  const [hasAnimatedSecondImage, setHasAnimatedSecondImage] = useState(false); // State for second image animation

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

  const onButtonClick = () => {
    if (validateForm()) {
      router.push("/");
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
    <>
      <Head>
        <title>Violedu - Worksheet</title>
        <link rel="icon" href="/head_logo.png" />
      </Head>
      <div className={styles.worksheet}>
        <GeneralNavBar />
        <div className={styles.content}>
          <div className={styles.title} ref={headlineRef} style={{ opacity: 0, transform: 'translateY(24px)' }}>
            <div>
              <div className={styles.titleLine}>
                <span>The Ultimate </span>
                <span className={styles.blueWording}>Worksheet</span>
              </div>
              <div className={styles.titleLine}>
                <span>To </span>
                <span className={styles.blueWording}>Sound </span>
                <span>Like A Pro Violinist</span>
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
                      With the help of this worksheet, you'll explore three key aspects that set professional violinists apart.
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
                  <button className={styles.button} onClick={onButtonClick}>
                    <div className={styles.submitRequest}>Download The Worksheet</div>
                  </button>
                </div>
              </div>
            </div>
            <img
              className={styles.worksheetImg}
              alt=""
              src="/worksheet_cover.png"
              ref={imageRef}
              style={{ opacity: 0, transform: 'translateY(24px)' }}
            />
          </div>
          <img
            className={styles.secondImage}
            alt="Open Worksheet"
            src="/open_worksheet.png"
            ref={secondImageRef}
            style={{ opacity: 0, transform: 'translateY(24px)' }}
          />
        </div>
        <GeneralFooter />
      </div>
    </>
  );
};

export default Worksheet;
