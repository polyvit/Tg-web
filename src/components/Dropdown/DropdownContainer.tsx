"use client";
import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import {
  ChangeDropItem,
  ToggleAvailabilityDropItem,
  DeleteDropItem,
} from "../../app/admin/_components/TableActions";
import { IProduct } from "../../utils/types";

const DropdownContainer = ({ product }: { product: IProduct }) => {
  const [isOpen, setIsOpen] = useState(false);
  const productsTableMenu = {
    above: [
      <ChangeDropItem />,
      <ToggleAvailabilityDropItem
        id={product.id}
        canPurchase={product.canPurchase}
        setIsOpen={setIsOpen}
      />,
    ],
    below: [<DeleteDropItem id={product.id} setIsOpen={setIsOpen} />],
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
