import React, { useState, createContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import { globalStyles } from '../styles/global';
import EmailProvider, {EmailContext} from "./Email-component";

//Author: Logan Brown
//Date: November 2nd, 2022
//Summary: Front end functionality of the signup screen. Allows user to enter name, email, password to signup for REVITALIZE

const SignUpScreen=({navigation})=>{
    // Hooks needed for functionality and context from other modules like data and email
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
   
      // Validates user input and sends request to server if correct
      const handleSignUp = async () => {
        // Regex expression to verify that email is valid
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        // Checks if any fields are empty or password confirmation doesn't match
        if (!name || !email || !password || !passwordConfirm) {
            Alert.alert('Invalid Input','Required fields empty');
            return;
        }
        else if (reg.test(email) !== true) {
            Alert.alert('Invalid Input', 'Improper Email Address');
            return;
        }
        else if (password !== passwordConfirm) {
            Alert.alert('Invalid Input','Passwords do not match');
            return;
        }

        // Sends POST request to server if all inputs valid to create account
        try {
          // Construct URL for API request
          const response = await fetch('http://192.168.2.43:8000/users/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
          });
      
          const data = await response.json();
      
          // Displays message on completion of signup and navigates back to login
          if (data.success) {
            Alert.alert('Congrats!','Your account has been successfully created');
            navigation.navigate('Login Screen');
            
          } else {
            alert(data.message);
          }
        } catch (error) {
          console.error(error);
        }
      };

    // Renders page
    return (
        <EmailContext.Provider value={email}>
            <View style={globalStyles.loginContainer}>

                <Text style={globalStyles.welcomeBack}>Welcome!</Text>
                <Text style={globalStyles.bottomPadding}>Let's get you started</Text>

                <TextInput
                style={globalStyles.loginInput}
                placeholder="Enter your name"
                keyboardType="default"
                onChangeText={(text) => setName(text)}
                value={name}
                />

                <TextInput
                style={globalStyles.loginInput}
                placeholder="Enter your email"
                keyboardType="default"
                onChangeText={(text) => setEmail(text)}
                value={email}
                />

                <TextInput
                style={globalStyles.loginInput}
                placeholder="Enter password"
                keyboardType="default"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
                />

                <TextInput
                style={globalStyles.loginInput}
                placeholder="Confirm password"
                keyboardType="default"
                onChangeText={(text) => setPasswordConfirm(text)}
                value={passwordConfirm}
                secureTextEntry={true}
                />

                

                <TouchableOpacity onPress={handleSignUp} style={globalStyles.loginButton}>
                    <Text style={globalStyles.appButtonText}>{"Sign Up"}</Text>
                </TouchableOpacity>

                <Text>Already Have an Account ?</Text>

                <TouchableOpacity onPress={() => navigation.navigate("Login Screen")}>
                    <Text style={globalStyles.forgotPassword}>{"Login"}</Text>
                </TouchableOpacity>
            </View>
        </EmailContext.Provider>
    );
}

export default SignUpScreen