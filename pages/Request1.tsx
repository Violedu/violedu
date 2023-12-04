import type { NextPage } from "next";
import RequestNavBar from "../components/RequestNavBar";
import RequestLesson from "../components/RequestLesson";
import RequestFooter from "../components/RequestFooter";
import styles from "./Request1.module.css";

const Request1: NextPage = () => {
  return (
    <div className={styles.request}>
      <RequestNavBar />
      <RequestLesson />
      <RequestFooter />
    </div>
  );
};

export default Request1;
