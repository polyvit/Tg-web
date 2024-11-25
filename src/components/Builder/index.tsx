"use client";

import { useDroppable } from "@dnd-kit/core";
import BuilderSidebar from "./BuilderSidebar";

const Builder = () => {
  const droppable = useDroppable({
    id: "builder-drop-area",
    data: {
      isBuilderDropArea: true,
    },
  });
  return (
    <div className="flex w-full h-full">
      <div className="p-4 w-full">
        <div className="h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto">
          <p className="text-3xl flex flex-grow items-center font-bold">
            Перетащите элемент
          </p>
        </div>
      </div>
      <BuilderSidebar />
    </div>
  );
};

export default Builder;
