import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./GeneralNavBar.module.css";

const GeneralNavBar: NextPage = () => {
  const router = useRouter();

  const onLogoImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <section className={styles.navBar}>
      <div className={styles.navBar1}>
        <img
          className={styles.logoIcon}
          alt=""
          src="/logo2.svg"
          onClick={onLogoImageClick}
        />
      </div>
    </section>
  );
};

export default GeneralNavBar;
