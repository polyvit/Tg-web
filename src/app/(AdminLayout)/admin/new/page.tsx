import React from "react";
import PageHeader from "../../../_components/PageHeader";
import ProductForm from "../_components/ProductForm";

export default function NewPage() {
  return (
    <>
      <PageHeader text="Добавить новый продукт" />
      <ProductForm />
    </>
  );
}
