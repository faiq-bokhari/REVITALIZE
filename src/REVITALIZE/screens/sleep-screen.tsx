// Import necessary modules and components
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import Bedtime from './Sleep/Bedtime';

// Define SleepScreen functional component
const SleepScreen=({navigation})=>{
  
  // Initialize current date state
  const current = new Date();
  const [dateString, setDateString] = useState(current.toDateString());
  const [date] = useState(current);
  
  // Function to increment date
  function addDate() {
    date.setDate(date.getDate() + 1);
    setDateString(date.toDateString());
}

// Function to decrement date
function subtractDate() {
    date.setDate(date.getDate() - 1);
    setDateString(date.toDateString());
}
    return (
      <View style={globalStyles.container}>
            <View style={globalStyles.date_container}>
            
            {/* Decrement date button */}
            <TouchableOpacity >
                <Ionicons.Button style={globalStyles.topLeftContainer} onPress={()=> subtractDate()} name= 'arrow-back-outline' />
            </TouchableOpacity>
            
            {/* Display date string */}
            <TouchableOpacity style={globalStyles.topCenterContainer}>
                <Text style={globalStyles.appButtonText}>{ dateString }</Text>
            </TouchableOpacity>

            {/* Increment date button */}
            <TouchableOpacity >
                <Ionicons.Button style={globalStyles.topRightContainer} onPress={()=> addDate()} name= 'arrow-forward-outline' />
            </TouchableOpacity>
            </View>
          
          {/* Sleep title */}
          <Text style={globalStyles.sleepText}>Sleep</Text>

          <Bedtime dateString={dateString}/>
      </View>
    );
}

export default SleepScreen
