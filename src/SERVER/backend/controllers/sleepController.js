/*
Author: Bill Nguyen
Date Started: January 2nd, 2023

This controller will be used for the exercise section of the application.
This sleep controller file exports several functions that interact with the sleep database. Here's a general description of what each function does:

addSleepData: This function takes in sleep data from the request body, checks if all required fields are present, and creates a new sleep data document in the database.

getSleepData: This function retrieves the first sleep data document that matches the email and dateAdded parameters from the request.

getAllUserSleepData: This function retrieves all sleep data documents for a specified user and sorts them in descending order by ID.

updateSleepData: This function finds and updates the sleep data with matching email and dateAdded parameters in the request.

deleteSleepData: This function finds and removes the sleep data with matching email and dateAdded.

The file imports the Sleep model from the ../models/sleepModel file, which is used to perform database operations on the sleep data. The exported functions can be used by other parts of the application.

File Association: sleepModel.js <-> sleepController.js <-> sleepRoutes.js
*/

// Importing the Sleep model
const Sleep = require("../models/sleepModel");

// Function to add sleep data for a specified user
const addSleepData = async (req, res) => {
  // Destructuring values from the request body
  const { email, sleepHour, bedHour, sleepMinute, bedMinute, dateAdded } = req.body;
  // Converting email to lowercase for consistency
  let lowerCaseEmail = email.toLowerCase();
  // Extracting date from datetime string
  let correctDate = dateAdded.split("T")[0];

  // Checking if all required fields are present
  if (!sleepHour || !bedHour || !sleepMinute || !bedMinute || !lowerCaseEmail || !correctDate) {
    res
      .status(400)
      .json({ success: false, message: "Please fill in all fields for adding sleep data" });
    return;
  }

  // Checking if sleep data for the user and date already exists
  const sleepDataExists = await Sleep.findOne({ email: lowerCaseEmail, dateAdded: correctDate });
  if (sleepDataExists) {
    res.status(400).json({ success: false, message: "Sleep data already exists" });
    return;
  }

  // Creating new sleep data in the database
  const sleep = await Sleep.create({
    email: lowerCaseEmail, 
    sleepHour, 
    bedHour, 
    sleepMinute, 
    bedMinute, 
    dateAdded: correctDate
  });

  // Sending response with the newly created sleep data
  if (sleep) {
    res.status(201).json({
      success: true,
      message: "Success in adding sleep data",
      _id: sleep.id,
      email: sleep.email, 
      sleepHour: sleep.sleepHour, 
      bedHour: sleep.bedHour, 
      sleepMinute: sleep.sleepMinute, 
      bedMinute: sleep.bedMinute, 
      dateAdded: sleep.dateAdded
    });
  } else {
    // Sending error response if the sleep data creation failed
    res.status(400).json({ success: false, message: "Sleep data is invalid" });
  }
};

// Gets sleep data based on email and date
// Only gets the first one
const getSleepData = async (req, res) => { 
  // extract the email and dateAdded parameters from the request object
  const { email, dateAdded } = req.params;

  try {
    // find the first sleep data document that matches the email and dateAdded
    const sleepData = await Sleep.findOne({email: email, dateAdded: dateAdded});

    // send a JSON response with the sleep data and a success message
    res.status(200).json({success: true, message: "Success in getting sleep data", sleepData});
  } catch (error) {
    // send a JSON response with an error message if there was an error finding the sleep data
    res.status(404).json({ success: false, message: "Error in getting sleep data" });
  }
}

// Gets all sleep data for specified user
const getAllUserSleepData = async (req, res) => {
  // Extract the email parameter from the request
  const { email } = req.params;

  try {
    // Find all sleep data for the specified user and sort it in descending order by ID
    const allUserSleepDatas = await Sleep.find({email: email}).sort({ _id: -1 });

    // Return a success response with the data
    res.status(200).json({success: true, message: "Success in getting all sleep data of user", allUserSleepDatas});
  } catch (error) {
    // Return an error response if there is an issue with finding the data
    res.status(404).json({ message: error.message });
  }
}

// Update and edit selected sleep data based on email and date
const updateSleepData = async (req, res) => {
  // extract email and dateAdded from request params
  const { email: email, dateAdded: dateAdded } = req.params
  // extract sleep data to be updated from request body
  const client = req.body

  try {
    // find and update sleep data with matching email and dateAdded, and return the updated data
    const updatedSleepData = await Sleep.findOneAndUpdate({email: email, dateAdded: dateAdded}, {...client}, { new: true})
    if (updatedSleepData) {
      // if successful, return updated sleep data with success message
      res.status(200).json({success: true, message: "Success in editing sleep data", updatedSleepData});
    } else {
      // if unsuccessful, return error message
      res.status(400).json({ success: false, message: "Was not able to find appropriate sleep data to edit" });
      return;
    }
  } catch (error) {
    // if there's an error, return error message
    res.status(404).json({ message: error.message });
  }
}

// Deletes selected sleep data based on email and date
const deleteSleepData = async (req, res) => {
  // Destructure email and dateAdded from the request parameters
  const { email: email, dateAdded: dateAdded } = req.params

  try {
    // Find and remove the sleep data from the database
    const deletedSleepData = await Sleep.findOneAndRemove({email: email, dateAdded: dateAdded})

    if (deletedSleepData) {
      // If sleep data was found and removed, respond with success message and deleted data
      res.status(200).json({success: true, message: "Success in deleting sleep data", deletedSleepData});
    } else {
      // If no matching sleep data was found, respond with failure message
      res.status(400).json({ success: false, message: "Was not able to delete selected sleep data" });
      return;
    }
  } catch (error) {
    // If there was an error in finding or removing sleep data, respond with error message
    res.status(404).json({ message: error.message });
  }
}

// Export the functions so they can be used by other parts of the application
module.exports = { addSleepData, getSleepData, getAllUserSleepData, updateSleepData, deleteSleepData };
