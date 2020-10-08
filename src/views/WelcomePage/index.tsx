import React, { FC } from "react";
import PageTemplate from "../../components/PageTemplate";
import InitialContent from "../../components/InitialContent/index";

const WelcomePage: FC = () => {
  return (
    <PageTemplate Component={InitialContent} indicatorCompledFraction={0} />
  );
};

export default WelcomePage;
