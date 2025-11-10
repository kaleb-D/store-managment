import mongoose from "mongoose";

const resquestSchema = mongoose.Schema(
  {
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "select an item to make a request"],
    },
    itemName: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    amount: {
      type: Number,
      default: 1,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  { timeStamp: true }
);

const Request = mongoose.model("Request", resquestSchema);
export default Request;
