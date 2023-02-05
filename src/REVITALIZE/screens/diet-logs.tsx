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
        data={[
          {key: 'Pineapple Pizzzaa'},
          {key: 'Chocolate Doughnut'},
          {key: 'Vanilla Milkshake'},
          {key: 'Cocounut Milkshake'}
        ]}
        ItemSeparatorComponent = {itemSeparator}
        renderItem={({item}) => <View style={globalStyles.listButtonContainer}>
            <View style={globalStyles.listRowContainer}>
                <View style={globalStyles.item_Name}>
                <Text style={globalStyles.item}>{item.key}</Text>
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
