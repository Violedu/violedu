import type { NextPage } from "next";
import PrivacyNavbar from "../components/PrivacyNavbar";
import PrivacyContent from "../components/PrivacyContent";
import PrivacyFooter from "../components/PrivacyFooter";
import styles from "./Privacy.module.css";

const Privacy: NextPage = () => {
  return (
    <div className={styles.privacy}>
      <PrivacyNavbar />
      <PrivacyContent />
      <PrivacyFooter />
    </div>
  );
};

export default Privacy;
