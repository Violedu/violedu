import type { NextPage } from "next";
import { useCallback } from "react";
import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';
import { useRouter } from "next/router";
import styles from "./RequestLesson.module.css";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

const RequestLesson: NextPage = () => {
  const router = useRouter();

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    yearsOfPlaying: "",
    countryOfResidence: "",
    teachingMethod: "",
    learningPath: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    age: false,
    yearsOfPlaying: false,
    countryOfResidence: false,
    teachingMethod: false,
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
      teachingMethod: formData.teachingMethod === "",
      learningPath: formData.learningPath === "",
      agreeToTerms: !formData.agreeToTerms,
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => !error);
  };

  const onButtonClick = async () => {
    if (validateForm()) {
      try {
        const apiUrl =
          "https://2h5s5qc43i.execute-api.eu-central-1.amazonaws.com/dev";

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
            teachingMethod: formData.teachingMethod,
            learningPath: formData.learningPath,
          }),
        });

        if (response.ok) {
          setSnackbarOpen(true);
          // Handle successful response (e.g., redirect to a success page)
          router.push("/");
        } else {
          // Handle error response
          console.error(
            "API request failed:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error during API request:", error);
      }
    } else {
      // Handle validation errors (e.g., scroll to the first error)
    }
  };

  return (
    <div className={styles.requestlesson}>
      <div className={styles.title}>
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
      <div className={styles.content}>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        <div className={styles.frame}>
          <div className={styles.box}>
            <div className={styles.forms}>
              <div className={styles.personalInfo}>
                <div className={styles.personalInformation}>
                  Personal Information
                </div>
                <TextField
                  className={`${styles.name} ${
                    errors.fullName ? styles.error : ""
                  }`}
                  color="primary"
                  label="Full Name"
                  required={true}
                  variant="outlined"
                  value={formData.fullName}
                  onChange={(e) => onInputChange("fullName", e.target.value)}
                  error={errors.fullName}
                  helperText={
                    errors.fullName ? "Please enter your full name" : ""
                  }
                />
                <TextField
                  className={`${styles.name} ${
                    errors.email ? styles.error : ""
                  }`}
                  color="primary"
                  label="Email"
                  required={true}
                  variant="outlined"
                  value={formData.email}
                  onChange={(e) => onInputChange("email", e.target.value)}
                  error={errors.email}
                  helperText={
                    errors.email ? "Please enter a valid email address" : ""
                  }
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
                  className={`${styles.name} ${
                    errors.yearsOfPlaying ? styles.error : ""
                  }`}
                  color="primary"
                  label="Years of Playing"
                  required={true}
                  variant="outlined"
                  value={formData.yearsOfPlaying}
                  onChange={(e) =>
                    onInputChange("yearsOfPlaying", e.target.value)
                  }
                  error={errors.yearsOfPlaying}
                  helperText={
                    errors.yearsOfPlaying
                      ? "Please enter the number of years you've been playing"
                      : ""
                  }
                />
                <TextField
                  className={`${styles.name} ${
                    errors.countryOfResidence ? styles.error : ""
                  }`}
                  color="primary"
                  label="Country of Residence"
                  required={true}
                  variant="outlined"
                  value={formData.countryOfResidence}
                  onChange={(e) =>
                    onInputChange("countryOfResidence", e.target.value)
                  }
                  error={errors.countryOfResidence}
                  helperText={
                    errors.countryOfResidence
                      ? "Please enter your country of residence"
                      : ""
                  }
                />
              </div>
              <div className={styles.personalInfo}>
                <div className={styles.personalInformation}>Lesson</div>
                <FormControl
                  className={styles.teachingMethod}
                  variant="outlined"
                  error={errors.teachingMethod}
                >
                  <InputLabel
                    color={errors.teachingMethod ? "error" : "primary"}
                  >
                    Teaching Method
                  </InputLabel>
                  <Select
                    color="primary"
                    label="Teaching Method"
                    value={formData.teachingMethod}
                    onChange={(e) =>
                      onInputChange("teachingMethod", e.target.value)
                    }
                  >
                    <MenuItem value="In Person">In Person</MenuItem>
                    <MenuItem value="Online">Online</MenuItem>
                  </Select>
                  <FormHelperText>
                    {errors.teachingMethod
                      ? "Please select a teaching method"
                      : ""}
                  </FormHelperText>
                </FormControl>
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
                    onChange={(e) =>
                      onInputChange("learningPath", e.target.value)
                    }
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
            <div
              className={`${styles.check} ${
                errors.agreeToTerms ? styles.error : ""
              }`}
            >
              <FormControlLabel
                className={styles.chechbox}
                label=""
                control={
                  <Checkbox
                    color="primary"
                    checked={formData.agreeToTerms}
                    onChange={(e) =>
                      onInputChange("agreeToTerms", e.target.checked.toString())
                    }
                  />
                }
              />
              <div className={styles.iAgreeTo}>
                I agree to the terms and privacy policy.
              </div>
            </div>
            <button className={styles.button} onClick={onButtonClick}>
              <div className={styles.submitRequest}>Submit Request</div>
            </button>
          </div>
        </div>
      </div>
      <Snackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        TransitionComponent={SlideTransition}
        message="Request submitted successfully!"
        autoHideDuration={3000}
      />
    </div>
  );
};

export default RequestLesson;
