import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';

const AddFoodScreen=({navigation})=>{
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
            <TouchableOpacity onPress={()=>navigation.navigate('Search Recipe')} style={globalStyles.appDietButtonContainer2}>
                <Text style={globalStyles.appMainScreenText}>{"Search Recipe"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Custom Meal Screen')} style={globalStyles.appDietButtonContainer2}>
                <Text style={globalStyles.appMainScreenText}>{"Add Custom Meal +"}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default AddFoodScreen
