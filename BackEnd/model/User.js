import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const UserSchema = new mongoose.Schema(
  {
    name: {
      required: [true, "Name"],
      type: String,
    },
    nickName: {
      required: [false, "NickName"],
      type: String,
    },
    email: {
      required: [true, "Email"],
      unique: [true, "Burtgeltei email baina"],
      type: String,
    },
    password: {
      required: [true, "Password"],
      type: String,
    },
    age: {
      required: [true, "Age"],
      type: Number,
    },
    gender: {
      enum: ["male", "female", "others"],
      required: [true, "Gender"],
      type: String,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
UserSchema.virtual("Blog", {
  ref: "Blog",
  localField: "_id",
  foreignField: "user_id",
});
UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.jwtGenerate = async function () {
  return jwt.sign({ id: this._id, username: this.username }, "secret", {
    expiresIn: "1d",
  });
};
export const User = mongoose.model("User", UserSchema);
