import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';


const RecipeListScreen=({navigation})=>{

    const [data, setData] = useState(null);

    const route = useRoute()


    useEffect(() => {
        const fetchData = async () => {
          try {
            let url = 'http://192.168.2.22:8000/recipefilter?';
            if (route.params.keyword) {
              url += `keyWord=${route.params.keyword}&`;
            }
            if (route.params.health && route.params.health.length > 0) {
              url += `health=${route.params.health.map(h => h.name).join(';')}&`;
            }
            if (route.params.diet && route.params.diet.length > 0) {
              url += `diets=${route.params.diet.map(d => d.name).join(';')}&`;
            }
            if (route.params.calories) {
              url += `calories=${route.params.calories}`;
            }
            console.log(url);
    
            const response = await fetch(url, {
                method: 'GET',
              });
            const json = await response.json();
            setData(json);
             console.log(JSON.stringify(json, null, "  "));
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);

    const oneRecipe = ({item}) => (
        <View style={styles.item}>
                <View style={styles.picContainer}>
                <TouchableOpacity onPress={() => goToDetailScreen(item)}>
                <Image style={styles.pic} source={{uri: item.image} }
            ></Image>
            </TouchableOpacity>
                </View>
            <Text style={styles.name}>{item.label}</Text>
        </View>
        
    )
        // console.log (route.params.keyword);
        // console.log (route.params.calories);
        // console.log(route.params.diet);
        // console.log(route.params.health);

    const goToDetailScreen = (recipe) =>{
        navigation.navigate('Recipe Detail Screen', {
            recipe,
        });
    }

    itemSeparator = () => {
        return <View style={styles.separator}></View>

    };

    //console.log(JSON.stringify(finalRecipeList, null, "  "));

    return (
        <View style={globalStyles.container}>
        <Text style={styles.title_text}>Search: </Text>
        <View style={styles.title_separator}></View>
        <FlatList
            data={data}
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

export default RecipeListScreen
