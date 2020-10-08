import React, { FC, useState, useEffect, useRef } from "react";
import { Row, Col, Form } from "react-bootstrap";
import styles from "./index.module.css";
import FormInput from "../FormInput/index";
import CustomButton from "../CustomButton/index";
import { addPersonalData } from "../../redux/actions/index";

const CreateAccountForm: FC = () => {
  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [validated, setValidated] = useState(false);
  const isMount = useRef(false);

  useEffect(() => {
    if (
      isMount.current &&
      personalData.firstName &&
      personalData.lastName &&
      personalData.email
    )
      setValidated(true);
    else isMount.current = true;
  }, [personalData]);

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
        <h1 className={styles.header}>Create Your Account</h1>
        <div className={styles.content}>
          <Form validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formCreateAccount">
              <FormInput
                label="First Name"
                type="text"
                name="firstName"
                value={personalData.firstName}
                handleChange={setPersonalData}
              />
              <FormInput
                label="Last Name"
                type="text"
                name="lastName"
                value={personalData.lastName}
                handleChange={setPersonalData}
              />
              <FormInput
                label="Email"
                type="email"
                name="email"
                value={personalData.email}
                handleChange={setPersonalData}
              />
            </Form.Group>
            <CustomButton
              link="/test/dob"
              text="Continue"
              handleClick={addPersonalData}
              data={personalData}
              moveForward={true}
              isFormValid={validated}
            />
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default CreateAccountForm;
