/*
Author: Youssef Dahab
Date Started: Jan, 2023
Description: login screen UI
*/

// Importing necessary dependencies
import React, { useState, createContext, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import EmailProvider, {EmailContext} from "./Email-component";

// Creating the LoginScreen component
const LoginScreen=({navigation})=>{

    // Initializing states for email and password fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Retrieving the email context and setEmailGlobally function from EmailProvider. Email is made global so it can be accessed in other modules
    const { setEmailGlobally } = useContext(EmailContext);

      // Function to handle user login
      const handleLogin = async () => {

        try {
          // send a POST request to the loginUser func in backend to authenticate the user. Make sure fetch uses your ip address to run
          const response = await fetch('http://192.168.2.43:8000/users/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
          });
      
          const data = await response.json();
      
          if (data.success) {
            // Set email globally using setEmailGlobally function
            setEmailGlobally(data.email);

            // Navigate to Main Screen
            navigation.navigate('Main Screen');
            
          } else {
            // Authentication failed, show an error message
            alert(data.message);
          }
        } catch (error) {
          console.error(error);
        }
      };

    return (

            <View style={globalStyles.loginContainer}>

                <Text style={globalStyles.welcomeBack}>Welcome Back!</Text>
                <Text style={globalStyles.bottomPadding}>Please input your information</Text>

                {/* Email text box */}
                <TextInput
                style={globalStyles.loginInput}
                placeholder="Enter email"
                keyboardType="default"
                onChangeText={(text) => setEmail(text)}
                value={email}
                />

                {/* Password text box */}
                <TextInput
                style={globalStyles.loginInput}
                placeholder="Enter password"
                keyboardType="default"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
                />

                {/* Navigate to forgot password screen upon clicking forgot password */}
                <TouchableOpacity onPress={()=>navigation.navigate('Forgot Password Screen')}>
                    <Text style={globalStyles.forgotPassword}>{"Forgot Password"}</Text>
                </TouchableOpacity>

                {/* Navigate to main screen upon clicking login after authenticating user credentials */}
                <TouchableOpacity onPress={handleLogin} style={globalStyles.loginButton}>
                    <Text style={globalStyles.appButtonText}>{"Login"}</Text>
                </TouchableOpacity>

                <Text>Don't have an account ?</Text>

                {/* Navigate to sign up screen upon clicking sign up */}
                <TouchableOpacity onPress={() => navigation.navigate("Sign Up Screen")}>
                    <Text style={globalStyles.forgotPassword}>{"Sign Up"}</Text>
                </TouchableOpacity>
            </View>
    );
}

export default LoginScreen