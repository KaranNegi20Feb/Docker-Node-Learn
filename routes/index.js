const express = require("express");
const router = express.Router();
const User = require("../models/user");

// POST /api/users → Create user
router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: "User created", newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/users → List users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;
