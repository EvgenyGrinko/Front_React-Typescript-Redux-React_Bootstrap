import React, { FC } from "react";
import { Form } from "react-bootstrap";
import styles from "./index.module.css";

interface IFormInput {
  label: string;
  type: string;
  name: string;
  helperText?: string;
  value?: string;
  handleChange?: any;
}

const FormInput: FC<IFormInput> = ({
  label,
  helperText,
  type,
  name,
  value,
  handleChange,
}) => {
  const onInputChange = (event: any) => {
    const { name, value } = event.target;
    handleChange((prevValues: object) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  return (
    <div className={styles.formControl}>
      <Form.Group>
        <Form.Label className={styles.formLabel}>{label}</Form.Label>
        <Form.Control
          type={type}
          className={styles.formInput}
          name={name}
          value={value}
          isValid={false}
          required
          onChange={onInputChange}
        />
        <Form.Text className={styles.formHelperText}>{helperText}</Form.Text>
      </Form.Group>
    </div>
  );
};

export default FormInput;
