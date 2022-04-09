import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { DISHES } from '../data/dishes';
import Home from './Home';
import Menu from './Menu';
import DishDetail from './DishDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selecteDish: null,
      showSeleteDish: false,
    }
  }
  selecteDish(dishId) {
    this.setState({ ...this.state, selecteDish: dishId, showSeleteDish: !this.state.showSeleteDish })
  }
  render() {
    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();

    const Root = () => {
      return (
        <Drawer.Navigator screenOptions={{headerTitleAlign: 'center'}} initialRouteName='Home' >
          <Drawer.Screen name="Home" component={Home}
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: '#00a2ff' },
              headerTintColor: '#000',
              headerTitleStyle: { fontWeight: 'bold' }

            }}
          />
          <Drawer.Screen name="Menu"
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: '#00a2ff' },
              headerTintColor: '#000',
              headerTitleStyle: { fontWeight: 'bold' }
            }}
          >
            {props => <Menu {...props} dishes={this.state.dishes} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      )
    }

    return (
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={DishDetail}
          options={({ route }) => ({
            title: route.params.dish.name,
            headerStyle: { backgroundColor: '#f0e9f3' },
            headerTintColor: '#000',
            headerTitleStyle: { fontWeight: 'bold' }
          })}
        />
      </Stack.Navigator>
    )
  }
}