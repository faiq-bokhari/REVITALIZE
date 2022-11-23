import React, { useState } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import Ionicons from '@expo/vector-icons/Ionicons';
import moment from 'moment';
import { TouchableOpacity} from 'react-native';

const DietScreen=({navigation})=>{
    const current = new Date();
    const [dateString, setDateString] = useState(current.toDateString());
    const [date] = useState(current);
    
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
            <TouchableOpacity style={globalStyles.topCenterContainer}>
                <Text style={globalStyles.appButtonText}>{ dateString }</Text>
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.topLeftContainer}>
                <Ionicons.Button onPress={()=> subtractDate()} name= 'arrow-back-outline' />
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.topRightContainer}>
                <Ionicons.Button onPress={()=> addDate()} name= 'arrow-forward-outline' />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Diet Screen')} style={globalStyles.appButtonContainer}>
                <Text style={globalStyles.appButtonText}>{"Diet Section"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Exercise Screen')} style={globalStyles.appButtonContainer}>
                <Text style={globalStyles.appButtonText}>{"Exercise Section"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Sleep Screen')} style={globalStyles.appButtonContainer}>
                <Text style={globalStyles.appButtonText}>{"Sleep Section"}</Text>
            </TouchableOpacity>
        </View>
const DietScreen=({navigation})=>{
    return (
        <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Diet Screen</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Recipe List Screen')} style={globalStyles.appButtonContainer}>
                <Text style={globalStyles.appButtonText}>{"Recipe List"}</Text>
            </TouchableOpacity>
      </View>
    );
}

export default DietScreen
