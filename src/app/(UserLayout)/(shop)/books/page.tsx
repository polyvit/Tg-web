import ShopContainer from "./_components/ShopContainer";
import { IMongoBook } from "../../../../models/Book";

// async function funcRender(p1, p2) {
//   "use server";
//   return <ShopFront p1={p1} p2={p2} />;
// }

export default async function Page() {
  const res = await fetch(process.env.APP_URL + "/api/books");
  const products: IMongoBook[] = await res.json();

  return (
    // <ModalProvider render={funcRender}></ModalProvider>
    // <ShopContainer>
    //   <ShopFront data={products} string="aaaa" />
    // </ShopContainer>
    <ShopContainer data={products} />
  );
}
