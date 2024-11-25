import React from "react";
import { ElementsType, FormElement } from "../FormElements";
import Image from "next/image";

const type: ElementsType = "TextField";

const TextFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: "Текст",
      helper: "Helper text",
      required: false,
      placeHolder: "Value here",
    },
  }),
  btnElement: {
    icon: <Image src="/text.svg" alt="Иконка" width={20} height={20} />,
    label: "Text field",
  },
  builderComponent: () => <div></div>,
  formComponent: () => <div></div>,
  propertiesComponent: () => <div></div>,
};

export default TextFormElement;
