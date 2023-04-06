/*
Author: Youssef Dahab
Date Started: Nov, 2022
Description: Container that displays sleep screen UI along with circular slider and other labels
*/

// Import required modules and components
import React, { useState, ReactNode, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Animated, { useDerivedValue } from "react-native-reanimated";
import { ReText } from "react-native-redash";

import {
  PADDING,
  formatDuration2,
  radToMinutes,
  absoluteDuration,
  preFormatDuration
} from "../Constants";

import Label from "./Label";

import { globalStyles } from '../../../styles/global';
import { EmailContext } from '../../Email-component';

// Define types for the props of Container component
interface ContainerProps {
  start: Animated.SharedValue<number>;
  end: Animated.SharedValue<number>;
  children: ReactNode;
  dateString: string;
}

// Define the styles for the component
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2C2B2D",
    borderRadius: 16,
    padding: PADDING,
    marginBottom: 20
  },
  values: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  duration: {
    fontFamily: "SFProRounded-Medium",
    fontSize: 24,
    textAlign: "center",
    marginTop: PADDING,
    color: "white",
  },
});

// Define the Container component
const Container = ({ start, end, children, dateString }: ContainerProps) => {

  // Define state for the bedtime and sleep time
  const [bedHour, setBedHour] = useState(1);
  const [bedMinute, setBedMinute] = useState(1);
  const [sleepHour, setSleepHour] = useState(1);
  const [sleepMinute, setSleepMinute] = useState(1);

  const dateAdded = dateString;

  // Get the email value from the EmailContext
  const {email} = useContext(EmailContext);

  // Calculate the duration between start and end times in minutes
  const duration = useDerivedValue(() => {
    const d = absoluteDuration(start.value, end.value);
    return formatDuration2(radToMinutes(d));
  });

  // Define a function to handle updating the sleep record
  const handleUpdateSleep = async (email, dateAdded) => {

    // make sure fetch uses your ip address to run
    const response = await fetch('http://192.168.2.22:8000/sleeps/' + email + '/' + dateString, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:email,
        sleepHour:sleepHour,
        bedHour:bedHour,
        sleepMinute:sleepMinute,
        bedMinute:bedMinute.toString(),
        dateAdded:dateString
      })
    });
  
    const result = await response.json();

    // Display the success or failure message based on the response from the API
    if (result.success) {
      alert(result.message);
    } 
    else {
      alert(result.message);
    }
  }

  // Define a function to handle confirming the sleep record
  const handleConfirmSleep = async () => {

    // Set the bedtime and sleep time in state
    setBedHour(preFormatDuration(radToMinutes(start.value)).hours);
    setBedMinute(preFormatDuration(radToMinutes(start.value)).minutes);
    setSleepHour(preFormatDuration(radToMinutes(end.value)).hours);
    setSleepMinute(preFormatDuration(radToMinutes(end.value)).minutes);

    // Send a POST request to the API to save the sleep record in the database
    const response = await fetch('http://192.168.2.22:8000/sleeps/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:email,
        sleepHour:sleepHour,
        bedHour:bedHour,
        sleepMinute:sleepMinute,
        bedMinute:bedMinute.toString(),
        dateAdded:dateString
      })
    });
  
    const result = await response.json();

    // Display the success or failure message based on the response from the API
    if (result.success) {
      alert(result.message);
    } 

    else {
      alert(result.message);
    }
  }

  return (
    <View>
    <View style={styles.container}>
      <View style={styles.values}>

        {/* Display bed time along with bed icon */}
        <Label theta={start} label="BEDTIME" icon="bed" />

        {/* Display wake up time along with bell icon */}
        <Label theta={end} label="WAKE UP" icon="bell" />
      </View>

      {/* Display circular slider component */}
      {children}
      <ReText style={styles.duration} text={duration} />
      </View>

      {/* Post sleep data, set by user, in the database upon clicking confirm sleep */}
      <TouchableOpacity onPress={handleConfirmSleep} style={globalStyles.confirmSleepButton}>
        <Text style={globalStyles.appButtonText}>{"Confirm Sleep"}</Text>
      </TouchableOpacity>

      {/* Update sleep data, set by user, in the database upon clicking update sleep */}
      <TouchableOpacity onPress={()=>handleUpdateSleep(email, dateAdded)} style={globalStyles.updateSleepButton}>
        <Text style={globalStyles.appButtonText}>{"Update Sleep"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Container;