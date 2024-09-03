import { NextResponse } from "next/server";
import connectDB from "../../../../lib/connect";
import { bookDatabase } from "../../../../utils/workDb";
// import { IMongoBook } from "../../../../models/Book";

// export async function generateStaticParams() {
//   const res = await fetch(process.env.URL + "/api/books");
//   const books: IMongoBook[] = await res.json();

//   return books.map((book) => ({
//     bookId: book._id,
//   }));
// }

export async function GET(
  _: Request,
  { params }: { params: { bookId: string } }
) {
  const bookId = params.bookId 
  await connectDB()
    try {
        const book = await bookDatabase.findBookById(bookId)
        return NextResponse.json(book);
    } catch (err) {
        return NextResponse.json({status: 400})
    }
}

// export const dynamicParams = false;