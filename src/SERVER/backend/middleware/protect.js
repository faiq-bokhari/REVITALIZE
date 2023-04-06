/*
Author: Mahmoud Anklis
Date: January 29 2023

This routing file will be used to protect certain routes by ensuring a jsob web token is sent through the header.

*/
// import modules
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//Function that protects routes
const protect = async (req, res, next) => {
  //setup a token
  let token;
  //header has to start with "Bearer" whenver there is a token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //set token to the req.header.authroization parameter
      token = req.headers.authorization.split(" ")[1];
      //verify the token with the .env secret
      const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
      //finc the user
      req.user = await User.findById(verifyToken.id).select("-password");
      //run next middleware
      next();
    } catch (error) {
      //catch the error and print it and return a status 401 and a faild message
      console.log(error);
      res
        .status(401)
        .json({ success: false, message: "You are not Authorized" });
    }
  }
  // if no token then return a status 401 and a failed message of no authorization
  if (!token) {
    res
      .status(401)
      .json({ success: false, message: "No token, not authorized" });
  }
};

//Export the protect funtion
module.exports = { protect };
