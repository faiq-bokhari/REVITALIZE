import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Exercises from './Workout/Exercises';
import AddExercise from './Workout/AddExercise';
import Ionicons from '@expo/vector-icons/Ionicons';

const ExerciseScreen=({navigation})=>{

    return (
        <View style={globalStyles.container}>
          <Exercises/>
          <TouchableOpacity onPress={()=>navigation.navigate("Add Exercise Screen")} style={globalStyles.appButtonContainer}>
                <Text style={globalStyles.appButtonText}>{"Add Exercise"}</Text>
          </TouchableOpacity>
        </View>
    );
}

export default ExerciseScreen
