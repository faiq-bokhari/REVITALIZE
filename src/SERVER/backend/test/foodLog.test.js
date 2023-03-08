const mongoose = require('mongoose');
const FoodLog = require("../models/foodLogModel");
require("dotenv").config();
const { addMeal, getFoodLog, updateMeal, deleteMeal } = require("../controllers/foodLogController");

describe('Adding FoodLog Data', () => {
  // connect to MongoDB
  beforeAll(async () => {
    await await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });
  now = new Date();

  beforeEach(async () => {
    await FoodLog.deleteMany({});
    req = {
        params: {
          email: "test@gmail.com",
          foodDate: now
        },
        query:{
          foodName: 'name',
          calories: 1,
          carbs: 1,  
          fats: 1, 
          protein: 1
        },
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

  it('should add meal and return a status code of 201', async () => {
    // Mock FoodLog.findOne to return null, indicating sleep data doesn't already exist
    FoodLog.findOne = jest.fn().mockResolvedValue(null);
    // Mock FoodLog.create to return the newly created sleep data
    const createdFoodLogData = {
      id: 'meal_id',
      email: 'test@gmail.com',
      foodName: 'name',
      calories: 1,
      carbs: 1,  
      fats: 1, 
      protein: 1, 
      foodDate: now
    };
    FoodLog.create = jest.fn().mockResolvedValue(createdFoodLogData);

    await addMeal(req, res, next);

    expect(FoodLog.findOne).toHaveBeenCalledWith({
      email: "test@gmail.com",
      foodDate: now,
      foodName: "name",


    });
    expect(FoodLog.create).toHaveBeenCalledWith({
      email: 'test@gmail.com',
      foodName: 'name',
      calories: 1,
      carbs: 1,  
      fats: 1, 
      protein: 1, 
      foodDate: now
    });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      sucess: true,
      message: 'Meal successfully added',
      _id: 'meal_id',
      email: 'test@gmail.com',
      foodName: 'name',
      calories: 1,
      carbs: 1,  
      fats: 1, 
      protein: 1, 
      foodDate: now
    });
  });
});

describe('Update FoodLog Data', () => {
    it('should update meal successfully', async () => {
      now = new Date();
      const mockReq = {
        params: {
          email: "test@gmail.com",
          foodDate: now
        },
        query:{
          foodName: 'name',
          calories: 2,
          carbs: 2,  
          fats: 3, 
          protein: 2
        },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const mockFoodLog = { 
        foodName: 'name',
        calories: 2,
        carbs: 2,  
        fats: 3, 
        protein: 2 
      };
      FoodLog.findOneAndUpdate = jest.fn().mockResolvedValue(mockFoodLog); // mock the Mongoose method
  
      await updateMeal(mockReq, mockRes);
  
      expect(FoodLog.findOneAndUpdate).toHaveBeenCalledWith(
        {
          email: "test@gmail.com",
          foodDate: now,
          foodName: 'name'
        },
        {
          email: "test@gmail.com",
          foodDate: now,
          foodName: 'name',
          calories: 2,
          carbs: 2,  
          fats: 3, 
          protein: 2
        },
        { "returnOriginal": false }
      );
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        sucess: true,
        message: 'Success in updating meal',
        updatedMeal:{
        calories: 2,
        carbs: 2,
        fats: 3,
        foodName: "name",
        protein: 2}
      });
    });
  
});

describe('Delete FoodLogData', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  now = new Date();
  it('should delete meal successfully', async () => {
    const mockReq = {
      params: {
        email: 'test@gmail.com',
        foodDate: now
      },
      query:{
        foodName: 'name'
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    const mockDeletedFoodLogData = { email: 'test@gmail.com', foodDate: now, foodName: 'name' };
    jest.spyOn(FoodLog, 'findOneAndRemove').mockResolvedValue(mockDeletedFoodLogData);

    await deleteMeal(mockReq, mockRes);

    expect(FoodLog.findOneAndRemove).toHaveBeenCalledWith({ email: 'test@gmail.com', foodDate: now, foodName: 'name' });
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({ success: true, message: 'Success in deleting meal', deletedMeal: mockDeletedFoodLogData });
  });
}); 

describe('getFoodLog', () => {
  it('should return foodLog data for a valid request', async () => {
    now = new Date();
    const mockReq = {
      params: {
        email: 'test@gmail.com',
        foodDate: now
      }
    };

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    const mockFoodLogData = {
      email: 'test@gmail.com',
      foodDate: now,
    };

    FoodLog.find = jest.fn().mockResolvedValue(mockFoodLogData);

    await getFoodLog(mockReq, mockRes);

    expect(FoodLog.find).toHaveBeenCalledWith({
      email: 'test@gmail.com',
      foodDate: now,

    });
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      success: true,
      message: "Success in getting food log",
      calories: 0,
      carbs: 0,
      fat: 0,
      protein: 0,
      foodLog: {
        email: "test@gmail.com",
        foodDate: now
      },
    });
  });
});
