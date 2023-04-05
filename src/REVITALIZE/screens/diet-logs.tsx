import React, { useContext, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, Button, Alert} from 'react-native';
import { globalStyles } from '../styles/global';
import Ionicons from '@expo/vector-icons/Ionicons';
import moment from 'moment';
import { useIsFocused } from '@react-navigation/native';
import { DateContext } from './Date-component';
import { EmailContext } from './Email-component';

const DietScreen=({navigation})=>{
// Import hooks and context from external modules
const isFocused = useIsFocused();
const [data, setData] = useState([]);
const { date, addOneDay, subtractOneDay } = useContext(DateContext);
const { email } = useContext(EmailContext);

// Call getDietLogData when the component mounts and when the date changes
useEffect(() => {
  getDietLogData(date);
}, [date]);

// Function to add one day to the current date
function addDate() {
  addOneDay();
}

// Function to subtract one day from the current date
function subtractDate() {
  subtractOneDay();
}

// Function to fetch diet log data for a given date
function getDietLogData(currentDate = date) {
    const fetchData = async () => {
        try {
          // Construct the API URL based on the current date and user email
          let url = 'http://192.168.2.43:8000/foodlog/' + email + '/';
          url += currentDate.toISOString().split("T")[0];
          console.log("DATEEEEEEEEEEEEEEEEEEEEEEEE")
          console.log(currentDate.toISOString().split("T")[0]);
  
          // Fetch the diet log data from the API and update the component state
          const response = await fetch(url, {
              method: 'GET',
            });
          const json = await response.json();
          setData(json);
           console.log(JSON.stringify(json, null, "  "));
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
}

// Call getDietLogData when the component mounts and when the screen comes into focus
useEffect(() => {
    getDietLogData();
}, []);

useEffect(() => {
    getDietLogData();
},[isFocused]);
      
      

// This function handles the button click event for editing a meal
function EditButtonClick(mealInfo, foodName = '', protein = '', calories = '', carbs = '', fats = '') {
  console.log("INFO BELOWWWWWWW");
  console.log(mealInfo);

  // Check which meal properties have been passed in and update the corresponding variables
  if (mealInfo.foodName){
      foodName = mealInfo.foodName;
      console.log(mealInfo.foodName);
  }
  if (mealInfo.protein){
      protein = mealInfo.protein;
      console.log(mealInfo.protein);
  }
  if (mealInfo.calories){
      calories = mealInfo.calories;
      console.log(mealInfo.calories);
  }
  if (mealInfo.carbs){
      carbs = mealInfo.carbs;
      console.log(mealInfo.carbs);
  }
  if (mealInfo.fats){
      fats = mealInfo.fats;
      console.log(mealInfo.fats);
  }

  // Navigate to the 'Custom Meal Screen' and pass in the edited meal information
  navigation.navigate('Custom Meal Screen', {
      editfoodName: foodName,
      editcalories: calories,
      editprotein: protein,
      editcarbs: carbs,
      editfats: fats,
      editcurrentmeal: true,
  });
}

  const DeleteButtonClick = async (item_name) => {
    try {
      // Construct the URL for deleting the item
      let url_delete = 'http://192.168.2.43:8000/foodlog/' + email + '/' + date.toISOString().split("T")[0] + '?foodName=' + item_name;
      console.log(url_delete);
      // Send a DELETE request to the server
      const response = await fetch(url_delete, {
        method: 'DELETE',
      });
      // Parse the response from the server
      const responseJson = await response.json();
      console.log(responseJson);
      try {
        // Construct the URL for retrieving the updated list of items
        let url = 'http://192.168.2.43:8000/foodlog/' + email + '/' + date.toISOString().split("T")[0];
        
        // Send a GET request to the server to retrieve the updated list of items
        const response = await fetch(url, {
            method: 'GET',
        });
        // Parse the response from the server
        const json = await response.json();
        // Update the state with the updated list of items
        setData(json);
        console.log(JSON.stringify(json, null, "  "));
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

// This function returns a separator component for use in rendering the list of items
itemSeparator = () => {
  return <View style={globalStyles.separator}></View>
};
  
    
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.date_container}>
            <TouchableOpacity >
                <Ionicons.Button style={globalStyles.topLeftContainer} onPress={() => {subtractDate()}} name= 'arrow-back-outline' />
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.topCenterContainer}>
                <Text style={globalStyles.appButtonText}>{ date.toUTCString().substring(0,16) }</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Ionicons.Button style={globalStyles.topRightContainer} onPress={() => {addDate()}} name= 'arrow-forward-outline' />
            </TouchableOpacity>
            </View>
            <Text style={globalStyles.listTitle}>Food Log</Text>
            <View style={globalStyles.listContainer}>
            <FlatList 
        data={data.foodLog}
        ItemSeparatorComponent = {itemSeparator}
        renderItem={({item}) => <View style={globalStyles.listButtonContainer}>
            <View style={globalStyles.listRowContainer}>
                <View style={globalStyles.item_Name}>
                <Text style={globalStyles.item}>{item.foodName}</Text>
                </View>
          <View style={globalStyles.buttonsContainer}>
          <TouchableOpacity style={globalStyles.list_button} onPress={() => EditButtonClick(item)}>
            <Text style={globalStyles.list_button_text}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.list_button} onPress={() => DeleteButtonClick(item.foodName)}>
            <Text style={globalStyles.list_button_text}>Delete</Text>
            </TouchableOpacity>
          </View>
          </View>
          </View>}
      />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Add Food Screen')} style={globalStyles.appButtonContainer}>
                <Text style={globalStyles.appButtonText}>{"Add Item +"}</Text>
            </TouchableOpacity>
            <View style={globalStyles.listContainer2}>
            <Text style={globalStyles.DietPage_Subtitle}>Calories: {Math.round(data.calories)} </Text>
        <Text style={globalStyles.DietPage_Subtitle}>Protein: {Math.round(data.protein)} </Text>
        <Text style={globalStyles.DietPage_Subtitle}>Carbs: {Math.round(data.carbs)} </Text>
        <Text style={globalStyles.DietPage_Subtitle}>Fat: {Math.round(data.fats)} </Text>
            </View>
            {/* <FlatList style={globalStyles.listContainer2}
        data={data}
        renderItem={({item}) => <View style={globalStyles.listRowContainer}>
                <View style={globalStyles.item_Name}>
                <Text style={globalStyles.item}>Calories: {item.calories}</Text>
                </View>
                <View style={globalStyles.item_Info}>
                <Text style={globalStyles.item}>CARBS: {item.calories}</Text>
                </View>
          </View>}
      /> */}
        </View>
    );
}

export default DietScreen
