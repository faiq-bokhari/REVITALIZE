const mongoose = require("mongoose");

const foodLogSchema = mongoose.Schema({
    foodName: {
      type: String,
      required: [true, "Add a  name."],
    },
    calories: Number,
    carbs: Number,
    fats: Number,
    protein: Number,
    foodDate: {
      type: Date,
      required: [true, "Provide date for food entry"],
    },
    email: {
      type: String, 
      required: [true, "Add an email"], 
    },
})

module.exports = mongoose.model("FoodLog", foodLogSchema);
