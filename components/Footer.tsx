import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./Footer.module.css";

type FooterType = {
  youtubeHref: string;
  youtubeTarget?: string;
  instagramHref: string;
  instagramTarget?: string;
  facebookHref: string;
  facebookTarget?: string;

  /** Style props */
  logoIconCursor?: CSSProperties["cursor"];
  aboutCursor?: CSSProperties["cursor"];
  learningPathCursor?: CSSProperties["cursor"];
  mentorCursor?: CSSProperties["cursor"];

  /** Action props */
  onLogoClick?: () => void;
  onAbout1Click?: () => void;
  onLearningPath1Click?: () => void;
  onMentor1Click?: () => void;
};

const Footer: NextPage<FooterType> = ({
  onLogoClick,
  logoIconCursor,
  onAbout1Click,
  aboutCursor,
  onLearningPath1Click,
  learningPathCursor,
  onMentor1Click,
  mentorCursor,
  youtubeHref,
  youtubeTarget,
  instagramHref,
  instagramTarget,
  facebookHref,
  facebookTarget,
}) => {
  const logoIconStyle: CSSProperties = useMemo(() => {
    return {
      cursor: logoIconCursor,
    };
  }, [logoIconCursor]);

  const aboutStyle: CSSProperties = useMemo(() => {
    return {
      cursor: aboutCursor,
    };
  }, [aboutCursor]);

  const learningPathStyle: CSSProperties = useMemo(() => {
    return {
      cursor: learningPathCursor,
    };
  }, [learningPathCursor]);

  const mentorStyle: CSSProperties = useMemo(() => {
    return {
      cursor: mentorCursor,
    };
  }, [mentorCursor]);

  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <img
          className={styles.logoIcon}
          alt=""
          src="logo1.svg"
          onClick={onLogoClick}
          style={logoIconStyle}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.top}>
          <div className={styles.menu}>
            <a
              className={styles.about}
              onClick={onAbout1Click}
              style={aboutStyle}
            >
              About
            </a>
            <a
              className={styles.about}
              onClick={onLearningPath1Click}
              style={learningPathStyle}
            >
              Learning Path
            </a>
            <a
              className={styles.about}
              onClick={onMentor1Click}
              style={mentorStyle}
            >
              Mentor
            </a>
          </div>
        </div>
        <div className={styles.infoBottomRight}>
          <div className={styles.socials}>
            <b className={styles.title}>Socials</b>
            <div className={styles.socials1}>
              <a
                className={styles.youtube}
                href={youtubeHref}
                target={youtubeTarget}
              >
                <div className={styles.icon}>
                  <img
                    className={styles.iconyoutube}
                    alt=""
                    src="iconyoutube1.svg"
                  />
                </div>
                <div className={styles.footerText}>YouTube</div>
              </a>
              <a
                className={styles.instagram}
                href={instagramHref}
                target={instagramTarget}
              >
                <div className={styles.icon}>
                  <img
                    className={styles.iconinstagram}
                    alt=""
                    src="iconinstagram1.svg"
                  />
                </div>
                <div className={styles.footerText}>Instagram</div>
              </a>
              <a
                className={styles.youtube}
                href={facebookHref}
                target={facebookTarget}
              >
                <div className={styles.icon}>
                  <img
                    className={styles.iconfacebook}
                    alt=""
                    src="iconfacebook.svg"
                  />
                </div>
                <div className={styles.footerText}>Facebook</div>
              </a>
            </div>
          </div>
          <div className={styles.location}>
            <b className={styles.location1}>Location</b>
            <div className={styles.stuttgartGermany}>
              <p className={styles.stuttgart}>70499, Stuttgart</p>
              <p className={styles.stuttgart}>Germany</p>
            </div>
          </div>
          <div className={styles.contactUs}>
            <b className={styles.location1}>Contact Us</b>
            <div className={styles.list}>
              <div className={styles.contactvioleducom}>
                contact@violedu.com
              </div>
            </div>
          </div>
          <div className={styles.languages}>
            <b className={styles.location1}>Languages</b>
            <div className={styles.list1}>
              <button className={styles.en}>En</button>
              <button className={styles.en}>De</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomInfo}>
        <div className={styles.copyright}>
          © 2024 — Copyright All Rights reserved
        </div>
        <div className={styles.termsAndPrivacy}>
          <a className={styles.terms}>Terms</a>
          <a className={styles.terms}>Privacy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
