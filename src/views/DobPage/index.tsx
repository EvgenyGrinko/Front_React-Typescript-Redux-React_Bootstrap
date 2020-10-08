import React, { FC } from "react";
import PageTemplate from "../../components/PageTemplate/index";
import DobForm from "../../components/DobForm/index";

const DobPage: FC = () => {
  return <PageTemplate Component={DobForm} indicatorCompledFraction={2} />;
};

export default DobPage;
