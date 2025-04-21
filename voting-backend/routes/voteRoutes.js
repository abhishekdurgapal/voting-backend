const express = require("express");
const Vote = require("../models/Vote");
const router = express.Router();

router.post("/vote", async (req, res) => {
  try {
    const { candidate } = req.body;
    if (!candidate) {
      return res.status(400).json({ message: "Candidate is required!" });
    }

    const newVote = new Vote({ candidate });
    await newVote.save();

    res.json({ message: "Vote recorded successfully!", vote: newVote });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
