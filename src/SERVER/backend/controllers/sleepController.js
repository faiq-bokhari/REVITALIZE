const Sleep = require("../models/sleepModel");

//adds sleep data for specified user
const addSleepData = async (req, res) => {
  const { email, sleepHour, bedHour, sleepMinute, bedMinute, dateAdded } = req.body;
  let lowerCaseEmail = email.toLowerCase();

  //check that all fields are filled in
  if (!sleepHour || !bedHour || !sleepMinute || !bedMinute || !lowerCaseEmail || !dateAdded) {
    res
      .status(400)
      .json({ success: false, message: "Please fill in all fields for adding sleep data" });
    return;
  }

  const sleepDataExists = await Sleep.findOne({ email: lowerCaseEmail, dateAdded: dateAdded });
  if (sleepDataExists) {
    res.status(400).json({ success: false, message: "Sleep data already exists" });
    return;
  }

  //create sleep in DB
  const sleep = await Sleep.create({
    email: lowerCaseEmail, 
    sleepHour, 
    bedHour, 
    sleepMinute, 
    bedMinute, 
    dateAdded 
  });

  if (sleep) {
    res.status(201).json({
      sucess: true,
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
    res.status(400).json({ sucess: false, message: "Sleep data is invalid" });
  }
};

//gets sleep data based on email and date
//only gets the first one
const getSleepData = async (req, res) => { 
  const { email, dateAdded } = req.params;

  try {
      const sleepData = await Sleep.findOne({email: email, dateAdded: dateAdded});
      
      res.status(200).json({sucess: true, message: "Success in getting sleep data", sleepData});
  } catch (error) {
      res.status(404).json({ success: false, message: "Error in getting sleep data" });
  }
}

//gets all sleep data for specified user
const getAllUserSleepData = async (req, res) => {  
  const { email } = req.params;
  try {
      const allUserSleepDatas = await Sleep.find({email: email}).sort({ _id: -1 });

      res.status(200).json({sucess: true, message: "Success in getting all sleep data of user", allUserSleepDatas});
  } catch (error) {    
      res.status(404).json({ message: error.message });
  }
}

//update and edit selected sleep data based on email and date
const updateSleepData = async (req, res) => {
  const { email: email, dateAdded: dateAdded } = req.params
  const client = req.body

  try {
    const updatedSleepData = await Sleep.findOneAndUpdate({email: email, dateAdded: dateAdded}, {...client}, { new: true})
    if (updatedSleepData) {
      res.status(200).json({sucess: true, message: "Success in editing sleep data", updatedSleepData});
    } else {
      res.status(400).json({ success: false, message: "Was not able to find appropriate sleep data to edit" });
      return;
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

//deletes selected sleep data based on email and date
const deleteSleepData = async (req, res) => {
  const { email: email, dateAdded: dateAdded } = req.params

  try {
    const deletedSleepData = await Sleep.findOneAndRemove({email: email, dateAdded: dateAdded})
    if (deletedSleepData) {
      res.status(200).json({sucess: true, message: "Success in deleting sleep data", deletedSleepData});
    } else {
      res.status(400).json({ success: false, message: "Was not able to delete slected sleep data" });
      return;
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
module.exports = { addSleepData, getSleepData, getAllUserSleepData, updateSleepData, deleteSleepData };
