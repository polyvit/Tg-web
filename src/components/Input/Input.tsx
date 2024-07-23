import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: number;
}

const Input: React.FC<IInputProps> = ({ ...props }) => {
  return <input className={styles.input} {...props} />;
};

export default Input;
