import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { globalStyles } from '../styles/global';
import { TouchableOpacity} from 'react-native';


const DietScreen=({navigation})=>{
    return (
        <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Diet Screen</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Recipe List Screen')} style={globalStyles.appButtonContainer}>
                <Text style={globalStyles.appButtonText}>{"Recipe List"}</Text>
            </TouchableOpacity>
      </View>
    );
}

export default DietScreen
