import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import cn from "classnames";

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  btnType?: string;
}

const btnStyle =
  "delay-[0.4s] text-custom-red bg-transparent border-2 border-solid border-custom-red rounded-[100vmax] cursor-pointer max-w-full whitespace-nowrap inline-flex font-bold	text-base py-2 px-7 hover:bg-custom-red hover:text-white";
const linkStyle =
  "delay-[0.4s] bg-transparent font-normal cursor-pointer font-bold text-base text-lg border-0 text-custom-black underline p-0 hover:text-custom-red hover:bg-transparent";

const Button: React.FC<IButtonProps> = ({
  btnType = "btn",
  text,
  ...props
}) => {
  return (
    <button
      className={cn({
        [`${btnStyle}`]: btnType === "btn",
        [`${linkStyle}`]: btnType === "link",
      })}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
