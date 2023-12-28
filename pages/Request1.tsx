import type { NextPage } from "next";
import Head from "next/head";
import RequestNavBar from "../components/RequestNavBar";
import RequestLesson from "../components/RequestLesson";
import RequestFooter from "../components/RequestFooter";
import styles from "./Request1.module.css";

const Request1: NextPage = () => {
  return (
    <>
      <Head>
        <title>Violedu - Step Up Your Next Performance</title>
        <link rel="icon" href="/head_logo.png" />
      </Head>
      <div className={styles.request}>
        <RequestNavBar />
        <RequestLesson />
        <RequestFooter />
      </div>
    </>
  );
};

export default Request1;
