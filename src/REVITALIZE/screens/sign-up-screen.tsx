import React, { useState, createContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import { globalStyles } from '../styles/global';
import EmailProvider, {EmailContext} from "./Email-component";

//Email is made global so it can be accessed in other modules
//export const EmailContext = createContext();

const SignUpScreen=({navigation})=>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
   
      const handleSignUp = async () => {

        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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

        try {
          // change ip back
          const response = await fetch('http://192.168.2.43:8000/users/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
          });
      
          const data = await response.json();
      
          if (data.success) {
            Alert.alert('Congrats!','Your account has been successfully created');
            navigation.navigate('Login Screen');
            
          } else {
            // remove navigate later
            //navigation.navigate('Main Screen');
            console.log('bruh')
            alert(data.message);
          }
        } catch (error) {
          console.error(error);
        }
      };

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