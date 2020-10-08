import React, { FC } from "react";
import { Button } from "react-bootstrap";
import styles from "./index.module.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

interface IProps {
  link: string;
  text: string;
  handleClick?: any;
  data?: object;
  moveForward?: boolean;
}

const CustomButton: FC<IProps> = ({
  link,
  text,
  handleClick,
  data,
  moveForward,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    if (data) dispatch(handleClick(data));
    if (moveForward) history.push(link);
  };
  return (
    <div className={styles.buttonContainer}>
      <Button className={styles.button} onClick={handleButtonClick}>
        {text}
      </Button>
    </div>
  );
};

export default CustomButton;
