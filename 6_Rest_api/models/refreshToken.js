import mongoose from "mongoose";

const Schema = mongoose.Schema; //document blueprint

const refreshTokenSchema = new Schema(
  {
    token: { type: String, unique: true },
  },
  { timestamps: false }
);

export default mongoose.model(
  "RefreshToken",
  refreshTokenSchema,
  "refreshTokens"
); //if we not provide then it will take users automatcally(plurala form)
