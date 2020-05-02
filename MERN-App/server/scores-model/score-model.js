const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Score = new Schema(
  {
    name: { type: String, required: true },
    hole: { type: Number, required: true },
    strokes: { type: Number, required: true },
    par: { type: Number, required: false }
  }
  // { timestamp: true },
);
module.exports = mongoose.model("scores", Score);
