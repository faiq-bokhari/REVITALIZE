import React from 'react';
import { StyleSheet, Text, View, FlatList, Image} from 'react-native';
import { globalStyles } from '../styles/global';
import { TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native';


const RecipeDetailScreen=({navigation})=>{
    const route = useRoute()

    console.log(route.params.recipe.ingredients);

    const oneRecipe = ({item}) => (
      <View style={styles.item}>
              <View style={styles.picContainer}>
              <Image style={styles.pic} source={{uri: item.image} }
          ></Image>
              </View>
          <Text style={styles.name}>{item.text}</Text>
      </View>
      
  )

  const AddMealButtonClick = async () => {
    try {
        let url_add_meal = 'http://192.168.2.22:8000/foodlog/hasan@gmail.com/2023-02-01?';

          url_add_meal += `foodName=${route.params.recipe.label}&`;
          url_add_meal += `calories=${route.params.recipe.calories}&`;
          url_add_meal += `protein=${route.params.recipe.protein}&`;
          url_add_meal += `carbs=${route.params.recipe.carbs}&`;
          url_add_meal += `fats=${route.params.recipe.fat}&`;
          
          console.log("NEW MEAL");
          const response = await fetch(url_add_meal, {
            method: 'POST',
            
          });
          const responseJson = await response.json();
          console.log(responseJson);
      } catch (error) {
        console.error(error);
      }

      navigation.navigate('Diet Logs');
    };

  itemSeparator = () => {
    return <View style={styles.separator}></View>

};

    return (
        <View style={globalStyles.container}>
                    <TouchableOpacity style={globalStyles.appButtonContainer} onPress={() => AddMealButtonClick()}>
            <Text style={globalStyles.appButtonText}>{"Add Meal"}</Text>
        </TouchableOpacity>
          <Text style={styles.title_text}>{route.params.recipe.label} </Text>
        <View style={styles.title_separator}></View>
        <Text style={globalStyles.DietPage_Subtitle}>Calories: {route.params.recipe.calories} </Text>
        <Text style={globalStyles.DietPage_Subtitle}>Protein: {route.params.recipe.protein} </Text>
        <Text style={globalStyles.DietPage_Subtitle}>Carbs: {route.params.recipe.carbs} </Text>
        <Text style={globalStyles.DietPage_Subtitle}>Fat: {route.params.recipe.fat} </Text>
        <Text style={styles.title_text}>Ingredients </Text>
        <View style={styles.title_separator}></View>
        <FlatList
            data={route.params.recipe.ingredients}
            renderItem = {oneRecipe}
            ItemSeparatorComponent = {itemSeparator}
            >
        </FlatList>          
      </View>
    );
}

const styles = StyleSheet.create({
    separator: {
        height: 2,
        width: '100%',
        backgroundColor: '#000000',
    },

    title_separator: {
        height: 4,
        width: '100%',
        backgroundColor: '#000000',
    },

    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        paddingVertical: 13,
        backgroundColor: '#fceecb',
        borderRadius: 100,
        height: 89,
        marginTop: 10,
        marginBottom: 10,

    },

    picContainer: {
        backgroundColor: '#D9D9D9',
        borderRadius: 100,
        height: 89,
        width: 89,
        justifyContent: 'center',
        alignItems: 'center',
    },

    pic: {
        borderRadius: 100,
        height: 89,
        width: 89,
    },
    name: {
        fontWeight: '600',
        fontSize: 16,
        marginLeft: 13,
        width: "70%",
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'left',
        width: '100%',
        marginLeft: 10,
    }
});

export default RecipeDetailScreen
