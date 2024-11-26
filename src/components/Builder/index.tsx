"use client";

import { DragEndEvent, useDndMonitor, useDroppable } from "@dnd-kit/core";
import BuilderSidebar from "./BuilderSidebar";
import useBuilder from "../../hooks/useBuilder";
import {
  ElementsType,
  FormElementInstance,
  FormElements,
} from "./FormElements";
import { idGenerator } from "../../utils/isGenerator";

const Builder = () => {
  const { elements, addElement } = useBuilder();

  useDndMonitor({
    onDragEnd(event: DragEndEvent) {
      const { active, over } = event;
      if (!active || !over) return;

      const isBuilderBtnElement = active.data?.current?.isBuilderBtnElement;
      const formType = active.data?.current?.type as ElementsType;

      if (isBuilderBtnElement) {
        const newElement = FormElements[formType].construct(idGenerator());
        addElement(0, newElement);
      }
    },
  });

  const { setNodeRef, isOver } = useDroppable({
    id: "builder-drop-area",
    data: {
      isBuilderDropArea: true,
    },
  });

  return (
    <div className="flex w-full h-full">
      <div className="p-6 w-full">
        <div
          ref={setNodeRef}
          className="h-full m-auto bg-white rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto"
        >
          {isOver && (
            <div className="w-full">
              <div className="h-[100px] rounded-md bg-gray-300"></div>
            </div>
          )}
          {!isOver && elements.length === 0 && (
            <p className="text-3xl flex flex-grow items-center font-bold">
              Перетащите элемент
            </p>
          )}
          {elements.length > 0 && (
            <div className="flex flex-col w-full gap-2 p-4">
              {elements.map((element) => (
                <BuilderElement key={element.id} element={element} />
              ))}
            </div>
          )}
        </div>
      </div>
      <BuilderSidebar />
    </div>
  );
};

const BuilderElement = ({ element }: { element: FormElementInstance }) => {
  const Element = FormElements[element.type].builderComponent;
  return <Element elementInstance={element} />;
};

export default Builder;
