import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { globalStyles } from '../styles/global';
import AddExercise from './Workout/AddExercise';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';

const ExerciseScreen=({navigation, route})=>{
  const current = new Date();
  const [dateString, setDateString] = useState(current.toDateString());
  const [date] = useState(current);
  const isFocused = useIsFocused();
  const [workout, setWorkout] = useState([
    //{ name: 'Bench Press', reps: 12, sets: 4, weight: 135},
    //{ name: 'Leg Press', reps: 10, sets: 5, weight: 180},
  ]);

  // const addExercise = (newExercise: {name:string, reps:number, sets:number, weight:number}) => {
  //  setWorkout([...workout, newExercise])
  // };

  // const switchedTo = navigation.addListener('focus', () => {
  //  if (route.params !== undefined) {
  //    setWorkout([...workout, route.params])
  //  }
  // })

  function addDate() {
    date.setDate(date.getDate() + 1);
    setDateString(date.toDateString());
  }

  function subtractDate() {
    date.setDate(date.getDate() - 1);
    setDateString(date.toDateString());
  }

  function getWorkoutData() {
    const fetchData = async () => {
        try {
          console.log(date)
          let url = 'http://192.168.2.43:8000/exercises/test123@gmail.com/2023-02-06';
  
          const response = await fetch(url, {
              method: 'GET',
            });
          const json = await response.json();
          setWorkout(json);
           console.log(JSON.stringify(json, null, "  "));
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
  }

  useEffect(() => {
    getWorkoutData();
  },[isFocused]);

  function mybuttonclick() {
    Alert.alert('hi')
  }
  
  const itemSeparator = () => {
    return <View style={globalStyles.separator}></View>
  };

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
        
        <Text style={globalStyles.listTitle}>Workout Log</Text>
        <View style={[globalStyles.listContainer,{backgroundColor: '#f9cedf'}]}>
        <FlatList 
          data={workout.exerciseList}
          renderItem={({ item }) => (
              <View>
                  <Text style={{textAlign: 'left'}}> {item.name}     {item.repititions}     {item.sets}     {item.weight}</Text>
              </View>
          )}
          ItemSeparatorComponent = {itemSeparator}
          renderItem={({item}) => <View style={globalStyles.listButtonContainer}>
          <View style={globalStyles.listRowContainer}>
              <View style={globalStyles.item_Name}>
              <Text style={globalStyles.item}>{item.name}{"\n"}
              Reps: {item.repititions} | Sets: {item.sets} | Weight: {item.weight} </Text>
          </View>
          <View style={globalStyles.buttonsContainer}>
          <TouchableOpacity style={globalStyles.list_button}onPress={mybuttonclick}>
          <Text style={globalStyles.list_button_text}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.list_button}onPress={mybuttonclick}>
          <Text style={globalStyles.list_button_text}>Delete</Text>
          </TouchableOpacity>
        </View>
        </View>
        </View>}
          />
      </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Add Exercise Screen")} style={globalStyles.appButtonContainer}>
              <Text style={globalStyles.appButtonText}>{"Add Exercise"} </Text>
        </TouchableOpacity>
      </View>
  );
}

export default ExerciseScreen
