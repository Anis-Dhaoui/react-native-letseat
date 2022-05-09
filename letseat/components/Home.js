import { View, Text, FlatList, Image, TouchableHighlight, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { dishesCard } from '../AppStyles';
import { useStore } from '../Context/Store';
import { url } from '../BaseUrl';

export default function Home(props) {
  const [state, dispatch] = useStore();
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
        <Image style={styles.photo} source={{uri: `${url}/images/dishes/${item.image}`}} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>{'$' + item.price}</Text>
      </View>
    </TouchableHighlight>
  );
if(state.dishes){
  if(state.dishes.loading){
    return <Text style={{textAlign: 'center', marginTop: 150}}>Loading...</Text>
  }
  if(state.dishes.errMsg){
    return <Text> {state.dishes.errMsg} </Text>
  }
  return (
    <View style={{ marginBottom: 60 }} onLayout={() => isLandscape()}>
      <Text style={styles.headlineText}>Most Popular Dishes</Text>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={landScape} key={landScape} data={state.dishes.dishes} renderItem={renderDishes} keyExtractor={(item) => `${item.id}`} />
    </View>
  );
}else{
  return null
}

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