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
import { EmailContext } from '../../login-screen';

interface ContainerProps {
  start: Animated.SharedValue<number>;
  end: Animated.SharedValue<number>;
  children: ReactNode;
  dateString: string;
}

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

const Container = ({ start, end, children, dateString }: ContainerProps) => {

  const [bedHour, setBedHour] = useState(1);
  const [bedMinute, setBedMinute] = useState(1);
  const [sleepHour, setSleepHour] = useState(1);
  const [sleepMinute, setSleepMinute] = useState(1);

  const dateAdded = dateString;
  const email = useContext(EmailContext);

  const duration = useDerivedValue(() => {
    const d = absoluteDuration(start.value, end.value);
    return formatDuration2(radToMinutes(d));
  });

  const handleUpdateSleep = async (email, dateAdded) => {
    const response = await fetch('http://192.168.2.22:8000/sleeps/sleep_yd@gmail.com/2023-02-12', {
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

    if (result.success) {
      alert(result.message);
    } 
    else {
      alert(result.message);
    }
  }

  const handleConfirmSleep = async () => {

    setBedHour(preFormatDuration(radToMinutes(start.value)).hours);
    setBedMinute(preFormatDuration(radToMinutes(start.value)).minutes);
    setSleepHour(preFormatDuration(radToMinutes(end.value)).hours);
    setSleepMinute(preFormatDuration(radToMinutes(end.value)).minutes);

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

    if (result.success) {
      alert(result.message);
    } 

    else {
      alert(result.message);
    }
    //const updatedSleepData = await handleUpdateSleep(email, dateString);
  }

  return (
    <View>
    <View style={styles.container}>
      <View style={styles.values}>
        <Label theta={start} label="BEDTIME" icon="bed" />
        <Label theta={end} label="WAKE UP" icon="bell" />
      </View>
      {children}
      <ReText style={styles.duration} text={duration} />
      </View>
      <TouchableOpacity onPress={handleConfirmSleep} style={globalStyles.confirmSleepButton}>
        <Text style={globalStyles.appButtonText}>{"Confirm Sleep new"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Container;