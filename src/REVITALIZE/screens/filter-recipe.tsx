import React, { useEffect, useState } from 'react';
import { Text, View, TextInput,TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import Ionicons from '@expo/vector-icons/Ionicons';
import moment from 'moment';
import { RotateInUpLeft } from 'react-native-reanimated';
import { useRoute } from '@react-navigation/native';

const FilterRecipeScreen2=({navigation})=>{
    const current = new Date();
    const [dateString, setDateString] = useState(current.toDateString());
    const [date, setDatea] = useState(current);

    const route = useRoute();
    
    function addDate() {
        console.log(date);
        date.setDate(date.getDate() + 1);
        setDateString(date.toDateString());
    }

    function subtractDate() {
        date.setDate(date.getDate() - 1);
        setDateString(date.toDateString());
    }

    const goToCalendarScreen = () =>{
        navigation.navigate('Calendar Screen', {
            dateString,
        });
    }
    const [number1, changeTextName] = React.useState("");
    const [number2, changeTextCalories] = React.useState("");
    const [number3, changeTextTags] = React.useState("");

    useEffect(() => {
        if(route.params){
            setDateString(a => route.params.day.dateString);
            setDatea(b => new Date(route.params.day.dateString));
            console.log("_______________________")
            console.log(dateString);
            console.log(route.params.day.dateString);
        }
    },[route.params]);
    
    return (
        <View style={globalStyles.container}>
        <View style={globalStyles.appDietButtonContainer3}>
        <TextInput
        onChangeText={changeTextName}
        value={number1}
        placeholder="Restrictions"
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
        onChangeText={changeTextTags}
        value={number3}
        placeholder="Other"
        keyboardType="default"
        returnKeyType={'done'}
      />
      </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Recipe List Screen')} style={globalStyles.appButtonContainer}>
            <Text style={globalStyles.appButtonText}>{"Search"}</Text>
        </TouchableOpacity>
      </View>
    );
}

export default FilterRecipeScreen2
