import type { NextPage } from "next";
import styles from "./Mentor.module.css";

const Mentor: NextPage = () => {
  return (
    <div className={styles.mentor}>
      <div className={styles.title}>
        <b className={styles.introTitle}>Work With Kalina.</b>
      </div>
      <div className={styles.frame}>
        <img className={styles.imageIcon} alt="" src="/image8@2x.png" />
        <div className={styles.text}>
          <div
            className={styles.mentorText}
          >{`Kalina is a versatile and accomplished violinist with over a decade of teaching experience. As a solo musician, she has captivated audiences with her virtuosity, and as a member of the renowned chamber ensemble "Silhouettes" since 2010, she has graced international stages. `}</div>
          <div className={styles.mentorTextParent}>
            <div
              className={styles.mentorText1}
            >{`With a doctoral degree in violin and a deep passion for education, Kalina brings a wealth of expertise to her teaching, making her the perfect guide for your violin journey. `}</div>
            <div className={styles.buttons}>
              <a
                className={styles.button}
                href="https://www.google.com"
                target="_blank"
              >
                <div className={styles.instagram}>
                  <div className={styles.icon}>
                    <img
                      className={styles.iconinstagram}
                      alt=""
                      src="/iconinstagram.svg"
                    />
                  </div>
                  <div className={styles.footerText}>Instagram</div>
                </div>
              </a>
              <a
                className={styles.button}
                href="https://www.google.com"
                target="_blank"
              >
                <div className={styles.instagram}>
                  <div className={styles.icon}>
                    <img
                      className={styles.iconyoutube}
                      alt=""
                      src="/iconyoutube.svg"
                    />
                  </div>
                  <div className={styles.footerText}>YouTube</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
