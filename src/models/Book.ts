import mongoose from "mongoose";

export interface IMongoBook {
  _id: string;
  title: string;
  price: number;
  imagePath: string;
  imageName: string;
  about: string;
  widgetGC: string;
  canPurchase?: boolean;
}

const bookSchema = new mongoose.Schema<IMongoBook>({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  imagePath: { type: String, required: true },
  imageName: { type: String, required: true },
  about: { type: String, required: true },
  widgetGC: { type: String, required: true },
  canPurchase: { type: Boolean, default: true },
});

export default mongoose.models.Book || mongoose.model<IMongoBook>("Book", bookSchema);
