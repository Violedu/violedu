import type { NextPage } from "next";
import Head from "next/head";
import TermsContent from "../components/TermsContent";
import GeneralFooter from "../components/GeneralFooter";
import ContactIcon from "../components/ContactIcon";
import NavBar from "../components/NavBar";
import { NavBarProvider } from "../components/NavBarContext";
import styles from "./terms.module.css";

const Terms: NextPage = () => {
  return (
    <NavBarProvider>
      <>
        <Head>
          <title>Violedu - Terms</title>
          <link rel="icon" href="/head_logo.png" />
        </Head>
        <NavBar />
        <ContactIcon />
        <div className={styles.terms}>
          <TermsContent />
          <GeneralFooter />
        </div>
      </>
    </NavBarProvider>
  );
};

export default Terms;
