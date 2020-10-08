import React, { FC } from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./index.module.css";
import CustomButton from "../CustomButton/index";

const InitialContent: FC = () => {
  return (
    <Row className="m-0">
      <Col md={{ span: 6, offset: 3 }}>
        <h1 className={styles.header}>Say Hello to ReactTest</h1>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          dignissim, dui vitae fringilla condimentum, lorem neque semper urna,
          et aliquam.
        </p>
        <CustomButton
          link="/test/personal"
          text="Apply Now"
          moveForward={true}
        />
      </Col>
    </Row>
  );
};

export default InitialContent;
