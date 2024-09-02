import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  imagePath: { type: String, required: true },
  imageName: { type: String, required: true },
  about: { type: String, required: true },
  widgetGC: { type: String, required: true },
  canPurchase: { type: Boolean, default: true },
});

export default mongoose.models.Book || mongoose.model("Book", bookSchema);
