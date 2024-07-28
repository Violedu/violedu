import type { NextPage } from "next";
import Head from "next/head";
import GeneralNavBar from "../components/GeneralNavBar";
import GeneralFooter from "../components/GeneralFooter";
import Card from "../components/Card";
import styles from "./free-resources.module.css";

const FreeResources: NextPage = () => {
  const cards = [
    {
      imageSrc: "/stuttgart-354557_1280.jpg",
      title: "Card Title 1",
      text: "This is a description for card 1.",
      buttonText: "Download The Handbook",
      buttonLink: "/learn-more-1"
    },
    {
      imageSrc: "/stuttgart-354557_1280.jpg",
      title: "Card Title 2",
      text: "This is a description for card 2.",
      buttonText: "Download The Handbook",
      buttonLink: "/explore-2"
    },
    {
      imageSrc: "/stuttgart-354557_1280.jpg",
      title: "Card Title 3",
      text: "This is a description for card 3.",
      buttonText: "Download The Handbook",
      buttonLink: "/read-more-3"
    },
    {
      imageSrc: "/stuttgart-354557_1280.jpg",
      title: "Card Title 4",
      text: "This is a description for card 4.",
      buttonText: "Download The Handbook",
      buttonLink: "/get-started-4"
    },
  ];

  return (
    <>
      <Head>
        <title>Violedu - Free Resources</title> {/* Updated the title */}
        <link rel="icon" href="/head_logo.png" />
      </Head>
      <div className={styles.freeResources}>
        <GeneralNavBar />
        <div className={styles.content}>
            <h1>A Violinist's Must Have Free Resources.</h1>
            <div className={styles.cardsContainer}>
            {cards.map((card, index) => (
                <Card
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                text={card.text}
                buttonText={card.buttonText}
                buttonLink={card.buttonLink}
                />
            ))}
            </div>
        </div>
        <GeneralFooter />
      </div>
    </>
  );
};

export default FreeResources;
