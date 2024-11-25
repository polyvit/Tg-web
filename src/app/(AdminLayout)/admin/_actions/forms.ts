"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { ROUTES } from "../../../../utils/routes";
import { formDatabase } from "../../../../db/formDb";

const formSchema = z.object({
  name: z.string().min(3, { message: "Это поле не должно быть пустым" }),
  description: z.string().optional(),
});

export async function CreateForm(_: unknown, formData: FormData) {
  const result = formSchema.safeParse(Object.fromEntries(formData.entries()));
  if (result.success === false) {
    return {status: "failure", payload: result.error?.formErrors.fieldErrors};
  }
  const data = result.data;

  const formId = await formDatabase.createNewForm(data);
  revalidatePath(ROUTES.FORMS);
  return {status: "success", payload: formId}
}

export async function GetAllForms() {
  return await formDatabase.getAllForms()
}
