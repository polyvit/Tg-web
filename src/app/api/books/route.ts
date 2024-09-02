import { NextResponse } from "next/server";
import connectDB from "../../../lib/connect";
import { bookDatabase } from "../../../utils/workDb";

export async function GET() {
    await connectDB()
    try {
        const books = await bookDatabase.getAllBooks()
        return NextResponse.json(books);
    } catch (err) {
        return NextResponse.json({ error: err.message })
    }
}
 
