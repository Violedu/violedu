import type { NextPage } from "next";
import Head from "next/head";
import GeneralNavBar from "../components/GeneralNavBar";
import RequestLesson from "../components/RequestLesson";
import GeneralFooter from "../components/GeneralFooter";
import styles from "./request.module.css";

const Request: NextPage = () => {
  return (
    <>
      <Head>
        <title>Violedu - Step Up Your Next Performance</title>
        <link rel="icon" href="/head_logo.png" />
      </Head>
      <div className={styles.request}>
        <GeneralNavBar />
        <RequestLesson />
        <GeneralFooter />
      </div>
    </>
  );
};

export default Request;
