import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("current db used");
    return;
  }
  await mongoose.connect(process.env.MONGO_DATABASE_URL);
  console.log("Db connected!!");
};

export default connectDB;
