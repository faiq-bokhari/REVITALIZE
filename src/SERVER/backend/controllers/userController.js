const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  let lowerCaseEmail = email.toLowerCase();

  //check that all fields are filled in
  if (!name || !email || !password) {
    res
      .status(400)
      .json({ success: false, message: "Please fill in all fields" });
    return;
  }
  //check if user exists
  const userExists = await User.findOne({ email: lowerCaseEmail });
  if (userExists) {
    res
      .status(400)
      .json({ success: false, message: "User already exists. Please login" });
    return;
  }
  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  //create user in DB
  const user = await User.create({
    name,
    email: lowerCaseEmail,
    password: hashedPass,
  });

  if (user) {
    res.status(201).json({
      success: true,
      message: "Success in registering user",
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ success: false, message: "User data is invalid" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  lowerCaseEmail = email.toLowerCase();

  //check that email and password are given
  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, message: "Please fill in all fields" });
    return;
  }
  //find the user in the DB with that email
  const user = await User.findOne({ email: lowerCaseEmail });

  //check that the user is found
  if (!user) {
    res
      .status(400)
      .json({ success: false, message: "Email not found. Please sign up" });
    return;
  }
  //check that the password is correct
  if (await bcrypt.compare(password, user.password)) {
    res.json({
      success: true,
      message: "Successfully logged in",
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ success: false, message: "Incorrect password" });
  }
};
const getMyInfo = async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    message: `Success in getting ${name}'s information`,
    id: _id,
    name,
    email,
  });
};
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};
module.exports = { registerUser, loginUser, getMyInfo };
