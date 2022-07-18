const asyncHandler = require("express-async-handler");

//@desc Register a new user
// @route /api/users
// @access Public
const registerUser = asyncHandler((req, user) => {
  console.log("req", req.body);

  res.send("Register Route");
});

//@desc Login a new user
// @route /api/users/login
// @access Public
const loginUser = asyncHandler((req, res) => {
  res.send("Login Rout");
});

module.exports = {
  registerUser,
  loginUser,
};
