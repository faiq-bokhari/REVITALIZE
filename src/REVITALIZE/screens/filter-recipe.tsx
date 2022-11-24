import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';


const FilterRecipeScreen=()=>{
    const [number1, changeTextName] = React.useState("");
    const [number2, changeTextCalories] = React.useState("");
    const [number3, changeTextTags] = React.useState("");
    return (
        <View style={globalStyles.container}>
        <Text style= {globalStyles.sideText}> Restrictions</Text>
        <TextInput
        style={globalStyles.input}
        onChangeText={changeTextName}
        value={number1}
        placeholder="vegan, vegetarian, dairy-free, etc..."
        keyboardType="default"
        returnKeyType={'done'}
      />
        <Text style= {globalStyles.sideText}> Calories</Text>
        <TextInput
        style={globalStyles.input}
        onChangeText={changeTextCalories}
        value={number2}
        placeholder="Calories"
        keyboardType="numeric"
        returnKeyType={'done'}
      />
        <Text style= {globalStyles.sideText}> Other</Text>
        <TextInput
        style={globalStyles.input}
        onChangeText={changeTextTags}
        value={number3}
        placeholder="Other"
        keyboardType="default"
        returnKeyType={'done'}
      />
        <TouchableOpacity style={globalStyles.appButtonContainer}>
            <Text style={globalStyles.appButtonText}>{"Search"}</Text>
        </TouchableOpacity>
      </View>
    );
}

export default FilterRecipeScreen