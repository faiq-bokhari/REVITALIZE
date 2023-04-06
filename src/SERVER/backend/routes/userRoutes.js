/*
Author: Mahmoud Anklis
Date: January 29 2023

This routing file will be used for the user section of the application.

Overall, this code defines a router object that handles requests related to user data. 
It defines three different routes for registering, logging in, and getting user information data for a specific user.
The actual handling of these requests is delegated to separate controller functions, which are imported at the top of the file.

File Association: userModel.js <-> userController.js <-> userRoutes.js
*/

//import express and and setup express router
const express = require("express");
const router = express.Router();
//import the functions from the userController file and the protect file.
const {
  registerUser,
  loginUser,
  getMyInfo,
} = require("../controllers/userController");
const { protect } = require("../middleware/protect");

// POST request to register a user
router.post("/", registerUser);
// POST request to login
router.post("/:login", loginUser);
// GET request to get user information after running the protect middleware.
router.get("/:me", protect, getMyInfo);
//Export the router
module.exports = router;
