import React, { FC, useState, useEffect, useRef } from "react";
import { Row, Col, Form } from "react-bootstrap";
import styles from "./index.module.css";
import FormInput from "../FormInput/index";
import CustomButton from "../CustomButton/index";

const DobForm: FC = () => {
  const [dob, setDob] = useState({ dayOfBirth: "" });
  const [validated, setValidated] = useState(false);
  const isMount = useRef(false);

  useEffect(() => {
    if (isMount.current && dob.dayOfBirth) setValidated(true);
    else isMount.current = true;
  }, [dob]);

  useEffect(() => {
    return () => {
      isMount.current = false;
    };
  }, []);

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
  };
  return (
    <Row className="m-0">
      <Col md={{ span: 4, offset: 4 }}>
        <h1 className={styles.header}>What's your date of birth?</h1>
        <div className={styles.content}>
          <Form validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formDob">
              <FormInput
                label="Your Birthday"
                type="date"
                helperText="MM/DD/YYYY"
                name="dayOfBirth"
                value={dob.dayOfBirth}
                handleChange={setDob}
              />
            </Form.Group>
            <CustomButton
              link="/test/agreement"
              text="Continue"
              moveForward={true}
              isFormValid={validated}
            />
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default DobForm;
