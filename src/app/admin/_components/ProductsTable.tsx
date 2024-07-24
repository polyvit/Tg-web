import React from "react";
import Image from "next/image";
import DropdownMenu from "../../../components/Dropdown/DropdownMenu";
import db from "../../../db/db";
import doneIcon from "../../../../public/done.svg";
import crossIcon from "../../../../public/cross.svg";

async function ProductsTable() {
  const products = await db.book.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      canPurchase: true,
      imagePath: true,
    },
    orderBy: { title: "asc" },
  });

  // use TableActions in tbody

  const result = !products.length ? (
    <tbody>
      <td colSpan={5}>
        <h1 className=" text-center text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          В таблице нет элементов
        </h1>
      </td>
    </tbody>
  ) : (
    <tbody>
      {products.map((product) => (
        <tr
          key={product.id}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td className="px-6 py-4">
            {product.canPurchase ? (
              <Image src={doneIcon} alt="Available" className="w-6 h-6" />
            ) : (
              <Image src={crossIcon} alt="Unavailable" className="w-6 h-6" />
            )}
          </td>
          <td className="p-4">
            <img
              src={product.imagePath}
              className="w-16 md:w-32 max-w-[150px] max-h-[280px]"
              alt="Photo"
            />
          </td>
          <td className="px-6 py-4">{product.title}</td>
          <td className="px-6 py-4">{product.price} руб.</td>
          <td className="px-6 py-4 text-right">
            <DropdownMenu />
          </td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div className=" overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Статус
            </th>
            <th scope="col" className="px-6 py-3">
              Изображение
            </th>
            <th scope="col" className="px-6 py-3">
              Название товара
            </th>
            <th scope="col" className="px-6 py-3">
              Стоимость
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        {result}
      </table>
    </div>
  );
}

export default ProductsTable;
