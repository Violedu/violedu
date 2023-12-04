import type { NextPage } from "next";
import styles from "./RequestFooter.module.css";

const RequestFooter: NextPage = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <img className={styles.logoIcon} alt="" src="./logo1.svg" />
      </div>
      <div className={styles.info}>
        <div className={styles.top}>
          <div className={styles.menu}>
            <a className={styles.about}>About</a>
            <a className={styles.about}>Learning Path</a>
            <a className={styles.about}>Mentor</a>
          </div>
        </div>
        <div className={styles.infoBottomRight}>
          <div className={styles.socials}>
            <b className={styles.title}>Socials</b>
            <div className={styles.socials1}>
              <a className={styles.youtube}>
                <div className={styles.icon}>
                  <img
                    className={styles.iconyoutube}
                    alt=""
                    src="./iconyoutube1.svg"
                  />
                </div>
                <div className={styles.footerText}>YouTube</div>
              </a>
              <a className={styles.instagram}>
                <div className={styles.icon}>
                  <img
                    className={styles.iconinstagram}
                    alt=""
                    src="./iconinstagram1.svg"
                  />
                </div>
                <div className={styles.footerText}>Instagram</div>
              </a>
              <a className={styles.youtube}>
                <div className={styles.icon}>
                  <img
                    className={styles.iconfacebook}
                    alt=""
                    src="./iconfacebook.svg"
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
          <a className={styles.about}>Terms</a>
          <a className={styles.about}>Privacy</a>
        </div>
      </div>
    </div>
  );
};

export default RequestFooter;
