import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import Bedtime from './Sleep/Bedtime';

const SleepScreen=({navigation})=>{
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
          <Text style={globalStyles.sleepText}>Sleep</Text>
          <Bedtime />
          <TouchableOpacity onPress={()=>navigation.navigate('Sleep Screen')} style={globalStyles.confirmSleepButton}>
                <Text style={globalStyles.appButtonText}>{"Confirm Sleep"}</Text>
            </TouchableOpacity>
      </View>
    );
}

export default SleepScreen
