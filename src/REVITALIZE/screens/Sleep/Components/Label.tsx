/*
Author: Youssef Dahab
Date Started: Nov, 2022
Description: Displays icons and times for bed and wake up components
*/

// Import necessary packages
import React, { ComponentProps } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";
import Animated, { useDerivedValue } from "react-native-reanimated";
import { ReText } from "react-native-redash";

// Import helper functions
import { formatDuration, radToMinutes } from "../Constants";

// Define styles for the component
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  row: {
    color: "#9D9EA7",
  },
  time: {
    color: "white",
    fontSize: 24,
    fontFamily: "SFProRounded-Semibold",
  },
  label: {
    fontSize: 14,
    fontFamily: "SFProRounded-Semibold",
  },
});

// Define the props for the Label component
interface LabelProps {
  theta: Animated.SharedValue<number>;
  label: string;
  icon: ComponentProps<typeof Icon>["name"];
}

// Define the Label component with a text label and an icon
const Label = ({ theta, label, icon }: LabelProps) => {

  // Use the useDerivedValue hook to calculate the duration in minutes
  const time = useDerivedValue(() => {
    const minutes = radToMinutes(theta.value);

    // Format the duration as a string
    return formatDuration(minutes);
  });

  // Render the label and the duration using the defined styles
  return (
    <View style={styles.container}>
      <Text style={styles.row}>

        {/* Display icon and set its size */}
        <Icon name={icon} size={16} />
        <Text style={styles.label}>{"\u00A0" + label}</Text>
      </Text>
      <ReText style={styles.time} text={time} />
    </View>
  );
};

// Export the Label component as the default export 
export default Label;