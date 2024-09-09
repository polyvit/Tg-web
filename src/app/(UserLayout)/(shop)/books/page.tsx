import ShopContainer from "./_components/ShopContainer";
import { IMongoBook } from "../../../../models/Book";
import { bookDatabase } from "../../../../utils/workDb";

// async function funcRender(p1, p2) {
//   "use server";
//   return <ShopFront p1={p1} p2={p2} />;
// }

export const revalidate = 60;

export default async function Page() {
  const products: IMongoBook[] = await bookDatabase.getAllBooks();

  return (
    // <ModalProvider render={funcRender}></ModalProvider>
    // <ShopContainer>
    //   <ShopFront data={products} string="aaaa" />
    // </ShopContainer>
    <ShopContainer data={products} />
  );
}
