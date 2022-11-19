import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { globalStyles } from '../styles/global';
import Bedtime from './Sleep/Bedtime';

const SleepScreen=()=>{
    return (
        <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Sleep Screen</Text>
        <Bedtime />
      </View>
    );
}

export default SleepScreen
