const Exercise = require("../models/exerciseModel");

//adds an exercise/workout for specified user
const addExerciseData = async (req, res) => {
  const { email, name, sets, repititions, weight, dateAdded } = req.body;
  let lowerCaseEmail = email.toLowerCase();
  let capitalizedName = name.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  //check that all fields are filled in
  if (!capitalizedName || !sets || !repititions || !weight || !lowerCaseEmail || !dateAdded) {
    res
      .status(400)
      .json({ success: false, message: "Please fill in all fields for adding exercise" });
    return;
  }

  const exerciseDataExists = await Exercise.findOne({ email: lowerCaseEmail, dateAdded: dateAdded, name: capitalizedName });
  if (exerciseDataExists) {
    res.status(400).json({ success: false, message: "Exercise data already exists" });
    return;
  }

  //create sleep in DB
  const exercise = await Exercise.create({
    email: lowerCaseEmail, 
    name: capitalizedName, 
    sets, 
    repititions, 
    weight, 
    dateAdded 
  });

  if (exercise) {
    res.status(201).json({
      sucess: true,
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
    res.status(400).json({ sucess: false, message: "Exercise data is invalid" });
  }
};

//gets exercise list for given user and date
const getExerciseList = async (req, res) => { 
  const { email, dateAdded } = req.params;

  try {
      const exerciseList = await Exercise.find({email: email, dateAdded: dateAdded});
      
      res.status(200).json({sucess: true, message: "Success in getting exercise list", exerciseList});
  } catch (error) {
      res.status(404).json({ success: false, message: "Error in getting exercise list" });
  }
}

//gets specific exercise data based on email, name and date
//only gets one value
const getExerciseData = async (req, res) => {  
    const { email, name, dateAdded } = req.params;

    try {
        const exerciseData = await Exercise.findOne({email: email, name: name, dateAdded: dateAdded});
        res.status(200).json({sucess: true, message: "Success in getting exercise data", exerciseData});
    } catch (error) {
        res.status(404).json({ success: false, message: "Error in getting exercise data" });
    }
}

//update and edit selected exercise data based on email, name and date
const updateExerciseData = async (req, res) => {
  const { email: email, dateAdded: dateAdded, name: name } = req.params
  const client = req.body

  try {
    const updatedExerciseData = await Exercise.findOneAndUpdate({email: email, dateAdded: dateAdded, name: name}, {...client}, { new: true})
    if (updatedExerciseData) {
      res.status(200).json({sucess: true, message: "Success in editing exercise data", updatedExerciseData});
    } else {
      res.status(400).json({ success: false, message: "Was not able to find appropriate exercise data to edit" });
      return;
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

//deletes selected exercise data based on email, name and date
const deleteExerciseData = async (req, res) => {
  const { email: email, dateAdded: dateAdded, name: name } = req.params

  try {
    const deletedExerciseData = await Exercise.findOneAndRemove({email: email, dateAdded: dateAdded, name: name})
    if (deletedExerciseData) {
      res.status(200).json({sucess: true, message: "Success in deleting exercise data", deletedExerciseData});
    } else {
      res.status(400).json({ success: false, message: "Was not able to delete slected exercise data" });
      return;
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
module.exports = { addExerciseData, updateExerciseData, deleteExerciseData, getExerciseList, getExerciseData };
