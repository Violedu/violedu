import type { NextPage } from "next";
import Head from "next/head";
import PrivacyNavbar from "../components/PrivacyNavbar";
import PrivacyContent from "../components/PrivacyContent";
import PrivacyFooter from "../components/PrivacyFooter";
import styles from "./Privacy.module.css";

const Privacy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Violedu - Step Up Your Next Performance</title>
        <link rel="icon" href="/head_logo.png" />
      </Head>
      <div className={styles.privacy}>
        <PrivacyNavbar />
        <PrivacyContent />
        <PrivacyFooter />
      </div>
    </>
  );
};

export default Privacy;
