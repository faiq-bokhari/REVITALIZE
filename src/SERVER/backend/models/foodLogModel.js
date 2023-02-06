import mongoose from 'mongoose'

const foodLogSchema = mongoose.Schema({
    foodName: String,
    foodCalories: Number,
    foodCarbs: Number,
    foodFats: Number,
    foodProtein: Number,
    foodDate: Date
})

const FoodLog = mongoose.model('FoodLog', foodLogSchema)

export default FoodLog

// now do recipe filter one, and try to make and api call td