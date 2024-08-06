import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import cn from "classnames";
import Image from "next/image";

interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  inputType?: string;
  label: string;
  errorMessage: string | null;
  id: string;
}

interface ITextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  inputType?: string;
  label: string;
  errorMessage: string | null;
  id: string;
}

type props = Partial<IInputProps & ITextareaProps>;

const Input: React.FC<props> = ({
  inputType = "input",
  label,
  id,
  errorMessage,
  className,
  defaultValue,
  ...props
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className={cn("block mb-2 text-sm font-medium", {
          ["text-red-700 dark:text-red-500"]: errorMessage,
        })}
      >
        {label}
      </label>
      {inputType === "input" && (
        <input
          id={id}
          defaultValue={defaultValue}
          className={cn(
            className,
            "border text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700",
            {
              ["border-red-500 text-red-900 dark:text-red-400 placeholder-red-700 dark:placeholder-red-500 focus:ring-red-500 focus:border-red-500 dark:border-red-500 bg-red-50"]:
                errorMessage,
            }
          )}
          {...props}
        />
      )}
      {inputType === "textarea" && (
        <textarea
          id={id}
          defaultValue={defaultValue}
          className={cn(
            className,
            "block p-2.5 w-full text-sm rounded-lg border",
            {
              ["bg-red-50 border-red-300 text-red-900 placeholder-red-700 dark:placeholder-red-500"]:
                errorMessage,
            }
          )}
          {...props}
        ></textarea>
      )}
      {inputType === "file" && (
        <>
          <input
            type="file"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id={id}
            {...props}
          />
          {defaultValue ? (
            <Image
              className="mt-4"
              src={defaultValue as string}
              alt={label ?? "Картинка из базы"}
              height={100}
              width={100}
            />
          ) : null}
        </>
      )}
      <p
        className={cn("mt-2 text-sm", {
          ["text-red-600 dark:text-red-500"]: errorMessage,
        })}
      >
        {errorMessage}
      </p>
    </div>
  );
};

export default Input;
