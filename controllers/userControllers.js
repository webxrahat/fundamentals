const asyncHandler = require("express-async-handler");
const User = require("../models/userModal");

const bcrypt = require("bcrypt");

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    res.status(400);
    throw new Error("User Already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  console.log("hashedPassword", hashedPassword);

  res.json({ message: "register the user" });
});
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login the user" });
});
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: " current user status" });
});

module.exports = { registerUser, loginUser, currentUser };
