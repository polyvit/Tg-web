"use client";

import { useState } from "react";
import Button from "../../../../components/Button";
import PageHeader from "../../../_components/PageHeader";
import AddForm from "./AddForm";
import AddFormModal from "../../../../components/Modal/AddFormModal";

export default function ShowModalWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <PageHeader text="Список форм">
        <Button text="Добавить форму" onClick={() => setIsOpen(true)} />
      </PageHeader>
      {isOpen && (
        <AddFormModal setIsOpen={setIsOpen}>
          <AddForm setIsOpen={setIsOpen} />
        </AddFormModal>
      )}
    </>
  );
}
