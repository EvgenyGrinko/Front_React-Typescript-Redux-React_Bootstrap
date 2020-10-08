import React, { FC, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import styles from "./index.module.css";
import FormInput from "../FormInput/index";
import CustomButton from "../CustomButton/index";

const DobForm: FC = () => {
  const [dob, setDob] = useState({dayOfBirth: ''});
  return (
    <Row className="m-0">
      <Col md={{ span: 4, offset: 4 }}>
        <h1 className={styles.header}>What's your date of birth?</h1>
        <div className={styles.content}>
          <Form.Group controlId="formDob">
            <FormInput
              label="Your Birthday"
              type="date"
              helperText="MM/DD/YYYY"
              name="dob"
              value={dob.dayOfBirth}
              handleChange={setDob}
            />
          </Form.Group>
        </div>
        <CustomButton
          link="/test/agreement"
          text="Continue"
          moveForward={true}
        />
      </Col>
    </Row>
  );
};

export default DobForm;
