/*
Author: Hasan Kibria
Date Started: Approx Nov 15, 2023
*/
const FoodLog = require("../models/foodLog.model");

const addMeal = async (req, res) => {
  const { email: email } = req.params;
  let lowerCaseEmail = email.toLowerCase();
  
  // check that all fields are filled in
  if (!lowerCaseEmail || !req.body.foodName || !req.body.calories || !req.body.carbs || !req.body.fats || !req.body.protein || !req.body.foodDate) {
    res.status(400).json({ success: false, message: "All fields are required." });
    return;
  }
  
  // create new food log
  const newFoodLog = new FoodLog({
    email: lowerCaseEmail,
    foodName: req.body.foodName,
    calories: req.body.calories,
    carbs: req.body.carbs,
    fats: req.body.fats,
    protein: req.body.protein,
    foodDate: new Date(req.body.foodDate)
  });
  
  try {
    // save the new food log to the database
    const savedFoodLog = await newFoodLog.save();
    res.status(201).json({ success: true, message: "Success in adding meal.", savedFoodLog });
  } catch (error) {
    res.status(409).json({ success: false, message: "Error in adding meal." });
  }
}

const getFoodLog = async (req, res) => {
  const { email: email } = req.params;
  let lowerCaseEmail = email.toLowerCase();
  
  try {
    // retrieve all food logs for this user
    const foodLog = await FoodLog.find({ email: lowerCaseEmail }).sort({ foodDate: -1 }).exec();
    
    // calculate total calories, protein, fats, and carbs for all meals
    let calories = 0, protein = 0, fats = 0, carbs = 0;
    for (let i = 0; i < foodLog.length; i++){
      if(foodLog[i].calories){
        calories += foodLog[i].calories;
      }
      if(foodLog[i].protein){
        protein += foodLog[i].protein;
      }
      if(foodLog[i].fats){
        fats += foodLog[i].fats;
      }
      if(foodLog[i].carbs){
        carbs += foodLog[i].carbs;
      }
    }
    
    // send the response with all food logs and totals
    res.status(200).json({ success: true, message: "Success in getting food log", foodLog, calories, carbs, protein, fats });
  } catch (error) {
    res.status(404).json({ success: false, message: "Error in getting food log" });
  }
}

const updateMeal = async (req, res) => {
  const { email: email, foodDate: foodDate } = req.params
  let lowerCaseEmail = email.toLowerCase();
  foodName = keyWord = req.query.foodName;
  
  // check that all fields are filled in
  if (!lowerCaseEmail || !foodName || !foodDate) {
    res.status(400).json({ success: false, message: "Name, email, and date required to update meal." });
    return;
  }
  
  try {
    // update the specified meal
    const update = {
      foodName: foodName,
      calories: req.query.calories,
      carbs: req.query.carbs,
      fats: req.query.fats,
      protein: req.query.protein,
      foodDate: new Date(foodDate),
      email: lowerCaseEmail}
    const updatedMeal = await FoodLog.findOneAndUpdate({ email: lowerCaseEmail, foodDate: foodDate, foodName: foodName }, update, { returnOriginal: false})
    res.status(200).json({sucess: true, message: "Success in updating meal", updatedMeal});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
// delete meal
const deleteMeal = async (req, res) => {
  const { email: email, foodDate: foodDate } = req.params
  let lowerCaseEmail = email.toLowerCase();
  foodName = keyWord = req.query.foodName;
  //check that all fields are filled in
  if (!lowerCaseEmail || !foodName || !foodDate) {
    res
      .status(400)
      .json({ success: false, message: "Name, email, and date required to delete meal." });
    return;
  }

  try {
    const deletedMeal = await FoodLog.findOneAndRemove({email: lowerCaseEmail, foodDate: foodDate, foodName: foodName})
    res.status(200).json({success: true, message: "Success in deleting meal", deletedMeal});
  } catch (error) {
    res.status(404).json({ message: "Unable to delete."});
  }
}
module.exports = { addMeal, getFoodLog, updateMeal, deleteMeal };
