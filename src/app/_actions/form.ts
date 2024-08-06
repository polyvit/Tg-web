"use server"
import { z } from "zod";
import { sendTgMethod } from "../../utils/tgService";

const formSchema = z.object({
  name: z.string().min(1, { message: "Это поле не должно быть пустым" }),
  tel: z.coerce.number().int().gte(1, { message: "Это поле не должно быть пустым" }),
  email: z.string().email({ message: "Введенное значение не является эл. почтой" }),
});

export async function sendToTG(_: unknown, formData: FormData) {
  const result = formSchema.safeParse(Object.fromEntries(formData.entries()));
  if (result.success === false) {
    return {errors: result.error?.formErrors.fieldErrors, isSuccess: null};
  }
  const data = result.data;
  const text = `Заявка от ${data.name}\nПочта: ${data.email}\nТелефон: ${data.tel}`;
  const response = await sendTgMethod(text)
  return {errors: null, isSuccess: response}
}