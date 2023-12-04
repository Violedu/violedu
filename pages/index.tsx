import type { NextPage } from "next";
import { useCallback } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import WhiteSection from "../components/WhiteSection";
import Intro from "../components/Intro";
import About from "../components/About";
import Technique from "../components/Technique";
import Knowledge from "../components/Knowledge";
import Interpretation from "../components/Interpretation";
import InPersonAndOnline from "../components/InPersonAndOnline";
import Offers from "../components/Offers";
import IntroMentor from "../components/IntroMentor";
import Mentor from "../components/Mentor";
import IntroTestemonials from "../components/IntroTestemonials";
import Testemonials from "../components/Testemonials";
import Footer from "../components/Footer";
import styles from "./index.module.css";

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

  return (
    <div className={styles.main}>
      <NavBar />
      <HeroSection />
      <WhiteSection />
      <Intro introTitle="Dive into a new way of performing." />
      <About />
      <Technique />
      <Knowledge />
      <Interpretation />
      <Intro introTitle="Taylor your learning path." />
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
        youtubeHref="https://www.google.com"
        youtubeTarget="_blank"
        instagramHref="https://www.google.com"
        instagramTarget="_blank"
        facebookHref="https://www.google.com"
        facebookTarget="_blank"
      />
    </div>
  );
};

export default Main;
