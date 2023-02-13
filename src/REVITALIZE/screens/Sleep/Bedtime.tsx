import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import CircularSlider from "./CircularSlider";
import { PADDING } from "./Constants";
import Container from "./Components/Container";

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

const Bedtime = ({ dateString }) => {
  const start = useSharedValue(0.3 * Math.PI);
  const end = useSharedValue(1.53 * Math.PI);
  return (
    <View>
      <Container start={start} end={end} dateString={dateString}>
        <CircularSlider start={start} end={end} />
      </Container>
    </View>
  );
};

export default Bedtime;