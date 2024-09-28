import type { NextPage } from "next";
import Head from "next/head";
import TermsContent from "../components/TermsContent";
import GeneralNavBar from "../components/GeneralNavBar";
import GeneralFooter from "../components/GeneralFooter";
import styles from "./terms.module.css";

const Terms: NextPage = () => {
  return (
    <>
      <Head>
        <title>Violedu - Step Up Your Next Performance</title>
        <link rel="icon" href="/head_logo.png" />
      </Head>
      <div className={styles.terms}>
        <GeneralNavBar />
        <TermsContent />
        <GeneralFooter />
      </div>
    </>
  );
};

export default Terms;
