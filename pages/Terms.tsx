import type { NextPage } from "next";
import Head from "next/head";
import TermsNavBar from "../components/TermsNavBar";
import TermsContent from "../components/TermsContent";
import TermsFooter from "../components/TermsFooter";
import styles from "./Terms.module.css";

const Terms: NextPage = () => {
  return (
    <>
      <Head>
        <title>Violedu - Step Up Your Next Performance</title>
        <link rel="icon" href="/head_logo.png" />
      </Head>
      <div className={styles.terms}>
        <TermsNavBar />
        <TermsContent />
        <TermsFooter />
      </div>
    </>
  );
};

export default Terms;
