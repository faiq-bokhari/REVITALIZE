import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, Button, Alert} from 'react-native';
import { globalStyles } from '../styles/global';
import Ionicons from '@expo/vector-icons/Ionicons';
import moment from 'moment';

const DietScreen=({navigation})=>{
    const current = new Date();
    const [dateString, setDateString] = useState(current.toDateString());
    const [date] = useState(current);
    const meals = [{key:''}, {key:''}, {key:''}, {key:''}];
    
    function addDate() {
        date.setDate(date.getDate() + 1);
        setDateString(date.toDateString());
    }

    function subtractDate() {
        date.setDate(date.getDate() - 1);
        setDateString(date.toDateString());
    }

    function mybuttonclick() {
      Alert.alert('hi')
  }
  
    
    return (
        <View style={globalStyles.container}>
            <TouchableOpacity style={globalStyles.topCenterContainer}>
                <Text style={globalStyles.appButtonText}>{ dateString }</Text>
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.topLeftContainer}>
                <Ionicons.Button onPress={()=> subtractDate()} name= 'arrow-back-outline' />
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.topRightContainer}>
                <Ionicons.Button onPress={()=> addDate()} name= 'arrow-forward-outline' />
            </TouchableOpacity>
            <FlatList style={globalStyles.listContainer}
        data={[
          {key: 'Pineapple Pizzzaa'},
          {key: 'Chocolate Doughnut'},
          {key: 'Vanilla Milkshake'},
          {key: 'Cocounut Milkshake'}
        ]}
        renderItem={({item}) => <View style={globalStyles.listButtonContainer}>
          <Text style={globalStyles.item}>{item.key}</Text><Button onPress={mybuttonclick} title="edit"/><Button onPress={mybuttonclick} title="delete"/>
          </View>}
      />
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
        renderItem={({item}) => <View style={globalStyles.listButtonContainer}>
          <Text style={globalStyles.item}>{item.key}</Text><Text style={globalStyles.item}>{item.key1}</Text>
          </View>}
      />
        </View>
    );
}

export default DietScreen
