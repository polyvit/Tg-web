import connectDB from "../lib/connect.js";
import Book from "../models/Book.ts";

interface IData {
  title: string;
  price: number;
  imagePath: File;
  filePath: File;
  about: string;
  widgetGC: string;
}

interface IEditedData extends Omit<IData, "imagePath"|"filePath"> {
  imagePath?: File | undefined;
  filePath?: File | undefined
}

class BookDatabase {
  async createNewBook(data: IData, imagePath: string, filePath: string) {
    const newBook = new Book({
      title: data.title,
      price: data.price,
      imagePath: imagePath,
      imageName: data.imagePath?.name,
      filePath: filePath,
      fileName: data.filePath?.name,
      about: data.about,
      widgetGC: data.widgetGC,
    });
    await newBook.save();
  }
  async updateBook(id: string, data: IEditedData, imagePath: string, imageName: string, filePath: string, fileName: string) {
    await Book.findByIdAndUpdate(id, {
        title: data.title,
        price: data.price,
        imagePath: imagePath,
        imageName: imageName,
        filePath: filePath,
        fileName: fileName,
        about: data.about,
        widgetGC: data.widgetGC,
      } )
  }
  async deleteBookById(id: string) {
    return await Book.findByIdAndDelete(id)
  }
  async updateCanPurchaseBook(id: string, canPurchase: boolean) {
    await Book.findOneAndUpdate({_id: id}, {canPurchase})
  }
  async getAllBooks() {
    await connectDB()
    return await Book.find()
  }
  async findBookById(id: string) {
    await connectDB()
    return await Book.findById(id)
  }
}

export const bookDatabase = new BookDatabase();
