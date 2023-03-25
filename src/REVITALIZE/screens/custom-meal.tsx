import { useRoute } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import { DateContext } from './Date-component';
import { EmailContext } from './Email-component';


const CustomMealScreen=({navigation})=>{
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
    

    // if (route.params.foodName.length > 0) {
    //   changeTextName = route.params.foodName;
    // }
    // if (route.params.calories.length > 0) {
    //   changeTextName = route.params.foodName;
    // }
    // if (route.params.protein.length > 0) {
    //   changeTextName = route.params.foodName;
    // }
    // if (route.params.carbs.length > 0) {
    //   url += `calories=${route.params.calories}`;
    // }
    // if (route.params.fats.length > 0) {
    //   url += `calories=${route.params.calories}`;
    // }

    const AddMealButtonClick = async () => {
      try {
          let url_add_meal = 'http://192.168.2.43:8000/foodlog/' + email + '/' + date.toISOString().split("T")[0] + '?';
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
          if(route.params?.editcurrentmeal && route.params?.editcurrentmeal == true){
            console.log("EDIT MEAL");
            const response = await fetch(url_add_meal, {
              method: 'PATCH',
            });
            const responseJson = await response.json();
            console.log(responseJson);
          }
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
