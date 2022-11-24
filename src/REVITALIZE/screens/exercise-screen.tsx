import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import AddExercise from './Workout/AddExercise';
import Ionicons from '@expo/vector-icons/Ionicons';

const ExerciseScreen=({navigation, route})=>{
  const [workout, setWorkout] = useState([
    { name: 'Bench Press', reps: 12, sets: 4, weight: 135},
    { name: 'Leg Press', reps: 10, sets: 5, weight: 180},
  ]);

  const addExercise = (newExercise: {name:string, reps:number, sets:number, weight:number}) => {
    setWorkout([...workout, newExercise])
  };

  const switchedTo = navigation.addListener('focus', () => {
    if (route.params !== undefined) {
      setWorkout([...workout, route.params])
    }
  })
  
  return (
      <View style={globalStyles.container}>
        <View style={globalStyles.container}>
          <Text>
              Exercise     Reps     Sets     Weight (lbs)
          </Text>
          <FlatList 
          data={workout}
          renderItem={({ item }) => (
              <View>
                  <Text style={{textAlign: 'left'}}> {item.name}     {item.reps}     {item.sets}     {item.weight}</Text>
              </View>
          )}
          />
      </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Add Exercise Screen")} style={globalStyles.appButtonContainer}>
              <Text style={globalStyles.appButtonText}>{"Add Exercise"} </Text>
        </TouchableOpacity>
      </View>
  );
}

export default ExerciseScreen
