import type { NextPage } from "next";
import Head from "next/head";
import PrivacyContent from "../components/PrivacyContent";
import GeneralNavBar from "../components/GeneralNavBar";
import GeneralFooter from "../components/GeneralFooter";
import styles from "./privacy.module.css";

const Privacy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Violedu - Step Up Your Next Performance</title>
        <link rel="icon" href="/head_logo.png" />
      </Head>
      <div className={styles.privacy}>
        <GeneralNavBar />
        <PrivacyContent />
        <GeneralFooter />
      </div>
    </>
  );
};

export default Privacy;
