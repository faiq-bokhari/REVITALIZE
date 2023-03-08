const mongoose = require('mongoose');
const Sleep = require("../models/sleepModel");
require("dotenv").config();
const { addSleepData, getSleepData, getAllUserSleepData, updateSleepData, deleteSleepData } = require("../controllers/sleepController");

describe('Adding Sleep Data', () => {
  // connect to MongoDB
  beforeAll(async () => {
    await await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  beforeEach(async () => {
    await Sleep.deleteMany({});
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

  // close the MongoDB connection after all tests are done
  afterAll(async () => {
    await mongoose.connection.close();
  });

  // close the MongoDB connection after all tests are done
  afterEach(() => {
    jest.resetAllMocks();
  });

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

    await addSleepData(req, res, next);

    expect(Sleep.findOne).toHaveBeenCalledWith({
      email: 'test@gmail.com',
      dateAdded: '2022-03-07',
    });
    expect(Sleep.create).toHaveBeenCalledWith({
        email: 'test@gmail.com',
        sleepHour: 12,
        bedHour: 10, 
        sleepMinute: 5, 
        bedMinute: 5,
        dateAdded: '2022-03-07'
    });
    expect(res.status).toHaveBeenCalledWith(201);
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

describe('Update Sleep Data', () => {
    it('should update sleep data successfully', async () => {
      const mockReq = {
        params: { email: 'example@gmail.com', dateAdded: '2022-01-01'},
        body: { 
            sleepHour: 12,
            bedHour: 11, 
            sleepMinute: 57, 
            bedMinute: 47,  
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const mockSleep = { 
        email: 'example@gmail.com', 
        dateAdded: '2022-01-01', 
        sleepHour: 1,
        bedHour: 12, 
        sleepMinute: 33, 
        bedMinute: 22,  
      };
      Sleep.findOneAndUpdate = jest.fn().mockResolvedValue(mockSleep); // mock the Mongoose method
  
      await updateSleepData(mockReq, mockRes);
  
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
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        success: true,
        message: 'Success in editing sleep data',
        updatedSleepData: mockSleep
      });
    });
  
    it("Should return status 400 when appropriate sleep data to edit was not found", async () => {
      const req = {
          params: { email: 'notfound@gmail.com', dateAdded: '2022-03-07' },
          body: { 
            sleepHour: 12,
            bedHour: 11, 
            sleepMinute: 57, 
            bedMinute: 47,  
            }
        }
        // mock the response object
        const res = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn()
        }
        // mock the Sleep.findOneAndUpdate() method to return null
        Sleep.findOneAndUpdate = jest.fn().mockResolvedValue(null)
    
        await updateSleepData(req, res)
    
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
        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith({ success: false, message: "Was not able to find appropriate sleep data to edit" })
    });
});

describe('Delete SleepData', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should delete sleep data successfully', async () => {
    const mockReq = {
      params: {
        email: 'test@gmail.com',
        dateAdded: '2022-01-01',
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    const mockDeletedSleepData = { email: 'test@gmail.com', dateAdded: '2022-01-01' };
    jest.spyOn(Sleep, 'findOneAndRemove').mockResolvedValue(mockDeletedSleepData);

    await deleteSleepData(mockReq, mockRes);

    expect(Sleep.findOneAndRemove).toHaveBeenCalledWith({ email: 'test@gmail.com', dateAdded: '2022-01-01' });
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({ success: true, message: 'Success in deleting sleep data', deletedSleepData: mockDeletedSleepData });
  });

  it('should return 400 status code if sleep data was not found', async () => {
    const mockReq = {
      params: {
        email: 'notfound@gmail.com',
        dateAdded: '2022-01-01'
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    jest.spyOn(Sleep, 'findOneAndRemove').mockResolvedValue(null);

    await deleteSleepData(mockReq, mockRes);

    expect(Sleep.findOneAndRemove).toHaveBeenCalledWith({ email: 'notfound@gmail.com', dateAdded: '2022-01-01' });
    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({ success: false, message: 'Was not able to delete selected sleep data' });
  });
}); 

describe('getSleepData', () => {
  it('should return sleep data for a valid request', async () => {
    const mockReq = {
      params: {
        email: 'test@gmail.com',
        dateAdded: '2022-01-01'
      }
    };

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    const mockSleepData = {
      email: 'test@gmail.com',
      dateAdded: '2022-01-01',
      sleepHour: 12,
      bedHour: 11, 
      sleepMinute: 57, 
      bedMinute: 47,  
    };

    Sleep.findOne = jest.fn().mockResolvedValue(mockSleepData);

    await getSleepData(mockReq, mockRes);

    expect(Sleep.findOne).toHaveBeenCalledWith({
      email: 'test@gmail.com',
      dateAdded: '2022-01-01'
    });
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      success: true,
      message: 'Success in getting sleep data',
      sleepData: mockSleepData
    });
  });

  it('should return an error message for an invalid request', async () => {
    const mockReq = {
      params: {
        email: 'test@gmail.com',
        dateAdded: 'invalid-date'
      }
    };

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    Sleep.findOne = jest.fn().mockRejectedValue(new Error('Invalid date'));

    await getSleepData(mockReq, mockRes);

    expect(Sleep.findOne).toHaveBeenCalledWith({
      email: 'test@gmail.com',
      dateAdded: 'invalid-date'
    });
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      message: 'Error in getting sleep data'
    });
  });
});
