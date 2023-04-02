/*
Author: Bill Nguyen
Date Started: January 2nd, 2023

This controller will be used for the exercise section of the application.
This exercise controller file exports several functions that interact with the exercise database. Here's a general description of what each function does:

addExerciseData: This function creates a new exercise data entry in the database.

getExerciseList: This function gets the exercise list for a given user and date.

getExerciseData: This function gets specific exercise data based on the email, name, and dateAdded provided in the request parameters. It only returns one value.

updateExerciseData: This function updates selected exercise data based on email, name, and date.

deleteExerciseData: This function deletes selected exercise data based on email, name, and date.

The file imports the Exercise model from the ../models/exerciseModel file, which is used to perform database operations on the exercise data. The exported functions can be used by other parts of the application.

File Association: exerciseModel.js <-> exerciseController.js <-> exerciseRoutes.js
*/

// Import the Exercise model from the models folder
const Exercise = require("../models/exerciseModel");

// Function to add exercise data for a specified user
const addExerciseData = async (req, res) => {
  // Destructure request body parameters
  const { email, name, sets, repititions, weight, dateAdded } = req.body;
  
  // Check if all required fields are filled in
  if (!name || !sets || !repititions || weight === null || !email || !dateAdded) {
    res
      .status(400)
      .json({ success: false, message: "Please fill in all fields for adding exercise" });
    return;
  }

  // Normalize email and exercise name
  let lowerCaseEmail = email.toLowerCase();
  let capitalizedName = name.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  // Check if exercise data already exists for the given user and date
  const exerciseDataExists = await Exercise.findOne({ email: lowerCaseEmail, dateAdded: dateAdded, name: capitalizedName });
  if (exerciseDataExists) {
    res.status(400).json({ success: false, message: "Exercise data already exists" });
    return;
  }

  // Create new exercise data entry in the database
  const exercise = await Exercise.create({
    email: lowerCaseEmail, 
    name: capitalizedName, 
    sets, 
    repititions, 
    weight, 
    dateAdded: dateAdded
  });

  // Check if exercise data is successfully added, and respond accordingly
  if (exercise) {
    res.status(201).json({
      success: true,
      message: "Success in adding exercise data",
      _id: exercise.id,
      email: exercise.email, 
      name: exercise.name, 
      sets: exercise.sets, 
      repititions: exercise.repititions, 
      weight: exercise.weight, 
      dateAdded: exercise.dateAdded
    });
  } else {
    res.status(400).json({ success: false, message: "Exercise data is invalid" });
  }
};

// Gets exercise list for given user and date
const getExerciseList = async (req, res) => { 
  // Destructuring `email` and `dateAdded` from `req.params`
  const { email, dateAdded } = req.params; 

  try {
      // Querying the database for exercises that match the `email` and `dateAdded` parameters using Mongoose
      const exerciseList = await Exercise.find({email: email, dateAdded: dateAdded});
      
      // Sending the retrieved `exerciseList` as a JSON response with a success message and status code 200
      res.status(200).json({success: true, message: "Success in getting exercise list", exerciseList});
  } catch (error) {
      // If an error occurs, sending an error response with a failure message and status code 404
      res.status(404).json({ success: false, message: "Error in getting exercise list" });
  }
}

// This function gets specific exercise data based on the email, name, and dateAdded provided in the request parameters.
// It only returns one value.
const getExerciseData = async (req, res) => {  
  // Extract the email, name, and dateAdded from the request parameters.
  const { email, name, dateAdded } = req.params;

  try {
      // Use the Exercise model to find one record that matches the email, name, and dateAdded.
      const exerciseData = await Exercise.findOne({email: email, name: name, dateAdded: dateAdded});

      // If the record is found, send a success response with the exercise data.
      res.status(200).json({success: true, message: "Success in getting exercise data", exerciseData});
  } catch (error) {
      // If there is an error while finding the record, send an error response.
      res.status(404).json({ success: false, message: "Error in getting exercise data" });
  }
}

//update and edit selected exercise data based on email, name and date
const updateExerciseData = async (req, res) => {
  const { email: email, dateAdded: dateAdded, name: name } = req.params //Destructure the email, dateAdded and name from the request parameters
  const client = req.body // Get the request body data 

  // Capitalize the name string 
  let capitalizedName = name.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  client.name = capitalizedName; // update the client name with the capitalized name

  try {
    // Try to update the exercise data by finding the appropriate data and updating it with the new client data
    const updatedExerciseData = await Exercise.findOneAndUpdate({email: email, dateAdded: dateAdded, name: capitalizedName}, {...client}, { new: true})

    // If update is successful, return a success response with the updated exercise data
    if (updatedExerciseData) {
      res.status(200).json({success: true, message: "Success in editing exercise data", updatedExerciseData});
    } else {
      // If the data to be updated is not found, return an error response 
      res.status(400).json({ success: false, message: "Was not able to find appropriate exercise data to edit" });
      return;
    }
  } catch (error) {
    // If there is an error during the update, return an error response with the error message
    res.status(404).json({ message: error.message });
  }
}


// This function deletes exercise data based on email, name and date
const deleteExerciseData = async (req, res) => {
  // Extract the email, dateAdded, and name parameters from the request
  const { email: email, dateAdded: dateAdded, name: name } = req.params

  // Capitalize the name parameter by splitting it into words, capitalizing the first letter of each word,
  // converting the rest of the word to lowercase, and joining the words back together with a space.
  let capitalizedName = name.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  try {
    // Find and remove the exercise data that matches the email, dateAdded, and capitalized name parameters
    const deletedExerciseData = await Exercise.findOneAndRemove({email: email, dateAdded: dateAdded, name: capitalizedName})
    if (deletedExerciseData) {
      // If the exercise data was successfully deleted, send a success response with the deleted data
      res.status(200).json({success: true, message: "Success in deleting exercise data", deletedExerciseData});
    } else {
      // If the exercise data was not found, send an error response
      res.status(400).json({ success: false, message: "Was not able to delete selected exercise data" });
      return;
    }
  } catch (error) {
    // If there was an error while deleting the exercise data, send an error response with the error message
    res.status(404).json({ message: error.message });
  }
}

// Export the functions so they can be used by other parts of the application
module.exports = { addExerciseData, updateExerciseData, deleteExerciseData, getExerciseList, getExerciseData };
