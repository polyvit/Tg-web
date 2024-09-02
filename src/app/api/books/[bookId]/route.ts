import { NextResponse } from "next/server";
import connectDB from "../../../../lib/connect";
import { bookDatabase } from "../../../../utils/workDb";

export async function GET(
  _: Request,
  { params }: { params: { bookId: string } }
) {
  const bookId = params.bookId 
  await connectDB()
    try {
        const book = await bookDatabase.findMongoBookById(bookId)
        return NextResponse.json(book);
    } catch (err) {
        return NextResponse.json({ error: err.message })
    }
}