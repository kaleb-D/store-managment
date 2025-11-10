import mongoose from "mongoose";
import User from "./models/user.model.js";
import { connectDB } from "./lib/db.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

async function insertUsers() {
  try {
    await connectDB();
    await User.deleteMany({});
    console.log("Old data cleared");
    const hashedPassword = await bcrypt.hash("123456", 10);

    const users = await User.insertMany([
      {
        name: "Abebe Kebede",
        email: "storekeeper@gmail.com",
        role: "STORE KEEPER",
        password: hashedPassword,
      },
      {
        name: "Aschalew Tamrat",
        email: "storemanager@gmail.com",
        role: "STORE MANAGER",
        password: hashedPassword,
      },
      {
        name: "Chala Sutuma",
        email: "storeclerk@gmail.com",
        role: "STOCK CLERK",
        password: hashedPassword,
      },
      {
        name: "Ali Mohammed",
        email: "technician@gmail.com",
        role: "TECHNICIAN",
        password: hashedPassword,
      },
      {
        name: "Shenkute Belachew",
        email: "staffmember@gmail.com",
        role: "STAFF MEMBER",
        password: hashedPassword,
      },
    ]);

    console.log("Inserted users:", users);
  } catch (err) {
    console.error("Error:", err);
  }
}

insertUsers();
