const mongoose = require("mongoose");

const UserWorkOutSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    reps: { type: Number, required: true },
    load: { type: Number, required: true },
  },
  { timestamps: true }
);

const UserWorkOut = mongoose.model("UserWorkOut", UserWorkOutSchema);
module.exports = UserWorkOut;
