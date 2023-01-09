import mongoose from "mongoose";
import { APP_URL } from "../config";

const Schema = mongoose.Schema; //document blueprint

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true },
    image: {
      type: String,
      required: true,
      get: (image) => {
        return `${APP_URL}/${image}`;
      },
    },
  },
  { timestamps: true, toJSON: { getters: true }, id: false }
);

export default mongoose.model("Product", productSchema, "products"); //if we not provide then it will take users automatcally(plurala form)
