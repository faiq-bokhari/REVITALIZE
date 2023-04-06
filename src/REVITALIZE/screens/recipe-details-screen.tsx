import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Image} from 'react-native';
import { globalStyles } from '../styles/global';
import { TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { DateContext } from './Date-component';
import { EmailContext } from './Email-component';

//Author: Syed Bokhari
//Date: October 30th, 2022
//Summary: Front end functionality of the recipe detail screen. Allows users to view the details of the recipe that they clicked and allows them to add the recipe to the food log.

const RecipeDetailScreen=({navigation})=>{
  // Import the useRoute hook and get the date, addOneDay, and subtractOneDay from the DateContext
  const route = useRoute();
  const { date, addOneDay, subtractOneDay } = useContext(DateContext);

  // Get the email from the EmailContext
  const { email } = useContext(EmailContext);

  // Log the ingredients of the recipe to the console
  console.log(route.params.recipe.ingredients);

  // Define a functional component oneRecipe that renders a view containing an image and text
  const oneRecipe = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.picContainer}>
        <Image style={styles.pic} source={{ uri: item.image }}></Image>
      </View>
      <Text style={styles.name}>{item.text}</Text>
    </View>
  );

  // Define a function that sends a POST request to add a meal to the food log
  const AddMealButtonClick = async () => {
    try {
      // Construct the URL to send the POST request
      let url_add_meal =
        "http://192.168.2.43:8000/foodlog/" +
        email +
        "/" +
        date.toISOString().split("T")[0] +
        "?";
      url_add_meal += `foodName=${route.params.recipe.label}&`;
      url_add_meal += `calories=${route.params.recipe.calories}&`;
      url_add_meal += `protein=${route.params.recipe.protein}&`;
      url_add_meal += `carbs=${route.params.recipe.carbs}&`;
      url_add_meal += `fats=${route.params.recipe.fat}&`;

      // Log "NEW MEAL"
      console.log("NEW MEAL");

      // Send the POST request with the constructed URL and method
      const response = await fetch(url_add_meal, {
        method: "POST",
      });

      // Get the response data in JSON format
      const responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      // Log any errors that occur
      console.error(error);
    }

    // Navigate to the 'Diet Logs' screen
    navigation.navigate("Diet Logs");
  };

  // Define a function that renders a separator view between items
  itemSeparator = () => {
    return <View style={styles.separator}></View>;
  };

    return (
        <View style={globalStyles.container}>
                    <TouchableOpacity style={globalStyles.appButtonContainer} onPress={() => AddMealButtonClick()}>
            <Text style={globalStyles.appButtonText}>{"Add Meal"}</Text>
        </TouchableOpacity>
          <Text style={styles.title_text}>{route.params.recipe.label} </Text>
        <View style={styles.title_separator}></View>
        <Text style={globalStyles.DietPage_Subtitle}>Calories: {Math.round(route.params.recipe.calories)} </Text>
        <Text style={globalStyles.DietPage_Subtitle}>Protein: {Math.round(route.params.recipe.protein)} </Text>
        <Text style={globalStyles.DietPage_Subtitle}>Carbs: {Math.round(route.params.recipe.carbs)} </Text>
        <Text style={globalStyles.DietPage_Subtitle}>Fat: {Math.round(route.params.recipe.fat)} </Text>
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
