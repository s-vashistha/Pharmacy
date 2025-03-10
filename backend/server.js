import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import productRoutes from "./routes/products.js";
import orderRoutes from "./routes/orders.js";
import initializeDB from "./models/index.js"; // 🆕 Import DB initializer
import db from "./db.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Initialize Database Tables
initializeDB();

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.listen(5000, () => {
  console.log("🚀 Backend running on port 5000!");
});
