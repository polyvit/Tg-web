import { Book } from "@prisma/client";
import { bookDatabase } from "../../../../utils/workDb";
import BookContainer from "../_components/BookContainer";

export default async function Page({ params }: { params: { id: string } }) {
  const product = (await bookDatabase.findBookById(params.id)) as Book;
  return <BookContainer product={product} />;
}
