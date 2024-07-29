import { Book } from "@prisma/client";
import ShopContainer from "./_components/ShopContainer";
import db from "../../../db/db";

export default async function Page() {
  const products: Partial<Book>[] = await db.book.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      canPurchase: true,
      imagePath: true,
      widgetGC: true,
    },
    orderBy: { title: "asc" },
  });
  return <ShopContainer data={products} />;
}
