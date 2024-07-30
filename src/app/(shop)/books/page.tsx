import { Book } from "@prisma/client";
import ShopContainer from "./_components/ShopContainer";
import { bookDatabase } from "../../../utils/workDb";

// async function funcRender(p1, p2) {
//   "use server";
//   return <ShopFront p1={p1} p2={p2} />;
// }

export default async function Page() {
  const products: Partial<Book>[] = await bookDatabase.getAllBooks({
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
  return (
    // <ModalProvider render={funcRender}></ModalProvider>
    // <ShopContainer>
    //   <ShopFront data={products} string="aaaa" />
    // </ShopContainer>
    <ShopContainer data={products} />
  );
}
