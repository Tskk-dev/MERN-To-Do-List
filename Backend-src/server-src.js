import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();
app.use(express.json()); 
app.use("/api/user",userRoutes);

// Connect to DB
const PORT = process.env.PORT || 6969;
connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));