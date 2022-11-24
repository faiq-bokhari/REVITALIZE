import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';


const DietScreen=({navigation})=>{
    return (
        <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Diet Screen</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Recipe Filter Screen')} style={globalStyles.appButtonContainer}>
                <Text style={globalStyles.appButtonText}>{"Recipe Filter Section"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Custom Meal Screen')} style={globalStyles.appButtonContainer}>
                <Text style={globalStyles.appButtonText}>{"Add Custom Meal"}</Text>
        </TouchableOpacity>
      </View>
      
    );
}

export default DietScreen
