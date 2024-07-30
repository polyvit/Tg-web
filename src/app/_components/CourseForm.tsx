"use client";
import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { sendToTG } from "../_actions/form";
import { useFormState } from "react-dom";

function CourseForm() {
  const [errors, actionFunction] = useFormState(sendToTG, {});

  const inputs = [
    {
      id: "name",
      type: "text",
      placeholder: "Ваше имя",
      name: "name",
      required: true,
    },
    {
      id: "phone",
      type: "number",
      placeholder: "Телефон",
      name: "tel",
      required: true,
    },
    {
      id: "email",
      // type: "email",
      placeholder: "Эл. почта",
      name: "email",
      required: true,
    },
  ];
  return (
    <form action={actionFunction}>
      {inputs.map((input) => (
        <Input
          key={input.id}
          className="focus:outline-none border-0 border-b border-solid border-neutral-500 rounded-none"
          {...input}
          errorMessage={
            errors && errors[input.name] ? errors[input.name][0] : null
          }
        />
      ))}
      <Button text="Отправить" />
    </form>
  );
}

export default CourseForm;
