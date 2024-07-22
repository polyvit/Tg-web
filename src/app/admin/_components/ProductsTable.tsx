import React from "react";
import image from "../../../../public/01_Как открыть клинику.jpg";
import DropdownMenu from "../../../components/Dropdown/DropdownMenu";

function ProductsTable({ products }) {
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
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className="px-6 py-4">
            <svg
              className="w-6 h-6 text-green-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
              />
            </svg>
          </td>
          <td className="p-4">
            <img
              src={image.src}
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
        {/* {products.length && (
          <tbody>
            {products.map((product) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">
                  <svg
                    className="w-6 h-6 text-green-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                    />
                  </svg>
                </td>
                <td className="p-4">
                  <img
                    src={image.src}
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
        )} */}
        {result}
      </table>
    </div>
  );
}

export default ProductsTable;
