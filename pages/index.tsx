import type { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import WhiteSection from "../components/WhiteSection";
import SmallWhiteSection from "../components/SmallWhiteSection";
import ActionCall from "../components/ActionCall";
import Intro from "../components/Intro";
import About from "../components/About";
import IntroLearningPath from "../components/IntroLearningPath";
import InPersonAndOnline from "../components/InPersonAndOnline";
import Offers from "../components/Offers";
import IntroMentor from "../components/IntroMentor";
import Mentor from "../components/Mentor";
import IntroTestemonials from "../components/IntroTestemonials";
import Testemonials from "../components/Testemonials";
import GeneralFooter from "../components/GeneralFooter";
import styles from "./index.module.css";
import { useDialog } from '../components/DialogContext';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { NavBarProvider } from "../components/NavBarContext";

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

const Main: NextPage = () => {
  const { isOpen, setIsOpen } = useDialog();

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <NavBarProvider>
      <>
        <Head>
          <title>Violedu - Step Up Your Next Performance</title>
          <link rel="icon" href="/head_logo.png" />
        </Head>
        <NavBar />
        <div className={styles.main}>
          <HeroSection />
          <WhiteSection />
          <SmallWhiteSection />
          <ActionCall />
          <Intro introTitle="Dive into a new way of performing." />
          <About />
          <IntroLearningPath />
          <InPersonAndOnline />
          <Offers />
          <IntroMentor />
          <Mentor />
          <IntroTestemonials />
          <Testemonials />
          <GeneralFooter />
          <Dialog open={isOpen} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">Request Submitted</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <p>We will soon reach out to you via email for further details. As part of our process, 
                  you'll be invited to a free online assessment session to define your goals and 
                  evaluate your current skill level. We look forward to meeting you!
                </p>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </>
    </NavBarProvider>
  );
};

export default Main;
