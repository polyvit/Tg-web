"use client";
import React from "react";
import Button from "../../components/Button";
import Notification from "../../components/Notification";
import Input from "../../components/Input";
import { sendToTG } from "../_actions/form";
import { useFormState } from "react-dom";

function CourseForm() {
  const [state, actionFunction] = useFormState(sendToTG, {
    errors: null,
    isSuccess: false,
  });

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
    <>
      {!state.isSuccess && (
        <form action={actionFunction}>
          {inputs.map((input) => (
            <Input
              key={input.id}
              className="focus:outline-none border-0 border-b border-solid border-neutral-500 rounded-none"
              {...input}
              errorMessage={
                state.errors &&
                state.errors[input.name as keyof typeof state.errors]
                  ? state.errors[input.name as keyof typeof state.errors]![0]
                  : null
              }
            />
          ))}
          <Button text="Отправить" />
        </form>
      )}
      {state.isSuccess && <Notification />}
    </>
  );
}

export default CourseForm;
