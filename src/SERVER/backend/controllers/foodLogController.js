const FoodLog = require("../models/foodLogModel");

//adds sleep data for specified user
const addMeal = async (req, res) => {
  const { email: email, foodDate: foodDate } = req.params
  let lowerCaseEmail = email.toLowerCase();
  foodName = keyWord = req.query.foodName;
  //check that all fields are filled in
  if (!lowerCaseEmail || !foodName || !foodDate) {
    res
      .status(400)
      .json({ success: false, message: "Name, email, and date required to save meal." });
    return;
  }

  const mealDataExists = await FoodLog.findOne({ email: lowerCaseEmail, foodDate: foodDate, foodName: foodName });
  if (mealDataExists) {
    res.status(400).json({ success: false, message: "Meal with inputted name already exists" });
    return;
  }
  try {
    const meal = await FoodLog.create({
      foodName: foodName,
      calories: req.query.calories,
      carbs: req.query.carbs,  
      fats: req.query.fats, 
      protein: req.query.protein, 
      foodDate: new Date(foodDate),
      email: lowerCaseEmail});

      if (meal) {
        res.status(201).json({
          sucess: true,
          message: "Meal successfully added",
          _id: meal.id,
          foodName: meal.foodName,
          calories: meal.calories,
          carbs: meal.carbs,  
          fats: meal.fats, 
          protein: meal.protein, 
          foodDate: meal.foodDate,
          email: meal.email
        });
      }
    
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }

};

const getFoodLog = async (req, res) => { 
  const { email: email, foodDate: foodDate } = req.params
  let lowerCaseEmail = email.toLowerCase();
  try {
    if (!lowerCaseEmail || !foodDate) {
      res
        .status(400)
        .json({ success: false, message: "Email and date required" });
      return;
    }
  
      const foodLog = await FoodLog.find({email: lowerCaseEmail, foodDate: foodDate});
      let carbs = 0;
      let fat = 0;
      let protein = 0;
      let calories = 0;

      for (let i = 0; i < foodLog.length; i++){
        if(foodLog[i].calories){
          calories += foodLog[i].calories;
        }
        if(foodLog[i].protein){
          protein += foodLog[i].protein;
        }
        if(foodLog[i].fat){
          fat += foodLog[i].fat;
        }
        if(foodLog[i].carbs){
          carbs += foodLog[i].carbs;
        }
      }
      
      res.status(200).json({success: true, message: "Success in getting food log", foodLog, calories, carbs, protein, fat});
  } catch (error) {
      res.status(404).json({ success: false, message: "Error in getting food log" });
  }
}

const updateMeal = async (req, res) => {
  const { email: email, foodDate: foodDate } = req.params
  let lowerCaseEmail = email.toLowerCase();
  foodName = keyWord = req.query.foodName;
  //check that all fields are filled in
  if (!lowerCaseEmail || !foodName || !foodDate) {
    res
      .status(400)
      .json({ success: false, message: "Name, email, and date required to update meal." });
    return;
  }
  
  try {
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
    res.status(404).json({ message: error.message });
  }
}
module.exports = { addMeal, getFoodLog, updateMeal, deleteMeal };
