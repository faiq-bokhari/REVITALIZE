import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import { useState } from 'react';


const RecipeListScreen=({navigation})=>{

    const [currentRecipe, setCurrentRecipe] = useState('');

    const recipelist = {
        "q": "pasta",
        "from": 0,
        "to": 3,
        "more": true,
        "count": 4585,
        "hits": [
            {
                "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_09b4dbdf0c7244c462a4d2622d88958e",
                    "label": "Pasta Frittata Recipe",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/5a5/5a5220b7a65c911a1480502ed0532b5c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDtz8Cq%2BpxcOUy7vMc9EAhjo1pSw2RpF3B73RyZKP9qhQIhAIgi%2BSJ1vxoUYxpRsQqcHDLrs3vqCALAGJtJOuniWRhnKtUECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2Igz9inwJF%2BklvFWNYbwqqQT1V6yk2Sd9lKyy%2FZemcKObyWiVjsqnvzEy%2FBQ7Eyvvd5xMo%2F%2BEKQ7itMy6AJfS5tA9ZjKC0iRDpgxxaTXqDvGNoIldYuM5S7WxV%2B4kqAuY9MHKnZkJCGwX5CJva7KOfIklqbj7HGqlKq1jXZUtT5iF3PQ9Bxg8g4JOIQRAOrRDusTzYrmq1PWrdxedRiXROEXsjuvHiuhcYtSyvSJpL6VX9XJnw65WanpZwoWwSFzK7c3Ox6sHch0KwpW0x5ymrd%2FNLv4aEVkk6rD8S6hm09GqrNSMmUV7Wq510tpBJma5WZTJIauLsGjwXfKCtqm%2FS8AjUx18YHtA6bMzIDvFbO7T0EzQIpPUz5S1fSsX82SFWElxrqPUpircAsM7Hx%2BRze%2BfDF0F3XJp60qfN7U038Ih4piovKh%2BoA%2BcnsDOEg2%2Fp9Ze9ykHCbqbmQ2WLeFwFtJ7G03HnuDCnlr2UXvSJwva%2BvucIXFXtz1M%2F3YgZzcRyhdCy97PlA4VYYxWx8oLVITZYjMklX09sXW4uOteRMq6ACQPi9enfIe4gvVmJ0Cnzlek1ziUjcM92DciYp%2BdmaT16uBxIYNSbL5zDhv5tkeIiNxtbEVCGPOuYIaxvcIDcfQpRgnTVseNK4CFOYwzahlrwjEJbu%2B3%2FMMhlIVCgmjKAytmKf10WOrZcZUg%2BxSKDCX8h4KTmyqQ9XuBehiolMWZdI3gCLKYkqHLVxmtRZvN1u7iMnX1o9MBMP3Q%2BZsGOqgBPkLJJEXPMuE%2Fk0CcEj3is%2BnKowXQ47dEbOsnNVvHBrPkPe5TzhMRLgHf%2FAocp9cR8Tf3k2kDGIQKJGWdID1UNlRxazITxRcMWTZ6cQYQtkCzwTjLKbeLA06MxEc2eCP9Z%2B0%2B1wI%2BlaEBa5mZkV6m6jyHqFbrDhKTEjjfOyOr2qEzNbLYcy3fll7bF1gsFg3aAl61Hq%2BqJTK5FIMD3vZ5Eazw1Am9tpLB&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221123T193039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBYZJTYOK%2F20221123%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f6a55edbe0da7aaa8c67fa904d9c4bbe407d61eb329d625969115dc4c7d6c773",
                    "source": "Food Republic",
                    "url": "http://www.foodrepublic.com/2012/01/21/pasta-frittata-recipe",
                    "shareAs": "http://www.edamam.com/recipe/pasta-frittata-recipe-09b4dbdf0c7244c462a4d2622d88958e/pasta/591-722-cal",
                    "yield": 2.0,
                    "dietLabels": [
                        "Balanced",
                        "Low-Sodium"
                    ],
                    "healthLabels": [
                        "Sugar-Conscious",
                        "Vegetarian",
                        "Pescatarian",
                        "Peanut-Free",
                        "Tree-Nut-Free",
                        "Soy-Free",
                        "Fish-Free",
                        "Shellfish-Free",
                        "Pork-Free",
                        "Red-Meat-Free",
                        "Crustacean-Free",
                        "Celery-Free",
                        "Mustard-Free",
                        "Sesame-Free",
                        "Lupine-Free",
                        "Mollusk-Free",
                        "Alcohol-Free",
                        "Sulfite-Free",
                        "Kosher"
                    ],
                    "cautions": [],
                    "ingredientLines": [
                        "2 cups leftover pasta",
                        "4 eggs beaten",
                        "2 tablespoons butter",
                        "1/2 cup whichever cheese the pasta called for"
                    ],
                    "ingredients": [
                        {
                            "text": "2 cups leftover pasta",
                            "quantity": 2.0,
                            "measure": "cup",
                            "food": "pasta",
                            "weight": 210.0,
                            "foodCategory": "grains",
                            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                        },
                        {
                            "text": "4 eggs beaten",
                            "quantity": 4.0,
                            "measure": "<unit>",
                            "food": "eggs",
                            "weight": 172.0,
                            "foodCategory": "Eggs",
                            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                        },
                        {
                            "text": "2 tablespoons butter",
                            "quantity": 2.0,
                            "measure": "tablespoon",
                            "food": "butter",
                            "weight": 28.4,
                            "foodCategory": "Dairy",
                            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                        },
                        {
                            "text": "1/2 cup whichever cheese the pasta called for",
                            "quantity": 0.5,
                            "measure": "cup",
                            "food": "pasta",
                            "weight": 52.5,
                            "foodCategory": "grains",
                            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                        }
                    ],
                    "calories": 1423.463,
                    "totalWeight": 462.9,
                    "totalTime": 0.0,
                    "cuisineType": [
                        "italian"
                    ],
                    "mealType": [
                        "lunch/dinner"
                    ],
                    "dishType": [
                        "main course",
                        "egg"
                    ],
                    "totalNutrients": {
                        "ENERC_KCAL": {
                            "label": "Energy",
                            "quantity": 1423.463,
                            "unit": "kcal"
                        },
                        "FAT": {
                            "label": "Fat",
                            "quantity": 43.35619,
                            "unit": "g"
                        },
                        "FASAT": {
                            "label": "Saturated",
                            "quantity": 20.692356999999998,
                            "unit": "g"
                        },
                        "FATRN": {
                            "label": "Trans",
                            "quantity": 0.9963119999999999,
                            "unit": "g"
                        },
                        "FAMS": {
                            "label": "Monounsaturated",
                            "quantity": 12.710598999999998,
                            "unit": "g"
                        },
                        "FAPU": {
                            "label": "Polyunsaturated",
                            "quantity": 5.631632,
                            "unit": "g"
                        },
                        "CHOCDF": {
                            "label": "Carbs",
                            "quantity": 197.26419000000004,
                            "unit": "g"
                        },
                        "CHOCDF.net": {
                            "label": "Carbohydrates (net)",
                            "quantity": 188.86419000000004,
                            "unit": "g"
                        },
                        "FIBTG": {
                            "label": "Fiber",
                            "quantity": 8.4,
                            "unit": "g"
                        },
                        "SUGAR": {
                            "label": "Sugars",
                            "quantity": 7.66219,
                            "unit": "g"
                        },
                        "SUGAR.added": {
                            "label": "Sugars, added",
                            "quantity": 0.0,
                            "unit": "g"
                        },
                        "PROCNT": {
                            "label": "Protein",
                            "quantity": 56.074600000000004,
                            "unit": "g"
                        },
                        "CHOLE": {
                            "label": "Cholesterol",
                            "quantity": 700.9,
                            "unit": "mg"
                        },
                        "NA": {
                            "label": "Sodium",
                            "quantity": 263.11400000000003,
                            "unit": "mg"
                        },
                        "CA": {
                            "label": "Calcium",
                            "quantity": 158.261,
                            "unit": "mg"
                        },
                        "MG": {
                            "label": "Magnesium",
                            "quantity": 160.33300000000003,
                            "unit": "mg"
                        },
                        "K": {
                            "label": "Potassium",
                            "quantity": 829.551,
                            "unit": "mg"
                        },
                        "FE": {
                            "label": "Iron",
                            "quantity": 6.42818,
                            "unit": "mg"
                        },
                        "ZN": {
                            "label": "Zinc",
                            "quantity": 5.945609999999999,
                            "unit": "mg"
                        },
                        "P": {
                            "label": "Phosphorus",
                            "quantity": 843.5010000000001,
                            "unit": "mg"
                        },
                        "VITA_RAE": {
                            "label": "Vitamin A",
                            "quantity": 469.45599999999996,
                            "unit": "µg"
                        },
                        "VITC": {
                            "label": "Vitamin C",
                            "quantity": 0.0,
                            "unit": "mg"
                        },
                        "THIA": {
                            "label": "Thiamin (B1)",
                            "quantity": 0.30647,
                            "unit": "mg"
                        },
                        "RIBF": {
                            "label": "Riboflavin (B2)",
                            "quantity": 0.953196,
                            "unit": "mg"
                        },
                        "NIA": {
                            "label": "Niacin (B3)",
                            "quantity": 4.603428,
                            "unit": "mg"
                        },
                        "VITB6A": {
                            "label": "Vitamin B6",
                            "quantity": 0.666002,
                            "unit": "mg"
                        },
                        "FOLDFE": {
                            "label": "Folate equivalent (total)",
                            "quantity": 128.942,
                            "unit": "µg"
                        },
                        "FOLFD": {
                            "label": "Folate (food)",
                            "quantity": 128.942,
                            "unit": "µg"
                        },
                        "FOLAC": {
                            "label": "Folic acid",
                            "quantity": 0.0,
                            "unit": "µg"
                        },
                        "VITB12": {
                            "label": "Vitamin B12",
                            "quantity": 1.57908,
                            "unit": "µg"
                        },
                        "VITD": {
                            "label": "Vitamin D",
                            "quantity": 3.8659999999999997,
                            "unit": "µg"
                        },
                        "TOCPHA": {
                            "label": "Vitamin E",
                            "quantity": 2.75363,
                            "unit": "mg"
                        },
                        "VITK1": {
                            "label": "Vitamin K",
                            "quantity": 2.7664999999999997,
                            "unit": "µg"
                        },
                        "Sugar.alcohol": {
                            "label": "Sugar alcohol",
                            "quantity": 0.0,
                            "unit": "g"
                        },
                        "WATER": {
                            "label": "Water",
                            "quantity": 162.06045999999998,
                            "unit": "g"
                        }
                    },
                    "totalDaily": {
                        "ENERC_KCAL": {
                            "label": "Energy",
                            "quantity": 71.17314999999999,
                            "unit": "%"
                        },
                        "FAT": {
                            "label": "Fat",
                            "quantity": 66.70183076923077,
                            "unit": "%"
                        },
                        "FASAT": {
                            "label": "Saturated",
                            "quantity": 103.46178499999999,
                            "unit": "%"
                        },
                        "CHOCDF": {
                            "label": "Carbs",
                            "quantity": 65.75473000000002,
                            "unit": "%"
                        },
                        "FIBTG": {
                            "label": "Fiber",
                            "quantity": 33.6,
                            "unit": "%"
                        },
                        "PROCNT": {
                            "label": "Protein",
                            "quantity": 112.14920000000001,
                            "unit": "%"
                        },
                        "CHOLE": {
                            "label": "Cholesterol",
                            "quantity": 233.63333333333333,
                            "unit": "%"
                        },
                        "NA": {
                            "label": "Sodium",
                            "quantity": 10.963083333333334,
                            "unit": "%"
                        },
                        "CA": {
                            "label": "Calcium",
                            "quantity": 15.8261,
                            "unit": "%"
                        },
                        "MG": {
                            "label": "Magnesium",
                            "quantity": 38.17452380952382,
                            "unit": "%"
                        },
                        "K": {
                            "label": "Potassium",
                            "quantity": 17.650021276595744,
                            "unit": "%"
                        },
                        "FE": {
                            "label": "Iron",
                            "quantity": 35.71211111111111,
                            "unit": "%"
                        },
                        "ZN": {
                            "label": "Zinc",
                            "quantity": 54.050999999999995,
                            "unit": "%"
                        },
                        "P": {
                            "label": "Phosphorus",
                            "quantity": 120.50014285714286,
                            "unit": "%"
                        },
                        "VITA_RAE": {
                            "label": "Vitamin A",
                            "quantity": 52.16177777777778,
                            "unit": "%"
                        },
                        "VITC": {
                            "label": "Vitamin C",
                            "quantity": 0.0,
                            "unit": "%"
                        },
                        "THIA": {
                            "label": "Thiamin (B1)",
                            "quantity": 25.53916666666667,
                            "unit": "%"
                        },
                        "RIBF": {
                            "label": "Riboflavin (B2)",
                            "quantity": 73.32276923076924,
                            "unit": "%"
                        },
                        "NIA": {
                            "label": "Niacin (B3)",
                            "quantity": 28.771425,
                            "unit": "%"
                        },
                        "VITB6A": {
                            "label": "Vitamin B6",
                            "quantity": 51.23092307692308,
                            "unit": "%"
                        },
                        "FOLDFE": {
                            "label": "Folate equivalent (total)",
                            "quantity": 32.2355,
                            "unit": "%"
                        },
                        "VITB12": {
                            "label": "Vitamin B12",
                            "quantity": 65.79500000000002,
                            "unit": "%"
                        },
                        "VITD": {
                            "label": "Vitamin D",
                            "quantity": 25.77333333333333,
                            "unit": "%"
                        },
                        "TOCPHA": {
                            "label": "Vitamin E",
                            "quantity": 18.357533333333333,
                            "unit": "%"
                        },
                        "VITK1": {
                            "label": "Vitamin K",
                            "quantity": 2.3054166666666664,
                            "unit": "%"
                        }
                    },
                    "digest": [
                        {
                            "label": "Fat",
                            "tag": "FAT",
                            "schemaOrgTag": "fatContent",
                            "total": 43.35619,
                            "hasRDI": true,
                            "daily": 66.70183076923077,
                            "unit": "g",
                            "sub": [
                                {
                                    "label": "Saturated",
                                    "tag": "FASAT",
                                    "schemaOrgTag": "saturatedFatContent",
                                    "total": 20.692356999999998,
                                    "hasRDI": true,
                                    "daily": 103.46178499999999,
                                    "unit": "g"
                                },
                                {
                                    "label": "Trans",
                                    "tag": "FATRN",
                                    "schemaOrgTag": "transFatContent",
                                    "total": 0.9963119999999999,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Monounsaturated",
                                    "tag": "FAMS",
                                    "schemaOrgTag": null,
                                    "total": 12.710598999999998,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Polyunsaturated",
                                    "tag": "FAPU",
                                    "schemaOrgTag": null,
                                    "total": 5.631632,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                }
                            ]
                        },
                        {
                            "label": "Carbs",
                            "tag": "CHOCDF",
                            "schemaOrgTag": "carbohydrateContent",
                            "total": 197.26419000000004,
                            "hasRDI": true,
                            "daily": 65.75473000000002,
                            "unit": "g",
                            "sub": [
                                {
                                    "label": "Carbs (net)",
                                    "tag": "CHOCDF.net",
                                    "schemaOrgTag": null,
                                    "total": 188.86419000000004,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Fiber",
                                    "tag": "FIBTG",
                                    "schemaOrgTag": "fiberContent",
                                    "total": 8.4,
                                    "hasRDI": true,
                                    "daily": 33.6,
                                    "unit": "g"
                                },
                                {
                                    "label": "Sugars",
                                    "tag": "SUGAR",
                                    "schemaOrgTag": "sugarContent",
                                    "total": 7.66219,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Sugars, added",
                                    "tag": "SUGAR.added",
                                    "schemaOrgTag": null,
                                    "total": 0.0,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                }
                            ]
                        },
                        {
                            "label": "Protein",
                            "tag": "PROCNT",
                            "schemaOrgTag": "proteinContent",
                            "total": 56.074600000000004,
                            "hasRDI": true,
                            "daily": 112.14920000000001,
                            "unit": "g"
                        },
                        {
                            "label": "Cholesterol",
                            "tag": "CHOLE",
                            "schemaOrgTag": "cholesterolContent",
                            "total": 700.9,
                            "hasRDI": true,
                            "daily": 233.63333333333333,
                            "unit": "mg"
                        },
                        {
                            "label": "Sodium",
                            "tag": "NA",
                            "schemaOrgTag": "sodiumContent",
                            "total": 263.11400000000003,
                            "hasRDI": true,
                            "daily": 10.963083333333334,
                            "unit": "mg"
                        },
                        {
                            "label": "Calcium",
                            "tag": "CA",
                            "schemaOrgTag": null,
                            "total": 158.261,
                            "hasRDI": true,
                            "daily": 15.8261,
                            "unit": "mg"
                        },
                        {
                            "label": "Magnesium",
                            "tag": "MG",
                            "schemaOrgTag": null,
                            "total": 160.33300000000003,
                            "hasRDI": true,
                            "daily": 38.17452380952382,
                            "unit": "mg"
                        },
                        {
                            "label": "Potassium",
                            "tag": "K",
                            "schemaOrgTag": null,
                            "total": 829.551,
                            "hasRDI": true,
                            "daily": 17.650021276595744,
                            "unit": "mg"
                        },
                        {
                            "label": "Iron",
                            "tag": "FE",
                            "schemaOrgTag": null,
                            "total": 6.42818,
                            "hasRDI": true,
                            "daily": 35.71211111111111,
                            "unit": "mg"
                        },
                        {
                            "label": "Zinc",
                            "tag": "ZN",
                            "schemaOrgTag": null,
                            "total": 5.945609999999999,
                            "hasRDI": true,
                            "daily": 54.050999999999995,
                            "unit": "mg"
                        },
                        {
                            "label": "Phosphorus",
                            "tag": "P",
                            "schemaOrgTag": null,
                            "total": 843.5010000000001,
                            "hasRDI": true,
                            "daily": 120.50014285714286,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin A",
                            "tag": "VITA_RAE",
                            "schemaOrgTag": null,
                            "total": 469.45599999999996,
                            "hasRDI": true,
                            "daily": 52.16177777777778,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin C",
                            "tag": "VITC",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": true,
                            "daily": 0.0,
                            "unit": "mg"
                        },
                        {
                            "label": "Thiamin (B1)",
                            "tag": "THIA",
                            "schemaOrgTag": null,
                            "total": 0.30647,
                            "hasRDI": true,
                            "daily": 25.53916666666667,
                            "unit": "mg"
                        },
                        {
                            "label": "Riboflavin (B2)",
                            "tag": "RIBF",
                            "schemaOrgTag": null,
                            "total": 0.953196,
                            "hasRDI": true,
                            "daily": 73.32276923076924,
                            "unit": "mg"
                        },
                        {
                            "label": "Niacin (B3)",
                            "tag": "NIA",
                            "schemaOrgTag": null,
                            "total": 4.603428,
                            "hasRDI": true,
                            "daily": 28.771425,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin B6",
                            "tag": "VITB6A",
                            "schemaOrgTag": null,
                            "total": 0.666002,
                            "hasRDI": true,
                            "daily": 51.23092307692308,
                            "unit": "mg"
                        },
                        {
                            "label": "Folate equivalent (total)",
                            "tag": "FOLDFE",
                            "schemaOrgTag": null,
                            "total": 128.942,
                            "hasRDI": true,
                            "daily": 32.2355,
                            "unit": "µg"
                        },
                        {
                            "label": "Folate (food)",
                            "tag": "FOLFD",
                            "schemaOrgTag": null,
                            "total": 128.942,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "µg"
                        },
                        {
                            "label": "Folic acid",
                            "tag": "FOLAC",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin B12",
                            "tag": "VITB12",
                            "schemaOrgTag": null,
                            "total": 1.57908,
                            "hasRDI": true,
                            "daily": 65.79500000000002,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin D",
                            "tag": "VITD",
                            "schemaOrgTag": null,
                            "total": 3.8659999999999997,
                            "hasRDI": true,
                            "daily": 25.77333333333333,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin E",
                            "tag": "TOCPHA",
                            "schemaOrgTag": null,
                            "total": 2.75363,
                            "hasRDI": true,
                            "daily": 18.357533333333333,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin K",
                            "tag": "VITK1",
                            "schemaOrgTag": null,
                            "total": 2.7664999999999997,
                            "hasRDI": true,
                            "daily": 2.3054166666666664,
                            "unit": "µg"
                        },
                        {
                            "label": "Sugar alcohols",
                            "tag": "Sugar.alcohol",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        },
                        {
                            "label": "Water",
                            "tag": "WATER",
                            "schemaOrgTag": null,
                            "total": 162.06045999999998,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        }
                    ]
                }
            },
            {
                "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_f4ce5814f10c79bf856f7d40b2bade83",
                    "label": "Pesto Pasta Salad",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/210/2106c43a5c9be95afb2a432cc5c42a54.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDtz8Cq%2BpxcOUy7vMc9EAhjo1pSw2RpF3B73RyZKP9qhQIhAIgi%2BSJ1vxoUYxpRsQqcHDLrs3vqCALAGJtJOuniWRhnKtUECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2Igz9inwJF%2BklvFWNYbwqqQT1V6yk2Sd9lKyy%2FZemcKObyWiVjsqnvzEy%2FBQ7Eyvvd5xMo%2F%2BEKQ7itMy6AJfS5tA9ZjKC0iRDpgxxaTXqDvGNoIldYuM5S7WxV%2B4kqAuY9MHKnZkJCGwX5CJva7KOfIklqbj7HGqlKq1jXZUtT5iF3PQ9Bxg8g4JOIQRAOrRDusTzYrmq1PWrdxedRiXROEXsjuvHiuhcYtSyvSJpL6VX9XJnw65WanpZwoWwSFzK7c3Ox6sHch0KwpW0x5ymrd%2FNLv4aEVkk6rD8S6hm09GqrNSMmUV7Wq510tpBJma5WZTJIauLsGjwXfKCtqm%2FS8AjUx18YHtA6bMzIDvFbO7T0EzQIpPUz5S1fSsX82SFWElxrqPUpircAsM7Hx%2BRze%2BfDF0F3XJp60qfN7U038Ih4piovKh%2BoA%2BcnsDOEg2%2Fp9Ze9ykHCbqbmQ2WLeFwFtJ7G03HnuDCnlr2UXvSJwva%2BvucIXFXtz1M%2F3YgZzcRyhdCy97PlA4VYYxWx8oLVITZYjMklX09sXW4uOteRMq6ACQPi9enfIe4gvVmJ0Cnzlek1ziUjcM92DciYp%2BdmaT16uBxIYNSbL5zDhv5tkeIiNxtbEVCGPOuYIaxvcIDcfQpRgnTVseNK4CFOYwzahlrwjEJbu%2B3%2FMMhlIVCgmjKAytmKf10WOrZcZUg%2BxSKDCX8h4KTmyqQ9XuBehiolMWZdI3gCLKYkqHLVxmtRZvN1u7iMnX1o9MBMP3Q%2BZsGOqgBPkLJJEXPMuE%2Fk0CcEj3is%2BnKowXQ47dEbOsnNVvHBrPkPe5TzhMRLgHf%2FAocp9cR8Tf3k2kDGIQKJGWdID1UNlRxazITxRcMWTZ6cQYQtkCzwTjLKbeLA06MxEc2eCP9Z%2B0%2B1wI%2BlaEBa5mZkV6m6jyHqFbrDhKTEjjfOyOr2qEzNbLYcy3fll7bF1gsFg3aAl61Hq%2BqJTK5FIMD3vZ5Eazw1Am9tpLB&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221123T193039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBYZJTYOK%2F20221123%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a4590031bee07908fef481910737cd9f1aef7ca48ab752a78ccef3bfbbdaa673",
                    "source": "Martha Stewart",
                    "url": "https://www.marthastewart.com/1155049/pesto-pasta-salad",
                    "shareAs": "http://www.edamam.com/recipe/pesto-pasta-salad-f4ce5814f10c79bf856f7d40b2bade83/pasta/591-722-cal",
                    "yield": 4.0,
                    "dietLabels": [
                        "Balanced"
                    ],
                    "healthLabels": [
                        "Sugar-Conscious",
                        "Vegetarian",
                        "Pescatarian",
                        "Mediterranean",
                        "Egg-Free",
                        "Peanut-Free",
                        "Soy-Free",
                        "Fish-Free",
                        "Shellfish-Free",
                        "Pork-Free",
                        "Red-Meat-Free",
                        "Crustacean-Free",
                        "Celery-Free",
                        "Mustard-Free",
                        "Sesame-Free",
                        "Lupine-Free",
                        "Mollusk-Free",
                        "Alcohol-Free",
                        "Sulfite-Free",
                        "Kosher"
                    ],
                    "cautions": [
                        "FODMAP"
                    ],
                    "ingredientLines": [
                        "Coarse salt",
                        "1 pound orecchiette pasta",
                        "1 cup store-bought basil pesto (8 ounces)"
                    ],
                    "ingredients": [
                        {
                            "text": "Coarse salt",
                            "quantity": 0.0,
                            "measure": null,
                            "food": "Coarse salt",
                            "weight": 4.08233133,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                        },
                        {
                            "text": "1 pound orecchiette pasta",
                            "quantity": 1.0,
                            "measure": "pound",
                            "food": "pasta",
                            "weight": 453.59237,
                            "foodCategory": "grains",
                            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                        },
                        {
                            "text": "1 cup store-bought basil pesto (8 ounces)",
                            "quantity": 8.0,
                            "measure": "ounce",
                            "food": "basil pesto",
                            "weight": 226.796185,
                            "foodCategory": "condiments and sauces",
                            "foodId": "food_amlzb2yam5vuysaaikhe3a68ojnn",
                            "image": "https://www.edamam.com/food-img/6e3/6e3933ee3f66304462b42f766329633c.jpg"
                        }
                    ],
                    "calories": 2437.116128205618,
                    "totalWeight": 680.388555,
                    "totalTime": 0.0,
                    "cuisineType": [
                        "italian"
                    ],
                    "mealType": [
                        "lunch/dinner"
                    ],
                    "dishType": [
                        "salad"
                    ],
                    "totalNutrients": {
                        "ENERC_KCAL": {
                            "label": "Energy",
                            "quantity": 2437.116128205618,
                            "unit": "kcal"
                        },
                        "FAT": {
                            "label": "Fat",
                            "quantity": 78.20085355104496,
                            "unit": "g"
                        },
                        "FASAT": {
                            "label": "Saturated",
                            "quantity": 10.812469895798879,
                            "unit": "g"
                        },
                        "FATRN": {
                            "label": "Trans",
                            "quantity": 0.0,
                            "unit": "g"
                        },
                        "FAMS": {
                            "label": "Monounsaturated",
                            "quantity": 0.7756429527000002,
                            "unit": "g"
                        },
                        "FAPU": {
                            "label": "Polyunsaturated",
                            "quantity": 2.5582609668000003,
                            "unit": "g"
                        },
                        "CHOCDF": {
                            "label": "Carbs",
                            "quantity": 356.5353248700113,
                            "unit": "g"
                        },
                        "CHOCDF.net": {
                            "label": "Carbohydrates (net)",
                            "quantity": 338.19796141765175,
                            "unit": "g"
                        },
                        "FIBTG": {
                            "label": "Fiber",
                            "quantity": 18.337363452359554,
                            "unit": "g"
                        },
                        "SUGAR": {
                            "label": "Sugars",
                            "quantity": 12.110916279000001,
                            "unit": "g"
                        },
                        "SUGAR.added": {
                            "label": "Sugars, added",
                            "quantity": 0.0,
                            "unit": "g"
                        },
                        "PROCNT": {
                            "label": "Protein",
                            "quantity": 70.48825429800002,
                            "unit": "g"
                        },
                        "CHOLE": {
                            "label": "Cholesterol",
                            "quantity": 17.83790219101124,
                            "unit": "mg"
                        },
                        "NA": {
                            "label": "Sodium",
                            "quantity": 2295.1773922,
                            "unit": "mg"
                        },
                        "CA": {
                            "label": "Calcium",
                            "quantity": 473.6727513235956,
                            "unit": "mg"
                        },
                        "MG": {
                            "label": "Magnesium",
                            "quantity": 240.40395610000002,
                            "unit": "mg"
                        },
                        "K": {
                            "label": "Potassium",
                            "quantity": 1011.5109851000001,
                            "unit": "mg"
                        },
                        "FE": {
                            "label": "Iron",
                            "quantity": 11.630312228539328,
                            "unit": "mg"
                        },
                        "ZN": {
                            "label": "Zinc",
                            "quantity": 6.395652417000001,
                            "unit": "mg"
                        },
                        "P": {
                            "label": "Phosphorus",
                            "quantity": 857.2895793000001,
                            "unit": "mg"
                        },
                        "VITA_RAE": {
                            "label": "Vitamin A",
                            "quantity": 0.0,
                            "unit": "µg"
                        },
                        "VITC": {
                            "label": "Vitamin C",
                            "quantity": 0.0,
                            "unit": "mg"
                        },
                        "THIA": {
                            "label": "Thiamin (B1)",
                            "quantity": 0.408233133,
                            "unit": "mg"
                        },
                        "RIBF": {
                            "label": "Riboflavin (B2)",
                            "quantity": 0.27215542200000004,
                            "unit": "mg"
                        },
                        "NIA": {
                            "label": "Niacin (B3)",
                            "quantity": 7.71107029,
                            "unit": "mg"
                        },
                        "VITB6A": {
                            "label": "Vitamin B6",
                            "quantity": 0.6441011654000001,
                            "unit": "mg"
                        },
                        "FOLDFE": {
                            "label": "Folate equivalent (total)",
                            "quantity": 81.6466266,
                            "unit": "µg"
                        },
                        "FOLFD": {
                            "label": "Folate (food)",
                            "quantity": 81.6466266,
                            "unit": "µg"
                        },
                        "FOLAC": {
                            "label": "Folic acid",
                            "quantity": 0.0,
                            "unit": "µg"
                        },
                        "VITB12": {
                            "label": "Vitamin B12",
                            "quantity": 0.0,
                            "unit": "µg"
                        },
                        "VITD": {
                            "label": "Vitamin D",
                            "quantity": 0.0,
                            "unit": "µg"
                        },
                        "TOCPHA": {
                            "label": "Vitamin E",
                            "quantity": 0.4989516070000001,
                            "unit": "mg"
                        },
                        "VITK1": {
                            "label": "Vitamin K",
                            "quantity": 0.4535923700000001,
                            "unit": "µg"
                        },
                        "Sugar.alcohol": {
                            "label": "Sugar alcohol",
                            "quantity": 0.0,
                            "unit": "g"
                        },
                        "WATER": {
                            "label": "Water",
                            "quantity": 44.905644630000005,
                            "unit": "g"
                        }
                    },
                    "totalDaily": {
                        "ENERC_KCAL": {
                            "label": "Energy",
                            "quantity": 121.85580641028092,
                            "unit": "%"
                        },
                        "FAT": {
                            "label": "Fat",
                            "quantity": 120.3090054631461,
                            "unit": "%"
                        },
                        "FASAT": {
                            "label": "Saturated",
                            "quantity": 54.06234947899439,
                            "unit": "%"
                        },
                        "CHOCDF": {
                            "label": "Carbs",
                            "quantity": 118.84510829000378,
                            "unit": "%"
                        },
                        "FIBTG": {
                            "label": "Fiber",
                            "quantity": 73.34945380943822,
                            "unit": "%"
                        },
                        "PROCNT": {
                            "label": "Protein",
                            "quantity": 140.97650859600003,
                            "unit": "%"
                        },
                        "CHOLE": {
                            "label": "Cholesterol",
                            "quantity": 5.945967397003747,
                            "unit": "%"
                        },
                        "NA": {
                            "label": "Sodium",
                            "quantity": 95.63239134166668,
                            "unit": "%"
                        },
                        "CA": {
                            "label": "Calcium",
                            "quantity": 47.36727513235956,
                            "unit": "%"
                        },
                        "MG": {
                            "label": "Magnesium",
                            "quantity": 57.23903716666668,
                            "unit": "%"
                        },
                        "K": {
                            "label": "Potassium",
                            "quantity": 21.521510321276597,
                            "unit": "%"
                        },
                        "FE": {
                            "label": "Iron",
                            "quantity": 64.61284571410738,
                            "unit": "%"
                        },
                        "ZN": {
                            "label": "Zinc",
                            "quantity": 58.14229470000001,
                            "unit": "%"
                        },
                        "P": {
                            "label": "Phosphorus",
                            "quantity": 122.46993990000003,
                            "unit": "%"
                        },
                        "VITA_RAE": {
                            "label": "Vitamin A",
                            "quantity": 0.0,
                            "unit": "%"
                        },
                        "VITC": {
                            "label": "Vitamin C",
                            "quantity": 0.0,
                            "unit": "%"
                        },
                        "THIA": {
                            "label": "Thiamin (B1)",
                            "quantity": 34.019427750000006,
                            "unit": "%"
                        },
                        "RIBF": {
                            "label": "Riboflavin (B2)",
                            "quantity": 20.935032461538466,
                            "unit": "%"
                        },
                        "NIA": {
                            "label": "Niacin (B3)",
                            "quantity": 48.1941893125,
                            "unit": "%"
                        },
                        "VITB6A": {
                            "label": "Vitamin B6",
                            "quantity": 49.546243492307696,
                            "unit": "%"
                        },
                        "FOLDFE": {
                            "label": "Folate equivalent (total)",
                            "quantity": 20.41165665,
                            "unit": "%"
                        },
                        "VITB12": {
                            "label": "Vitamin B12",
                            "quantity": 0.0,
                            "unit": "%"
                        },
                        "VITD": {
                            "label": "Vitamin D",
                            "quantity": 0.0,
                            "unit": "%"
                        },
                        "TOCPHA": {
                            "label": "Vitamin E",
                            "quantity": 3.326344046666667,
                            "unit": "%"
                        },
                        "VITK1": {
                            "label": "Vitamin K",
                            "quantity": 0.3779936416666667,
                            "unit": "%"
                        }
                    },
                    "digest": [
                        {
                            "label": "Fat",
                            "tag": "FAT",
                            "schemaOrgTag": "fatContent",
                            "total": 78.20085355104496,
                            "hasRDI": true,
                            "daily": 120.3090054631461,
                            "unit": "g",
                            "sub": [
                                {
                                    "label": "Saturated",
                                    "tag": "FASAT",
                                    "schemaOrgTag": "saturatedFatContent",
                                    "total": 10.812469895798879,
                                    "hasRDI": true,
                                    "daily": 54.06234947899439,
                                    "unit": "g"
                                },
                                {
                                    "label": "Trans",
                                    "tag": "FATRN",
                                    "schemaOrgTag": "transFatContent",
                                    "total": 0.0,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Monounsaturated",
                                    "tag": "FAMS",
                                    "schemaOrgTag": null,
                                    "total": 0.7756429527000002,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Polyunsaturated",
                                    "tag": "FAPU",
                                    "schemaOrgTag": null,
                                    "total": 2.5582609668000003,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                }
                            ]
                        },
                        {
                            "label": "Carbs",
                            "tag": "CHOCDF",
                            "schemaOrgTag": "carbohydrateContent",
                            "total": 356.5353248700113,
                            "hasRDI": true,
                            "daily": 118.84510829000378,
                            "unit": "g",
                            "sub": [
                                {
                                    "label": "Carbs (net)",
                                    "tag": "CHOCDF.net",
                                    "schemaOrgTag": null,
                                    "total": 338.19796141765175,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Fiber",
                                    "tag": "FIBTG",
                                    "schemaOrgTag": "fiberContent",
                                    "total": 18.337363452359554,
                                    "hasRDI": true,
                                    "daily": 73.34945380943822,
                                    "unit": "g"
                                },
                                {
                                    "label": "Sugars",
                                    "tag": "SUGAR",
                                    "schemaOrgTag": "sugarContent",
                                    "total": 12.110916279000001,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Sugars, added",
                                    "tag": "SUGAR.added",
                                    "schemaOrgTag": null,
                                    "total": 0.0,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                }
                            ]
                        },
                        {
                            "label": "Protein",
                            "tag": "PROCNT",
                            "schemaOrgTag": "proteinContent",
                            "total": 70.48825429800002,
                            "hasRDI": true,
                            "daily": 140.97650859600003,
                            "unit": "g"
                        },
                        {
                            "label": "Cholesterol",
                            "tag": "CHOLE",
                            "schemaOrgTag": "cholesterolContent",
                            "total": 17.83790219101124,
                            "hasRDI": true,
                            "daily": 5.945967397003747,
                            "unit": "mg"
                        },
                        {
                            "label": "Sodium",
                            "tag": "NA",
                            "schemaOrgTag": "sodiumContent",
                            "total": 2295.1773922,
                            "hasRDI": true,
                            "daily": 95.63239134166668,
                            "unit": "mg"
                        },
                        {
                            "label": "Calcium",
                            "tag": "CA",
                            "schemaOrgTag": null,
                            "total": 473.6727513235956,
                            "hasRDI": true,
                            "daily": 47.36727513235956,
                            "unit": "mg"
                        },
                        {
                            "label": "Magnesium",
                            "tag": "MG",
                            "schemaOrgTag": null,
                            "total": 240.40395610000002,
                            "hasRDI": true,
                            "daily": 57.23903716666668,
                            "unit": "mg"
                        },
                        {
                            "label": "Potassium",
                            "tag": "K",
                            "schemaOrgTag": null,
                            "total": 1011.5109851000001,
                            "hasRDI": true,
                            "daily": 21.521510321276597,
                            "unit": "mg"
                        },
                        {
                            "label": "Iron",
                            "tag": "FE",
                            "schemaOrgTag": null,
                            "total": 11.630312228539328,
                            "hasRDI": true,
                            "daily": 64.61284571410738,
                            "unit": "mg"
                        },
                        {
                            "label": "Zinc",
                            "tag": "ZN",
                            "schemaOrgTag": null,
                            "total": 6.395652417000001,
                            "hasRDI": true,
                            "daily": 58.14229470000001,
                            "unit": "mg"
                        },
                        {
                            "label": "Phosphorus",
                            "tag": "P",
                            "schemaOrgTag": null,
                            "total": 857.2895793000001,
                            "hasRDI": true,
                            "daily": 122.46993990000003,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin A",
                            "tag": "VITA_RAE",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": true,
                            "daily": 0.0,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin C",
                            "tag": "VITC",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": true,
                            "daily": 0.0,
                            "unit": "mg"
                        },
                        {
                            "label": "Thiamin (B1)",
                            "tag": "THIA",
                            "schemaOrgTag": null,
                            "total": 0.408233133,
                            "hasRDI": true,
                            "daily": 34.019427750000006,
                            "unit": "mg"
                        },
                        {
                            "label": "Riboflavin (B2)",
                            "tag": "RIBF",
                            "schemaOrgTag": null,
                            "total": 0.27215542200000004,
                            "hasRDI": true,
                            "daily": 20.935032461538466,
                            "unit": "mg"
                        },
                        {
                            "label": "Niacin (B3)",
                            "tag": "NIA",
                            "schemaOrgTag": null,
                            "total": 7.71107029,
                            "hasRDI": true,
                            "daily": 48.1941893125,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin B6",
                            "tag": "VITB6A",
                            "schemaOrgTag": null,
                            "total": 0.6441011654000001,
                            "hasRDI": true,
                            "daily": 49.546243492307696,
                            "unit": "mg"
                        },
                        {
                            "label": "Folate equivalent (total)",
                            "tag": "FOLDFE",
                            "schemaOrgTag": null,
                            "total": 81.6466266,
                            "hasRDI": true,
                            "daily": 20.41165665,
                            "unit": "µg"
                        },
                        {
                            "label": "Folate (food)",
                            "tag": "FOLFD",
                            "schemaOrgTag": null,
                            "total": 81.6466266,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "µg"
                        },
                        {
                            "label": "Folic acid",
                            "tag": "FOLAC",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin B12",
                            "tag": "VITB12",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": true,
                            "daily": 0.0,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin D",
                            "tag": "VITD",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": true,
                            "daily": 0.0,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin E",
                            "tag": "TOCPHA",
                            "schemaOrgTag": null,
                            "total": 0.4989516070000001,
                            "hasRDI": true,
                            "daily": 3.326344046666667,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin K",
                            "tag": "VITK1",
                            "schemaOrgTag": null,
                            "total": 0.4535923700000001,
                            "hasRDI": true,
                            "daily": 0.3779936416666667,
                            "unit": "µg"
                        },
                        {
                            "label": "Sugar alcohols",
                            "tag": "Sugar.alcohol",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        },
                        {
                            "label": "Water",
                            "tag": "WATER",
                            "schemaOrgTag": null,
                            "total": 44.905644630000005,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        }
                    ]
                }
            },
            {
                "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_26e2eab39a77d8e899a1cc5347aec52e",
                    "label": "Pasta con Ceci (pasta with chickpeas)",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/a33/a332121eaa60a84c93174a5ee54e06b2.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDtz8Cq%2BpxcOUy7vMc9EAhjo1pSw2RpF3B73RyZKP9qhQIhAIgi%2BSJ1vxoUYxpRsQqcHDLrs3vqCALAGJtJOuniWRhnKtUECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2Igz9inwJF%2BklvFWNYbwqqQT1V6yk2Sd9lKyy%2FZemcKObyWiVjsqnvzEy%2FBQ7Eyvvd5xMo%2F%2BEKQ7itMy6AJfS5tA9ZjKC0iRDpgxxaTXqDvGNoIldYuM5S7WxV%2B4kqAuY9MHKnZkJCGwX5CJva7KOfIklqbj7HGqlKq1jXZUtT5iF3PQ9Bxg8g4JOIQRAOrRDusTzYrmq1PWrdxedRiXROEXsjuvHiuhcYtSyvSJpL6VX9XJnw65WanpZwoWwSFzK7c3Ox6sHch0KwpW0x5ymrd%2FNLv4aEVkk6rD8S6hm09GqrNSMmUV7Wq510tpBJma5WZTJIauLsGjwXfKCtqm%2FS8AjUx18YHtA6bMzIDvFbO7T0EzQIpPUz5S1fSsX82SFWElxrqPUpircAsM7Hx%2BRze%2BfDF0F3XJp60qfN7U038Ih4piovKh%2BoA%2BcnsDOEg2%2Fp9Ze9ykHCbqbmQ2WLeFwFtJ7G03HnuDCnlr2UXvSJwva%2BvucIXFXtz1M%2F3YgZzcRyhdCy97PlA4VYYxWx8oLVITZYjMklX09sXW4uOteRMq6ACQPi9enfIe4gvVmJ0Cnzlek1ziUjcM92DciYp%2BdmaT16uBxIYNSbL5zDhv5tkeIiNxtbEVCGPOuYIaxvcIDcfQpRgnTVseNK4CFOYwzahlrwjEJbu%2B3%2FMMhlIVCgmjKAytmKf10WOrZcZUg%2BxSKDCX8h4KTmyqQ9XuBehiolMWZdI3gCLKYkqHLVxmtRZvN1u7iMnX1o9MBMP3Q%2BZsGOqgBPkLJJEXPMuE%2Fk0CcEj3is%2BnKowXQ47dEbOsnNVvHBrPkPe5TzhMRLgHf%2FAocp9cR8Tf3k2kDGIQKJGWdID1UNlRxazITxRcMWTZ6cQYQtkCzwTjLKbeLA06MxEc2eCP9Z%2B0%2B1wI%2BlaEBa5mZkV6m6jyHqFbrDhKTEjjfOyOr2qEzNbLYcy3fll7bF1gsFg3aAl61Hq%2BqJTK5FIMD3vZ5Eazw1Am9tpLB&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221123T193039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBYZJTYOK%2F20221123%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=137a306abd46620a3584370debb3e28ebf7f817b1ba9c6f988a6301f1f62cf53",
                    "source": "Food52",
                    "url": "https://food52.com/recipes/11912-pasta-con-ceci-pasta-with-chickpeas",
                    "shareAs": "http://www.edamam.com/recipe/pasta-con-ceci-pasta-with-chickpeas-26e2eab39a77d8e899a1cc5347aec52e/pasta/591-722-cal",
                    "yield": 8.0,
                    "dietLabels": [
                        "High-Fiber",
                        "Low-Fat"
                    ],
                    "healthLabels": [
                        "Vegan",
                        "Vegetarian",
                        "Pescatarian",
                        "Mediterranean",
                        "Dairy-Free",
                        "Egg-Free",
                        "Peanut-Free",
                        "Tree-Nut-Free",
                        "Soy-Free",
                        "Fish-Free",
                        "Shellfish-Free",
                        "Pork-Free",
                        "Red-Meat-Free",
                        "Crustacean-Free",
                        "Celery-Free",
                        "Mustard-Free",
                        "Sesame-Free",
                        "Lupine-Free",
                        "Mollusk-Free",
                        "Alcohol-Free",
                        "Sulfite-Free",
                        "Kosher"
                    ],
                    "cautions": [],
                    "ingredientLines": [
                        "2 pounds dry chickpeas",
                        "1 pound pasta mista (see introduction)",
                        "oilve oil, extra virgin",
                        "1 bunch parsley, chopped",
                        "salt and pepper",
                        "baking soda"
                    ],
                    "ingredients": [
                        {
                            "text": "2 pounds dry chickpeas",
                            "quantity": 2.0,
                            "measure": "pound",
                            "food": "chickpeas",
                            "weight": 907.18474,
                            "foodCategory": "plant-based protein",
                            "foodId": "food_baux5rqbkto336asd7w3lbbi1koo",
                            "image": "https://www.edamam.com/food-img/520/520c62055515f730b8947e0e445fd2be.jpg"
                        },
                        {
                            "text": "1 pound pasta mista (see introduction)",
                            "quantity": 1.0,
                            "measure": "pound",
                            "food": "pasta",
                            "weight": 453.59237,
                            "foodCategory": "grains",
                            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                        },
                        {
                            "text": "oilve oil, extra virgin",
                            "quantity": 0.0,
                            "measure": null,
                            "food": "oil",
                            "weight": 19.322568695999998,
                            "foodCategory": "Oils",
                            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
                            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
                        },
                        {
                            "text": "1 bunch parsley, chopped",
                            "quantity": 1.0,
                            "measure": "bunch",
                            "food": "parsley",
                            "weight": 60.0,
                            "foodCategory": "vegetables",
                            "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
                            "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
                        },
                        {
                            "text": "salt and pepper",
                            "quantity": 0.0,
                            "measure": null,
                            "food": "salt",
                            "weight": 8.52466266,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                        },
                        {
                            "text": "salt and pepper",
                            "quantity": 0.0,
                            "measure": null,
                            "food": "pepper",
                            "weight": 4.26233133,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                        },
                        {
                            "text": "baking soda",
                            "quantity": 0.0,
                            "measure": null,
                            "food": "baking soda",
                            "weight": 6.535574706,
                            "foodCategory": "condiments and sauces",
                            "foodId": "food_asa4cjoa3lmt8ibwdg0cpblheo69",
                            "image": "https://www.edamam.com/food-img/7e5/7e55e4482cc2fde91f427fc568e6f5b8.jpeg"
                        }
                    ],
                    "calories": 5315.095968810941,
                    "totalWeight": 1454.2685216475143,
                    "totalTime": 0.0,
                    "cuisineType": [
                        "french"
                    ],
                    "mealType": [
                        "lunch/dinner"
                    ],
                    "dishType": [
                        "main course"
                    ],
                    "totalNutrients": {
                        "ENERC_KCAL": {
                            "label": "Energy",
                            "quantity": 5315.095968810941,
                            "unit": "kcal"
                        },
                        "FAT": {
                            "label": "Fat",
                            "quantity": 81.57872378035802,
                            "unit": "g"
                        },
                        "FASAT": {
                            "label": "Saturated",
                            "quantity": 8.288413683674003,
                            "unit": "g"
                        },
                        "FATRN": {
                            "label": "Trans",
                            "quantity": 0.0763241463492,
                            "unit": "g"
                        },
                        "FAMS": {
                            "label": "Monounsaturated",
                            "quantity": 25.70262401910966,
                            "unit": "g"
                        },
                        "FAPU": {
                            "label": "Polyunsaturated",
                            "quantity": 32.88817156530172,
                            "unit": "g"
                        },
                        "CHOCDF": {
                            "label": "Carbs",
                            "quantity": 916.2939773945352,
                            "unit": "g"
                        },
                        "CHOCDF.net": {
                            "label": "Carbohydrates (net)",
                            "quantity": 788.0441134480452,
                            "unit": "g"
                        },
                        "FIBTG": {
                            "label": "Fiber",
                            "quantity": 128.24986394649,
                            "unit": "g"
                        },
                        "SUGAR": {
                            "label": "Sugars",
                            "quantity": 109.71696237951203,
                            "unit": "g"
                        },
                        "SUGAR.added": {
                            "label": "Sugars, added",
                            "quantity": 0.0,
                            "unit": "g"
                        },
                        "PROCNT": {
                            "label": "Protein",
                            "quantity": 247.07401755118704,
                            "unit": "g"
                        },
                        "CHOLE": {
                            "label": "Cholesterol",
                            "quantity": 0.0,
                            "unit": "mg"
                        },
                        "NA": {
                            "label": "Sodium",
                            "quantity": 3374.0333153425718,
                            "unit": "mg"
                        },
                        "CA": {
                            "label": "Calcium",
                            "quantity": 714.8408521516234,
                            "unit": "mg"
                        },
                        "MG": {
                            "label": "Magnesium",
                            "quantity": 994.4021966434552,
                            "unit": "mg"
                        },
                        "K": {
                            "label": "Potassium",
                            "quantity": 7914.413476628942,
                            "unit": "mg"
                        },
                        "FE": {
                            "label": "Iron",
                            "quantity": 49.14135956796419,
                            "unit": "mg"
                        },
                        "ZN": {
                            "label": "Zinc",
                            "quantity": 32.13004392074252,
                            "unit": "mg"
                        },
                        "P": {
                            "label": "Phosphorus",
                            "quantity": 3184.9296076014007,
                            "unit": "mg"
                        },
                        "VITA_RAE": {
                            "label": "Vitamin A",
                            "quantity": 280.9663716591,
                            "unit": "µg"
                        },
                        "VITC": {
                            "label": "Vitamin C",
                            "quantity": 116.0873896,
                            "unit": "mg"
                        },
                        "THIA": {
                            "label": "Thiamin (B1)",
                            "quantity": 4.7917076606364,
                            "unit": "mg"
                        },
                        "RIBF": {
                            "label": "Riboflavin (B2)",
                            "quantity": 2.2618592671940005,
                            "unit": "mg"
                        },
                        "NIA": {
                            "label": "Niacin (B3)",
                            "quantity": 22.527305580501903,
                            "unit": "mg"
                        },
                        "VITB6A": {
                            "label": "Vitamin B6",
                            "quantity": 5.563942908570302,
                            "unit": "mg"
                        },
                        "FOLDFE": {
                            "label": "Folate equivalent (total)",
                            "quantity": 5226.5902247261,
                            "unit": "µg"
                        },
                        "FOLFD": {
                            "label": "Folate (food)",
                            "quantity": 5226.5902247261,
                            "unit": "µg"
                        },
                        "FOLAC": {
                            "label": "Folic acid",
                            "quantity": 0.0,
                            "unit": "µg"
                        },
                        "VITB12": {
                            "label": "Vitamin B12",
                            "quantity": 0.0,
                            "unit": "µg"
                        },
                        "VITD": {
                            "label": "Vitamin D",
                            "quantity": 0.0,
                            "unit": "µg"
                        },
                        "TOCPHA": {
                            "label": "Vitamin E",
                            "quantity": 11.8059152151536,
                            "unit": "mg"
                        },
                        "VITK1": {
                            "label": "Vitamin K",
                            "quantity": 1086.854646837458,
                            "unit": "µg"
                        },
                        "Sugar.alcohol": {
                            "label": "Sugar alcohol",
                            "quantity": 0.0,
                            "unit": "g"
                        },
                        "WATER": {
                            "label": "Water",
                            "quantity": 167.75433216896107,
                            "unit": "g"
                        }
                    },
                    "totalDaily": {
                        "ENERC_KCAL": {
                            "label": "Energy",
                            "quantity": 265.754798440547,
                            "unit": "%"
                        },
                        "FAT": {
                            "label": "Fat",
                            "quantity": 125.50572889285849,
                            "unit": "%"
                        },
                        "FASAT": {
                            "label": "Saturated",
                            "quantity": 41.44206841837001,
                            "unit": "%"
                        },
                        "CHOCDF": {
                            "label": "Carbs",
                            "quantity": 305.4313257981784,
                            "unit": "%"
                        },
                        "FIBTG": {
                            "label": "Fiber",
                            "quantity": 512.99945578596,
                            "unit": "%"
                        },
                        "PROCNT": {
                            "label": "Protein",
                            "quantity": 494.148035102374,
                            "unit": "%"
                        },
                        "CHOLE": {
                            "label": "Cholesterol",
                            "quantity": 0.0,
                            "unit": "%"
                        },
                        "NA": {
                            "label": "Sodium",
                            "quantity": 140.58472147260716,
                            "unit": "%"
                        },
                        "CA": {
                            "label": "Calcium",
                            "quantity": 71.48408521516234,
                            "unit": "%"
                        },
                        "MG": {
                            "label": "Magnesium",
                            "quantity": 236.76242777225124,
                            "unit": "%"
                        },
                        "K": {
                            "label": "Potassium",
                            "quantity": 168.39177609848812,
                            "unit": "%"
                        },
                        "FE": {
                            "label": "Iron",
                            "quantity": 273.0075531553566,
                            "unit": "%"
                        },
                        "ZN": {
                            "label": "Zinc",
                            "quantity": 292.09130837038657,
                            "unit": "%"
                        },
                        "P": {
                            "label": "Phosphorus",
                            "quantity": 454.98994394305726,
                            "unit": "%"
                        },
                        "VITA_RAE": {
                            "label": "Vitamin A",
                            "quantity": 31.2184857399,
                            "unit": "%"
                        },
                        "VITC": {
                            "label": "Vitamin C",
                            "quantity": 128.98598844444444,
                            "unit": "%"
                        },
                        "THIA": {
                            "label": "Thiamin (B1)",
                            "quantity": 399.3089717197,
                            "unit": "%"
                        },
                        "RIBF": {
                            "label": "Riboflavin (B2)",
                            "quantity": 173.98917439953848,
                            "unit": "%"
                        },
                        "NIA": {
                            "label": "Niacin (B3)",
                            "quantity": 140.7956598781369,
                            "unit": "%"
                        },
                        "VITB6A": {
                            "label": "Vitamin B6",
                            "quantity": 427.9956083515616,
                            "unit": "%"
                        },
                        "FOLDFE": {
                            "label": "Folate equivalent (total)",
                            "quantity": 1306.647556181525,
                            "unit": "%"
                        },
                        "VITB12": {
                            "label": "Vitamin B12",
                            "quantity": 0.0,
                            "unit": "%"
                        },
                        "VITD": {
                            "label": "Vitamin D",
                            "quantity": 0.0,
                            "unit": "%"
                        },
                        "TOCPHA": {
                            "label": "Vitamin E",
                            "quantity": 78.70610143435734,
                            "unit": "%"
                        },
                        "VITK1": {
                            "label": "Vitamin K",
                            "quantity": 905.7122056978817,
                            "unit": "%"
                        }
                    },
                    "digest": [
                        {
                            "label": "Fat",
                            "tag": "FAT",
                            "schemaOrgTag": "fatContent",
                            "total": 81.57872378035802,
                            "hasRDI": true,
                            "daily": 125.50572889285849,
                            "unit": "g",
                            "sub": [
                                {
                                    "label": "Saturated",
                                    "tag": "FASAT",
                                    "schemaOrgTag": "saturatedFatContent",
                                    "total": 8.288413683674003,
                                    "hasRDI": true,
                                    "daily": 41.44206841837001,
                                    "unit": "g"
                                },
                                {
                                    "label": "Trans",
                                    "tag": "FATRN",
                                    "schemaOrgTag": "transFatContent",
                                    "total": 0.0763241463492,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Monounsaturated",
                                    "tag": "FAMS",
                                    "schemaOrgTag": null,
                                    "total": 25.70262401910966,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Polyunsaturated",
                                    "tag": "FAPU",
                                    "schemaOrgTag": null,
                                    "total": 32.88817156530172,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                }
                            ]
                        },
                        {
                            "label": "Carbs",
                            "tag": "CHOCDF",
                            "schemaOrgTag": "carbohydrateContent",
                            "total": 916.2939773945352,
                            "hasRDI": true,
                            "daily": 305.4313257981784,
                            "unit": "g",
                            "sub": [
                                {
                                    "label": "Carbs (net)",
                                    "tag": "CHOCDF.net",
                                    "schemaOrgTag": null,
                                    "total": 788.0441134480452,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Fiber",
                                    "tag": "FIBTG",
                                    "schemaOrgTag": "fiberContent",
                                    "total": 128.24986394649,
                                    "hasRDI": true,
                                    "daily": 512.99945578596,
                                    "unit": "g"
                                },
                                {
                                    "label": "Sugars",
                                    "tag": "SUGAR",
                                    "schemaOrgTag": "sugarContent",
                                    "total": 109.71696237951203,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Sugars, added",
                                    "tag": "SUGAR.added",
                                    "schemaOrgTag": null,
                                    "total": 0.0,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                }
                            ]
                        },
                        {
                            "label": "Protein",
                            "tag": "PROCNT",
                            "schemaOrgTag": "proteinContent",
                            "total": 247.07401755118704,
                            "hasRDI": true,
                            "daily": 494.148035102374,
                            "unit": "g"
                        },
                        {
                            "label": "Cholesterol",
                            "tag": "CHOLE",
                            "schemaOrgTag": "cholesterolContent",
                            "total": 0.0,
                            "hasRDI": true,
                            "daily": 0.0,
                            "unit": "mg"
                        },
                        {
                            "label": "Sodium",
                            "tag": "NA",
                            "schemaOrgTag": "sodiumContent",
                            "total": 3374.0333153425718,
                            "hasRDI": true,
                            "daily": 140.58472147260716,
                            "unit": "mg"
                        },
                        {
                            "label": "Calcium",
                            "tag": "CA",
                            "schemaOrgTag": null,
                            "total": 714.8408521516234,
                            "hasRDI": true,
                            "daily": 71.48408521516234,
                            "unit": "mg"
                        },
                        {
                            "label": "Magnesium",
                            "tag": "MG",
                            "schemaOrgTag": null,
                            "total": 994.4021966434552,
                            "hasRDI": true,
                            "daily": 236.76242777225124,
                            "unit": "mg"
                        },
                        {
                            "label": "Potassium",
                            "tag": "K",
                            "schemaOrgTag": null,
                            "total": 7914.413476628942,
                            "hasRDI": true,
                            "daily": 168.39177609848812,
                            "unit": "mg"
                        },
                        {
                            "label": "Iron",
                            "tag": "FE",
                            "schemaOrgTag": null,
                            "total": 49.14135956796419,
                            "hasRDI": true,
                            "daily": 273.0075531553566,
                            "unit": "mg"
                        },
                        {
                            "label": "Zinc",
                            "tag": "ZN",
                            "schemaOrgTag": null,
                            "total": 32.13004392074252,
                            "hasRDI": true,
                            "daily": 292.09130837038657,
                            "unit": "mg"
                        },
                        {
                            "label": "Phosphorus",
                            "tag": "P",
                            "schemaOrgTag": null,
                            "total": 3184.9296076014007,
                            "hasRDI": true,
                            "daily": 454.98994394305726,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin A",
                            "tag": "VITA_RAE",
                            "schemaOrgTag": null,
                            "total": 280.9663716591,
                            "hasRDI": true,
                            "daily": 31.2184857399,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin C",
                            "tag": "VITC",
                            "schemaOrgTag": null,
                            "total": 116.0873896,
                            "hasRDI": true,
                            "daily": 128.98598844444444,
                            "unit": "mg"
                        },
                        {
                            "label": "Thiamin (B1)",
                            "tag": "THIA",
                            "schemaOrgTag": null,
                            "total": 4.7917076606364,
                            "hasRDI": true,
                            "daily": 399.3089717197,
                            "unit": "mg"
                        },
                        {
                            "label": "Riboflavin (B2)",
                            "tag": "RIBF",
                            "schemaOrgTag": null,
                            "total": 2.2618592671940005,
                            "hasRDI": true,
                            "daily": 173.98917439953848,
                            "unit": "mg"
                        },
                        {
                            "label": "Niacin (B3)",
                            "tag": "NIA",
                            "schemaOrgTag": null,
                            "total": 22.527305580501903,
                            "hasRDI": true,
                            "daily": 140.7956598781369,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin B6",
                            "tag": "VITB6A",
                            "schemaOrgTag": null,
                            "total": 5.563942908570302,
                            "hasRDI": true,
                            "daily": 427.9956083515616,
                            "unit": "mg"
                        },
                        {
                            "label": "Folate equivalent (total)",
                            "tag": "FOLDFE",
                            "schemaOrgTag": null,
                            "total": 5226.5902247261,
                            "hasRDI": true,
                            "daily": 1306.647556181525,
                            "unit": "µg"
                        },
                        {
                            "label": "Folate (food)",
                            "tag": "FOLFD",
                            "schemaOrgTag": null,
                            "total": 5226.5902247261,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "µg"
                        },
                        {
                            "label": "Folic acid",
                            "tag": "FOLAC",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin B12",
                            "tag": "VITB12",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": true,
                            "daily": 0.0,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin D",
                            "tag": "VITD",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": true,
                            "daily": 0.0,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin E",
                            "tag": "TOCPHA",
                            "schemaOrgTag": null,
                            "total": 11.8059152151536,
                            "hasRDI": true,
                            "daily": 78.70610143435734,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin K",
                            "tag": "VITK1",
                            "schemaOrgTag": null,
                            "total": 1086.854646837458,
                            "hasRDI": true,
                            "daily": 905.7122056978817,
                            "unit": "µg"
                        },
                        {
                            "label": "Sugar alcohols",
                            "tag": "Sugar.alcohol",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        },
                        {
                            "label": "Water",
                            "tag": "WATER",
                            "schemaOrgTag": null,
                            "total": 167.75433216896107,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        }
                    ]
                }
            }
        ]
    };

    const finalRecipeList = [];

    for(const p in recipelist.hits){
        finalRecipeList.push({recipe: recipelist.hits[p].recipe, name: recipelist.hits[p].recipe.label, img: recipelist.hits[p].recipe.image});
    }

    const oneRecipe = ({item}) => (
        <View style={styles.item}>
                <View style={styles.picContainer}>
                <TouchableOpacity onPress={() => goToDetailScreen(item.recipe)}>
                <Image style={styles.pic} source={{uri: item.img} }
            ></Image>
            </TouchableOpacity>
                </View>
            <Text style={styles.name}>{item.name}</Text>
        </View>
        
    )

    const goToDetailScreen = (recipe) =>{
        navigation.navigate('Recipe Detail Screen', {
            recipe,
        });
    }

    itemSeparator = () => {
        return <View style={styles.separator}></View>

    };

    console.log(JSON.stringify(finalRecipeList, null, "  "));

    return (
        <View style={globalStyles.container}>
        <Text style={styles.title_text}>Search: </Text>
        <View style={styles.title_separator}></View>
        <FlatList
            data={finalRecipeList}
            renderItem = {oneRecipe}
            ItemSeparatorComponent = {itemSeparator}
            >
        </FlatList>
      </View>
    );
}

const styles = StyleSheet.create({
    separator: {
        height: 2,
        width: '100%',
        backgroundColor: '#000000',
    },

    title_separator: {
        height: 4,
        width: '100%',
        backgroundColor: '#000000',
    },

    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        paddingVertical: 13,
        backgroundColor: '#fceecb',
        borderRadius: 100,
        height: 89,
        marginTop: 10,
        marginBottom: 10,

    },

    picContainer: {
        backgroundColor: '#D9D9D9',
        borderRadius: 100,
        height: 89,
        width: 89,
        justifyContent: 'center',
        alignItems: 'center',
    },

    pic: {
        borderRadius: 100,
        height: 89,
        width: 89,
    },
    name: {
        fontWeight: '600',
        fontSize: 16,
        marginLeft: 13,
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'left',
        width: '100%',
        marginLeft: 10,
    }

});

export default RecipeListScreen
