// Import necessary libraries
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSharedValue } from "react-native-reanimated";

// Import custom components and constants
import CircularSlider from "./CircularSlider";
import { PADDING } from "./Constants";
import Container from "./Components/Container";

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: PADDING,
  },
  title: {
    fontFamily: "SFProRounded-Semibold",
    fontSize: 36,
    color: "white",
    marginBottom: 32,
  },
});

// Define Bedtime component
const Bedtime = ({ dateString }) => {

  // Define shared values for start and end times
  const start = useSharedValue(0.3 * Math.PI);
  const end = useSharedValue(1.53 * Math.PI);

  // Render the component
  return (
    <View>

      {/* Render the Container component, which contains the date/time display and slider */}
      <Container start={start} end={end} dateString={dateString}>

        {/* Render the CircularSlider component */}
        <CircularSlider start={start} end={end} />
      </Container>
    </View>
  );
};

// Export the Bedtime component as the default export
export default Bedtime;