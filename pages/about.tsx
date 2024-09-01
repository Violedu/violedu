import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { NavBarProvider } from "../components/NavBarContext";
import GeneralFooter from "../components/GeneralFooter";
import Knowledge from "../components/Knowledge";
import Technique from "../components/Technique";
import Interpretation from "../components/Interpretation";
import styles from "./about.module.css";

const About: NextPage = () => {
  return (
    <NavBarProvider>
      <>
        <Head>
          <title>Violedu - About</title>
          <link rel="icon" href="/head_logo.png" />
        </Head>
        <NavBar />
        <div className={styles.about}>
          <Knowledge />
          <Technique />
          <Interpretation />
          <GeneralFooter />
        </div>
      </>
    </NavBarProvider>
  );
};

export default About;
