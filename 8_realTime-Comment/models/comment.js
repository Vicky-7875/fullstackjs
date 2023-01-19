const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    userName: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

const Commnet = mongoose.model("Comment", commentSchema);

module.exports = Commnet;
