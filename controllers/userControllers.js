const asyncHandler = require("express-async-handler");
const User = require("../models/userModal");
const jwt = require("jsonwebtoken");

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

 //  console.log("hashedPassword", hashedPassword);

 const user = await User.create({
  username,
  email,
  password: hashedPassword,
 });

 //  console.log("user", user);
 if (user) {
  res.status(201).json({ _id: user.id, email: user.email });
 } else {
  res.status(400);
  throw new Error("user data is not valid");
 }

 res.json({ message: "register the user" });
});

const loginUser = asyncHandler(async (req, res) => {
 const { email, password } = req.body;
 if (!email || !password) {
  res.status(400);
  throw new Error("All fields are required");
 }

 const user = await User.findOne({ email });
 if (user && (await bcrypt.compare(password, user.password))) {
  const accessToken = jwt.sign(
   {
    user: {
     username: user.username,
     email: user.email,
     id: user.id,
    },
   },
   process.env.ACCESS_TOKEN_SECERT,
   { expiresIn: "1m" }
  );
  res.status(200).json({ accessToken });
 } else {
  res.status(401);
  throw new Error("email or password not authenticate");
 }
});
const currentUser = asyncHandler(async (req, res) => {
 res.json({ message: " current user status" });
});

module.exports = { registerUser, loginUser, currentUser };

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoicmFoYXQiLCJlbWFpbCI6InRlc3R0aHJlZUBnbWFpbC5jb20iLCJpZCI6IjY4YzBhYzQ1MzY2OTNkNTM4MTc5NjQ5YSJ9LCJpYXQiOjE3NTc0NTk3ODAsImV4cCI6MTc1NzQ1OTg0MH0.dN_E6VqPNmWOOJS - pc4Kk9CJ7PjqSbAuDV_DtdV1N9k
// ACCESS_TOKEN_SECERT = rahat123
