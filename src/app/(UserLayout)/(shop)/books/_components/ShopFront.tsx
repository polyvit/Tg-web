import React from "react";
import Card from "../../../../../components/Card";
import { Book } from "@prisma/client";

interface IShopFront {
  data: Book[];
  setIsOpen(x: boolean): void;
  setCurrentModal(x: string): void;
}

const ShopFront: React.FC<IShopFront> = ({
  data,
  setIsOpen,
  setCurrentModal,
}) => {
  return (
    <div className="w-full my-0 mx-auto grid justify-center grid-cols-fill gap-x-[10px] gap-y-[10px]">
      {data.map((el) => (
        <Card
          key={el.id}
          {...el}
          setIsOpen={setIsOpen}
          setCurrentModal={setCurrentModal}
        />
      ))}
    </div>
  );
};

export default ShopFront;
