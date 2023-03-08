const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMyInfo,
} = require("../controllers/userController");
const { protect } = require("../middleware/protect");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMyInfo);
module.exports = router;
