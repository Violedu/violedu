import type { NextPage } from "next";
import TermsNavBar from "../components/TermsNavBar";
import TermsContent from "../components/TermsContent";
import TermsFooter from "../components/TermsFooter";
import styles from "./Terms.module.css";

const Terms: NextPage = () => {
  return (
    <div className={styles.terms}>
      <TermsNavBar />
      <TermsContent />
      <TermsFooter />
    </div>
  );
};

export default Terms;
