import React from "react";
import Card from "../../../../../components/Card";
import { IMongoBook } from "../../../../../models/Book";

interface IShopFront {
  data: IMongoBook[];
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
          key={el._id}
          {...el}
          imageName={el.imageName as string}
          setIsOpen={setIsOpen}
          setCurrentModal={setCurrentModal}
        />
      ))}
    </div>
  );
};

export default ShopFront;
