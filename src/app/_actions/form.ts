"use server"
import { redirect } from "next/navigation";
import { ROUTES } from "../../utils/routes";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Это поле не должно быть пустым" }),
  tel: z.coerce.number().int().gte(1, { message: "Это поле не должно быть пустым" }),
  email: z.string().email({ message: "Введенное значение не является эл. почтой" }),
});

export async function sendToTG(prevState: unknown, formData: FormData) {
  const result = formSchema.safeParse(Object.fromEntries(formData.entries()));
  if (result.success === false) {
    return result.error?.formErrors.fieldErrors;
  }
  const data = result.data;
  const text = `Заявка от ${data.name}\nПочта: ${data.email}\nТелефон: ${data.tel}`;
  console.log("text", text)
//   redirect(ROUTES.PRODUCTS);
}