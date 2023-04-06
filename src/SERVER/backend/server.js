/*
Author: Mahmoud Anklis
Date: January 29 2023

This code is the entry point of the backend. The file executes when first running the backend application.
This file listens to the port, sets up the connection to the database, sets up express to be used in the application, and then routes.

*/

//import express and dotenv
const express = require("express");
require("dotenv").config();
//get the port from the .env file, if not found then assign the port to 8000.
const port = process.env.PORT || 8000;
//import the routes from each route file
const user = require("./routes/userRoutes");
const recipeFilters = require("./routes/recipeFilterRoutes");
const sleep = require("./routes/sleepRoutes");
const exercise = require("./routes/exerciseRoutes");
const foodlog = require("./routes/foodLogRoutes");
//import the connectDB function from the db file.
const connectDB = require("./config/db");

//connect to the MongoDB
connectDB();

//setup express for the app
const app = express();
//let the app use json
app.use(express.json());
//route whenever the URL changes
app.use("/users", user);
app.use("/recipefilter", recipeFilters);
app.use("/sleeps", sleep);
app.use("/exercises", exercise);
app.use("/foodlog", foodlog);

//If not in testing mode, then listen and print the port number in the log.
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Server started on port ${port}`));
}

// app.listen(port, () => console.log(`Server started on port ${port}`));

//Export the app
module.exports = app;
