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
  user_id: {
    type: String,
    ref: "User",
    required: true,
  },
});

export const Blog = mongoose.model("Blog", BlogSchema);
