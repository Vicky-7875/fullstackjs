import mongoose from "mongoose";

const Schema = mongoose.Schema; //document blueprint

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "customer" },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema, "users"); //if we not provide then it will take users automatcally(plurala form)
