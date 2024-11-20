import mongoose from "mongoose";

export interface IMongoForm {
  _id: string;
  name: string;
  description?: string;
  content?: string;
  published?: boolean;
}

const formSchema = new mongoose.Schema<IMongoForm>({
  name: { type: String, required: true },
  description: { type: String, default: "" },
  content: { type: String, default: "[]" },
  published: { type: Boolean, default: false },
});

export default mongoose.models.Form || mongoose.model<IMongoForm>("Form", formSchema);