import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import Bedtime from './Sleep/Bedtime';

const SleepScreen=({navigation})=>{
    return (
        <View style={globalStyles.loginContainer}>
          
          <Text style={globalStyles.sleepText}>Sleep</Text>
          <Bedtime />
          <TouchableOpacity onPress={()=>navigation.navigate('Sleep Screen')} style={globalStyles.confirmSleepButton}>
                <Text style={globalStyles.appButtonText}>{"Confirm Sleep"}</Text>
            </TouchableOpacity>
      </View>
    );
}

export default SleepScreen
