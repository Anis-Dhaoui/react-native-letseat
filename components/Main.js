import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { DISHES } from '../data/dishes';
import Menu from './Menu';
import DishDetail from './DishDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      selecteDish: null,
      showSeleteDish: false,
    }
  }
  selecteDish(dishId){
    this.setState({...this.state, selecteDish: dishId, showSeleteDish: !this.state.showSeleteDish})
  }
  render() {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator initialRouteName='Menu'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu">
          {props => <Menu {...props} dishes={this.state.dishes} />}
        </Stack.Screen>
        <Stack.Screen name="Detail" component={DishDetail} />










        {/* <Menu dishes={this.state.dishes} handlePress={(dishId) => this.selecteDish(dishId)} />
        <DishDetail isModalOpen={this.state.showSeleteDish} closeModal={() => this.setState({showSeleteDish: false})} dish={this.state.dishes.filter((item) => item.id === this.state.selecteDish )[0]} /> */}
      </Stack.Navigator>
    )
  }
}