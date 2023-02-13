import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { globalStyles } from '../styles/global';
import AddExercise from './AddExercise';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { DateContext } from './Date-component';
import { EmailContext } from './Email-component';

  const ExerciseScreen=({navigation})=>{
    const current = new Date();
    const [dateString, setDateString] = useState(current.toDateString());
    const isFocused = useIsFocused();
    const [workout, setWorkout] = useState([]);
    const [isSending, setIsSending] = useState(false);
    const route = useRoute();
    const { date, addOneDay, subtractOneDay } = useContext(DateContext);
    const { email } = useContext(EmailContext);
 

  const DeleteExercise = async (exercise_name) => {
    try {
        let url_delete = 'http://192.168.2.43:8000/exercises/' + email + '/' + exercise_name + '/' + date.toISOString().split("T")[0];
        //console.log(url_delete);
        const response = await fetch(url_delete, {
          method: 'DELETE',
        });
        const responseJson = await response.json();
        //console.log(responseJson);
        try {
          let url = 'http://192.168.2.43:8000/exercises/' + email + '/' + date.toISOString().split("T")[0];
  
          const response = await fetch(url, {
              method: 'GET',
            });
          const json = await response.json();
          setWorkout(json);
           //console.log(JSON.stringify(json, null, "  "));
          } catch (error) {
            //console.error(error);
          }  
      } catch (error) {
        console.error(error);
      }
    };

    function EditExercise(exercise, name = '', repititions = 0, sets = 0, weight = 0) {
      console.log("INFO BELOW");
      console.log(exercise);
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

      navigation.navigate('Add Exercise Screen', {
          editName: name,
          editReps: repititions,
          editSets: sets,
          editWeight: weight,
          editcurrentexercise: true,
      });
    }
  
    const switchedTo = navigation.addListener('focus', () => {
      if (navigation.isFocused()) {
       // addExercise(route.params);
       getWorkoutData();
       
      //navigation.setParams(null);
      }
    }, [navigation]);
   

    useEffect(() => {
      getWorkoutData(date);
    }, [date]);
    
    function addDate() {
      addOneDay();
    }
    
    function subtractDate() {
      subtractOneDay();
    }

  function getWorkoutData(currentDate = date) {
    const fetchData = async () => {
        try {
          let url = 'http://192.168.2.43:8000/exercises/' + email + '/' + currentDate.toISOString().split("T")[0];
  
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

  useEffect(() => {
      getWorkoutData(date);   
  },[isFocused]);

  
  const itemSeparator = () => {
    return <View style={globalStyles.separator}></View>
  };

  // <TouchableOpacity style={globalStyles.list_button}onPress={() => EditExercise(item)}>
  //         <Text style={globalStyles.list_button_text}>Edit</Text>
  // </TouchableOpacity>
  return (
      <View style={globalStyles.container}>
            <View style={globalStyles.date_container}>
            <TouchableOpacity >
                <Ionicons.Button style={globalStyles.topLeftContainer} onPress={()=> subtractDate()} name= 'arrow-back-outline' />
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.topCenterContainer}>
                <Text style={globalStyles.appButtonText}>{ date.toDateString() }</Text>
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
