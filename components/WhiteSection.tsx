import type { NextPage } from "next";
import styles from "./WhiteSection.module.css";

const WhiteSection: NextPage = () => {
  return (
    <div className={styles.whiteSection}>
      <img className={styles.formIcon} alt="" src="rectangle-4.svg" />
    </div>
  );
};

export default WhiteSection;
