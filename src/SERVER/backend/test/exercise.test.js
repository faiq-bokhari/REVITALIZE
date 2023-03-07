const mongoose = require('mongoose');
const Exercise = require("../models/exerciseModel");
require("dotenv").config();
const { addExerciseData, updateExerciseData, deleteExerciseData, getExerciseList, getExerciseData } = require("../controllers/exerciseController");

describe('Adding Exercise Data', () => {
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

  // close the MongoDB connection after all tests are done
  afterAll(async () => {
    await mongoose.connection.close();
  });

  // close the MongoDB connection after all tests are done
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should add exercise data and return a status code of 201', async () => {
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

    await addExerciseData(req, res, next);

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

describe('Update Exercise Data', () => {
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
          params: { email: 'test@gmail.com', dateAdded: '2022-03-07', name: 'push-ups' },
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
          { email: 'test@gmail.com', dateAdded: '2022-03-07', name: 'push-ups' },
          { sets: 3, reps: 10 },
          { new: true }
        )
        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith({ success: false, message: "Was not able to find appropriate exercise data to edit" })
    });
});

describe('Delete ExerciseData', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should delete exercise data successfully', async () => {
    const mockReq = {
      params: {
        email: 'test@gmail.com',
        dateAdded: '2022-01-01',
        name: 'push-ups'
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    const mockDeletedExerciseData = { email: 'test@gmail.com', dateAdded: '2022-01-01', name: 'push-ups' };
    jest.spyOn(Exercise, 'findOneAndRemove').mockResolvedValue(mockDeletedExerciseData);

    await deleteExerciseData(mockReq, mockRes);

    expect(Exercise.findOneAndRemove).toHaveBeenCalledWith({ email: 'test@gmail.com', dateAdded: '2022-01-01', name: 'push-ups' });
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({ success: true, message: 'Success in deleting exercise data', deletedExerciseData: mockDeletedExerciseData });
  });

  it('should return 400 status code if exercise data was not found', async () => {
    const mockReq = {
      params: {
        email: 'test@gmail.com',
        dateAdded: '2022-01-01',
        name: 'push-ups'
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    jest.spyOn(Exercise, 'findOneAndRemove').mockResolvedValue(null);

    await deleteExerciseData(mockReq, mockRes);

    expect(Exercise.findOneAndRemove).toHaveBeenCalledWith({ email: 'test@gmail.com', dateAdded: '2022-01-01', name: 'push-ups' });
    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({ success: false, message: 'Was not able to delete selected exercise data' });
  });
});

describe('getExerciseList', () => {
  it('should return the exercise list for a given email and dateAdded', async () => {
    // Arrange
    const req = { params: { email: 'test@gmail.com', dateAdded: '2022-01-01' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const expectedExerciseList = [{ name: 'Exercise 1' }, { name: 'Exercise 2' }];
    Exercise.find = jest.fn().mockResolvedValue(expectedExerciseList);

    // Act
    await getExerciseList(req, res);

    // Assert
    expect(Exercise.find).toHaveBeenCalledWith({ email: req.params.email, dateAdded: req.params.dateAdded });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ success: true, message: 'Success in getting exercise list', exerciseList: expectedExerciseList });
  });

  it('should return a 404 status and error message when an error occurs', async () => {
    // Arrange
    const req = { params: { email: 'test@gmail.com', dateAdded: '2022-01-01' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    Exercise.find = jest.fn().mockRejectedValue(new Error('Database error'));

    // Act
    await getExerciseList(req, res);

    // Assert
    expect(Exercise.find).toHaveBeenCalledWith({ email: req.params.email, dateAdded: req.params.dateAdded });
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ success: false, message: 'Error in getting exercise list' });
  });
});

describe('getExerciseData', () => {
  it('should return exercise data for a valid request', async () => {
    const mockReq = {
      params: {
        email: 'test@gmail.com',
        name: 'pushup',
        dateAdded: '2022-01-01'
      }
    };

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    const mockExerciseData = {
      email: 'test@gmail.com',
      name: 'pushup',
      dateAdded: '2022-01-01',
      reps: 10,
      sets: 3
    };

    Exercise.findOne = jest.fn().mockResolvedValue(mockExerciseData);

    await getExerciseData(mockReq, mockRes);

    expect(Exercise.findOne).toHaveBeenCalledWith({
      email: 'test@gmail.com',
      name: 'pushup',
      dateAdded: '2022-01-01'
    });
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      success: true,
      message: 'Success in getting exercise data',
      exerciseData: mockExerciseData
    });
  });

  it('should return an error message for an invalid request', async () => {
    const mockReq = {
      params: {
        email: 'test@gmail.com',
        name: 'pushup',
        dateAdded: 'invalid-date'
      }
    };

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    Exercise.findOne = jest.fn().mockRejectedValue(new Error('Invalid date'));

    await getExerciseData(mockReq, mockRes);

    expect(Exercise.findOne).toHaveBeenCalledWith({
      email: 'test@gmail.com',
      name: 'pushup',
      dateAdded: 'invalid-date'
    });
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      message: 'Error in getting exercise data'
    });
  });
});
