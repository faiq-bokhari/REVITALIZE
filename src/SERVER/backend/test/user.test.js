const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
require("dotenv").config();
const { registerUser } = require("../controllers/userController");

describe("Signing up a new User", () => {
  // connect to MongoDB
  beforeAll(async () => {
    await await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });
  //now = new Date();

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
