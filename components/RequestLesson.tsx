import type { NextPage } from "next";
import { useCallback } from "react";
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
import { useRouter } from "next/router";
import styles from "./RequestLesson.module.css";

const RequestLesson: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.requestlesson}>
      <div className={styles.title}>
        <b className={styles.introTitle}>
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
        </b>
      </div>
      <div className={styles.content}>
        <img className={styles.imageIcon} alt="" src="image@2x.png" />
        <div className={styles.frame}>
          <div className={styles.box}>
            <div className={styles.forms}>
              <div className={styles.personalInfo}>
                <div className={styles.personalInformation}>
                  Personal Information
                </div>
                <TextField
                  className={styles.name}
                  color="primary"
                  label="Full Name"
                  required={true}
                  variant="outlined"
                />
                <TextField
                  className={styles.name}
                  color="primary"
                  label="Email"
                  required={true}
                  variant="outlined"
                />
                <TextField
                  className={styles.name}
                  color="primary"
                  label="Age"
                  required={true}
                  variant="outlined"
                />
                <TextField
                  className={styles.name}
                  color="primary"
                  label="Years of Playing"
                  required={true}
                  variant="outlined"
                />
                <TextField
                  className={styles.name}
                  color="primary"
                  label="Country"
                  required={true}
                  variant="outlined"
                />
              </div>
              <div className={styles.personalInfo}>
                <div className={styles.personalInformation}>Lesson</div>
                <FormControl
                  className={styles.teachingMethod}
                  variant="outlined"
                >
                  <InputLabel color="primary">Teaching Method</InputLabel>
                  <Select color="primary" label="Teaching Method">
                    <MenuItem value="In Person">In Person</MenuItem>
                    <MenuItem value="Online">Online</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <FormControl
                  className={styles.teachingMethod}
                  variant="outlined"
                >
                  <InputLabel color="primary">Learning Path</InputLabel>
                  <Select color="primary" label="Learning Path">
                    <MenuItem value="Single">Single</MenuItem>
                    <MenuItem value="Intensive">Intensive</MenuItem>
                    <MenuItem value="Mastery">Mastery</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
            </div>
            <div className={styles.check}>
              <FormControlLabel
                className={styles.chechbox}
                label=""
                control={<Checkbox color="primary" />}
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
    </div>
  );
};

export default RequestLesson;
