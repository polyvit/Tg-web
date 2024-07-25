"use server"
import { z } from "zod";
import fs from "fs/promises"
import db from "../../../db/db"
import { notFound, redirect } from "next/navigation";
import { ROUTES } from "../../../utils/routes";

const imageSchema = z.custom<File>().refine(
  (file) => file.size === 0 || file.type.startsWith("image/")
);

const addSchema = z.object({
  title: z.string().min(1, { message: "Это поле не должно быть пустым" }),
  price: z.coerce.number().int().gte(1, { message: "Введите цифру больше 0" }),
  imagePath: imageSchema.refine((file) => file.size > 0, "Обязательное поле"),
  about: z.string().min(1, { message: "Это поле не должно быть пустым" }),
  widgetGC: z.string().min(1).includes("&ref=", { message: "Неправильный формат ссылки" }),
});

export async function addProduct(prevState: unknown, formData: FormData) {
    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
    if (result.success === false) {
      return result.error?.formErrors.fieldErrors
    }
    const data = result.data;
    await fs.mkdir("public/products", {recursive: true})
    const imagePath = `/products/${crypto.randomUUID()}-${data.imagePath.name}`
    await fs.writeFile(`public${imagePath}`, Buffer.from(await data.imagePath.arrayBuffer()))

    await db.book.create({data: {
      title: data.title,
      price: data.price,
      imagePath: imagePath,
      about: data.about,
      widgetGC: data.widgetGC,
    }})
    redirect(ROUTES.ADMIN)
}

export async function toggleAvailability(id: string, canPurchase: boolean) {
  await db.book.update({where: {id}, data: {canPurchase}})
}

export async function deleteProduct(id: string) {
  const product = await db.book.delete({where: {id}})
  if (product == null) return notFound()
  await fs.unlink(`public${product.imagePath}`)
}