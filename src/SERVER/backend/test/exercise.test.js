/*
Author: Bill Nguyen
Date Started: February 5th, 2023

This exercise.test.js file contains a set of test suites and test cases that aim to test the functionality of the exerciseController.js module. 
The exerciseController.js module handles requests related to exercise data, including adding, updating, deleting, and retrieving exercise data.

The test cases in this file utilize the Jest testing framework to ensure that the functions in exerciseController.js are working as expected. 

File Association: exerciseModel.js <-> exerciseController.js <-> exerciseRoutes.js
*/

// Import required modules and functions
const mongoose = require('mongoose');
const Exercise = require("../models/exerciseModel");
require("dotenv").config();
const { addExerciseData, updateExerciseData, deleteExerciseData, getExerciseList, getExerciseData } = require("../controllers/exerciseController");

// Define a test suite for adding exercise data
describe('Adding Exercise Data', () => {
  // Connect to MongoDB before running the tests
  beforeAll(async () => {
    await await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  // Reset the Exercise collection in the database and set up mock request, response and next objects before each test
  beforeEach(async () => {
    await Exercise.deleteMany({});
    req = {
        body: {
          email: 'test@gmail.com',
          name: 'Test Exercise',
          sets: 3,
          repititions: 10,
          weight: 50,
          dateAdded: '2022-03-07T00:00:00.000Z'
        }
      };
      res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      next = jest.fn();
  });

  // Close the MongoDB connection after all tests are done
  afterAll(async () => {
    await mongoose.connection.close();
  });

  // Reset all mocked functions after each test
  afterEach(() => {
    jest.resetAllMocks();
  });

  // Test case for adding exercise data to the database
  it('should add exercise data and return a status code of 201', async () => {
    // Arrange
    // Mock Exercise.findOne to return null, indicating exercise data doesn't already exist
    Exercise.findOne = jest.fn().mockResolvedValue(null);

    // Mock Exercise.create to return the newly created exercise data
    const createdExerciseData = {
      id: 'exercise_id',
      email: 'test@gmail.com',
      name: 'Test Exercise',
      sets: 3,
      repititions: 10,
      weight: 50,
      dateAdded: '2022-03-07T00:00:00.000Z'
    };
    Exercise.create = jest.fn().mockResolvedValue(createdExerciseData);

    // Act
    await addExerciseData(req, res, next);

    // Assert
    expect(Exercise.findOne).toHaveBeenCalledWith({
      email: 'test@gmail.com',
      dateAdded: '2022-03-07T00:00:00.000Z',
      name: 'Test Exercise'
    });
    expect(Exercise.create).toHaveBeenCalledWith({
      email: 'test@gmail.com',
      name: 'Test Exercise',
      sets: 3,
      repititions: 10,
      weight: 50,
      dateAdded: '2022-03-07T00:00:00.000Z'
    });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: 'Success in adding exercise data',
      _id: 'exercise_id',
      email: 'test@gmail.com',
      name: 'Test Exercise',
      sets: 3,
      repititions: 10,
      weight: 50,
      dateAdded: '2022-03-07T00:00:00.000Z'
    });
  });
});

// Define a test suite for updating exercise data
describe('Update Exercise Data', () => {

  // This test case checks whether the updateExerciseData function successfully updates exercise data when given appropriate data
  it('should update exercise data successfully', async () => {

    // Set up mock request and response objects
    const mockReq = {
      params: { email: 'example@gmail.com', dateAdded: '2022-01-01', name: 'exerciseName' },
      body: { reps: 10, sets: 3 }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    // Set up a mock exercise object to be returned by the Mongoose method
    const mockExercise = { email: 'example@gmail.com', dateAdded: '2022-01-01', name: 'exerciseName', reps: 5, sets: 2 };
    Exercise.findOneAndUpdate = jest.fn().mockResolvedValue(mockExercise); // mock the Mongoose method

    // Call the function being tested
    await updateExerciseData(mockReq, mockRes);

    // Check that the expected Mongoose method was called with the expected arguments
    expect(Exercise.findOneAndUpdate).toHaveBeenCalledWith(
      { email: 'example@gmail.com', dateAdded: '2022-01-01', name: 'exerciseName' },
      { reps: 10, sets: 3 },
      { new: true }
    );

    // Check that the expected response was sent
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      success: true,
      message: 'Success in editing exercise data',
      updatedExerciseData: mockExercise
    });
  });

  // This test case checks whether the updateExerciseData function returns an appropriate error message when the Mongoose method returns null
  it("Should return status 400 when appropriate exercise data to edit was not found", async () => {
    // Set up mock request and response objects
    const req = {
        params: { email: 'notfound@gmail.com', dateAdded: '2022-03-07', name: 'push-ups' },
        body: { sets: 3, reps: 10 }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    // Set up the mock Mongoose method to return null
    Exercise.findOneAndUpdate = jest.fn().mockResolvedValue(null)

    // Call the function being tested
    await updateExerciseData(req, res)

    // Check that the expected Mongoose method was called with the expected arguments
    expect(Exercise.findOneAndUpdate).toHaveBeenCalledWith(
      { email: 'notfound@gmail.com', dateAdded: '2022-03-07', name: 'push-ups' },
      { sets: 3, reps: 10 },
      { new: true }
    );

    // Check that the expected response was sent
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({ success: false, message: "Was not able to find appropriate exercise data to edit" })
  });
});

// Define a test suite for deleting exercise data
describe('Delete ExerciseData', () => {

  // Function to clear all mocks after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test case to check successful deletion of exercise data
  it('should delete exercise data successfully', async () => {
    // Create mock request object with the relevant parameters
    const mockReq = {
      params: {
        email: 'test@gmail.com',
        dateAdded: '2022-01-01',
        name: 'push-ups'
      }
    };

    // Create mock response object with status and json functions
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    // Create mock data for the deleted exercise data
    const mockDeletedExerciseData = { email: 'test@gmail.com', dateAdded: '2022-01-01', name: 'push-ups' };

    // Mock the Exercise model's findOneAndRemove method to return the mock deleted data
    jest.spyOn(Exercise, 'findOneAndRemove').mockResolvedValue(mockDeletedExerciseData);

    // Call the deleteExerciseData function with the mock request and response objects
    await deleteExerciseData(mockReq, mockRes);

    // Expectations for the function call
    expect(Exercise.findOneAndRemove).toHaveBeenCalledWith({ email: 'test@gmail.com', dateAdded: '2022-01-01', name: 'push-ups' });
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({ success: true, message: 'Success in deleting exercise data', deletedExerciseData: mockDeletedExerciseData });
  });

  // Test case to check failure in deleting exercise data
  it('should return 400 status code if exercise data was not found', async () => {
    // Create mock request object with the relevant parameters
    const mockReq = {
      params: {
        email: 'notfound@gmail.com',
        dateAdded: '2022-01-01',
        name: 'push-ups'
      }
    };

    // Create mock response object with status and json functions
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    // Mock the Exercise model's findOneAndRemove method to return null, indicating no matching data was found
    jest.spyOn(Exercise, 'findOneAndRemove').mockResolvedValue(null);

    // Call the deleteExerciseData function with the mock request and response objects
    await deleteExerciseData(mockReq, mockRes);

    // Expectations for the function call
    expect(Exercise.findOneAndRemove).toHaveBeenCalledWith({ email: 'notfound@gmail.com', dateAdded: '2022-01-01', name: 'push-ups' });
    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({ success: false, message: 'Was not able to delete selected exercise data' });
  });
});


// Define a test suite for getting exercise data list
describe('getExerciseList', () => {
  it('should return the exercise list for a given email and dateAdded', async () => {
    // Arrange
    const req = { params: { email: 'test@gmail.com', dateAdded: '2022-01-01' } };
    const res = {
      status: jest.fn().mockReturnThis(),  // Create a mock function for res.status
      json: jest.fn(),  // Create a mock function for res.json
    };
    const expectedExerciseList = [{ name: 'Exercise 1' }, { name: 'Exercise 2' }];
    Exercise.find = jest.fn().mockResolvedValue(expectedExerciseList);  // Mock Exercise.find method to return expectedExerciseList

    // Act
    await getExerciseList(req, res);  // Call the getExerciseList function with mocked req and res objects

    // Assert
    expect(Exercise.find).toHaveBeenCalledWith({ email: req.params.email, dateAdded: req.params.dateAdded });  // Check that Exercise.find was called with the correct arguments
    expect(res.status).toHaveBeenCalledWith(200);  // Check that res.status was called with 200
    expect(res.json).toHaveBeenCalledWith({ success: true, message: 'Success in getting exercise list', exerciseList: expectedExerciseList });  // Check that res.json was called with the correct arguments
  });

  it('should return a 404 status and error message when an error occurs', async () => {
    // Arrange
    const req = { params: { email: 'fail@gmail.com', dateAdded: '2022-01-01' } };
    const res = {
      status: jest.fn().mockReturnThis(),  // Create a mock function for res.status
      json: jest.fn(),  // Create a mock function for res.json
    };
    Exercise.find = jest.fn().mockRejectedValue(new Error('Database error'));  // Mock Exercise.find method to throw an error

    // Act
    await getExerciseList(req, res);  // Call the getExerciseList function with mocked req and res objects

    // Assert
    expect(Exercise.find).toHaveBeenCalledWith({ email: req.params.email, dateAdded: req.params.dateAdded });  // Check that Exercise.find was called with the correct arguments
    expect(res.status).toHaveBeenCalledWith(404);  // Check that res.status was called with 404
    expect(res.json).toHaveBeenCalledWith({ success: false, message: 'Error in getting exercise list' });  // Check that res.json was called with the correct arguments
  });
});

// Define a test suite for getting exercise data
describe('getExerciseData', () => {
  
  // This test checks if the function returns exercise data for a valid request
  it('should return exercise data for a valid request', async () => {
    // Set up a mock request object with email, name and dateAdded properties
    const mockReq = {
      params: {
        email: 'test@gmail.com',
        name: 'pushup',
        dateAdded: '2022-01-01'
      }
    };

    // Set up a mock response object with a status method and a json method
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    // Set up mock exercise data object
    const mockExerciseData = {
      email: 'test@gmail.com',
      name: 'pushup',
      dateAdded: '2022-01-01',
      reps: 10,
      sets: 3
    };

    // Mock the 'findOne' method of the Exercise model to return the mock exercise data
    Exercise.findOne = jest.fn().mockResolvedValue(mockExerciseData);

    // Call the 'getExerciseData' function with the mock request and response objects
    await getExerciseData(mockReq, mockRes);

    // Expect the 'findOne' method to have been called with the expected parameters
    expect(Exercise.findOne).toHaveBeenCalledWith({
      email: 'test@gmail.com',
      name: 'pushup',
      dateAdded: '2022-01-01'
    });
    
    // Expect the 'status' method to have been called with a status code of 200
    expect(mockRes.status).toHaveBeenCalledWith(200);
    
    // Expect the 'json' method to have been called with the expected response object
    expect(mockRes.json).toHaveBeenCalledWith({
      success: true,
      message: 'Success in getting exercise data',
      exerciseData: mockExerciseData
    });
  });

  // This test checks if the function returns an error message for an invalid request
  it('should return an error message for an invalid request', async () => {
    // Set up a mock request object with email, name and an invalid dateAdded property
    const mockReq = {
      params: {
        email: 'test@gmail.com',
        name: 'pushup',
        dateAdded: 'invalid-date'
      }
    };

    // Set up a mock response object with a status method and a json method
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    // Mock the 'findOne' method of the Exercise model to throw an error
    Exercise.findOne = jest.fn().mockRejectedValue(new Error('Invalid date'));

    // Call the 'getExerciseData' function with the mock request and response objects
    await getExerciseData(mockReq, mockRes);

    // Expect the 'findOne' method to have been called with the expected parameters
    expect(Exercise.findOne).toHaveBeenCalledWith({
      email: 'test@gmail.com',
      name: 'pushup',
      dateAdded: 'invalid-date'
    });
    
    // Expect the 'status' method to have been called with a status code of 404
    expect(mockRes.status).toHaveBeenCalledWith(404);
    
    // Expect the 'json' method to have been called with the expected response object
    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      message: 'Error in getting exercise data'
    });
  });
});
