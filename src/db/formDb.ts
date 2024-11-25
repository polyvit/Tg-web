import connectDB from "../lib/connect.js";
import Form from "../models/Form.ts";

interface IData {
  name: string;
  description?: string;
}

class FormDatabase {
  async createNewForm(data: IData) {
    await connectDB();
    const newForm = new Form({
      name: data.name,
      description: data.description ? data.description : "Нет описания",
    });
    const result = await newForm.save();
    return result.id
  }
  async getAllForms() {
    await connectDB()
    return await Form.find()
  }
}

export const formDatabase = new FormDatabase();
