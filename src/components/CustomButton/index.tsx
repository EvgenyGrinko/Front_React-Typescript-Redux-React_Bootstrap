import React, { FC } from "react";
import { Button, Spinner } from "react-bootstrap";
import styles from "./index.module.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

interface IProps {
  link: string;
  text: any;
  handleClick?: any;
  data?: object;
  moveForward?: boolean;
  isFormValid?: boolean;
  isLoading?: boolean;
}

const CustomButton: FC<IProps> = ({
  link,
  text,
  handleClick,
  data,
  moveForward,
  isFormValid,
  isLoading,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    if (data && isFormValid) dispatch(handleClick(data));
    if (moveForward && isFormValid) history.push(link);
  };
  return (
    <div className={styles.buttonContainer}>
      <Button
        className={styles.button}
        type="submit"
        onClick={handleButtonClick}
      >
        {isLoading ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : (
          text
        )}
      </Button>
    </div>
  );
};

export default CustomButton;
