import React, { ReactElement } from "react";
import TextFormElement from "./fields/TextField";

export type ElementsType = "TextField";
export type FormElement = {
  type: ElementsType;
  construct: (id: string) => FormElementInstance;
  btnElement: {
    icon: ReactElement;
    label: string;
  };
  builderComponent: React.FC;
  formComponent: React.FC;
  propertiesComponent: React.FC;
};
type FormElementsType = {
  [key in ElementsType]: FormElement;
};
export type FormElementInstance = {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, any>;
};

export const FormElements: FormElementsType = {
  TextField: TextFormElement,
};

// const FormElements = () => {
//   return <div>FormElements</div>;
// };

// export default FormElements;
