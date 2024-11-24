import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import adminRoutes from "./routes/admin.route.js";
import postRoutes from "./routes/post.route.js";

import { connectDB } from "./lib/db.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //parse JSON request body
app.use(cors("https://rajecommerse.onrender.com"));

app.use("/api/admin", adminRoutes)
app.use("/api/post", postRoutes)

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
    connectDB();
})
