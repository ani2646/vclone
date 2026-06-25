import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env",
});

const startServer = async () => {
    try {
        await connectDB();
    } catch (error) {
        console.warn("Continuing without a MongoDB connection:", error.message);
    }

    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT || 8000}`);
    });
};

startServer();


