import { NextResponse } from "next/server";
import connectDB from "../../../lib/connect";
import { bookDatabase } from "../../../db/bookDb";

export async function GET() {
    await connectDB()
    try {
        const books = await bookDatabase.getAllBooks()
        return NextResponse.json(books);
    } catch (err) {
        return NextResponse.json({status: 400})
    }
}
 
