import { View, Text, FlatList, Image, TouchableHighlight, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { dishesCard } from '../AppStyles';
import { DISHES } from '../data/dishes';

export default function Home(props) {
  const [landScape, setlandScape] = useState();
  const isLandscape = () => {
    const dim = Dimensions.get('screen');
    if (dim.width > dim.height) {
      setlandScape(4);
    } else {
      setlandScape(2);
    }
  }

  const renderDishes = ({ item }) => (
    <TouchableHighlight
      underlayColor="none"
      activeOpacity={0.4}
      onPress={() => props.navigation.navigate('Detail', { dish: item })}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={require("./images/prawn-cocktail-salad.jpg")} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>{'$' + item.price}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={{ marginBottom: 60 }} onLayout={() => isLandscape()}>
      <Text style={styles.headlineText}>Most Popular Dishes</Text>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={landScape} key={landScape} data={DISHES} renderItem={renderDishes} keyExtractor={(item) => `${item.id}`} />
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