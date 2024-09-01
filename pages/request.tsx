import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { NavBarProvider } from "../components/NavBarContext";
import RequestLesson from "../components/RequestLesson";
import GeneralFooter from "../components/GeneralFooter";
import styles from "./request.module.css";

const Request: NextPage = () => {
  return (
    <NavBarProvider>
      <>
        <Head>
          <title>Violedu - Step Up Your Next Performance</title>
          <link rel="icon" href="/head_logo.png" />
        </Head>
        <NavBar />
        <div className={styles.request}>
          <RequestLesson />
          <GeneralFooter />
        </div>
      </>
    </NavBarProvider>
  );
};

export default Request;
