/*
Author: Bill Nguyen
Date Started: January 2nd, 2023

This route will be used for the exercise section of the application.

Overall, this code defines a router object that handles requests related to exercise data. 
It defines five different routes for adding, retrieving, updating, and deleting exercise data for a specific user, exercise name, and date. 
The actual handling of these requests is delegated to separate controller functions, which are imported at the top of the file.

File Association: exerciseModel.js <-> exerciseController.js <-> exerciseRoutes.js
*/

// Require the Express module
const express = require("express");

// Create a new router object
const router = express.Router();

// Require the necessary controller functions for handling exercise data
const { 
  addExerciseData, 
  updateExerciseData, 
  deleteExerciseData, 
  getExerciseList, 
  getExerciseData 
} = require("../controllers/exerciseController");

// Define the routes for adding, retrieving, updating, and deleting exercise data
router.post("/", addExerciseData); // Add new exercise data
router.get("/:email/:dateAdded", getExerciseList); // Get a list of exercise data for a particular user and date
router.get("/:email/:name/:dateAdded", getExerciseData); // Get a specific exercise data for a particular user, exercise name, and date
router.patch("/:email/:name/:dateAdded", updateExerciseData); // Update a specific exercise data for a particular user, exercise name, and date
router.delete("/:email/:name/:dateAdded", deleteExerciseData); // Delete a specific exercise data for a particular user, exercise name, and date

// Export the router object
module.exports = router;

