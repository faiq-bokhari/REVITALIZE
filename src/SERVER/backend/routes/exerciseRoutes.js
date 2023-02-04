const express = require("express");
const router = express.Router();
const { addExerciseData, updateExerciseData, deleteExerciseData, getExerciseList, getExerciseData } = require("../controllers/exerciseController");

router.post("/", addExerciseData);
router.get("/:email/:dateAdded", getExerciseList);
router.get("/:email/:name/:dateAdded", getExerciseData);
router.patch("/:email/:name/:dateAdded", updateExerciseData);
router.delete("/:email/:name/:dateAdded", deleteExerciseData);
module.exports = router;
