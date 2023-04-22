import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: {
    required: [true, "title"],
    type: String,
  },
  image: {
    required: [true, "Image"],
    type: String,
  },
  desc: {
    required: [true, "Desc"],
    type: String,
  },
  parentCategory: {
    required: [true, "ParentCategory"],
    type: String,
  },
  category: {
    required: [true, "Category"],
    type: String,
  },
  secondCategory: {
    required: [true, "SecondCategory"],
    type: String,
  },
  stars: {
    type: Number,
  },
  user: {
    type: Number,
  },
  status: {
    enum: ["Only me", "Public"],
    default: "Only me",
    type: String,
  },
  user_id: {
    type: String,
    ref: "User",
    required: true,
  },
});
const ApproveSchema = mongoose.Schema({
  user_id: {
    type: String,
    ref: "User",
    required: true,
  },
});
export const Approve = mongoose.model("Approve", ApproveSchema);
export const Blog = mongoose.model("Blog", BlogSchema);
