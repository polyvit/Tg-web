import React from "react";
import PageHeader from "../../_components/PageHeader";
import ProductForm from "../../_components/ProductForm";
import db from "../../../../db/db";

export default async function EditPage({ params: { id } }) {
  const product = await db.book.findUnique({ where: { id } });

  return (
    <>
      <PageHeader text="Отредактировать данные" />
      <ProductForm product={product} />
    </>
  );
}
