import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';

const LoginScreen=({navigation})=>{

    return (
        <View style={globalStyles.loginContainer}>
            
            <Text style={globalStyles.welcomeBack}>Welcome Back!</Text>
            <Text style={globalStyles.bottomPadding}>Please input your information</Text>

            <TextInput
            style={globalStyles.loginInput}
            placeholder="Enter name or email"
            keyboardType="default"
            />

            <TextInput
            style={globalStyles.loginInput}
            placeholder="Enter password"
            keyboardType="default"
            />

            <TouchableOpacity onPress={()=>navigation.navigate('Forgot Password Screen')}>
                <Text style={globalStyles.forgotPassword}>{"Forgot Password"}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Main Screen')} style={globalStyles.loginButton}>
                <Text style={globalStyles.appButtonText}>{"Login"}</Text>
            </TouchableOpacity>

            <Text>Don't have an account ?</Text>

            <TouchableOpacity>
                <Text style={globalStyles.forgotPassword}>{"Sign Up"}</Text>
            </TouchableOpacity>
      </View>
    );
}

export default LoginScreen