import ProductsTable from "./_components/ProductsTable";
import PageHeader from "./_components/PageHeader";
import Button from "../../components/Button/Button";
import Link from "next/link";
import { ROUTES } from "../../utils/routes.ts";

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
