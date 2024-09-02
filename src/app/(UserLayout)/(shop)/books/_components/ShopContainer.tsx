"use client";
import React, { useState } from "react";
import Card from "../../../../../components/Card";
import Modal from "../../../../../components/Modal";
import { IMongoBook } from "../../../../../models/Book";

// interface IDbBook {
//   _id: string;
//   title: string;
//   price: number;
//   imagePath: string;
//   imageName: string;
//   widgetGC: string;
// }

const ShopContainer = ({ data }: { data: IMongoBook[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState("");

  // const childrenWithProps = React.Children.map(children, (child, index) => {
  //   return React.cloneElement(child, {
  //     someFunction: setIsOpen,
  //   });
  // });
  // console.log(
  //   "React.Children",
  //   React.Children.map(children, (child) => {
  //     return child;
  //   })
  // );

  return (
    <>
      {/* <Suspense fallback={<p>Loading...</p>}>
        {render(setIsOpen, setCurrentModal)}
      </Suspense> */}
      {/* {childrenWithProps} */}
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
      {isOpen && <Modal src={currentModal} setIsOpen={setIsOpen} />}
    </>
  );
};

export default ShopContainer;
