const Score = require("../scores-model/score-model");

createScore = (req, res) => {
  const body = req.body;
  console.log(" start creating a score... ");
  if (!body) {
    return (
      res.status(400).json({
        success: false,
        error: "You must provide a score"
      }),
      console.log(" error check in JS... ")
    );
  }
  console.log(" end creating a score... ");

  const score = new Score(body);
  console.log(score);
  if (!score) {
    console.log(" not creating score... ");
    return res.status(400).json({ success: false, error: err });
  }

  score
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: score._id,
        message: "Score saved"
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: "Score not saved!"
      });
    });
};

updateScore = async (req, res) => {
  const body = req.body;
  if (!body)
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update."
    });
  Score.findOne({ _id: req.params.id }, (err, score) => {
    if (err) {
      return res.status(400).json({
        err,
        message: "Score not found"
      });
    }
    score.name = body.name;
    score.hole = body.hole;
    score.score = body.strokes;
    score.par = body.par;

    score
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: score._id,
          message: "Score updated"
        });
      })
      .catch(error => {
        return res.status(400).json({
          error,
          message: "Score not updated"
        });
      });
  });
};

deleteScore = async (req, res) => {
  console.log("inside the controller delete routine");
  await Score.findOneAndDelete({ _id: req.params.id }, (err, score) => {
    if (err) {
      res.status(400).json({ success: false, error: err });
    }
    if (!score) {
      return res.status(400).json({
        success: false,
        error: "Score not found!"
      });
    }
    return res.status(200).json({ success: true, data: score });
  }).catch(err => console.log(err));
};

getScoreById = async (req, res) => {
  await Score.findOne({ _id: req.params.id }, (err, score) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!score) {
      return res.status(404).json({ success: false, error: "score not found" });
    }
    return res.status(200).json({ success: true, data: score });
  }).catch(err => console.log(err));
};

getScores = async (req, res) => {
  console.log("inside the controller getScores routine");

  await Score.find({}, (err, scores) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!scores.length) {
      return res
        .status(404)
        .json({ success: false, error: "Scores not found" });
    }
    return res.status(200).json({ success: true, data: scores });
  }).catch(err => console.log(err));
};

module.exports = {
  createScore,
  updateScore,
  deleteScore,
  getScoreById,
  getScores
};
