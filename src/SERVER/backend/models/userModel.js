/*
Author: Mahmoud Anklis
Date: January 29 2023

This code defines a Mongoose model for a "user" object, which can be used to store data about different users.
This model will be used for the user section of the application.

The model has three fields:

name: The name of the user
email: The email of the user
password: The hashed password of the user
Each of these fields is required, meaning that an error will be thrown if any of them are missing when attempting to create/add a user to the database
The email field is unique meaning that same email cannot be used for multiple users in the database.
The code exports the Mongoose model, so that it can be used in other parts of a larger application.

File Association: userModel.js <-> userController.js <-> userRoutes.js
*/
//import mongoose
const mongoose = require("mongoose");

//setup the user schema using the bulit in Mongoose schema builder
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Add a name"],
    },
    email: {
      type: String,
      required: [true, "Add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Add a password"],
    },
  },
  {
    timestamps: true,
  }
);

//Export the model and name it "User"
module.exports = mongoose.model("User", userSchema);
