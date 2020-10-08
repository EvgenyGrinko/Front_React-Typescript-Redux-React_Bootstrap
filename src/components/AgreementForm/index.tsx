import React, { FC, useState } from "react";
import { Row, Col, Form, Alert } from "react-bootstrap";
import styles from "./index.module.css";
import CustomButton from "../CustomButton/index";
import { agreeAndCreateAccount } from "../../redux/actions/index";
import { useSelector } from "react-redux";

const CreateAccountForm: FC = () => {
  const [agreement1, setAgreement1] = useState(false);
  const [agreement2, setAgreement2] = useState(false);

  interface RootState {
    isAccountCreated: boolean;
    error: string;
    personalData: object;
  }

  const selectStates = (state: RootState) => ({
    isAccountCreated: state.isAccountCreated,
    error: state.error,
    personalData: state.personalData,
  });

  const { isAccountCreated, error, personalData } = useSelector(selectStates);

  return (
    <Row className="m-0">
      <Col md={{ span: 4, offset: 4 }}>
        <h1 className={styles.header}>One last step!</h1>
        <div className={styles.content}>
          <Form.Label className={styles.formLabel}>Agreement</Form.Label>
          <div className={styles.firstAgreementContainer}>
            <label className={styles.checkboxContainer}>
              I agree to the
              <input
                type="checkbox"
                checked={agreement1}
                onChange={() => {
                  setAgreement1(!agreement1);
                }}
              />
              <span className={styles.customCheckbox}></span>
            </label>
            <div className={styles.linksContainer}>
              <a href="#/" className={styles.customLink}>
                Electronic Transaction Esign Consent
              </a>
            </div>
          </div>

          <div className="d-flex flex-column">
            <label className={styles.checkboxContainer}>
              I agree to the following agreements
              <input
                type="checkbox"
                checked={agreement2}
                onChange={() => {
                  setAgreement2(!agreement2);
                }}
              />
              <span className={styles.customCheckbox}></span>
            </label>
            <div className={styles.linksContainer}>
              <a href="#/" className={styles.customLink}>
                Privacy Notice
              </a>
              <a href="#/" className={styles.customLink}>
                Terms and Conditions
              </a>
              <a href="#/" className={styles.customLink}>
                Membership Agreement
              </a>
            </div>
          </div>
        </div>
        <CustomButton
          link="/test/dob"
          text={`Agree & create account`}
          handleClick={agreeAndCreateAccount}
          data={{ ...personalData, agreement1 }}
        />
        {error && (
          <div className={styles.messageContainer}>
            <Alert variant="danger">An error occured.</Alert>
          </div>
        )}
        {!error && isAccountCreated && (
          <div className={styles.messageContainer}>
            <Alert variant="success">Account created successfully.</Alert>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default CreateAccountForm;
