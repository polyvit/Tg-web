import React from "react";
import SidebarElement from "./SidebarElement";
import { FormElements } from "./FormElements.ts";

const BuilderSidebar = () => {
  return (
    <aside className="w-[700px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-gray-100 overflow-y-auto h-full">
      <SidebarElement formElement={FormElements.TextField} />
    </aside>
  );
};

export default BuilderSidebar;
