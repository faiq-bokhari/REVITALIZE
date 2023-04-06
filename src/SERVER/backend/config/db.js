/*
Author: Mahmoud Anklis
Date: January 29 2023
This file will be used for the user setting up the connection to the database when the application starts.
This file exports one function that enables the application to connect to the MongoDB database. The function description is:

connectDB: Connects the application to the MongoDB database.

The file imports the node module mongoose which is used to connect to the MongoDB database and perform database operations on the data in the database.

File Association: db.js <-> server.js
*/

//import mongoose
const mongoose = require("mongoose");

//Function that connects the application to the MongoDB
const connectDB = async () => {
  //Tries to connect using the built in mongoose connect function and the MONGO_URI environment variable
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDb ${conn.connection.host}`);
  } catch (error) {
    //Catch and print the error if connecting was unsuccessful
    console.log(error);
    process.exit(1);
  }
};
//Export the connectDB function
module.exports = connectDB;
