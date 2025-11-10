import { timeStamp } from "console";
import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      minlength: [20, "description should be atleat 20 characters long"],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timeStamp: true }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;
