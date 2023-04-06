/*
Author: Youssef Dahab
Date Started: Nov, 2022
Description: Circular slider UI
*/

// Import necessary packages and components
import React from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
} from "react-native-reanimated";
import { polar2Canvas } from "react-native-redash";
import Svg, { Defs, Mask, Path } from "react-native-svg";

// Import constants and components
import {
  SIZE,
  STROKE,
  R,
  PI,
  CENTER,
  arc,
  absoluteDuration,
} from "./Constants";
import Cursor from "./Cursor";
import Gesture from "./Gesture";
import Quadrant from "./Components/Quadrant";

// Create AnimatedPath component
const AnimatedPath = Animated.createAnimatedComponent(Path);

// Define props for the CircularSlider component
interface CircularProps {
  start: Animated.SharedValue<number>;
  end: Animated.SharedValue<number>;
}

// Define CircularSlider component
const CircularSlider = ({ start, end }: CircularProps) => {

  // Use derived values for start and end positions on the canvas
  const startPos = useDerivedValue(() =>
    polar2Canvas({ theta: start.value, radius: R }, CENTER)
  );
  const endPos = useDerivedValue(() =>
    polar2Canvas({ theta: end.value, radius: R }, CENTER)
  );

  // Use animatedProps for the path of the arc between start and end positions
  const animatedProps = useAnimatedProps(() => {
    const p1 = startPos.value;
    const p2 = endPos.value;
    const duration = absoluteDuration(start.value, end.value);
    return {
      d: `M ${p1.x} ${p1.y} ${arc(p2.x, p2.y, duration > PI)}`,
    };
  });

  // Return the CircularSlider component with necessary components
  return (
    <View>
      <Svg width={SIZE} height={SIZE}>
        <Defs>
          <Mask id="mask">
            <AnimatedPath
              stroke="#FD9F07"
              strokeWidth={STROKE}
              animatedProps={animatedProps}
            />
          </Mask>
        </Defs>
        <Quadrant />
        <Cursor pos={startPos} />
        <Cursor pos={endPos} />
      </Svg>
      <Gesture start={start} end={end} startPos={startPos} endPos={endPos} />
    </View>
  );
};

// Export CircularSlider component
export default CircularSlider;