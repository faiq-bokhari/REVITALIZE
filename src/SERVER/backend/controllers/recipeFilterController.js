const axios = require("axios");
const RECIPE_API = 'https://api.edamam.com/api/recipes/v2?type=public&random=true&app_id=2c93d30b&app_key=a82873062815465cd567e4189e4ae30d';
const FilterRecipe = async (req, res) => { 
  // /recipefilter?keyWord=pasta&health=pork-free;red-meat-free&diets=low-sodium;low-fat&calories=500-1000&fat=40&carbs=190-500&protein=50
  keyWord = '&q=' + req.query.keyWord;

  health = '';
  if(req.query.health != undefined){
    health_array = req.query.health.split(";");
    for (let i = 0; i < health_array.length; i++) {
      health += '&health=' + health_array[i];
    }
  }

  diets = '';
  if(req.query.diets != undefined){
    diets_array = req.query.diets.split(";");
    for (let i = 0; i < diets_array.length; i++) {
      diets += '&diet=' + diets_array[i];
    }
  }

  calories = '';
  if(req.query.calories != undefined){
    calories += '&calories=' + req.query.calories
  }

  queryString = RECIPE_API + keyWord + health + diets + calories
  try {
      const response = await axios.get(queryString);
      console.log(response);
      payLoad = [];
      for (let i = 0; i < response.data.hits.length; i++) {
        ings = [];

        for (let i = 0; i < response.data.hits[i].recipe.ingredients.length; i++){
          ingObj = {
            text: response.data.hits[i].recipe.ingredients[i].text,
            image: response.data.hits[i].recipe.ingredients[i].image
          }
          ings.push(ingObj)
        }

        resObj = {
          'label': response.data.hits[i].recipe.label,
          'image': response.data.hits[i].recipe.images.THUMBNAIL.url,
          'url': response.data.hits[i].recipe.url,
          'ingredients': ings,
          'calories': response.data.hits[i].recipe.calories,
          'protein': response.data.hits[i].recipe.totalNutrients.FAT.quantity,
          'fat': response.data.hits[i].recipe.totalNutrients.PROCNT.quantity,
          'carbs': response.data.hits[i].recipe.totalNutrients.CHOCDF.quantity,
        }
        payLoad.push(resObj)
      }
      res.json(payLoad);
      // res.json({qs: queryString, data: response.data.hits});
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}
module.exports = { FilterRecipe };