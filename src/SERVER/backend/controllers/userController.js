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
    res.status(400).json({ success: false, message: "User already exists" });
    return;
  }

  //create user in DB
  const user = await User.create({
    name,
    email: lowerCaseEmail,
    password,
  });

  if (user) {
    res.status(201).json({
      sucess: true,
      message: "Success in registering user",
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400).json({ sucess: false, message: "User data is invalid" });
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
    res.status(400).json({ success: false, message: "Email not found" });
    return;
  }
  //check that the password is correct
  if (password === user.password) {
    res.json({
      success: true,
      message: "Successfully logged in",
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400).json({ sucess: false, message: "Incorrect password" });
  }
};
module.exports = { registerUser, loginUser };
