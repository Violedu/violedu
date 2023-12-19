import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./PrivacyNavbar.module.css";

const PrivacyNavbar: NextPage = () => {
  const router = useRouter();

  const onLogoImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <section className={styles.navBar} data-scroll-to="navBar">
      <div className={styles.navBar1}>
        <img
          className={styles.logoIcon}
          alt=""
          src="/violedu/logo21.svg"
          onClick={onLogoImageClick}
        />
      </div>
    </section>
  );
};

export default PrivacyNavbar;
