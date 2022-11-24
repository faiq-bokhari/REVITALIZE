import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList} from "react-native";
import { globalStyles } from '../../styles/global';

const Exercises = () => {
    const [workout, setWorkout] = useState([
        { name: 'Bench Press', reps: 12, sets: 4, weight: 135, key: '1' },
        { name: 'Leg Press', reps: 10, sets: 5, weight: 180, key: '2' },
    ]);


    return (
        <FlatList
            data={workout}
            renderItem={({ item }) => (
                <Text> { item.name } { item.reps } { item.sets } { item.weight } </Text>
            )}
        />
    );
}

export default Exercises;