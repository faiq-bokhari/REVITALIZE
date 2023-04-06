/*
Author: Youssef Dahab
Date Started: Nov, 2022
Description: Define constants used in this module
*/

// Importing necessary modules
import { Dimensions } from "react-native";
import { Vector } from "react-native-redash";

// Getting the screen width
const { width } = Dimensions.get("window");

// Setting some constants
export const PADDING = 24;
export const SIZE = width - PADDING * 2;
export const STROKE = 50;
export const R = (SIZE - STROKE) / 2;
export const { PI } = Math;
export const TAU = 2 * PI;
export const CENTER = { x: SIZE / 2, y: SIZE / 2 };

// Function to check if a point is within a square area
export const containedInSquare = (
  value: Vector,
  center: Vector,
  side: number
) => {
  "worklet";
  const topLeft = { x: center.x - side / 2, y: center.y - side / 2 };
  return (
    value.x >= topLeft.x &&
    value.y >= topLeft.y &&
    value.x <= topLeft.x + side &&
    value.y <= topLeft.y + side
  );
};

// Function to normalize an angle value to be within [0, 2*PI)
export const normalize = (value: number) => {
  "worklet";
  const rest = value % TAU;
  return rest > 0 ? rest : TAU + rest;
};

// Function to calculate the duration between two angles
export const absoluteDuration = (start: number, end: number) => {
  "worklet";
  return start > end ? end + (TAU - start) : end - start;
};

// Function to convert radians to minutes
export const radToMinutes = (rad: number) => {
  "worklet";
  return (24 * 60 * rad) / TAU;
};

// Function to format a duration in minutes as hours and minutes
export const preFormatDuration = (raw: number) => {
  "worklet";
  const duration = Math.round(raw);
  const minutes = duration % 60;
  const hours = (duration - minutes) / 60;
  return { hours, minutes };
};

// Function to format a duration in minutes as "hh:mm"
export const formatDuration = (duration: number) => {
  "worklet";
  const { hours, minutes } = preFormatDuration(duration);
  return `${("" + hours).padStart(2, "0")}${("" + minutes).padStart(2, "0")}`;
};

// Function to format a duration in minutes as "h hr m min"
export const formatDuration2 = (duration: number) => {
  "worklet";
  const { hours, minutes } = preFormatDuration(duration);
  return `${hours} hr ${minutes} min`;
};

// Function to create an arc path for SVG based on endpoint coordinates, and a flag for large and sweep arcs
export const arc = (x: number, y: number, large = false, sweep = false) => {
  "worklet";
  return `A ${R} ${R} 0 ${large ? "1" : "0"} ${sweep ? "1" : "0"} ${x} ${y}`;
};