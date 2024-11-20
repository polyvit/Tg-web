"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { ROUTES } from "../../../../utils/routes";
import { formDatabase } from "../../../../db/formDb";

const formSchema = z.object({
  name: z.string().min(3, { message: "Это поле не должно быть пустым" }),
  description: z.string().optional(),
});

export async function addForm(_: unknown, formData: FormData) {
  const result = formSchema.safeParse(Object.fromEntries(formData.entries()));
  if (result.success === false) {
    return {payload: result.error?.formErrors.fieldErrors};
  }
  const data = result.data;

  await formDatabase.createNewForm(data);
  revalidatePath(ROUTES.FORMS);
  return {payload: "success"}
}
