import React from "react";
import { FormElement } from "./FormElements";
import { useDraggable } from "@dnd-kit/core";
import cn from "classnames";

const SidebarElement = ({ formElement }: { formElement: FormElement }) => {
  const { label, icon } = formElement.btnElement;
  const { setNodeRef, listeners, attributes, isDragging } = useDraggable({
    id: `builder-btn-${formElement.type}`,
    data: {
      type: formElement.type,
      isBuilderBtnElement: true,
    },
  });
  return (
    <button
      ref={setNodeRef}
      type="button"
      className={cn(
        "text-sm font-medium flex items-center bg-white hover:bg-red-300 rounded-lg text-center flex-col justify-center w-full h-20 cursor-grab",
        {
          isDragging: "ring-2 ring-rose-700",
        }
      )}
      {...listeners}
      {...attributes}
    >
      {icon}
      <p className="text-xs">{label}</p>
    </button>
  );
};

export const SidebarElementDragOverlay = ({
  formElement,
}: {
  formElement: FormElement;
}) => {
  const { label, icon } = formElement.btnElement;

  return (
    <button
      type="button"
      className={
        "text-sm font-medium flex items-center bg-white hover:bg-red-300 rounded-lg text-center flex-col justify-center w-full h-20 cursor-grab"
      }
    >
      {icon}
      <p className="text-xs">{label}</p>
    </button>
  );
};

export default SidebarElement;
