import ProductsTable from "./_components/ProductsTable.tsx";
import PageHeader from "../../_components/PageHeader.tsx";
import Button from "../../../components/Button/index.tsx";
import Link from "next/link";
import { ROUTES } from "../../../utils/routes.ts";

export default function Page() {
  return (
    <>
      <PageHeader text="Список продуктов">
        <Link href={ROUTES.NEW}>
          <Button text="Добавить продукт" />
        </Link>
      </PageHeader>
      <ProductsTable />
    </>
  );
}
