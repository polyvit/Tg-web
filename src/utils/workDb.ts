import db from "../db/db";

interface IData {
  title: string;
  price: number;
  imagePath: File;
  about: string;
  widgetGC: string;
}

interface IEditedData extends Omit<IData, "imagePath"> {
  imagePath?: File | undefined
}

interface ISettings {
  select?: Record<string, boolean>
  where?: Record<string, boolean>
  orderBy?: Record<string, string>
}

class BookDatabase {
  async createNewBook(data: IData, imagePath: string) {
    await db.book.create({
      data: {
        title: data.title,
        price: data.price,
        imagePath: imagePath,
        imageName: data.imagePath?.name,
        about: data.about,
        widgetGC: data.widgetGC,
      },
    });
  }
  async updateBook(id: string, data: IEditedData, imagePath: string, imageName: string) {
    await db.book.update({
      where: { id },
      data: {
        title: data.title,
        price: data.price,
        imagePath: imagePath,
        imageName: imageName,
        about: data.about,
        widgetGC: data.widgetGC,
      },
    });
  }
  async findBookById(id: string) {
    return await db.book.findUnique({ where: { id } });
  }
  async deleteBookById(id: string) {
    return await db.book.delete({ where: { id } });
  }
  async updateCanPurchaseBook(id: string, canPurchase: boolean) {
    await db.book.update({ where: { id }, data: { canPurchase } });
  }
  async getAllBooks(settings: ISettings) {
    return await db.book.findMany(settings)
  }

}

export const bookDatabase = new BookDatabase();
