import React from "react";
import PageHeader from "../../../../_components/PageHeader";
import ProductForm from "../../_components/ProductForm";
import { IMongoBook } from "../../../../../models/Book.ts";
import { bookDatabase } from "../../../../../utils/workDb.ts";

export const revalidate = 10;

export default async function EditPage({ params }: { params: { id: string } }) {
  const mongoBook: IMongoBook = await bookDatabase.findBookById(params.id);

  return (
    <>
      <PageHeader text="Отредактировать данные" />
      <ProductForm product={mongoBook} />
    </>
  );
}

// export async function generateStaticParams() {
//   const res = await fetch(process.env.URL + "/api/books");
//   const books: IMongoBook[] = await res.json();

//   return books.map((book) => ({
//     id: book._id,
//   }));
// }
