import React from 'react';
import { StyleSheet, Text, View, FlatList, Image} from 'react-native';
import { globalStyles } from '../styles/global';
import { TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native';


const RecipeDetailScreen=()=>{
    const route = useRoute()

    const ingrediantList = [];

    for(const p in route.params.recipe.ingredients){
        ingrediantList.push({name: route.params.recipe.ingredients[p].text, img: route.params.recipe.ingredients[p].image});
    }

    const oneRecipe = ({item}) => (
      <View style={styles.item}>
              <View style={styles.picContainer}>
              <Image style={styles.pic} source={{uri: item.img} }
          ></Image>
              </View>
          <Text style={styles.name}>{item.name}</Text>
      </View>
      
  )

    return (
        <View style={globalStyles.container}>
          <Text style={globalStyles.titleText}>{route.params.recipe.label}</Text>
          <Text>Ingredients</Text>
        <FlatList
            data={ingrediantList}
            renderItem = {oneRecipe}>
        </FlatList>          
      </View>
    );
}

const styles = StyleSheet.create({
  separator: {
      height: 1,
      width: '100%',
      backgroundColor: '#CCC'
  },

  item: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 13,

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
      height: 55,
      width: 55,
  },
  name: {
      fontWeight: '600',
      fontSize: 16,
      marginLeft: 13,
  }
});

export default RecipeDetailScreen
