import mongoose from "mongoose";

const report = mongoose.Schema({
  title: {
    type: String,
    maxlength: [15, "title should be less than 15 characters long"],
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
  },
});
