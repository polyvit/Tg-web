import React from "react";
import PageHeader from "../../../../_components/PageHeader";
import ProductForm from "../../_components/ProductForm";
import { bookDatabase } from "../../../../../utils/workDb";

export default async function EditPage({ params: { id } }) {
  const product = await bookDatabase.findBookById(id);

  return (
    <>
      <PageHeader text="Отредактировать данные" />
      <ProductForm product={product} />
    </>
  );
}

export async function generateStaticParams() {
  const books = await bookDatabase.getAllBooks({
    select: {
      id: true,
      title: true,
      price: true,
      canPurchase: true,
      imagePath: true,
      widgetGC: true,
    },
  });

  return books.map((book) => ({
    id: book.id,
  }));
}
