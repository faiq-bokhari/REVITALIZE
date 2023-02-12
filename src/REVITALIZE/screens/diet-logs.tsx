import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, Button, Alert} from 'react-native';
import { globalStyles } from '../styles/global';
import Ionicons from '@expo/vector-icons/Ionicons';
import moment from 'moment';
import { useIsFocused } from '@react-navigation/native';

const DietScreen=({navigation})=>{
    const current = new Date();
    const [dateString, setDateString] = useState(current.toDateString());
    const [date] = useState(current);
    const isFocused = useIsFocused();
    const [data, setData] = useState([]);

    
    function addDate() {
        date.setDate(date.getDate() + 1);
        setDateString(date.toDateString());
    }

    function subtractDate() {
        date.setDate(date.getDate() - 1);
        setDateString(date.toDateString());
    }

    function getDietLogData() {
        const fetchData = async () => {
            try {
              let url = 'http://192.168.2.22:8000/foodlog/hasan@gmail.com/2023-02-01';
      
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
    useEffect(() => {
        getDietLogData();
 
      }, []);

      useEffect(() => {
        getDietLogData();
      },[isFocused]);
      
      

    function EditButtonClick(mealInfo, foodName = '', protein = '', calories = '', carbs = '', fats = '') {
        console.log("INFO BELOWWWWWWW");
        console.log(mealInfo);
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
        let url_delete = 'http://192.168.2.22:8000/foodlog/hasan@gmail.com/2023-02-01?foodName=' + item_name;
        console.log(url_delete);
        const response = await fetch(url_delete, {
          method: 'DELETE',
        });
        const responseJson = await response.json();
        console.log(responseJson);
        try {
            let url = 'http://192.168.2.22:8000/foodlog/hasan@gmail.com/2023-02-01';
    
            const response = await fetch(url, {
                method: 'GET',
              });
            const json = await response.json();
            setData(json);
             console.log(JSON.stringify(json, null, "  "));
          } catch (error) {
            console.error(error);
          }
      } catch (error) {
        console.error(error);
      }
    };

  itemSeparator = () => {
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
            <FlatList style={globalStyles.listContainer2}
        data={[
          {key: 'Macronutrients', key1:"Today's intake"},
          {key: 'Calories', key1:'500'},
          {key: 'Protein', key1:'500'},
          {key: 'Fats', key1:'500'},
          {key: 'Carbs', key1:'500'}
        ]}
        renderItem={({item}) => <View style={globalStyles.listRowContainer}>
                <View style={globalStyles.item_Name}>
                <Text style={globalStyles.item}>{item.key}</Text>
                </View>
                <View style={globalStyles.item_Info}>
                <Text style={globalStyles.item}>{item.key1}</Text>
                </View>
          </View>}
      />
        </View>
    );
}

export default DietScreen
