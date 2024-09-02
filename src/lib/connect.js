import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    console.log("current db used");
    return;
  }
  await mongoose.connect(process.env.MONGO_DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Db connected!!");
};

export default connectDB;
