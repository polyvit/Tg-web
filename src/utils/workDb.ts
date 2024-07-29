import db from "../db/db";

class BookDatabase {
  async createNewBook(data, imagePath) {
    await db.book.create({
      data: {
        title: data.title,
        price: data.price,
        imagePath: imagePath,
        about: data.about,
        widgetGC: data.widgetGC,
      },
    });
  }
  async updateBook(id, data, imagePath) {
    await db.book.update({
      where: { id },
      data: {
        title: data.title,
        price: data.price,
        imagePath: imagePath,
        about: data.about,
        widgetGC: data.widgetGC,
      },
    });
  }
  async findBookById(id) {
    return await db.book.findUnique({ where: { id } });
  }
  async deleteBookById(id) {
    return await db.book.delete({ where: { id } });
  }
  async updateCanPurchaseBook(id, canPurchase) {
    await db.book.update({ where: { id }, data: { canPurchase } });
  }
}

export const bookDatabase = new BookDatabase();
