import { Book } from "@prisma/client";
import { bookDatabase } from "../../../../utils/workDb";
import BookContainer from "../_components/BookContainer";

export default async function Page({ params }: { params: { id: string } }) {
  const product = (await bookDatabase.findBookById(params.id)) as Book;
  return <BookContainer product={product} />;
}

export async function generateStaticParams() {
  const books = await bookDatabase.getAllBooks({
    select: {
      id: true,
      title: true,
      price: true,
      canPurchase: true,
      imagePath: true,
      widgetGC: true,
    },
  });

  return books.map((book) => ({
    id: book.id,
  }));
}
