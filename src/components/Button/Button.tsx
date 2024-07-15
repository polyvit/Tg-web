import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import "./Button.scss";

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  btnType?: string;
}

const Button: React.FC<IButtonProps> = ({
  btnType = "btn",
  text,
  ...props
}) => {
  return (
    <button className={`btn ${btnType === "link" ? "link" : ""}`} {...props}>
      {text}
    </button>
  );
};

export default Button;
