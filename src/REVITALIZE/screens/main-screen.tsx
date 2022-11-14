import React from 'react';
import { Text, View, Button, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';

const MainScreen=({navigation})=>{
    console.log(navigation)
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Main Page !!!</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Diet Screen')} style={globalStyles.appButtonContainer}>
                <Text style={globalStyles.appButtonText}>{"Diet Section"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Exercise Screen')} style={globalStyles.appButtonContainer}>
                <Text style={globalStyles.appButtonText}>{"Exercise Section"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Sleep Screen')} style={globalStyles.appButtonContainer}>
                <Text style={globalStyles.appButtonText}>{"Sleep Section"}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MainScreen
