import { timeStamp } from "console";
import mongoose from "mongoose";
import { type } from "os";

const userSChema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "password mustbe at least 6 characters long"],
    },
    role: {
      type: String,
      enum: [
        "STORE KEEPER",
        "STORE MANAGER",
        "STAFF MEMBER",
        "STOCK CLERK",
        "TECHNICIAN",
      ],
      default: "STAFF MEMBER",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timeStamp: true }
);

const User = mongoose.model("User", userSChema);

export default User;
