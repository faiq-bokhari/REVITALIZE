import { useRoute } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import { DateContext } from './Date-component';
import { EmailContext } from './Email-component';

//Author: Syed Bokhari
//Date: October 30th, 2022
//Summary: Front end functionality of the search custom meal. Allows users to manually input nutrient values.

const CustomMealScreen=({navigation})=>{
// Import required dependencies
const route = useRoute()
const [data, setData] = useState([]);
const [mealName, changeTextName] = useState(route.params?.editfoodName || '');
const [mealCalories, changeTextCalories] = useState(route.params?.editcalories.toString() || '');
const [mealProtein, changeTextProtein] = useState(route.params?.editprotein.toString() || '');
const [mealCarbs, changeTextCarbs] = useState(route.params?.editcarbs.toString() || '');
const [mealFat, changeTextFat] = useState(route.params?.editfats.toString() || '');
const [isAlreadyMeal, setIsAlreadyMeal] = useState(false);
const { date, addOneDay, subtractOneDay } = useContext(DateContext);
const { email } = useContext(EmailContext);

// Function that is called when the "Add Meal" button is clicked
const AddMealButtonClick = async () => {
  try {
    // Construct the URL for the API request
    let url_add_meal = 'http://192.168.2.43:8000/foodlog/' + email + '/' + date.toISOString().split("T")[0] + '?';
    // Add meal name, calories, protein, carbs, and fat to the URL query parameters, if available
    if (mealName.length > 0) {
      url_add_meal += `foodName=${mealName}&`;
    }
    if (mealCalories.length > 0) {
      url_add_meal += `calories=${mealCalories}&`;
    }
    if (mealProtein.length > 0) {
      url_add_meal += `protein=${mealProtein}&`;
    }
    if (mealCarbs.length > 0) {
      url_add_meal += `carbs=${mealCarbs}&`;
    }
    if (mealFat.length > 0) {
      url_add_meal += `fats=${mealFat}&`;
    }
    // If the current meal is being edited, make a PATCH request to the API
    if(route.params?.editcurrentmeal && route.params?.editcurrentmeal == true){
      console.log("EDIT MEAL");
      const response = await fetch(url_add_meal, {
        method: 'PATCH',
      });
      const responseJson = await response.json();
      console.log(responseJson);
    }
    // Otherwise, make a POST request to the API to add a new meal
    else{
      console.log("NEW MEAL");
      const response = await fetch(url_add_meal, {
        method: 'POST',
      });
      const responseJson = await response.json();
      console.log(responseJson);
    }
  } catch (error) {
    console.error(error);
  }

  // Navigate to the "Diet Logs" screen after the API request is completed
  navigation.navigate('Diet Logs');
};

    return (
        <View style={globalStyles.container}>
        <View style={globalStyles.appDietButtonContainer3}>
        <TextInput
        onChangeText={changeTextName}
        value={mealName}
        placeholder="Name of Meal"
        keyboardType="default"
        returnKeyType={'done'}
      />
      </View>
      <View style={globalStyles.appDietButtonContainer3}>
        <TextInput
        onChangeText={changeTextCalories}
        value={mealCalories}
        placeholder="Calories"
        keyboardType="numeric"
        returnKeyType={'done'}
      />
      </View>
      <View style={globalStyles.appDietButtonContainer3}>
        <TextInput
        onChangeText={changeTextProtein}
        value={mealProtein}
        placeholder="Protein"
        keyboardType="numeric"
        returnKeyType={'done'}
      />
      </View>
      <View style={globalStyles.appDietButtonContainer3}>
        <TextInput
        onChangeText={changeTextCarbs}
        value={mealCarbs}
        placeholder="Carbohydrates"
        keyboardType="numeric"
        returnKeyType={'done'}
      />
      </View>
      <View style={globalStyles.appDietButtonContainer3}>
        <TextInput
        onChangeText={changeTextFat}
        value={mealFat}
        placeholder="Fat"
        keyboardType="numeric"
        returnKeyType={'done'}
      />
      </View>
        <TouchableOpacity style={globalStyles.appButtonContainer} onPress={() => AddMealButtonClick()}>
            <Text style={globalStyles.appButtonText}>{"Add Meal"}</Text>
        </TouchableOpacity>
      </View>
    );
}

export default CustomMealScreen
