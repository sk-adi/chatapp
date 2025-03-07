import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URI;
const db_name = process.env.DB_NAME;

const ConnectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${MONGODB_URL}/${db_name}`
    );
    console.log(
      `MongoDB is connected at ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`DB.JS Error:`, error);
  }
};

export { ConnectDB };
