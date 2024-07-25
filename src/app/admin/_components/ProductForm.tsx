"use client";
import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { addProduct, editProduct } from "../_actions/products";
import { useFormState, useFormStatus } from "react-dom";
import { Book } from "@prisma/client";

function ProductForm({ product }: { product?: Book | null }) {
  const [errors, actionFunction] = useFormState(
    product ? editProduct.bind(null, product.id) : addProduct,
    {}
  );
  const inputs = [
    {
      id: "title",
      name: "title",
      placeholder:
        "Укажите название продукта, которое будет видно пользователям",
      label: "Название",
      type: "text",
    },
    {
      id: "price",
      name: "price",
      placeholder: "1000 (руб.)",
      label: "Цена в рублях",
      type: "number",
    },
    {
      inputType: "textarea",
      id: "about",
      name: "about",
      placeholder: "Подробное описание товара для отдельной страницы",
      label: "Подробное описание",
      rows: 4,
    },
    {
      inputType: "file",
      id: "imagePath",
      name: "imagePath",
      label: "Картинка",
    },
    {
      id: "widgetGC",
      name: "widgetGC",
      placeholder: "Прикрепите ссылку на виджет геткурса",
      label: "Ссылка на виджет ГК",
      type: "text",
    },
  ];

  return (
    <form action={actionFunction}>
      {inputs.map((input) => (
        <Input
          key={input.id}
          defaultValue={product ? product[input.name] : ""}
          {...input}
          errorMessage={
            errors && errors[input.name] ? errors[input.name][0] : null
          }
        />
      ))}
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      text={pending ? "Отправляем" : "Отправить"}
    />
  );
}

export default ProductForm;
