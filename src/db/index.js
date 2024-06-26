import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    ); //returns an object
    console.log(
      `\n See what the returned object looks like: ${connectionInstance}`
    );
    console.log(
      `\n MONGODB connected !! DB Host: ${connectionInstance.connection.host}`
    ); //to make sure which DB i am connected to
  } catch (error) {
    console.log("MONGODB connection error ", error);
    process.exit(1);
  }
};

export default connectDB;
