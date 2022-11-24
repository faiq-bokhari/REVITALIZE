import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { SelectList }  from 'react-native-dropdown-select-list';
import NumericInput from 'react-native-numeric-input';
import { globalStyles } from '../../styles/global';

const AddExercise = ({navigation}) => {
    const exercises = [
        {key: '0', value: 'Ab Wheel'},
        {key: '1', value: 'Arnold Press'},
        {key: '2', value: 'Around the World'},
        {key: '3', value: 'Back Extension'},
        {key: '4', value: 'Ball Slams'},
        {key: '5', value: 'Battle Ropes'},
        {key: '6', value: 'Bench Dip'},
        {key: '7', value: 'Bench Press'},
        {key: '8', value: 'Bent Over Row'},
        {key: '9', value: 'Bicep Curl'},
        {key: '10', value: 'Bicycle Crunch'},
        {key: '11', value: 'Box Jump'},
        {key: '12', value: 'Box Squat'},
        {key: '13', value: 'Bulgarian Split Squat'},
        {key: '14', value: 'Burpee'},
        {key: '15', value: 'Calf Press'},
        {key: '16', value: 'Chest Dip'},
        {key: '17', value: 'Chest Fly'},
        {key: '18', value: 'Chin Up'},
        {key: '19', value: 'Clean'},
        {key: '20', value: 'Clean and Jerk'},
        {key: '21', value: 'Concentration Curl'},
        {key: '22', value: 'Crunch'},
        {key: '23', value: 'Cycling'},
        {key: '24', value: 'Deadlift'},
        {key: '25', value: 'Elliptical Machine'},
        {key: '26', value: 'Face Pull'},
        {key: '27', value: 'Flat Leg Raise'},
        {key: '28', value: 'Front Raise'},
        {key: '29', value: 'Goblet Squat'},
        {key: '30', value: 'Good Morning'},
        {key: '31', value: 'Hack Squat'},
        {key: '32', value: 'Hammer Curl'},
        {key: '33', value: 'Handstand Push Up'},
        {key: '34', value: 'Hanging Leg Raise'},
        {key: '35', value: 'High Knee Skips'},
        {key: '36', value: 'Hip Abductor'},
        {key: '37', value: 'Hip Adductor'},
        {key: '38', value: 'Hip Thrust'},
        {key: '39', value: 'Inverted Row'},
        {key: '40', value: 'Jump Rope'},
        {key: '41', value: 'Jump Squat'},
        {key: '42', value: 'Jumping Jack'},
        {key: '43', value: 'Kettlebell Swing'},
        {key: '44', value: 'Kettlebell Turkish Get Up'},
        {key: '45', value: 'Lat Pulldown'},
        {key: '46', value: 'Lateral Raise'},
        {key: '47', value: 'Leg Extension'},
        {key: '48', value: 'Leg Press'},
        {key: '49', value: 'Lunge'},
        {key: '50', value: 'Lying Leg Curl'},
        {key: '51', value: 'Mountain Climber'},
        {key: '52', value: 'Muscle Up'},
        {key: '53', value: 'Oblique Crunch'},
        {key: '54', value: 'Overhead Press'},
        {key: '55', value: 'Overhead Squat'},
        {key: '56', value: 'Pec Deck'},
        {key: '57', value: 'Pistol Squat'},
        {key: '58', value: 'Plank'},
        {key: '59', value: 'Preacher Curl'},
        {key: '60', value: 'Pull Up'},
        {key: '61', value: 'Pullover'},
        {key: '62', value: 'Push Press'},
        {key: '63', value: 'Push Up'},
        {key: '64', value: 'Romanian Deadlift'},
        {key: '65', value: 'Rowing'},
        {key: '66', value: 'Running'},
        {key: '67', value: 'Russian Twist'},
        {key: '68', value: 'Shoulder Press'},
        {key: '69', value: 'Shrug'},
        {key: '70', value: 'Sit Up'},
        {key: '71', value: 'Skullcrusher'},
        {key: '72', value: 'Snatch'},
        {key: '73', value: 'Split Jerk'},
        {key: '74', value: 'Squat'},
        {key: '75', value: 'Step-up'},
        {key: '76', value: 'Sumo Deadlift'},
        {key: '77', value: 'Superman'},
        {key: '78', value: 'Thruster'},
        {key: '79', value: 'Toes to Bar'},
        {key: '80', value: 'Tricep Dip'},
        {key: '81', value: 'Tricep Extension'},
    ];
   
    const [selected, setSelected] = useState("");
    const [reps, setReps] = useState(0);
    const [sets, setSets] = useState(0);
    const [weight, setWeight] = useState(0);

    return (
        <View style={styles.container}>
            <SelectList 
                data={exercises} 
                save={"value"}
                setSelected={setSelected}
            />
            <Text style={styles.text}>
                    Sets
            </Text>  
            <NumericInput 
                minValue={0}
                value={reps}
                onChange={value => setReps(value)}
            />
            <Text style={styles.text}>
                    Reps
            </Text>  
            <NumericInput 
                minValue={0}
                value={sets}
                onChange={value => setSets(value)}
            />
            <Text style={styles.text}>
                    Weight
            </Text>  
            <NumericInput 
                minValue={0}
                value={weight}
                onChange={value => setWeight(value)}
            />    
            <View style={{marginTop: 260}}>
                <TouchableOpacity 
                    style={globalStyles.appButtonContainer}
                    onPress={()=> navigation.navigate("Exercise Screen", {name: selected, reps: reps, sets: sets, weight: weight})} >
                    <Text style={globalStyles.appButtonText}>{"Save Exercise"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 5,
    },
    text: {
        marginTop: 15,
    }

})

export default AddExercise;