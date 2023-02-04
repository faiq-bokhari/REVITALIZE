const express = require("express");
const router = express.Router();
const { addSleepData, getSleepData, getAllUserSleepData, updateSleepData, deleteSleepData } = require("../controllers/sleepController");

router.post("/", addSleepData);
router.get("/:email/:dateAdded", getSleepData);
router.get("/:email", getAllUserSleepData);
router.patch("/:email/:dateAdded", updateSleepData);
router.delete("/:email/:dateAdded", deleteSleepData);
module.exports = router;
