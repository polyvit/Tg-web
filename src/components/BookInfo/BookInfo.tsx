import React from "react";
import Button from "../Button";

const BookInfo = ({ data }) => {
  return (
    <>
      <h1>{data.title}</h1>
      <img className="w-full md:min-w-[33%]" src={data.Image} alt="image" />
      <p style={{ lineHeight: "1.4" }}>{data.about}</p>
      <div>
        <div className="mb-2.5">Цена:</div>
        <div className="mb-2.5 text-[28px]">
          <span className="font-bold mr-2.5">{data.price} РУБ.</span>
          <span className="text-custom-light-gray line-through">1500 РУБ.</span>
        </div>
        <Button text="Сделать заказ" />
      </div>
    </>
  );
};

export default BookInfo;
