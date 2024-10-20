import type { NextPage } from "next";
import Head from "next/head";
import PrivacyContent from "../components/PrivacyContent";
import GeneralNavBar from "../components/GeneralNavBar";
import NavBar from "../components/NavBar";
import { NavBarProvider } from "../components/NavBarContext";
import GeneralFooter from "../components/GeneralFooter";
import styles from "./privacy.module.css";

const Privacy: NextPage = () => {
  return (
    <NavBarProvider>
      <>
        <Head>
          <title>Violedu - Privacy</title>
          <link rel="icon" href="/head_logo.png" />
        </Head>
        <NavBar />
        <div className={styles.privacy}>
          <PrivacyContent />
          <GeneralFooter />
        </div>
      </>
    </NavBarProvider>
  );
};

export default Privacy;
