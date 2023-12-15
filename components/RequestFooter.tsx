import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./RequestFooter.module.css";

const RequestFooter: NextPage = () => {
  const router = useRouter();

  const onLogoImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <img
          className={styles.logoIcon}
          alt=""
          src="/violedu/logo1.svg"
          onClick={onLogoImageClick}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.infoBottomRight}>
          <div className={styles.socials}>
            <b className={styles.title}>Socials</b>
            <div className={styles.socials1}>
              <a
                className={styles.youtube}
                href="https://www.youtube.com/@Violedu-dm3uk"
                target="_blank"
              >
                <div className={styles.icon}>
                  <img
                    className={styles.iconyoutube}
                    alt=""
                    src="/violedu/iconyoutube1.svg"
                  />
                </div>
                <div className={styles.footerText}>YouTube</div>
              </a>
              <a
                className={styles.instagram}
                href="https://www.instagram.com/violedugrp/"
                target="_blank"
              >
                <div className={styles.icon}>
                  <img
                    className={styles.iconinstagram}
                    alt=""
                    src="/violedu/iconinstagram1.svg"
                  />
                </div>
                <div className={styles.footerText}>Instagram</div>
              </a>
              <a
                className={styles.youtube}
                href="https://www.google.com"
                target="_blank"
              >
                <div className={styles.icon}>
                  <img
                    className={styles.iconfacebook}
                    alt=""
                    src="/violedu/iconfacebook.svg"
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
          <a className={styles.terms}>Terms</a>
          <a className={styles.terms}>Privacy</a>
        </div>
      </div>
    </div>
  );
};

export default RequestFooter;
