"use client";
import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import {
  ChangeDropItem,
  ToggleAvailabilityDropItem,
  DeleteDropItem,
} from "../../app/(AdminLayout)/admin/_components/TableActions";
import { IMongoBook } from "../../models/Book";

const DropdownContainer = ({ product }: { product: Partial<IMongoBook> }) => {
  const [isOpen, setIsOpen] = useState(false);
  const productsTableMenu = {
    above: [
      <ChangeDropItem id={product._id} key={`change-${product._id}`} />,
      <ToggleAvailabilityDropItem
        id={product._id}
        key={`available-${product._id}`}
        canPurchase={product.canPurchase}
        setIsOpen={setIsOpen}
      />,
    ],
    below: [
      <DeleteDropItem
        id={product._id}
        setIsOpen={setIsOpen}
        key={`delete-${product._id}`}
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
