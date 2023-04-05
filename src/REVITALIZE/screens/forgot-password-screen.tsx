/*
Author: Youssef Dahab
Date Started: Jan, 2023
Description: forgot password screen UI
*/

// Importing necessary dependencies
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';

// Define ForgotPasswordScreen component
const ForgotPasswordScreen=({navigation})=>{

    return (
        <View style={globalStyles.loginContainer}>
            
            <Text style={globalStyles.bottomPadding}>Please reset your password</Text>

            {/* Current Password text box */}
            <TextInput
            style={globalStyles.loginInput}
            placeholder="Enter name or email"
            keyboardType="default"
            />

            {/* New Password text box */}
            <TextInput
            style={globalStyles.loginInput}
            placeholder="Enter new password"
            keyboardType="default"
            />

            {/* Confirm Password text box */}
            <TextInput
            style={globalStyles.loginInput}
            placeholder="Confirm new password"
            keyboardType="default"
            />

            {/* Navigate to login screen upon clicking reset password button */}
            <TouchableOpacity onPress={()=>navigation.navigate('Login Screen')} style={globalStyles.loginButton}>
                <Text style={globalStyles.appButtonText}>{"Reset Password"}</Text>
            </TouchableOpacity>
      </View>
    );
}

export default ForgotPasswordScreen