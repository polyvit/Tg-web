"use client";
import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button/Button";
import { addProduct } from "../_actions/products";
import { useFormState } from "react-dom";

function ProductForm() {
  const [errors, actionFunction] = useFormState(addProduct, {});
  const inputs = [
    {
      id: "title",
      name: "title",
      placeholder:
        "Укажите название продукта, которое будет видно пользователям",
      label: "Название",
      errorMessage: "Поле не должно быть пустым",
      type: "text",
    },
    {
      id: "price",
      name: "price",
      placeholder: "1000 (руб.)",
      label: "Цена в рублях",
      errorMessage: "Поле не должно быть пустым",
      type: "number",
    },
    {
      inputType: "textarea",
      id: "about",
      name: "about",
      placeholder: "Write some words about",
      label: "Подробное описание",
      rows: 4,
      errorMessage: "Поле не должно быть пустым",
    },
    {
      inputType: "file",
      id: "imagePath",
      name: "imagePath",
      label: "Картинка",
      errorMessage: "Поле не должно быть пустым",
    },
    {
      id: "widgetGC",
      name: "widgetGC",
      placeholder: "Прикрепите ссылку на виджет геткурса",
      label: "Ссылка на виджет ГК",
      errorMessage: "Поле не должно быть пустым",
      type: "text",
    },
  ];

  return (
    <form action={actionFunction}>
      {inputs.map((input) => (
        <Input
          key={input.id}
          {...input}
          errorMessage={
            errors && errors[input.name] ? errors[input.name][0] : null
          }
        />
      ))}
      <Button type="submit" text="Добавить" />
    </form>
  );
}

// submit button, useformStatus

export default ProductForm;
