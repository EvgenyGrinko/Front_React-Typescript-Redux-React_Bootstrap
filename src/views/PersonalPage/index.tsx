import React, { FC } from "react";
import PageTemplate from "../../components/PageTemplate/index";
import CreateAccountForm from "../../components/CreateAccountForm/index";
const PersonalPage: FC = () => {
  return (
    <PageTemplate Component={CreateAccountForm} indicatorCompledFraction={1} />
  );
};

export default PersonalPage;
