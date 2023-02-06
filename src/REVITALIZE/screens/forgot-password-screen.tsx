import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';

const ForgotPasswordScreen=({navigation})=>{

    return (
        <View style={globalStyles.loginContainer}>
            
            <Text style={globalStyles.bottomPadding}>Please reset your password</Text>

            <TextInput
            style={globalStyles.loginInput}
            placeholder="Enter name or email"
            keyboardType="default"
            />

            <TextInput
            style={globalStyles.loginInput}
            placeholder="Enter old password"
            keyboardType="default"
            />

            <TextInput
            style={globalStyles.loginInput}
            placeholder="Enter new password"
            keyboardType="default"
            />

            <TextInput
            style={globalStyles.loginInput}
            placeholder="Confirm new password"
            keyboardType="default"
            />

            <TouchableOpacity onPress={()=>navigation.navigate('Login Screen')} style={globalStyles.loginButton}>
                <Text style={globalStyles.appButtonText}>{"Reset Password"}</Text>
            </TouchableOpacity>
      </View>
    );
}

export default ForgotPasswordScreen