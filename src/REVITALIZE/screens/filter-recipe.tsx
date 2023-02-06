import React, { useEffect, useState } from 'react';
import { Text, View, TextInput,TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import Ionicons from '@expo/vector-icons/Ionicons';
import moment from 'moment';
import { RotateInUpLeft } from 'react-native-reanimated';
import { useRoute } from '@react-navigation/native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import SearchableDropdownComponent from './searchable-dropdown-component';

const FilterRecipeScreen2=({navigation})=>{    
    const options1 = [
        { id: 1, name: 'balanced' },
        { id: 2, name: 'high-fiber' },
        { id: 3, name: 'high-protein' },
        { id: 4, name: 'low-carb' },
        { id: 5, name: 'low-fat' },
        { id: 6, name: 'low-sodium' },
      ];
    
      const options2 = [
        { id: 39, name: 'alcohol-cocktail' },
        { id: 40, name: 'alcohol-free' },
        { id: 41, name: 'celery-free' },
        { id: 7, name: 'crustacean-free' },
        { id: 8, name: 'dairy-free' },
        { id: 9, name: 'DASH' },
        { id: 10, name: 'egg-free' },
        { id: 11, name: 'fish-free' },
        { id: 12, name: 'fodmap-free' },
        { id: 13, name: 'gluten-free' },
        { id: 14, name: 'immuno-supportive' },
        { id: 15, name: 'keto-friendly' },
        { id: 16, name: 'kidney-friendly' },
        { id: 17, name: 'kosher' },
        { id: 18, name: 'low-potassium' },
        { id: 19, name: 'low-sugar' },
        { id: 20, name: 'lupine-free' },
        { id: 21, name: 'Mediterranean' },
        { id: 22, name: 'mollusk-free' },
        { id: 23, name: 'mustard-free' },
        { id: 24, name: 'No-oil-added' },
        { id: 25, name: 'paleo' },
        { id: 26, name: 'peanut-free' },
        { id: 27, name: 'pecatarian' },
        { id: 28, name: 'pork-free' },
        { id: 29, name: 'red-meat-free' },
        { id: 30, name: 'sesame-free' },
        { id: 31, name: 'shellfish-free' },
        { id: 32, name: 'soy-free' },
        { id: 33, name: 'sugar-conscious' },
        { id: 34, name: 'sulfite-free' },
        { id: 35, name: 'tree-nut-free' },
        { id: 36, name: 'vegan' },
        { id: 37, name: 'vegetarian' },
        { id: 38, name: 'wheat-free' },
      ];
    const [selectedItems1, setSelectedItems1] = useState([] as any);
  const [selectedItems2, setSelectedItems2] = useState([] as any);
  const [number1, changeTextName] = React.useState("");
  const [number2, changeTextCalories] = React.useState("");
  
    const handleItemSelect1 = (item) => {
        setSelectedItems1([...selectedItems1, item]);
      };
    
      const handleItemSelect2 = (item) => {
        setSelectedItems2([...selectedItems2, item]);
      };

      const goToListScreen = () =>{
        navigation.navigate('Recipe List Screen', {
            keyword: number1,
            calories: number2,
            diet: selectedItems1,
            health: selectedItems2,
        });

    }
    
    return (
        <View style={globalStyles.container}>
        <View style={globalStyles.appDietButtonContainer3}>
        <TextInput
        onChangeText={changeTextName}
        value={number1}
        placeholder="Name of Meal"
        keyboardType="default"
        returnKeyType={'done'}
      />
      </View>
      <View style={globalStyles.appDietButtonContainer3}>
        <TextInput
        onChangeText={changeTextCalories}
        value={number2}
        placeholder="Calories"
        keyboardType="numeric"
        returnKeyType={'done'}
      />
      </View>
        <View >
      <SearchableDropdownComponent options={options1} onItemSelect={handleItemSelect1} />
      </View>
      <View style={globalStyles.appDietButtonContainer3}>
        {selectedItems1.map((item) => (
          <Text key={item.id}>{item.name}</Text>
        ))}
      </View>
      <View >
      <SearchableDropdownComponent options={options2} onItemSelect={handleItemSelect2} />
      </View>
      <View style={globalStyles.appDietButtonContainer3}>
        {selectedItems2.map((item) => (
          <Text key={item.id}>{item.name}</Text>
        ))}
      </View>
        <TouchableOpacity onPress={() => goToListScreen()} style={globalStyles.appButtonContainer}>
            <Text style={globalStyles.appButtonText}>{"Search"}</Text>
        </TouchableOpacity>
      </View>
    );
}

export default FilterRecipeScreen2
