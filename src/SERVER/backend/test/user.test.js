/*
Author: Mahmoud Anklis
Date: February 5th, 2023

This user.test.js file contains a set of test suites and test cases that aim to test the functionality of the userController.js module. 
The userController.js module handles requests related to user data, including registering a new user, logging in, and getting user information.

The test cases in this file utilize the Jest testing framework to ensure that the functions in userController.js are working as expected. 

File Association: userModel.js <-> userController.js <-> userRoutes.js
*/

//imports
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
require("dotenv").config();
const { registerUser } = require("../controllers/userController");

//Define a test suite for signing up a new user
describe("Signing up a new User", () => {
  // connect to MongoDB
  beforeAll(async () => {
    await await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });
  //now = new Date();

  //Reset the user collection in the database and set up mock request, response and next objects before each test
  beforeEach(async () => {
    await User.deleteMany({});
    req = {
      body: {
        name: "Test Name",
        email: "test123@gmail.com",
        password: "12345",
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  // close the MongoDB connection after all tests are done
  afterAll(async () => {
    await mongoose.connection.close();
  });

  // close the MongoDB connection after all tests are done
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should create a new user and return with a status code of 201", async () => {
    // Mock User.findOne to return null, indicating user does not already exist
    User.findOne = jest.fn().mockResolvedValue(null);

    const createdUser = {
      id: "user_id",
      email: "test123@gmail.com",
      name: "Test Name",
      password: "12345",
    };
    User.create = jest.fn().mockResolvedValue(createdUser);

    await registerUser(req, res, next);

    expect(User.findOne).toHaveBeenCalledWith({
      email: "test123@gmail.com",
    });
    expect(res.status).toHaveBeenCalledWith(201);
  });
});
