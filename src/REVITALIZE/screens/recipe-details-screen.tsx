import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { globalStyles } from '../styles/global';
import { TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native';


const RecipeDetailScreen=()=>{
    const route = useRoute()

    return (
        <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>{route.params.recipe.label}</Text>
      </View>
    );
}

export default RecipeDetailScreen
