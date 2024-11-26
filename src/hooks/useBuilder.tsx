"use client";
import { useContext } from "react";
import { BuilderContext } from "../context/BuilderContext";

const useBuilder = () => {
  const context = useContext(BuilderContext);
  if (!context) throw new Error("Хук не может быть использован вне контекста");
  return context;
};

export default useBuilder;
