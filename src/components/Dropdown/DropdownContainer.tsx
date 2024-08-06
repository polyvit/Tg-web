"use client";
import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import {
  ChangeDropItem,
  ToggleAvailabilityDropItem,
  DeleteDropItem,
} from "../../app/(AdminLayout)/admin/_components/TableActions";
import { Book } from "@prisma/client";

const DropdownContainer = ({ product }: { product: Partial<Book> }) => {
  const [isOpen, setIsOpen] = useState(false);
  const productsTableMenu = {
    above: [
      <ChangeDropItem id={product.id} key={`change-${product.id}`} />,
      <ToggleAvailabilityDropItem
        id={product.id}
        key={`available-${product.id}`}
        canPurchase={product.canPurchase}
        setIsOpen={setIsOpen}
      />,
    ],
    below: [
      <DeleteDropItem
        id={product.id}
        setIsOpen={setIsOpen}
        key={`delete-${product.id}`}
      />,
    ],
  };
  return (
    <DropdownMenu
      menuList={productsTableMenu}
      isOpen={isOpen}
      onClick={() => setIsOpen((prev) => !prev)}
    />
  );
};

export default DropdownContainer;
