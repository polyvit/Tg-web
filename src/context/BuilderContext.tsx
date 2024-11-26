"use client";
import { createContext, ReactNode, useState } from "react";
import { FormElementInstance } from "../components/Builder/FormElements";

type BuilderContextType = {
  elements: FormElementInstance[];
  addElement: (index: number, element: FormElementInstance) => void;
  removeElement: (id: string) => void;
};

export const BuilderContext = createContext<BuilderContextType | null>(null);

const BuilderContextProvider = ({ children }: { children: ReactNode }) => {
  const [elements, setElements] = useState<FormElementInstance[]>([]);

  const addElement = (index: number, element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };

  const removeElement = (id: string) => {
    setElements((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <BuilderContext.Provider value={{ elements, addElement, removeElement }}>
      {children}
    </BuilderContext.Provider>
  );
};

export default BuilderContextProvider;
