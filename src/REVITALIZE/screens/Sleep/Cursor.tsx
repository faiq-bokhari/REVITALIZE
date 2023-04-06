/*
Author: Youssef Dahab
Date Started: Nov, 2022
Description: Cursor UI
*/

// Import necessary libraries
import React from "react";
import Animated, { useAnimatedProps } from "react-native-reanimated";
import { Vector } from "react-native-redash";
import { Circle } from "react-native-svg";

import { STROKE } from "./Constants";

// The radius of the cursor circle is half the stroke width
const r = STROKE / 2;

// Create an Animated Circle component
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface CursorProps {

  // pos is an Animated SharedValue representing the position of the cursor
  pos: Animated.SharedValue<Vector>;
}

const Cursor = ({ pos }: CursorProps) => {

  // Create animated props for the Animated Circle based on the pos Animated SharedValue
  const animatedProps = useAnimatedProps(() => {
    const { x, y } = pos.value;

    // Set the center of the circle to the x and y position of the cursor and the radius to r
    return {
      cx: x,
      cy: y,
      r,
    };
  });

  // Render the Animated Circle with the animated props and a fill color
  return <AnimatedCircle animatedProps={animatedProps} fill="#FD9F07" />;
};

export default Cursor;