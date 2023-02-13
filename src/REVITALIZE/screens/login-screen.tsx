import React, { useState, createContext, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import EmailProvider, {EmailContext} from "./Email-component";

//Email is made global so it can be accessed in other modules
//export const EmailContext = createContext('sleep_yd@gmail.com');

const LoginScreen=({navigation})=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setEmailGlobally } = useContext(EmailContext);
   
      const handleLogin = async () => {

        try {
          // send a POST request to the loginUser func in backend to authenticate the user
          // change ip back
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
            // Authentication successful, navigate to the main screen
            setEmailGlobally(data.email);
            navigation.navigate('Main Screen');
            
          } else {
            // Authentication failed, show an error message
            // remove navigate later
            //navigation.navigate('Main Screen');
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

                <TouchableOpacity onPress={() => navigation.navigate("Sign Up Screen")}>
                    <Text style={globalStyles.forgotPassword}>{"Sign Up"}</Text>
                </TouchableOpacity>
            </View>
    );
}

export default LoginScreen