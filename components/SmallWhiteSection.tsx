import type { NextPage } from "next";
import styles from "./SmallWhiteSection.module.css";

const SmallWhiteSection: NextPage = () => {
  return (
    <div className={styles.smallWhiteSection}>
      <img className={styles.formIcon} alt="" src="rectangle-41.svg" />
    </div>
  );
};

export default SmallWhiteSection;
