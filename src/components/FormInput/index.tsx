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
      <Form.Label className={styles.formLabel}>{label}</Form.Label>
      <Form.Control
        type={type}
        className={styles.formInput}
        name={name}
        value={value}
        required
        onChange={onInputChange}
      />
      <Form.Text className={styles.formHelperText}>{helperText}</Form.Text>
      <Form.Control.Feedback type="invalid">
        Please provide a value.
      </Form.Control.Feedback>
    </div>
  );
};

export default FormInput;
