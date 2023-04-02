/*
Author: Bill Nguyen
Date Started: January 2nd, 2023

This code defines a Mongoose model for an "exercise" object, which can be used to store data about different exercises.
This model will be used for the exercise section of the application.

The model has six fields:

email: The email associated with the exercise
name: The name of the exercise
sets: The number of sets performed in the exercise
repititions: The number of repetitions performed in the exercise
weight: The weight lifted in the exercise
dateAdded: The date the exercise was added
Each of these fields is required, meaning that an error will be thrown if any of them are missing when attempting to save an exercise object to the database.

The code exports the Mongoose model, so that it can be used in other parts of a larger application.

File Association: exerciseModel.js <-> exerciseController.js <-> exerciseRoutes.js
*/

// Require the Mongoose library
const mongoose = require("mongoose");

// Define a new Mongoose schema for an exercise
const exerciseSchema = mongoose.Schema(
  {
    // Define a field for the email of the user associated with the exercise
    email: {
      type: String, // The type of the field is a string
      required: [true, "Add an email"], // The field is required, and an error message will be displayed if it's missing
    },

    // Define a field for the name of the exercise
    name: {
      type: String, // The type of the field is a string
      required: [true, "Add an exercise name"], // The field is required, and an error message will be displayed if it's missing
    },

    // Define a field for the number of sets performed in the exercise
    sets: {
      type: Number, // The type of the field is a number
      required: [true, "Add a set number"], // The field is required, and an error message will be displayed if it's missing
    },

    // Define a field for the number of repetitions performed in the exercise
    repititions: {
      type: Number, // The type of the field is a number
      required: [true, "Add a repitition number"], // The field is required, and an error message will be displayed if it's missing
    },

    // Define a field for the weight lifted in the exercise
    weight: {
      type: Number, // The type of the field is a number
      required: [true, "Add a weight number"], // The field is required, and an error message will be displayed if it's missing
    },

    // Define a field for the date the exercise was added
    dateAdded: {
      type: Date, // The type of the field is a date
      required: [true, "Add a date"], // The field is required, and an error message will be displayed if it's missing
    },
  },

  // Define additional options for the schema
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields to the schema
  }
);

// Export a new Mongoose model based on the exercise schema, with the name "Exercise"
module.exports = mongoose.model("Exercise", exerciseSchema);
