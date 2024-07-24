import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button/Button";
import { z } from "zod";

// title, price, imagePath, filePath, about, widgetGC, canPurchase

const fileSchema = z.instanceof(File, { message: "Required" });
const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith("image/")
);

const addSchema = z.object({
  title: z.string().min(1),
  price: z.number().int().gte(1),
  imagePath: imageSchema.refine((file) => file.size > 0, "Required"),
  about: z.string().min(1),
  widgetGC: z.string().min(1),
});

function ProductForm() {
  const inputs = [
    {
      id: "name",
      placeholder:
        "Укажите название продукта, которое будет видно пользователям",
      label: "Название",
      errorMessage: "Поле не должно быть пустым",
      type: "text",
    },
    {
      id: "price",
      placeholder: "1000 (руб.)",
      label: "Цена в рублях",
      errorMessage: "Поле не должно быть пустым",
      type: "number",
    },
    {
      inputType: "textarea",
      id: "about",
      placeholder: "Write some words about",
      label: "Подробное описание",
      rows: 4,
      errorMessage: "Поле не должно быть пустым",
    },
    {
      inputType: "file",
      id: "image",
      label: "Картинка",
      errorMessage: "Поле не должно быть пустым",
    },
    {
      id: "widget",
      placeholder: "Прикрепите ссылку на виджет геткурса",
      label: "Ссылка на виджет ГК",
      errorMessage: "Поле не должно быть пустым",
      type: "text",
    },
  ];
  return (
    <form>
      {inputs.map((input) => (
        <Input key={input.id} {...input} />
      ))}
      <Button text="Добавить" />
    </form>
  );
}

export default ProductForm;
