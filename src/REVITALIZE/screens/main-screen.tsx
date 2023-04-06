import React, { useContext, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import Ionicons from '@expo/vector-icons/Ionicons';
import moment from 'moment';
import { RotateInUpLeft } from 'react-native-reanimated';
import { useRoute } from '@react-navigation/native';
import { DateContext } from './Date-component';

//Author: Syed Bokhari, Bill Nguyen
//Date: October 30th, 2022
//Summary: Front end functionality of the main menu screen. Allows us to go to the calendar, diet section, exercise section, sleep section.

const MainScreen=({navigation})=>{ // main component that will be rendered when the MainScreen is called
    const current = new Date();
    const [dateString, setDateString] = useState(current.toDateString()); // create a state for dateString and set it to the current date
    // const [date, setDatea] = useState(current);
    const { date, addOneDay, subtractOneDay } = useContext(DateContext); // retrieve the date, addOneDay and subtractOneDay functions from the context

    const route = useRoute(); // retrieve the current route

    const goToCalendarScreen = () =>{ // function to navigate to the calendar screen
        navigation.navigate('Calendar Screen');
    }

   
    return (
        <View>
            <View style={globalStyles.date_container}>
            <TouchableOpacity>
                <Ionicons.Button style={globalStyles.topLeftContainer} onPress={()=> subtractOneDay()} name= 'arrow-back-outline' />
            </TouchableOpacity>
            <TouchableOpacity onPress={goToCalendarScreen}  style={globalStyles.topCenterContainer}>
                <Text style={globalStyles.appButtonText}>{ date.toUTCString().substring(0,16) }</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Ionicons.Button style={globalStyles.topRightContainer} onPress={()=> addOneDay()} name= 'arrow-forward-outline' />
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
