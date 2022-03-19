const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Score

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


//Player

const Player = new Schema(
  {
    fame: { type: String, required: true },
    lame: { type: String, required: true },
    nemail: { type: String, required: true },
    ghin: { type: Number, required: true },
    league: { name: String, required: true, 
              course: String,
              trl: String },
  }
  // { timestamp: true },
);

