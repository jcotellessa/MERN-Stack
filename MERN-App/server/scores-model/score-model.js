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
<<<<<<< Updated upstream
=======


// Player

//const Player = new Schema(
//  {
//    fame: { type: String, required: true },
//    lame: { type: String, required: true },
//    email: { type: String, required: true },
//    ghin: { type: Number, required: true },
//    league: { name: String, required: true, 
//              course: String,
//              phone: String },
//  }
// { timestamp: true },
//);

// primer for preloading MongoDB
// {
//   "firstName": "Jerry",
//   "lastName": "Cotellessa",
//   "eMail": "jerry.cotellessa@gmail.com",
//   "ghin": 21,
//   "league": {
//     "name": "Lakeville Sunday Morning",
//     "course": "LakeVille COuntry Club",
//     "weblnk": "http://lakevillecc.com"
//    }
// }

>>>>>>> Stashed changes
