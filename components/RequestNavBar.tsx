import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./RequestNavBar.module.css";

const RequestNavBar: NextPage = () => {
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
          src="/violedu/logo2.svg"
          onClick={onLogoImageClick}
        />
      </div>
    </section>
  );
};

export default RequestNavBar;
