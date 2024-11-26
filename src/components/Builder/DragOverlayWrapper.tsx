import {
  Active,
  DragOverlay,
  DragStartEvent,
  useDndMonitor,
} from "@dnd-kit/core";
import React, { useState } from "react";
import { SidebarElementDragOverlay } from "./SidebarElement";
import { ElementsType, FormElements } from "./FormElements";

const DragOverlayWrapper = () => {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);

  useDndMonitor({
    onDragStart(event: DragStartEvent) {
      setDraggedItem(event.active);
    },
    onDragEnd() {
      setDraggedItem(null);
    },
    onDragCancel() {
      setDraggedItem(null);
    },
  });

  if (!draggedItem) return null;

  const isBuilderBtnElement = draggedItem.data?.current?.isBuilderBtnElement;
  const formType = draggedItem.data?.current?.type as ElementsType;

  return (
    <DragOverlay>
      {draggedItem && isBuilderBtnElement ? (
        <SidebarElementDragOverlay formElement={FormElements[formType]} />
      ) : null}
    </DragOverlay>
  );
};

export default DragOverlayWrapper;
