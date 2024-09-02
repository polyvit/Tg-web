"use server";
import { z } from "zod";
import { notFound, redirect } from "next/navigation";
import { ROUTES } from "../../../../utils/routes";
import { bookDatabase } from "../../../../utils/workDb";
import { getStorage, ref as firebaseRef, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import app from "../../../../lib/firebase";
import { revalidatePath } from "next/cache";

const storage = getStorage(app)

const imageSchema = z
  .custom<File>()
  .refine((file) => file.size === 0 || file.type.startsWith("image/"));

const addSchema = z.object({
  title: z.string().min(1, { message: "Это поле не должно быть пустым" }),
  price: z.coerce.number().int().gte(1, { message: "Введите цифру больше 0" }),
  imagePath: imageSchema.refine((file) => file.size > 0, "Обязательное поле"),
  about: z.string().min(1, { message: "Это поле не должно быть пустым" }),
  widgetGC: z
    .string()
    .min(1)
    .includes("&ref=", { message: "Неправильный формат ссылки" }),
});
const editSchema = addSchema.extend({
  imagePath: imageSchema.optional(),
});

export async function addProduct(_: unknown, formData: FormData) {
  const result = addSchema.safeParse(Object.fromEntries(formData.entries()));
  if (result.success === false) {
    return result.error?.formErrors.fieldErrors;
  }
  const data = result.data;
  const imageRef = firebaseRef(storage, `products/${data.imagePath.name}`)
  await uploadBytes(imageRef, data.imagePath)
  const url = await getDownloadURL(imageRef)
  await bookDatabase.createNewBook(data, url) 
  revalidatePath(ROUTES.PRODUCTS)
  redirect(ROUTES.PRODUCTS);
}

export async function editProduct(
  id: string,
  _: unknown,
  formData: FormData
) {
  const result = editSchema.safeParse(Object.fromEntries(formData.entries()));
  if (result.success === false) {
    return result.error?.formErrors.fieldErrors;
  }
  const data = result.data;
  const product = await bookDatabase.findBookById(id)

  if (product == null) return notFound();

  let imagePath = product.imagePath;
  let imageName = product.imageName

  if (data.imagePath != null && data.imagePath != undefined && data.imagePath.size > 0) {
    const imageRef = firebaseRef(storage, `products/${imageName}`)
    await deleteObject(imageRef)
    await uploadBytes(imageRef, data.imagePath!)
    const url = await getDownloadURL(imageRef)
    imagePath = url
    imageName = data.imagePath?.name as string
  }
  await bookDatabase.updateBook(id, data, imagePath, imageName as string)
  revalidatePath(ROUTES.PRODUCTS)
  redirect(ROUTES.PRODUCTS);
}

export async function toggleAvailability(id: string, canPurchase: boolean) {
  await bookDatabase.updateCanPurchaseBook(id, canPurchase)
  revalidatePath(ROUTES.PRODUCTS)
}

export async function deleteProduct(id: string) {
  const product = await bookDatabase.deleteBookById(id)
  if (product == null) return notFound();
  if (product.imageName) {
    const imageRef = firebaseRef(storage, `products/${product.imageName}`)
    await deleteObject(imageRef)
  }
  revalidatePath(ROUTES.PRODUCTS)
}
