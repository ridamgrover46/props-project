const express = require("express");
const router = express.Router();
const axios = require("axios"); // Import Axios
const User = require("../Models/User");

// Registration Route
router.post("/", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists!" });
    }

    // Save new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ success: true, message: "User registered successfully!" });
  } catch (error) {
    console.error("Error in Registration:", error);
    res.status(500).json({ success: false, message: "Server error!" });
  }
});

module.exports = router;
