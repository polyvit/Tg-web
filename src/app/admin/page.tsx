import ProductsTable from "./_components/ProductsTable";
import PageHeader from "./_components/PageHeader";
import { getData } from "../../data";
import Button from "../../components/Button/Button";
import Link from "next/link";

const data = getData();

export default function Page() {
  return (
    <>
      <PageHeader text="Список продуктов">
        <Link href="/admin/new">
          <Button text="Добавить продукт" />
        </Link>
      </PageHeader>
      <ProductsTable products={data} />
    </>
  );
}
