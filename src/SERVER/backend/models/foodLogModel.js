/*
Author: Hasan Kibria
Date Started: Approx January 2nd, 2023
*/

// Importing Mongoose module for MongoDB database connection and interaction
const mongoose = require("mongoose");

// Creating Mongoose schema for FoodLog collection in MongoDB
const foodLogSchema = mongoose.Schema({
  // Defining foodName field with string data type and required field validation
  foodName: {
    type: String,
    required: [true, "Add a name."],
  },
  // Defining calories field with number data type
  calories: Number,
  // Defining carbs field with number data type
  carbs: Number,
  // Defining fats field with number data type
  fats: Number,
  // Defining protein field with number data type
  protein: Number,
  // Defining foodDate field with Date data type and required field validation
  foodDate: {
    type: Date,
    required: [true, "Provide date for food entry"],
  },
  // Defining email field with string data type and required field validation
  email: {
    type: String, 
    required: [true, "Add an email"], 
  },
});

// Exporting FoodLog model created from Mongoose schema
module.exports = mongoose.model("FoodLog", foodLogSchema);
