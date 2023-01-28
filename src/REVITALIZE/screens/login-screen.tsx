import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';

const LoginScreen=({navigation})=>{

    return (
        <View style={globalStyles.container}>

        <TextInput
        style={globalStyles.input}
        placeholder="Enter name or email"
        keyboardType="default"
        />

        <TextInput
        style={globalStyles.input}
        placeholder="Enter password"
        keyboardType="default"
        />

        <TouchableOpacity onPress={()=>navigation.navigate('Main Screen')} style={globalStyles.appButtonContainer}>
                <Text style={globalStyles.appButtonText}>{"Login"}</Text>
            </TouchableOpacity>
      </View>
    );
}

export default LoginScreen
