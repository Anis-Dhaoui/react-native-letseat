import { View, Text, FlatList, Image, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'
import { dishesCard } from '../AppStyles';
import { DISHES } from '../data/dishes';

export default function Home(props) {
  const renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor="none" activeOpacity={0.4} onPress={() => props.navigation.navigate('Detail', {dish: item})}>
      <View style={styles.container}>
        <Image style={styles.photo} source={require("./images/prawn-cocktail-salad.jpg")} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>{'$' + item.price}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <Text style={styles.headlineText}>Most Popular Dishes</Text>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={DISHES} renderItem={renderRecipes} keyExtractor={(item) => `${item.id}`} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: dishesCard.container,
  photo: dishesCard.photo,
  title: dishesCard.title,
  category: dishesCard.price,
  headlineText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 10
  }
});