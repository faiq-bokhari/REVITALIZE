/*
Author: Hasan Kibria
Date Started: Approx January 2nd, 2023
*/

// routes for food logs
const express = require("express");
const router = express.Router();
const { addMeal, getFoodLog, updateMeal, deleteMeal } = require("../controllers/foodLogController"); // import controller functions for food log

// set up routes with corresponding controller functions
router.post("/:email/:foodDate", addMeal); // add meal log route
router.get("/:email/:foodDate", getFoodLog); // get food log route
router.patch("/:email/:foodDate", updateMeal); // update meal log route
router.delete("/:email/:foodDate", deleteMeal); // delete meal log route

module.exports = router; // export router object to be used in main server file
