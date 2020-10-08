import React, { FC } from "react";
import styles from "./index.module.css";

interface IIndicatorProps {
  indicatorCompledFraction: number;
}

const IndicatorLine: FC<IIndicatorProps> = ({ indicatorCompledFraction }) => {
  return (
    <div className={styles.indicator}>
      <div
        className={styles.indicator__complete}
        style={{ width: `${33.33 * indicatorCompledFraction}%` }}
      ></div>
      <div
        className={styles.indicator__uncomplete}
        style={{ width: `${100 - 33.33 * indicatorCompledFraction}%` }}
      ></div>
    </div>
  );
};

export default IndicatorLine;
