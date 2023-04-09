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
    enum: ["ypon", "mongol"],
    type: String,
  },
  category: {
    type: String,
  },
  secondCategory: {
    required: [true, "Category"], // uul , ovs , gazar ,gol ,shoroo
    type: String,
  },
  user_id: {
    type: String,
    ref: "User",
    required: true,
  },
});
const CategorySchema = new mongoose.Schema({
  category: {
    parentCategoryName: "mongol",
    enum: ["dornod", "hovsgol"],
    type: String,
  },
  category2: {
    parentCategoryName: "ypon",
    enum: ["asd", "213"],
    type: String,
  },
});
export const Blog = mongoose.model("Blog", BlogSchema);
export const Category = mongoose.model("Category", CategorySchema);
