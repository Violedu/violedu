import type { FC } from "react";
import styles from "./Card.module.css";
import { useRouter } from "next/router";

interface CardProps {
  imageSrc: string;
  title: string;
  text: string;
  buttonText?: string;
  buttonLink?: string;
}

const Card: FC<CardProps> = ({ imageSrc, title, text, buttonText, buttonLink }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    if (buttonLink) {
      router.push(buttonLink);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        {buttonText && buttonLink && (
          <button className={styles.actionCallButton} onClick={handleButtonClick}>
            <span className={styles.actionCallButtonText}>{buttonText}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
