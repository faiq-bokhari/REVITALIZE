import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import AddExercise from './Workout/AddExercise';
import Ionicons from '@expo/vector-icons/Ionicons';

const ExerciseScreen=({navigation, route})=>{
  const current = new Date();
  const [dateString, setDateString] = useState(current.toDateString());
  const [date] = useState(current);
  
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

  function addDate() {
    date.setDate(date.getDate() + 1);
    setDateString(date.toDateString());
}

function subtractDate() {
    date.setDate(date.getDate() - 1);
    setDateString(date.toDateString());
}
  
  return (
      <View style={globalStyles.container}>
            <View style={globalStyles.date_container}>
            <TouchableOpacity >
                <Ionicons.Button style={globalStyles.topLeftContainer} onPress={()=> subtractDate()} name= 'arrow-back-outline' />
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.topCenterContainer}>
                <Text style={globalStyles.appButtonText}>{ dateString }</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Ionicons.Button style={globalStyles.topRightContainer} onPress={()=> addDate()} name= 'arrow-forward-outline' />
            </TouchableOpacity>
            </View>
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
