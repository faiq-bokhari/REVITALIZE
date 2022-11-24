import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/main-screen';
import DietScreen from '../screens/diet-logs';
import ExerciseScreen from '../screens/exercise-screen';
import SleepScreen from '../screens/sleep-screen';
import AddExercise from '../screens/Workout/AddExercise';
import CalendarScreen from '../screens/calendar-screen';
import RecipeListScreen from '../screens/recipe-list-screen';
import RecipeDetailScreen from '../screens/recipe-details-screen';
import AddFoodScreen from '../screens/add-food';

import FilterRecipeScreen2 from '../screens/filter-recipe';
import CustomMealScreen from '../screens/custom-meal';
const Stack = createNativeStackNavigator();

const AuthNavigationStack = () => { 
  return ( 
    <Stack.Navigator 
        initialRouteName="MainScreen"
        screenOptions={{
            headerStyle: {
                backgroundColor: "#1e90ff",
            },
            headerTintColor: "#fff"
        }}
    >
        <Stack.Screen name="Main Screen" component={MainScreen} />
        <Stack.Screen name="Calendar Screen" component={CalendarScreen} />
        <Stack.Screen name="Diet Logs" component={DietScreen} />
        <Stack.Screen name="Exercise Screen" component={ExerciseScreen} />
        <Stack.Screen name="Sleep Screen" component={SleepScreen} />
        <Stack.Screen name="Add Exercise Screen" component={AddExercise} />
        <Stack.Screen name="Recipe List Screen" component={RecipeListScreen} />
        <Stack.Screen name="Recipe Detail Screen" component={RecipeDetailScreen} />
        <Stack.Screen name="Add Food Screen" component={AddFoodScreen} />
        <Stack.Screen name="Search Recipe" component={FilterRecipeScreen2} />
        <Stack.Screen name="Custom Meal Screen" component={CustomMealScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigationStack
