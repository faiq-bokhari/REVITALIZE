/*
Author: Bill Nguyen
Date Started: January 2nd, 2023

This code defines a Mongoose model for an "sleep" object, which can be used to store data about different sleep sessions.
This model will be used for the sleep section of the application.

The sleep model defines six fields for the sleep object, each of which is required. The fields include:

email: The email associated with the sleep object
sleepHour: The number of sleep hours
sleepMinute: The number of sleep minutes
bedHour: The number of bed hours
bedMinute: The number of bed minutes
dateAdded: The date the sleep object was added
Each of these fields is required, meaning that an error will be thrown if any of them are missing when attempting to save an exercise object to the database.

The code exports the Mongoose model, so that it can be used in other parts of a larger application.

File Association: sleepModel.js <-> sleepController.js <-> sleepRoutes.js
*/
// Require the Mongoose library
const mongoose = require("mongoose");

// Define a new Mongoose schema for a sleep object
const sleepSchema = mongoose.Schema(
  {
    // Define a field for the email of the user associated with the sleep object
    email: {
      type: String, // The type of the field is a string
      required: [true, "Add an email"], // The field is required, and an error message will be displayed if it's missing
    },

    // Define a field for the number of sleep hours
    sleepHour: {
      type: Number, // The type of the field is a number
      required: [true, "Add a sleep hour"], // The field is required, and an error message will be displayed if it's missing
    },

    // Define a field for the number of sleep minutes
    sleepMinute: {
      type: Number, // The type of the field is a number
      required: [true, "Add a sleep minute"], // The field is required, and an error message will be displayed if it's missing
    },

    // Define a field for the number of bed/wake up hours
    bedHour: {
      type: Number, // The type of the field is a number
      required: [true, "Add a bedtime hour"], // The field is required, and an error message will be displayed if it's missing
    },

    // Define a field for the number of bed/wake up minutes
    bedMinute: {
      type: Number, // The type of the field is a number
      required: [true, "Add a bedtime minute"], // The field is required, and an error message will be displayed if it's missing
    },

    // Define a field for the date the sleep object was added
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

// Export a new Mongoose model based on the sleep schema, with the name "Sleep"
module.exports = mongoose.model("Sleep", sleepSchema);
