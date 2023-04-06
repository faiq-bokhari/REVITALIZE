/*
Author: Mahmoud Anklis
Date: January 29 2023
This controller will be used for the user part of the application.
This user controller file exports several functions that interact with the user database. Here's a general description of what each function does:

registerUser: This function creates a new user in the database.

loginUser: This function logs in the user by checking the credentials inputted and matching them to a user in the database.

getMyInfo: This function gets the user's information like name and email

The file imports the User model from the ../models/userModel file, which is used to perform database operations on the exercise data. The exported functions can be used by other parts of the application.

File Association: userModel.js <-> userController.js <-> userRoutes.js
*/

//importing the necessary node modules and the userModel.
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

//Function that registers a user
const registerUser = async (req, res) => {
  //Destructure request body parameters
  const { name, email, password } = req.body;
  //change email to lowercase to make sure emails in uppercase and lower case are the same
  let lowerCaseEmail = email.toLowerCase();

  //check that all fields are filled in. If not then return a status 400 and a failed message
  if (!name || !email || !password) {
    res
      .status(400)
      .json({ success: false, message: "Please fill in all fields" });
    return;
  }
  //check if user exists in the database. If the user already exists, then return a status 400 with a failed message
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
  //if the user is created successfully in the database, then return a status 201 and a success message. Also return a jsonwebtoken for that user.
  if (user) {
    res.status(201).json({
      success: true,
      message: "Success in registering user",
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  }
  //if it fails then return a status 400 and a failed message
  else {
    res.status(400).json({ success: false, message: "User data is invalid" });
  }
};

//Function to login an existing user
const loginUser = async (req, res) => {
  //destructuring the request body parameters
  const { email, password } = req.body;
  //change email to lowercase to make sure emails in uppercase and lower case are the same
  lowerCaseEmail = email.toLowerCase();

  //check that email and password are given. If not the return a status 400 and a failed message
  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, message: "Please fill in all fields" });
    return;
  }
  //find the user in the DB with that email
  const user = await User.findOne({ email: lowerCaseEmail });

  //check that the user is found. If not found then return a status 400 and a failed message
  if (!user) {
    res
      .status(400)
      .json({ success: false, message: "Email not found. Please sign up" });
    return;
  }
  //check that the password is correct with the hashed password in the database and return success if passwords match
  if (await bcrypt.compare(password, user.password)) {
    res.json({
      success: true,
      message: "Successfully logged in",
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  }
  //return status 400 and failed message if passwords do not match
  else {
    res.status(400).json({ success: false, message: "Incorrect password" });
  }
};
//function that gets users info.
const getMyInfo = async (req, res) => {
  //Finds the user in the DB with the id and returns status 200 if found and a success message with the user's details
  const { _id, name, email } = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    message: `Success in getting ${name}'s information`,
    id: _id,
    name,
    email,
  });
};
//Function that generates a jsonwebtoken given a SECRET
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};
//Functions that are exported
module.exports = { registerUser, loginUser, getMyInfo };
