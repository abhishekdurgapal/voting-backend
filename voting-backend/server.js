const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const voteRoutes = require("./routes/voteRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB(); // you don't need to call mongoose.connect() again here

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/votes", voteRoutes);

// Root route
app.get("/", (req, res) => {
    res.send("Voting System Backend is Running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
