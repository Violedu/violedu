import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./Footer.module.css";
import { useNavBar } from "../components/NavBarContext";

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

};

const Footer: NextPage<FooterType> = ({
  logoIconCursor,
  aboutCursor,
  learningPathCursor,
  mentorCursor,
  youtubeHref,
  youtubeTarget,
  instagramHref,
  instagramTarget,
  facebookHref,
  facebookTarget,
}) => {
  const { onAboutClick, onLearningPathClick, onMentorClick, onRequestLessonClick } = useNavBar();

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

  const router = useRouter();

  const onTermsClick = useCallback(() => {
    router.push("/terms");
  }, [router]);

  const onPrivacyClick = useCallback(() => {
    router.push("/privacy");
  }, [router]);

  const onLogoClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <img
          className={styles.logoIcon}
          alt=""
          src="/logo1.svg"
          onClick={onLogoClick}
          style={logoIconStyle}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.top}>
          <div className={styles.menu}>
            <a
              className={styles.about}
              onClick={onAboutClick}
              style={aboutStyle}
            >
              About
            </a>
            <a
              className={styles.about}
              onClick={onLearningPathClick}
              style={learningPathStyle}
            >
              Learning Path
            </a>
            <a
              className={styles.about}
              onClick={onMentorClick}
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
                    src="/iconyoutube1.svg"
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
                    src="/iconinstagram1.svg"
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
                    src="/iconfacebook.svg"
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
        </div>
      </div>
      <div className={styles.bottomInfo}>
        <div className={styles.copyright}>
          © 2024 — Copyright All Rights reserved
        </div>
        <div className={styles.termsAndPrivacy}>
          <a className={styles.about} onClick={onTermsClick}>
            Terms
          </a>
          <a className={styles.about} onClick={onPrivacyClick}>
            Privacy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
