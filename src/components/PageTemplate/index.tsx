import React, { FC } from "react";
import styles from "./index.module.css";
import IndicatorLine from "../IndicatorLine/index";

interface IProps {
  Component: FC;
  indicatorCompledFraction: number;
}

const PageTemplate: FC<IProps> = ({ Component, indicatorCompledFraction }) => {
  return (
    <div className={styles.mainPage}>
      <header className={styles.header}>ReactTest</header>
      <IndicatorLine indicatorCompledFraction={indicatorCompledFraction} />
      <Component />
    </div>
  );
};

export default PageTemplate;
