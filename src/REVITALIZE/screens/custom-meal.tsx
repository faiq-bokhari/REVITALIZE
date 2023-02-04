import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';


const CustomMealScreen=()=>{
    const [number1, changeTextName] = React.useState("");
    const [number2, changeTextCalories] = React.useState("");
    const [number3, changeTextTags] = React.useState("");
    return (
        <View style={globalStyles.container}>
        <View style={globalStyles.appDietButtonContainer3}>
        <TextInput
        onChangeText={changeTextName}
        value={number1}
        placeholder="Name of Meal"
        keyboardType="default"
        returnKeyType={'done'}
      />
      </View>
      <View style={globalStyles.appDietButtonContainer3}>
        <TextInput
        onChangeText={changeTextCalories}
        value={number2}
        placeholder="Calories"
        keyboardType="numeric"
        returnKeyType={'done'}
      />
      </View>
      <View style={globalStyles.appDietButtonContainer3}>
        <TextInput
        onChangeText={changeTextCalories}
        value={number2}
        placeholder="Protein"
        keyboardType="numeric"
        returnKeyType={'done'}
      />
      </View>
      <View style={globalStyles.appDietButtonContainer3}>
        <TextInput
        onChangeText={changeTextCalories}
        value={number2}
        placeholder="Carbohydrates"
        keyboardType="numeric"
        returnKeyType={'done'}
      />
      </View>
      <View style={globalStyles.appDietButtonContainer3}>
        <TextInput
        onChangeText={changeTextCalories}
        value={number2}
        placeholder="Fat"
        keyboardType="numeric"
        returnKeyType={'done'}
      />
      </View>
        <TouchableOpacity style={globalStyles.appButtonContainer}>
            <Text style={globalStyles.appButtonText}>{"Add this meal"}</Text>
        </TouchableOpacity>
      </View>
    );
}

export default CustomMealScreen
