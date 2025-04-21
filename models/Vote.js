const mongoose = require("mongoose");

const voteSchema = mongoose.Schema(
  {
    candidate: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const Vote = mongoose.model("Vote", voteSchema);
module.exports = Vote;
