import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';

//Author: Syed Bokhari
//Date: October 30th, 2022
//Summary: Front end functionality of the screen that redirects to either adding a custom meal or going to the recipe search.
const AddFoodScreen=({navigation})=>{
    const current = new Date();
    const [dateString, setDateString] = useState(current.toDateString());
    const [date, setDatea] = useState(current);

// Get the route object from the useRoute hook.
const route = useRoute();

// This function adds one day to the current date and updates the dateString state with the new date string.
function addDate() {
    console.log(date);
    date.setDate(date.getDate() + 1);
    setDateString(date.toDateString());
}

// This function subtracts one day from the current date and updates the dateString state with the new date string.
function subtractDate() {
    date.setDate(date.getDate() - 1);
    setDateString(date.toDateString());
}

// This function navigates to the Calendar Screen and passes the dateString state as a prop.
const goToCalendarScreen = () =>{
    navigation.navigate('Calendar Screen', {
        dateString,
    });
}

// This useEffect hook updates the dateString and date states if the route.params object changes.
useEffect(() => {
    if(route.params){
        setDateString(a => route.params.day.dateString);
        setDatea(b => new Date(route.params.day.dateString));
        console.log("_______________________")
        console.log(dateString);
        console.log(route.params.day.dateString);
    }
},[route.params]);
    
    return (
        <View style={globalStyles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('Search Recipe')} style={globalStyles.appDietButtonContainer2}>
                <Text style={globalStyles.appMainScreenText}>{"Search Recipe"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Custom Meal Screen')} style={globalStyles.appDietButtonContainer2}>
                <Text style={globalStyles.appMainScreenText}>{"Add Custom Meal +"}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default AddFoodScreen
