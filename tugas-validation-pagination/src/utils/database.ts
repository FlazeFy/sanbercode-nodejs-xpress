import mongoose from "mongoose";
import { DATABASE_URL } from "./env";

const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://flazenwork:MsvNOOYaBcR3I6Es@cluster0.eh9uu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      autoIndex: true,
      dbName: "sanber-be-57",
      connectTimeoutMS: 10000,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    console.log("Error connecting to database");
  }
};

export default connect;
