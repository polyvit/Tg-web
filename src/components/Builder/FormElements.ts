import React, { ReactElement } from "react";
import TextFormElement from "./fields/TextField";

// Types
export type ElementsType = "TextField";
export type FormElement = {
  type: ElementsType;
  construct: (id: string) => FormElementInstance;
  btnElement: {
    icon: ReactElement;
    label: string;
  };
  builderComponent: React.FC<{
    elementInstance: FormElementInstance
  }>;
  formComponent: React.FC;
  propertiesComponent: React.FC;
};
export type FormElementInstance = {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, any>;
};
type FormElementsType = {
  [key in ElementsType]: FormElement;
};

// Object
export const FormElements: FormElementsType = {
  TextField: TextFormElement,
};


