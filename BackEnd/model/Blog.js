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
    required: [true, "secondCategory"], // uul , ovs , gazar ,gol ,shoroo
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
