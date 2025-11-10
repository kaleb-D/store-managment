import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDb connected on host : ${conn.connection.host}`);
  } catch (error) {
    console.log("error in ConnectDb", error);
  }
};
