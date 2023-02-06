const express = require("express");
const router = express.Router();
const { FilterRecipe } = require("../controllers/recipeFilterController");

router.get("/", FilterRecipe);
module.exports = router;
// this get call will return a paginated recipeSearchResultModel as the response after fetching info