import type { NextPage } from "next";
import { useCallback } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import WhiteSection from "../components/WhiteSection";
import SmallWhiteSection from "../components/SmallWhiteSection";
import ActionCall from "../components/ActionCall";
import Intro from "../components/Intro";
import About from "../components/About";
import Knowledge from "../components/Knowledge";
import Technique from "../components/Technique";
import Interpretation from "../components/Interpretation";
import IntroLearningPath from "../components/IntroLearningPath";
import InPersonAndOnline from "../components/InPersonAndOnline";
import Offers from "../components/Offers";
import IntroMentor from "../components/IntroMentor";
import Mentor from "../components/Mentor";
import IntroTestemonials from "../components/IntroTestemonials";
import Testemonials from "../components/Testemonials";
import Footer from "../components/Footer";
import styles from "./index.module.css";
import { useDialog } from '../components/DialogContext';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

const Main: NextPage = () => {
  const onLogoClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navBar']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onAboutClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='introAboutContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLearningPathClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='introLearningPath']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onMentorClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='introMentorContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const { isOpen, setIsOpen } = useDialog();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Head>
        <title>Violedu - Step Up Your Next Performance</title>
        <link rel="icon" href="/head_logo.png" />
      </Head>
      <div className={styles.main}>
        <NavBar />
        <HeroSection />
        <WhiteSection />
        <SmallWhiteSection />
        <ActionCall />
        <Intro introTitle="Dive into a new way of performing." />
        <About />
        <Knowledge />
        <Technique />
        <Interpretation />
        <IntroLearningPath />
        <InPersonAndOnline />
        <Offers />
        <IntroMentor />
        <Mentor />
        <IntroTestemonials />
        <Testemonials />
        <Footer
          onLogoClick={onLogoClick}
          onAbout1Click={onAboutClick}
          onLearningPath1Click={onLearningPathClick}
          onMentor1Click={onMentorClick}
          youtubeHref="https://www.youtube.com/@Violedu-dm3uk"
          youtubeTarget="_blank"
          instagramHref="https://www.instagram.com/violedugrp/"
          instagramTarget="_blank"
          facebookHref="https://www.facebook.com/profile.php?id=61554886883694"
          facebookTarget="_blank"
        />
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
  );
};

export default Main;
