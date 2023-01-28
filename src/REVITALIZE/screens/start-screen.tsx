import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import { globalStyles } from '../styles/global';
const StartScreen = ({navigation}) => {
    return (
            <View style={globalStyles.container}>
                
                <TouchableOpacity style={globalStyles.appButtonContainer}>
                    <Text style={globalStyles.appButtonText}>{"Sign Up"}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate("Login Screen")} style={globalStyles.appButtonContainer}>
                    <Text style={globalStyles.appButtonText}>{"Login"}</Text>
                </TouchableOpacity>
            </View>
    );
};

export default StartScreen;