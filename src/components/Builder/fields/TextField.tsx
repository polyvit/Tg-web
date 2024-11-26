import React from "react";
import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from "../FormElements";
import Image from "next/image";

const type: ElementsType = "TextField";

const extraAttributes = {
  label: "Текстовое поле",
  helper: "Helper text",
  required: false,
  placeHolder: "Value here",
};

const TextFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  btnElement: {
    icon: <Image src="/text.svg" alt="Иконка" width={20} height={20} />,
    label: "Text field",
  },
  builderComponent: BuilderComponent,
  formComponent: () => <div className="text-red-500">Form component</div>,
  propertiesComponent: () => (
    <div className="text-red-500">propertiesComponent</div>
  ),
};

type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

function BuilderComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  return (
    <div className="flex flex-col gap-2 w-full text-red-500">
      {element.extraAttributes.label}
    </div>
  );
}

export default TextFormElement;
