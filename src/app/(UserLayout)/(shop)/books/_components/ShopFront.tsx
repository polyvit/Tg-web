import React from "react";
import Card from "../../../../../components/Card";

const ShopFront = ({ data, setIsOpen, setCurrentModal }) => {
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

// { data, setIsOpen, setCurrentModal }

export default ShopFront;
