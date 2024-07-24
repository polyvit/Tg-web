"use server"
import { z } from "zod";
import fs from "fs/promises"
import db from "../../../db/db"
import { redirect } from "next/navigation";

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
    redirect("/admin")
}

export async function toggleAvailability(id: string, canPurchase: boolean) {
  // await db.product.update({where: {id}, data: {canPurchase}})
}

export async function deleteProduct(id: string) {
  // const product = await db.product.delete({where: {id}})
  // if null return notFound()
}