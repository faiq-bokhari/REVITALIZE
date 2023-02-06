import React from 'react';
import { StyleSheet, Text, View, FlatList, Image} from 'react-native';
import { globalStyles } from '../styles/global';
import { TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native';


const RecipeDetailScreen=()=>{
    const route = useRoute()

    const ingrediantList = [];

    const oneRecipe = ({item}) => (
      <View style={styles.item}>
              <View style={styles.picContainer}>
              <Image style={styles.pic} source={{uri: item.image} }
          ></Image>
              </View>
          <Text style={styles.name}>{item.text}</Text>
      </View>
      
  )

  itemSeparator = () => {
    return <View style={styles.separator}></View>

};

    return (
        <View style={globalStyles.container}>
          <Text style={styles.title_text}>{route.params.recipe.label} </Text>
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
