import db from "../db/db"

class DatabaseInstruments {
    async createNewBook(data, imagePath) {
        db.book.create({data: {
        title: data.title,
        price: data.price,
        imagePath: imagePath,
        about: data.about,
        widgetGC: data.widgetGC,
        }})
    }
}

export const database = new DatabaseInstruments()