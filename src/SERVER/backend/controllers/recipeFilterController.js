/*
Author: Hasan Kibria
Date Started: Approx Nov 15, 2023
*/

// Import the axios library
const axios = require("axios");

// Define the API endpoint to retrieve a random recipe
const RECIPE_API = 'https://api.edamam.com/api/recipes/v2?type=public&random=true&app_id=2c93d30b&app_key=a82873062815465cd567e4189e4ae30d';

// Define the async function that filters recipes based on various parameters
const FilterRecipe = async (req, res) => { 

  // Retrieve the key word from the request query and add it to the API endpoint
  keyWord = '&q=' + req.query.keyWord;

  // Retrieve the health labels from the request query and add them to the API endpoint
  health = '';
  if(req.query.health != undefined){
    health_array = req.query.health.split(";");
    for (let i = 0; i < health_array.length; i++) {
      health += '&health=' + health_array[i];
    }
  }

  // Retrieve the diets from the request query and add them to the API endpoint
  diets = '';
  if(req.query.diets != undefined){
    diets_array = req.query.diets.split(";");
    for (let i = 0; i < diets_array.length; i++) {
      diets += '&diet=' + diets_array[i];
    }
  }

  // Retrieve the calories range from the request query and add it to the API endpoint
  calories = '';
  if(req.query.calories != undefined){
    calories += '&calories=' + req.query.calories
  }

  // Build the final query string by concatenating all the parameters with the API endpoint
  queryString = RECIPE_API + keyWord + health + diets + calories

  try {
      // Send the HTTP request to the API endpoint using axios
      const response = await axios.get(queryString);

      // Parse the response data and extract the relevant information for each recipe
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

      // Send the filtered recipe information as a JSON response
      res.json(payLoad);

      // Uncomment the following line to debug and see the query string and response data
      // res.json({qs: queryString, data: response.data.hits});

  } catch (error) {
      // If an error occurs, send a 409 error response with the error message
      res.status(409).json({ message: error.message });
  }
}

// Export the FilterRecipe function for use in other modules
module.exports = { FilterRecipe }; 