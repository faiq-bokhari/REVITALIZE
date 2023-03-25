import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import { globalStyles } from '../styles/global';
const StartScreen = ({navigation}) => {
    return (
            <View style={globalStyles.loginContainer}>                
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../assets/logo.png')} style={{ width: 400, height: 300 }} />
                </View>
                <TouchableOpacity onPress={()=> navigation.navigate("Sign Up Screen")} style={globalStyles.loginButton}>
                    <Text style={globalStyles.appButtonText}>{"Sign Up"}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate("Login Screen")} style={globalStyles.loginButton}>
                    <Text style={globalStyles.appButtonText}>{"Login"}</Text>
                </TouchableOpacity>
            </View>
    );
};

export default StartScreen;