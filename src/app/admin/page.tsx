import ProductsTable from "./_components/ProductsTable";
import { getData } from "../../db";

const data = getData();

export default function Page() {
  return (
    <>
      <ProductsTable products={data} />
    </>
  );
}
