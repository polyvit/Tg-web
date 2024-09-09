import BookContainer from "../_components/BookContainer";
import { IMongoBook } from "../../../../../models/Book";
import { bookDatabase } from "../../../../../utils/workDb";

export const revalidate = 60;

export default async function Page({ params }: { params: { id: string } }) {
  const product: IMongoBook = await bookDatabase.findBookById(params.id);
  return <BookContainer product={product} />;
}

// export async function generateStaticParams() {
//   const res = await fetch(process.env.URL + "/api/books");
//   const books: IMongoBook[] = await res.json();

//   return books.map((book) => ({
//     id: book._id,
//   }));
// }
