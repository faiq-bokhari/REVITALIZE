/*
Author: Bill Nguyen
Date Started: February 5th, 2023

This sleep.test.js file contains a set of test suites and test cases that aim to test the functionality of the sleepController.js module. 
The sleepController.js module handles requests related to sleep data, including adding, updating, deleting, and retrieving sleep data.

The test cases in this file utilize the Jest testing framework to ensure that the functions in sleepController.js are working as expected. 

File Association: sleepModel.js <-> sleepController.js <-> sleepRoutes.js
*/

const mongoose = require('mongoose'); // Import Mongoose library
const Sleep = require("../models/sleepModel"); // Import Sleep Model
require("dotenv").config(); // Import and configure dotenv for environment variables
const { addSleepData, getSleepData, getAllUserSleepData, updateSleepData, deleteSleepData } = require("../controllers/sleepController"); // Import sleepController functions

// Define a test suite for adding sleep data
describe('Adding Sleep Data', () => {
  // Connect to MongoDB before all tests are run
  beforeAll(async () => {
    await await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  // Remove all data from Sleep model before each test
  beforeEach(async () => {
    await Sleep.deleteMany({});

    // Set up request, response, and next objects for addSleepData function
    req = {
      body: {
        email: 'test@gmail.com',
        sleepHour: 12,
        bedHour: 10, 
        sleepMinute: 5, 
        bedMinute: 5,
        dateAdded: '2022-03-07'
      }
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    next = jest.fn();
  });

  // Close MongoDB connection after all tests are run
  afterAll(async () => {
    await mongoose.connection.close();
  });

  // Reset all mock functions after each test
  afterEach(() => {
    jest.resetAllMocks();
  });

  // Test case for adding sleep data
  it('should add sleep data and return a status code of 201', async () => {
    // Mock Sleep.findOne to return null, indicating sleep data doesn't already exist
    Sleep.findOne = jest.fn().mockResolvedValue(null);

    // Mock Sleep.create to return the newly created sleep data
    const createdSleepData = {
      id: 'sleep_id',
      email: 'test@gmail.com',
      sleepHour: 12,
      bedHour: 10, 
      sleepMinute: 5, 
      bedMinute: 5,
      dateAdded: '2022-03-07'
    };
    Sleep.create = jest.fn().mockResolvedValue(createdSleepData);

    // Call addSleepData function with mocked objects
    await addSleepData(req, res, next);

    // Test that Sleep.findOne was called with the correct arguments
    expect(Sleep.findOne).toHaveBeenCalledWith({
      email: 'test@gmail.com',
      dateAdded: '2022-03-07',
    });

    // Test that Sleep.create was called with the correct arguments
    expect(Sleep.create).toHaveBeenCalledWith({
        email: 'test@gmail.com',
        sleepHour: 12,
        bedHour: 10, 
        sleepMinute: 5, 
        bedMinute: 5,
        dateAdded: '2022-03-07'
    });

    // Test that res.status was called with the correct status code
    expect(res.status).toHaveBeenCalledWith(201);

    // Test that res.json was called with the correct JSON response
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: 'Success in adding sleep data',
      _id: 'sleep_id',
      email: 'test@gmail.com',
      sleepHour: 12,
      bedHour: 10, 
      sleepMinute: 5, 
      bedMinute: 5,
      dateAdded: '2022-03-07'
    });
  });
});

// Define a test suite for updating sleep data
describe('Update Sleep Data', () => {
  // This test checks if sleep data can be updated successfully.
  it('should update sleep data successfully', async () => {
    // Mock the request object
    const mockReq = {
      params: { email: 'example@gmail.com', dateAdded: '2022-01-01'},
      body: { 
          sleepHour: 12,
          bedHour: 11, 
          sleepMinute: 57, 
          bedMinute: 47,  
      }
    };

    // Mock the response object
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    // Create a mock sleep object
    const mockSleep = { 
      email: 'example@gmail.com', 
      dateAdded: '2022-01-01', 
      sleepHour: 1,
      bedHour: 12, 
      sleepMinute: 33, 
      bedMinute: 22,  
    };
    
    // Mock the Mongoose findOneAndUpdate method to return the mock sleep object
    Sleep.findOneAndUpdate = jest.fn().mockResolvedValue(mockSleep);

    // Call the updateSleepData function with the mock request and response objects
    await updateSleepData(mockReq, mockRes);

    // Assert that the Sleep.findOneAndUpdate method was called with the correct arguments
    expect(Sleep.findOneAndUpdate).toHaveBeenCalledWith(
      { email: 'example@gmail.com', dateAdded: '2022-01-01' },
      { 
          sleepHour: 12,
          bedHour: 11, 
          sleepMinute: 57, 
          bedMinute: 47,  
      },
      { new: true }
    );

    // Assert that the mock response object was called with the correct arguments
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      success: true,
      message: 'Success in editing sleep data',
      updatedSleepData: mockSleep
    });
  });

  // This test checks if the appropriate error message is returned when sleep data cannot be found.
  it("Should return status 400 when appropriate sleep data to edit was not found", async () => {
    // Mock the request object
    const req = {
        params: { email: 'notfound@gmail.com', dateAdded: '2022-03-07' },
        body: { 
          sleepHour: 12,
          bedHour: 11, 
          sleepMinute: 57, 
          bedMinute: 47,  
          }
      }

    // Mock the response object
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }

    // Mock the Mongoose findOneAndUpdate method to return null
    Sleep.findOneAndUpdate = jest.fn().mockResolvedValue(null)

    // Call the updateSleepData function with the mock request and response objects
    await updateSleepData(req, res)

    // Assert that the Sleep.findOneAndUpdate method was called with the correct arguments
    expect(Sleep.findOneAndUpdate).toHaveBeenCalledWith(
      { email: 'notfound@gmail.com', dateAdded: '2022-03-07' },
      { 
        sleepHour: 12,
        bedHour: 11, 
        sleepMinute: 57, 
        bedMinute: 47,  
      },
      { new: true }
    )

    // Assert that the mock response object was called with the correct arguments
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({ success: false, message: "Was not able to find appropriate sleep data to edit" })
    });
});

// Define a test suite for deleting sleep data
describe('Delete SleepData', () => {

  // This afterEach block runs after each test and clears all mocked functions.
  afterEach(() => {
    jest.clearAllMocks();
  });

  // This test case tests the successful deletion of sleep data from the database.
  it('should delete sleep data successfully', async () => {

    // Create a mock request object with an email and dateAdded property.
    const mockReq = {
      params: {
        email: 'test@gmail.com',
        dateAdded: '2022-01-01',
      }
    };

    // Create a mock response object with a status and json method.
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    // Create a mock deleted sleep data object to be returned by the mocked findOneAndRemove function.
    const mockDeletedSleepData = { email: 'test@gmail.com', dateAdded: '2022-01-01' };

    // Mock the findOneAndRemove function of the Sleep model and resolve it with the mockDeletedSleepData object.
    jest.spyOn(Sleep, 'findOneAndRemove').mockResolvedValue(mockDeletedSleepData);

    // Call the deleteSleepData function with the mock request and response objects.
    await deleteSleepData(mockReq, mockRes);

    // Assert that the findOneAndRemove function was called with the correct email and dateAdded parameters.
    expect(Sleep.findOneAndRemove).toHaveBeenCalledWith({ email: 'test@gmail.com', dateAdded: '2022-01-01' });

    // Assert that the response status was set to 200.
    expect(mockRes.status).toHaveBeenCalledWith(200);

    // Assert that the response json method was called with the correct success, message, and deletedSleepData properties.
    expect(mockRes.json).toHaveBeenCalledWith({ success: true, message: 'Success in deleting sleep data', deletedSleepData: mockDeletedSleepData });
  });

  // This test case tests the unsuccessful deletion of sleep data from the database.
  it('should return 400 status code if sleep data was not found', async () => {

    // Create a mock request object with an email and dateAdded property.
    const mockReq = {
      params: {
        email: 'notfound@gmail.com',
        dateAdded: '2022-01-01'
      }
    };

    // Create a mock response object with a status and json method.
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    // Mock the findOneAndRemove function of the Sleep model and resolve it with null to simulate not finding any matching sleep data.
    jest.spyOn(Sleep, 'findOneAndRemove').mockResolvedValue(null);

    // Call the deleteSleepData function with the mock request and response objects.
    await deleteSleepData(mockReq, mockRes);

    // Assert that the findOneAndRemove function was called with the correct email and dateAdded parameters.
    expect(Sleep.findOneAndRemove).toHaveBeenCalledWith({ email: 'notfound@gmail.com', dateAdded: '2022-01-01' });

    // Assert that the response status was set to 400.
    expect(mockRes.status).toHaveBeenCalledWith(400);

    // Assert that the response json method was called with the correct success and message properties.
    expect(mockRes.json).toHaveBeenCalledWith({ success: false, message: 'Was not able to delete selected sleep data' });
  });
}); 

// Define a test suite for getting sleep data
describe('getSleepData', () => {

  // This is a test case for when the function is called with a valid request
  it('should return sleep data for a valid request', async () => {
    // Set up mock request object
    const mockReq = {
      params: {
        email: 'test@gmail.com',
        dateAdded: '2022-01-01'
      }
    };

    // Set up mock response object
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    // Set up mock sleep data that the function is expected to return
    const mockSleepData = {
      email: 'test@gmail.com',
      dateAdded: '2022-01-01',
      sleepHour: 12,
      bedHour: 11, 
      sleepMinute: 57, 
      bedMinute: 47,  
    };

    // Mock the Sleep.findOne method to return the mock sleep data
    Sleep.findOne = jest.fn().mockResolvedValue(mockSleepData);

    // Call the function with the mock request and response objects
    await getSleepData(mockReq, mockRes);

    // Expect the Sleep.findOne method to have been called with the correct parameters
    expect(Sleep.findOne).toHaveBeenCalledWith({
      email: 'test@gmail.com',
      dateAdded: '2022-01-01'
    });
    
    // Expect the response status to be 200
    expect(mockRes.status).toHaveBeenCalledWith(200);
    
    // Expect the response JSON to have the correct properties and values
    expect(mockRes.json).toHaveBeenCalledWith({
      success: true,
      message: 'Success in getting sleep data',
      sleepData: mockSleepData
    });
  });

  // This is a test case for when the function is called with an invalid request
  it('should return an error message for an invalid request', async () => {
    // Set up mock request object with an invalid date
    const mockReq = {
      params: {
        email: 'test@gmail.com',
        dateAdded: 'invalid-date'
      }
    };

    // Set up mock response object
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    // Mock the Sleep.findOne method to throw an error with the message "Invalid date"
    Sleep.findOne = jest.fn().mockRejectedValue(new Error('Invalid date'));

    // Call the function with the mock request and response objects
    await getSleepData(mockReq, mockRes);

    // Expect the Sleep.findOne method to have been called with the correct parameters
    expect(Sleep.findOne).toHaveBeenCalledWith({
      email: 'test@gmail.com',
      dateAdded: 'invalid-date'
    });
    
    // Expect the response status to be 404
    expect(mockRes.status).toHaveBeenCalledWith(404);
    
    // Expect the response JSON to have the correct properties and values
    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      message: 'Error in getting sleep data'
    });
  });
});
