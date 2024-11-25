"use client";
import { DndContext } from "@dnd-kit/core";
import { IMongoForm } from "../../models/Form";
import Builder from "../Builder";
import Button from "../Button";
import DragOverlayWrapper from "../Builder/DragOverlayWrapper";

const FormConstructor = ({ form }: { form: IMongoForm }) => {
  return (
    <DndContext>
      <main className="flex flex-col w-full">
        <nav className="flex justify-between border-b-2 py-4 items-center">
          <h2 className="font-medium">
            <span>Название формы: </span>
            <span>{form.name}</span>
          </h2>
          <div className="flex gap-4">
            <Button text="Превью" btnType="link" />
            <Button text="Сохранить" btnType="link" />
            <Button text="Опубликовать" />
          </div>
        </nav>
        <div className="flex w-full flex-grow justify-center items-center relative overflow-y-auto h-[65vh] border-2 border-gray-300 bg-[url(/paper.svg)]">
          <Builder />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
};

export default FormConstructor;
