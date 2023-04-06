import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { globalStyles } from '../styles/global';
import AddExercise from './AddExercise';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { DateContext } from './Date-component';
import { EmailContext } from './Email-component';

//Author: Logan Brown
//Date: November 2nd, 2022
//Summary: Front end functionality of the workout section. Allows user to view exercise log and navigate to the AddExercise screen

  const ExerciseScreen=({navigation})=>{
    // Hooks needed for functionality and context from other modules like data and email
    const isFocused = useIsFocused();
    const [workout, setWorkout] = useState([]);
    const route = useRoute();
    const { date, addOneDay, subtractOneDay } = useContext(DateContext);
    const { email } = useContext(EmailContext);
 

// Deletes specified exercise
  const DeleteExercise = async (exercise_name) => {
    try {
      // Constructs the API url based on email, date, and exercise_name to be deleted 
      let url_delete = 'http://192.168.2.43:8000/exercises/' + email + '/' + exercise_name + '/' + date.toISOString().split("T")[0];
        const response = await fetch(url_delete, {
          method: 'DELETE',
        });
        const responseJson = await response.json();
        // Request updated value from the server
        try {
          let url = 'http://192.168.2.43:8000/exercises/' + email + '/' + date.toISOString().split("T")[0];
  
          const response = await fetch(url, {
              method: 'GET',
            });
          const json = await response.json();
          setWorkout(json);
          } catch (error) {
            console.error(error);
          }  
      } catch (error) {
        console.error(error);
      }
    };

    // Navigates to AddExercise screen to edit existing exercise
    function EditExercise(exercise, name = '', repititions = 0, sets = 0, weight = 0) {
      // Check which workout properties have been passed in and update the corresponding variables
      if (exercise.name){
          name = exercise.name;
          console.log(exercise.name);
      }
      if (exercise.repititions){
          repititions = exercise.repititions;
          console.log(exercise.repititions);
      }
      if (exercise.sets){
          sets = exercise.sets;
          console.log(exercise.sets);
      }
      if (exercise.weight){
          weight = exercise.weight;
          console.log(exercise.weight);
      }

      // Navigates to AddExercise screen and sends current data
      navigation.navigate('Add Exercise Screen', {
          editName: name,
          editReps: repititions,
          editSets: sets,
          editWeight: weight,
          editcurrentexercise: true,
      });
    }

    // Fetches workout data from given date
    function getWorkoutData(currentDate = date) {
      const fetchData = async () => {
          try {
            let url = 'http://192.168.2.43:8000/exercises/' + email + '/';
            url += currentDate.toISOString().split("T")[0];
    
            const response = await fetch(url, {
                method: 'GET',
              });
            const json = await response.json();
            setWorkout(json);
             //console.log(JSON.stringify(json, null, "  "));
          } catch (error) {
            console.error(error);
          }
        };
  
        fetchData();
    }


    // Call getWorkoutData when the component mounts and when the date changes
    useEffect(() => {
      getWorkoutData();
    });

    // Call getWorkoutData to refresh page when navigated to
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        
        getWorkoutData();
        console.log('Page refreshed!');
        console.log(date)
      });
  
      // Return the unsubscribe function to clean up the listener
      return unsubscribe;
    }, [navigation]);

    // Adds 1 to current date
    function addDate() {
      addOneDay();
    }
    
    // Subtracts 1 from current date
    function subtractDate() {
      subtractOneDay();
    }
  
  // This function returns a separator component for use in rendering the list of items  
  const itemSeparator = () => {
    return <View style={globalStyles.separator}></View>
  };

  // Renders page
  return (
      <View style={globalStyles.container}>
            <View style={globalStyles.date_container}>
            <TouchableOpacity >
                <Ionicons.Button style={globalStyles.topLeftContainer} onPress={()=> subtractDate()} name= 'arrow-back-outline' />
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.topCenterContainer}>
                <Text style={globalStyles.appButtonText}>{ date.toUTCString().substring(0,16) }</Text>
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
                  <Text style={{fontWeight: 'bold'}}> {item.name} </Text>
                  <Text style={{textAlign: 'left'}}>    {item.repititions}     {item.sets}     {item.weight}</Text>
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

          <TouchableOpacity style={globalStyles.list_button}onPress={() => EditExercise(item)}>
          <Text style={globalStyles.list_button_text}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={globalStyles.list_button}onPress={() => DeleteExercise(item.name)}>
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
