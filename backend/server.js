import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import clerkRoutes from "./routes/storeClerk.route.js";
import managerRoutes from "./routes/storeManager.routes.js";
import mongoose from "mongoose";
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/auth", authRoutes);
app.use("/item", clerkRoutes);
app.use("/manager", managerRoutes);

app.listen(port, async () => {
  console.log("server running on port", port);
  await connectDB();
});
