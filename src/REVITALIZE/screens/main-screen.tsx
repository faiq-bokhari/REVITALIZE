import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import Ionicons from '@expo/vector-icons/Ionicons';
import moment from 'moment';
import { RotateInUpLeft } from 'react-native-reanimated';
import { useRoute } from '@react-navigation/native';

const MainScreen=({navigation})=>{
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
        <View>
            <View style={globalStyles.date_container}>
            <TouchableOpacity>
                <Ionicons.Button style={globalStyles.topLeftContainer} onPress={()=> subtractDate()} name= 'arrow-back-outline' />
            </TouchableOpacity>
            <TouchableOpacity onPress={goToCalendarScreen}  style={globalStyles.topCenterContainer}>
                <Text style={globalStyles.appButtonText}>{ dateString }</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Ionicons.Button style={globalStyles.topRightContainer} onPress={()=> addDate()} name= 'arrow-forward-outline' />
            </TouchableOpacity>
            </View>
            <View>
                <Text style={globalStyles.MainPage_Title}>Select Category</Text>
                <Text style={globalStyles.MainPage_Subtitle}>Which section would you like to explore?</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Diet Logs')} style={globalStyles.appDietButtonContainer}>
                <Text style={globalStyles.appMainScreenText}>{"Diet Section"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Exercise Screen')} style={globalStyles.appExerciseButtonContainer}>
                <Text style={globalStyles.appMainScreenText}>{"Exercise Section"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Sleep Screen')} style={globalStyles.appSleepButtonContainer}>
                <Text style={globalStyles.appMainScreenText}>{"Sleep Section"}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MainScreen
