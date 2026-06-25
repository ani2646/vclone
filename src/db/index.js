import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    if (!process.env.MONGODB_URL) {
        throw new Error("MONGODB_URL is not defined");
    }

    try {
        const instance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`, {
            serverSelectionTimeoutMS: 5000,
        });
        console.log(`\n MongoDB connected !! DB HOST: ${instance.connection.host}`);
        return instance;
    } catch (error) {
        console.warn("MongoDB connection failed:", error.message);
        throw error;
    }
};

export default connectDB;