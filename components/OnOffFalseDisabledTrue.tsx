import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./OnOffFalseDisabledTrue.module.css";

type OnOffFalseDisabledTrueType = {
  /** Style props */
  onOffFalseDisabledTrueCursor?: CSSProperties["cursor"];
};

const OnOffFalseDisabledTrue: NextPage<OnOffFalseDisabledTrueType> = ({
  onOffFalseDisabledTrueCursor,
}) => {
  const onOffFalseDisabledTrueStyle: CSSProperties = useMemo(() => {
    return {
      cursor: onOffFalseDisabledTrueCursor,
    };
  }, [onOffFalseDisabledTrueCursor]);

  return (
    <div
      className={styles.onOfffalseDisabledtrue}
      style={onOffFalseDisabledTrueStyle}
    >
      <div className={styles.container} />
    </div>
  );
};

export default OnOffFalseDisabledTrue;
