import React, { FC } from "react";
import PageTemplate from '../../components/PageTemplate/index'
import AgreementForm from '../../components/AgreementForm/index';

const AgreementPage: FC = () => {
  return (
      <PageTemplate Component={AgreementForm} indicatorCompledFraction={3}/>
  );
};

export default AgreementPage;

