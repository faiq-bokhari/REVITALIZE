/*
Author: Bill Nguyen
Date Started: January 2nd, 2023

This route will be used for the sleep section of the application.

Overall, this code defines a router object that handles requests related to sleep data. 
It defines five different routes for adding, retrieving, updating, and deleting sleep data for a specific user and date. 
The actual handling of these requests is delegated to separate controller functions, which are imported at the top of the file.

File Association: sleepModel.js <-> sleepController.js <-> sleepRoutes.js
*/

// Import the Express library
const express = require("express");

// Create a new router instance
const router = express.Router();

// Import the functions from the sleepController module
const { 
  addSleepData, 
  getSleepData, 
  getAllUserSleepData, 
  updateSleepData, 
  deleteSleepData 
} = require("../controllers/sleepController");

// Define the routes and their associated functions
router.post("/", addSleepData); // Route for adding sleep data
router.get("/:email/:dateAdded", getSleepData); // Route for getting sleep data for a specific date
router.get("/:email", getAllUserSleepData); // Route for getting all sleep data for a specific user
router.patch("/:email/:dateAdded", updateSleepData); // Route for updating sleep data for a specific date
router.delete("/:email/:dateAdded", deleteSleepData); // Route for deleting sleep data for a specific date

// Export the router object for use in other modules
module.exports = router;
