import React, { useState, createContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';

//Email is made global so it can be accessed in other modules
export const EmailContext = createContext();

const LoginScreen=({navigation})=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
      const handleLogin = async () => {

        try {
          // send a POST request to the loginUser func in backend to authenticate the user
          const response = await fetch('http://10.0.0.248:8000/users/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
          });
      
          const data = await response.json();
      
          if (data.success) {
            // Authentication successful, navigate to the main screen
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
        <EmailContext.Provider value={email}>
            <View style={globalStyles.loginContainer}>

                <Text style={globalStyles.welcomeBack}>Welcome Back!</Text>
                <Text style={globalStyles.bottomPadding}>Please input your information</Text>

                <TextInput
                style={globalStyles.loginInput}
                placeholder="Enter name or email"
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

                <TouchableOpacity onPress={()=>navigation.navigate('Forgot Password Screen')}>
                    <Text style={globalStyles.forgotPassword}>{"Forgot Password"}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLogin} style={globalStyles.loginButton}>
                    <Text style={globalStyles.appButtonText}>{"Login"}</Text>
                </TouchableOpacity>

                <Text>Don't have an account ?</Text>

                <TouchableOpacity>
                    <Text style={globalStyles.forgotPassword}>{"Sign Up"}</Text>
                </TouchableOpacity>
            </View>
        </EmailContext.Provider>
    );
}

export default LoginScreen