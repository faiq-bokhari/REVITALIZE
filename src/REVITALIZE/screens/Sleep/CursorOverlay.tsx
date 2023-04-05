// Import necessary libraries
import React, { ComponentProps } from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { Vector } from "react-native-redash";
import { FontAwesome as Icon } from "@expo/vector-icons";

import { STROKE } from "./Constants";

interface CursorOverlayProps {

  // Animated vector representing the position of the cursor overlay
  position: Animated.SharedValue<Vector>;

  // Name of the FontAwesome icon to display
  icon: ComponentProps<typeof Icon>["name"];
}

const CursorOverlay = ({ position, icon }: CursorOverlayProps) => {
  const style = useAnimatedStyle(() => {

    // Get the current x and y position of the cursor overlay
    const { x, y } = position.value;
    return {
      position: "absolute",
      top: 0,
      left: 0,
      width: STROKE,
      height: STROKE,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      transform: [
        { translateX: x - STROKE / 2 }, // Translate the overlay horizontally to the correct x position
        { translateY: y - STROKE / 2 }, // Translate the overlay vertically to the correct y position
      ],
    };
  });
  return (
    <Animated.View style={style}>

      {/* Display the specified FontAwesome icon inside the overlay */}
      <Icon name={icon} color="#E58406" size={24} />
    </Animated.View>
  );
};

// Export the CursorOverlay component as the default export
export default CursorOverlay;