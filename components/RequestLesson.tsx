import type { NextPage } from "next";
import { useCallback, useEffect, useRef, useState } from "react";
import { animate } from "motion";
import {
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useRouter } from "next/router";
import styles from "./RequestLesson.module.css";
import { useDialog } from './DialogContext';

const RequestLesson: NextPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    yearsOfPlaying: "",
    countryOfResidence: "",
    learningPath: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    age: false,
    yearsOfPlaying: false,
    countryOfResidence: false,
    learningPath: false,
    agreeToTerms: false,
  });

  const onInputChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: field === "agreeToTerms" ? !prevData[field] : value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: false,
    }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isInteger = (value: string) => Number.isInteger(Number(value));

    const newErrors = {
      fullName: formData.fullName === "",
      email: !formData.email || !emailRegex.test(formData.email),
      age: formData.age === "" || !isInteger(formData.age),
      yearsOfPlaying:
        formData.yearsOfPlaying === "" || !isInteger(formData.yearsOfPlaying),
      countryOfResidence: formData.countryOfResidence === "",
      learningPath: formData.learningPath === "",
      agreeToTerms: !formData.agreeToTerms,
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => !error);
  };

  const onButtonClick = async () => {
    if (validateForm()) {   
      const calendlyWindow = window.open("https://calendly.com/contact-violedu/30min", "_blank");

      try {
          const apiUrl = "https://2h5s5qc43i.execute-api.eu-central-1.amazonaws.com/dev";

          const response = await fetch(apiUrl, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  name: formData.fullName,
                  email: formData.email,
                  age: Number(formData.age),
                  yearsOfPlaying: Number(formData.yearsOfPlaying),
                  countryOfResidence: formData.countryOfResidence,
                  learningPath: formData.learningPath,
              }),
          });

          if (response.ok) {              
              // Navigate to the home page or show a dialog
              router.push("/");

              // Bring the Calendly tab into focus if it was opened
              if (calendlyWindow) calendlyWindow.focus();
          } else {
              console.error("API request failed:", response.status, response.statusText);
          }
      } catch (error) {
          console.error("Error during API request:", error);
      }
    }
};

  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [hasAnimatedTitle, setHasAnimatedTitle] = useState(false);
  const [hasAnimatedContent, setHasAnimatedContent] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (titleRef.current && !hasAnimatedTitle) {
            animate(titleRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8 });
            setHasAnimatedTitle(true); // Set the flag to true after animation
          }
          if (contentRef.current && !hasAnimatedContent) {
            animate(contentRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8, delay: 0.2 });
            setHasAnimatedContent(true); // Set the flag to true after animation
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, [hasAnimatedTitle, hasAnimatedContent]); // Depend on animation flags

  return (
    <div className={styles.requestlesson}>
      <div className={styles.title} ref={titleRef} style={{ opacity: 0, transform: 'translateY(24px)' }}>
        <div className={styles.introTitle}>
          <p className={styles.secureYourSpot}>
            <span className={styles.secureYour}>{`Secure Your `}</span>
            <span className={styles.spot}>Spot</span>
            <span>{`. `}</span>
          </p>
          <p className={styles.secureYourSpot}>
            <span>{`Begin Your Journey To Mastery `}</span>
            <span className={styles.spot}>Today</span>
            <span className={styles.secureYour}>.</span>
          </p>
        </div>
      </div>
      <div className={styles.content} ref={contentRef} style={{ opacity: 0, transform: 'translateY(24px)' }}>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        <div className={styles.frame}>
          <div className={styles.box}>
            <div className={styles.forms}>
              <div className={styles.personalInfo}>
                <div className={styles.personalInformation}>
                  Personal Information
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
                <TextField
                  className={`${styles.name} ${errors.age ? styles.error : ""}`}
                  color="primary"
                  label="Age"
                  required={true}
                  variant="outlined"
                  value={formData.age}
                  onChange={(e) => onInputChange("age", e.target.value)}
                  error={errors.age}
                  helperText={errors.age ? "Please enter your age" : ""}
                />
                <TextField
                  className={`${styles.name} ${errors.yearsOfPlaying ? styles.error : ""}`}
                  color="primary"
                  label="Years of Playing"
                  required={true}
                  variant="outlined"
                  value={formData.yearsOfPlaying}
                  onChange={(e) => onInputChange("yearsOfPlaying", e.target.value)}
                  error={errors.yearsOfPlaying}
                  helperText={errors.yearsOfPlaying ? "Please enter the number of years you've been playing" : ""}
                />
                <TextField
                  className={`${styles.name} ${errors.countryOfResidence ? styles.error : ""}`}
                  color="primary"
                  label="Country of Residence"
                  required={true}
                  variant="outlined"
                  value={formData.countryOfResidence}
                  onChange={(e) => onInputChange("countryOfResidence", e.target.value)}
                  error={errors.countryOfResidence}
                  helperText={errors.countryOfResidence ? "Please enter your country of residence" : ""}
                />
              </div>
              <div className={styles.personalInfo}>
                <div className={styles.personalInformation}>Learning Path</div>
                <FormControl
                  className={styles.teachingMethod}
                  variant="outlined"
                  error={errors.learningPath}
                >
                  <InputLabel color={errors.learningPath ? "error" : "primary"}>
                    Learning Path
                  </InputLabel>
                  <Select
                    color="primary"
                    label="Learning Path"
                    value={formData.learningPath}
                    onChange={(e) => onInputChange("learningPath", e.target.value)}
                    error={errors.learningPath}
                  >
                    <MenuItem value="Single">Single</MenuItem>
                    <MenuItem value="Intensive">Intensive</MenuItem>
                    <MenuItem value="Mastery">Mastery</MenuItem>
                  </Select>
                  <FormHelperText>
                    {errors.learningPath ? "Please select a learning path" : ""}
                  </FormHelperText>
                </FormControl>
              </div>
            </div>
            <div className={`${styles.check} ${errors.agreeToTerms ? styles.error : ""}`}>
              <FormControlLabel
                className={styles.chechbox}
                label=""
                control={
                  <Checkbox
                    color="primary"
                    checked={formData.agreeToTerms}
                    onChange={(e) => onInputChange("agreeToTerms", e.target.checked.toString())}
                  />
                }
              />
              <div className={styles.iAgreeTo}>
                I agree to the terms and privacy policy.
              </div>
            </div>
            <button className={styles.button} onClick={onButtonClick}>
              <div className={styles.submitRequest}>Schedule Free Assessment</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestLesson;
