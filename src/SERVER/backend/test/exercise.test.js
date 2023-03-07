const mongoose = require('mongoose');
const request = require('supertest');
const Exercise = require("../models/exerciseModel");
const app = require("../server");
require("dotenv").config();
const { addExerciseData, updateExerciseData, deleteExerciseData, getExerciseList, getExerciseData } = require("../controllers/exerciseController");

describe('ExerciseModel', () => {
  // connect to MongoDB
  beforeAll(async () => {
    await await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  beforeEach(async () => {
    await Exercise.deleteMany({});
    req = {
        body: {
          email: 'test@test.com',
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

  // close the MongoDB connection after all tests are done
  afterAll(async () => {
    await mongoose.connection.close();
  });

  // clear the Exercise collection before each test
  beforeEach(() => {
    req = {
        body: {
          email: 'test@test.com',
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

  // close the MongoDB connection after all tests are done
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should update exercise data successfully', async () => {
    const mockReq = {
      params: { email: 'example@gmail.com', dateAdded: '2022-01-01', name: 'exerciseName' },
      body: { reps: 10, sets: 3 }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const mockExercise = { email: 'example@gmail.com', dateAdded: '2022-01-01', name: 'exerciseName', reps: 5, sets: 2 };
    Exercise.findOneAndUpdate = jest.fn().mockResolvedValue(mockExercise); // mock the Mongoose method

    await updateExerciseData(mockReq, mockRes);

    expect(Exercise.findOneAndUpdate).toHaveBeenCalledWith(
      { email: 'example@gmail.com', dateAdded: '2022-01-01', name: 'exerciseName' },
      { reps: 10, sets: 3 },
      { new: true }
    );
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      success: true,
      message: 'Success in editing exercise data',
      updatedExerciseData: mockExercise
    });
  });

  it("Should return status 400 when appropriate exercise data to edit was not found", async () => {
    const req = {
        params: { email: 'test@example.com', dateAdded: '2022-03-07', name: 'push-ups' },
        body: { sets: 3, reps: 10 }
      }
      // mock the response object
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      }
      // mock the Exercise.findOneAndUpdate() method to return null
      Exercise.findOneAndUpdate = jest.fn().mockResolvedValue(null)
  
      await updateExerciseData(req, res)
  
      expect(Exercise.findOneAndUpdate).toHaveBeenCalledWith(
        { email: 'test@example.com', dateAdded: '2022-03-07', name: 'push-ups' },
        { sets: 3, reps: 10 },
        { new: true }
      )
      expect(res.status).toHaveBeenCalledWith(400)
      expect(res.json).toHaveBeenCalledWith({ success: false, message: "Was not able to find appropriate exercise data to edit" })
  });

  it('should add exercise data and return a status code of 201', async () => {
    // Mock Exercise.findOne to return null, indicating exercise data doesn't already exist
    Exercise.findOne = jest.fn().mockResolvedValue(null);

    // Mock Exercise.create to return the newly created exercise data
    const createdExerciseData = {
      id: 'exercise_id',
      email: 'test@test.com',
      name: 'Test Exercise',
      sets: 3,
      repititions: 10,
      weight: 50,
      dateAdded: '2022-03-07T00:00:00.000Z'
    };
    Exercise.create = jest.fn().mockResolvedValue(createdExerciseData);

    await addExerciseData(req, res, next);

    expect(Exercise.findOne).toHaveBeenCalledWith({
      email: 'test@test.com',
      dateAdded: '2022-03-07T00:00:00.000Z',
      name: 'Test Exercise'
    });
    expect(Exercise.create).toHaveBeenCalledWith({
      email: 'test@test.com',
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
      email: 'test@test.com',
      name: 'Test Exercise',
      sets: 3,
      repititions: 10,
      weight: 50,
      dateAdded: '2022-03-07T00:00:00.000Z'
    });
  });





});
